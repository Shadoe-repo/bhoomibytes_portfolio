import { useState, useEffect, useCallback, useRef } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SensorReading {
  soilMoisture: number;   // 0–100 %
  temperature: number;    // 15–45 °C
  humidity: number;       // 20–100 %
  ph: number;             // 4.0–9.0
  tds: number;            // 0–2000 ppm
}

export interface HistoryPoint {
  time: string;
  soilMoisture: number;
  temperature: number;
  humidity: number;
  ph: number;
  tds: number;
}

export interface PumpState {
  isOn: boolean;
  scheduledOff: number | null; // ms timestamp
  totalRunSeconds: number;
}

export interface WeatherData {
  condition: string;
  temp: number;
  humidity: number;
  icon: string;
  forecast: string;
}

export interface AIRecommendation {
  type: 'info' | 'warning' | 'action' | 'success';
  title: string;
  body: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const CROPS = ['Rice', 'Wheat', 'Potato', 'Tomato', 'Tea', 'Maize'] as const;
export type Crop = typeof CROPS[number];

const CROP_OPTIMAL: Record<Crop, { moisture: [number, number]; ph: [number, number]; temp: [number, number] }> = {
  Rice:   { moisture: [60, 80], ph: [5.5, 7.0], temp: [20, 35] },
  Wheat:  { moisture: [40, 65], ph: [6.0, 7.5], temp: [15, 25] },
  Potato: { moisture: [50, 70], ph: [5.0, 6.5], temp: [15, 22] },
  Tomato: { moisture: [55, 75], ph: [6.0, 7.0], temp: [20, 30] },
  Tea:    { moisture: [65, 85], ph: [4.5, 6.0], temp: [18, 28] },
  Maize:  { moisture: [45, 70], ph: [5.8, 7.0], temp: [20, 32] },
};

const WEATHER_CONDITIONS: WeatherData[] = [
  { condition: 'Sunny', temp: 32, humidity: 55, icon: '☀️', forecast: 'Clear skies for next 48h. Irrigation recommended.' },
  { condition: 'Partly Cloudy', temp: 28, humidity: 65, icon: '⛅', forecast: 'Light clouds. Moderate evaporation expected.' },
  { condition: 'Overcast', temp: 24, humidity: 78, icon: '☁️', forecast: 'Overcast. Reduce irrigation by 20%.' },
  { condition: 'Light Rain', temp: 22, humidity: 88, icon: '🌦️', forecast: 'Rain expected. Pause irrigation for 24h.' },
  { condition: 'Heavy Rain', temp: 20, humidity: 95, icon: '🌧️', forecast: 'Heavy rain. Disable irrigation immediately.' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function clamp(val: number, min: number, max: number) {
  return Math.min(max, Math.max(min, val));
}

function jitter(val: number, range: number, min: number, max: number) {
  return clamp(val + (Math.random() - 0.5) * range, min, max);
}

function formatTime(d: Date) {
  return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
}

function generateRecommendations(
  reading: SensorReading,
  crop: Crop,
  weather: WeatherData,
  pumpOn: boolean
): AIRecommendation[] {
  const recs: AIRecommendation[] = [];
  const opt = CROP_OPTIMAL[crop];

  if (weather.condition === 'Heavy Rain' || weather.condition === 'Light Rain') {
    recs.push({ type: 'warning', title: 'Rain Detected', body: `${weather.forecast} Disable irrigation to avoid waterlogging.` });
  }

  if (reading.soilMoisture < opt.moisture[0]) {
    recs.push({ type: 'action', title: 'Low Soil Moisture', body: `${crop} needs ${opt.moisture[0]}–${opt.moisture[1]}% moisture. Current: ${reading.soilMoisture.toFixed(1)}%. Activate irrigation.` });
  } else if (reading.soilMoisture > opt.moisture[1]) {
    recs.push({ type: 'warning', title: 'Excess Moisture', body: `Soil moisture at ${reading.soilMoisture.toFixed(1)}% exceeds optimal range. Pause irrigation.` });
  } else {
    recs.push({ type: 'success', title: 'Moisture Optimal', body: `Soil moisture at ${reading.soilMoisture.toFixed(1)}% is within the ideal range for ${crop}.` });
  }

  if (reading.ph < opt.ph[0]) {
    recs.push({ type: 'warning', title: 'Acidic Soil', body: `pH ${reading.ph.toFixed(1)} is below optimal (${opt.ph[0]}–${opt.ph[1]}) for ${crop}. Consider lime application.` });
  } else if (reading.ph > opt.ph[1]) {
    recs.push({ type: 'warning', title: 'Alkaline Soil', body: `pH ${reading.ph.toFixed(1)} exceeds optimal range. Consider sulfur treatment.` });
  }

  if (reading.temperature > opt.temp[1]) {
    recs.push({ type: 'warning', title: 'Heat Stress Risk', body: `Temperature ${reading.temperature.toFixed(1)}°C exceeds optimal for ${crop}. Consider shade netting or evening irrigation.` });
  }

  if (reading.tds > 1200) {
    recs.push({ type: 'warning', title: 'High TDS', body: `TDS at ${reading.tds.toFixed(0)} ppm. High dissolved solids may affect nutrient uptake. Check water source.` });
  }

  if (pumpOn) {
    recs.push({ type: 'info', title: 'Pump Active', body: 'Irrigation pump is running. Monitor soil moisture to avoid over-watering.' });
  }

  return recs.slice(0, 3);
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useDemoData() {
  const [crop, setCrop] = useState<Crop>('Rice');
  const [weatherIdx, setWeatherIdx] = useState(0);
  const [reading, setReading] = useState<SensorReading>({
    soilMoisture: 62,
    temperature: 28,
    humidity: 74,
    ph: 6.4,
    tds: 480,
  });
  const [history, setHistory] = useState<HistoryPoint[]>(() => {
    const now = new Date();
    return Array.from({ length: 20 }, (_, i) => ({
      time: formatTime(new Date(now.getTime() - (19 - i) * 3000)),
      soilMoisture: 55 + Math.random() * 20,
      temperature: 25 + Math.random() * 8,
      humidity: 65 + Math.random() * 20,
      ph: 5.8 + Math.random() * 1.2,
      tds: 400 + Math.random() * 300,
    }));
  });
  const [pump, setPump] = useState<PumpState>({ isOn: false, scheduledOff: null, totalRunSeconds: 0 });
  const [elapsed, setElapsed] = useState(0);
  const pumpRef = useRef(pump);
  pumpRef.current = pump;

  const weather = WEATHER_CONDITIONS[weatherIdx];

  // Tick sensor data every 2s
  useEffect(() => {
    const id = setInterval(() => {
      setReading((prev) => {
        const next: SensorReading = {
          soilMoisture: jitter(prev.soilMoisture + (pumpRef.current.isOn ? 0.4 : -0.15), 1.2, 10, 98),
          temperature: jitter(prev.temperature, 0.6, 15, 45),
          humidity: jitter(prev.humidity, 1.0, 20, 98),
          ph: jitter(prev.ph, 0.05, 4.0, 9.0),
          tds: jitter(prev.tds, 12, 50, 1800),
        };
        setHistory((h) => {
          const point: HistoryPoint = { time: formatTime(new Date()), ...next };
          return [...h.slice(-29), point];
        });
        return next;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  // Pump run timer
  useEffect(() => {
    if (!pump.isOn) return;
    const id = setInterval(() => {
      setElapsed((e) => e + 1);
      setPump((p) => ({ ...p, totalRunSeconds: p.totalRunSeconds + 1 }));
    }, 1000);
    return () => clearInterval(id);
  }, [pump.isOn]);

  // Auto-off schedule
  useEffect(() => {
    if (!pump.scheduledOff) return;
    const remaining = pump.scheduledOff - Date.now();
    if (remaining <= 0) {
      setPump((p) => ({ ...p, isOn: false, scheduledOff: null }));
      return;
    }
    const id = setTimeout(() => {
      setPump((p) => ({ ...p, isOn: false, scheduledOff: null }));
    }, remaining);
    return () => clearTimeout(id);
  }, [pump.scheduledOff]);

  const togglePump = useCallback(() => {
    setPump((p) => {
      if (p.isOn) {
        setElapsed(0);
        return { ...p, isOn: false, scheduledOff: null };
      }
      setElapsed(0);
      return { ...p, isOn: true };
    });
  }, []);

  const schedulePump = useCallback((minutes: number) => {
    setElapsed(0);
    setPump((p) => ({ ...p, isOn: true, scheduledOff: Date.now() + minutes * 60 * 1000 }));
  }, []);

  const recommendations = generateRecommendations(reading, crop, weather, pump.isOn);

  return {
    crop, setCrop, crops: CROPS,
    weather, weatherIdx, setWeatherIdx, weatherOptions: WEATHER_CONDITIONS,
    reading, history,
    pump, togglePump, schedulePump, elapsed,
    recommendations,
    cropOptimal: CROP_OPTIMAL[crop],
  };
}
