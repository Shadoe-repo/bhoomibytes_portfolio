import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { ArrowLeft, Cpu, RefreshCw } from 'lucide-react';
import { Link } from 'react-router';
import { demo } from 'virtual:content';

import { useDemoData } from '@/components/demo/useDemoData';
import SensorGauge from '@/components/demo/SensorGauge';
import MiniSparkline from '@/components/demo/MiniSparkline';
import PumpControl from '@/components/demo/PumpControl';
import AIRecommendationPanel from '@/components/demo/AIRecommendationPanel';
import WeatherPanel from '@/components/demo/WeatherPanel';
import HistoryChart from '@/components/demo/HistoryChart';

const site = 'https://bhoomi-bytes.com';

export default function DemoPage() {
  const {
    crop, setCrop, crops,
    weather, weatherIdx, setWeatherIdx, weatherOptions,
    reading, history,
    pump, togglePump, schedulePump, elapsed,
    recommendations,
    cropOptimal,
  } = useDemoData();

  return (
    <>
      <Helmet>
        <title>{demo.meta.title}</title>
        <meta name="description" content={demo.meta.description} />
        <link rel="canonical" href={`${site}/demo`} />
        <meta property="og:title" content="Interactive Demo — Bhoomi Bytes" />
        <meta property="og:description" content="Live interactive dashboard simulating real-time IoT sensor data." />
        <meta property="og:url" content={`${site}/demo`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen section-deep">
        {/* ── Top bar ── */}
        <div className="sticky top-0 z-40 glass-nav px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>

            <div className="h-4 w-px bg-white/20" />

            <div className="flex items-center gap-2">
              <img
                src="https://isteam.wsimg.com/genai-assistant/logoagent/customer/9cb20ec8-eef8-432a-b965-c2daadfe1408/session/0c0811ef-ba62-4c56-af1f-d2ca7a1f21bd/horizontal-transparent-a13f845a-1dd4-4326-abd6-f594e39169d0/logo-logo.png"
                alt="Bhoomi Bytes"
                className="h-6 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = `${import.meta.env.BASE_URL}assets/uploads/airo-logo-shimmer-horizontal.svg`;
                }}
              />
            </div>

            <div className="ml-auto flex items-center gap-3">
              {/* Live indicator */}
              <div className="flex items-center gap-2 glass-pill px-3 py-1.5">
                <div className="live-dot w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-semibold text-primary">Live Simulation</span>
              </div>

              {/* Crop selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/40 hidden md:inline">Crop:</span>
                <select
                  value={crop}
                  onChange={(e) => setCrop(e.target.value as typeof crop)}
                  className="glass-pill px-3 py-1.5 text-xs font-semibold text-white bg-transparent border-0 outline-none cursor-pointer"
                  aria-label="Select crop"
                >
                  {crops.map((c) => (
                    <option key={c} value={c} className="bg-background text-foreground">
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* ── Page content ── */}
        <div className="max-w-7xl mx-auto px-4 py-8">

          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' as const }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <Cpu className="w-5 h-5 text-primary" />
              <h1 className="text-2xl font-bold text-white">{demo.hero.title}</h1>
              <span className="glass-pill px-3 py-1 text-xs text-primary font-semibold">{demo.hero.badge}</span>
            </div>
            <p className="text-sm text-white/45">{demo.hero.description}</p>
          </motion.div>

          {/* ── Row 1: 5 Sensor Gauges ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' as const }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6"
          >
            <SensorGauge
              label="Soil Moisture"
              value={reading.soilMoisture}
              unit="%"
              min={0}
              max={100}
              optimalMin={cropOptimal.moisture[0]}
              optimalMax={cropOptimal.moisture[1]}
              decimals={1}
              icon="💧"
            />
            <SensorGauge
              label="Temperature"
              value={reading.temperature}
              unit="°C"
              min={15}
              max={45}
              optimalMin={cropOptimal.temp[0]}
              optimalMax={cropOptimal.temp[1]}
              decimals={1}
              icon="🌡️"
            />
            <SensorGauge
              label="Humidity"
              value={reading.humidity}
              unit="%"
              min={20}
              max={100}
              decimals={1}
              icon="🌫️"
            />
            <SensorGauge
              label="pH Level"
              value={reading.ph}
              unit=""
              min={4}
              max={9}
              optimalMin={cropOptimal.ph[0]}
              optimalMax={cropOptimal.ph[1]}
              decimals={2}
              icon="⚗️"
            />
            <SensorGauge
              label="TDS"
              value={reading.tds}
              unit=" ppm"
              min={0}
              max={2000}
              decimals={0}
              icon="🧪"
            />
          </motion.div>

          {/* ── Row 2: Sparklines ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' as const }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6"
          >
            <MiniSparkline
              data={history.map((h) => h.soilMoisture)}
              label="Moisture"
              unit="%"
              latest={reading.soilMoisture}
              color="hsl(var(--primary))"
            />
            <MiniSparkline
              data={history.map((h) => h.temperature)}
              label="Temp"
              unit="°C"
              latest={reading.temperature}
              color="hsl(var(--accent))"
            />
            <MiniSparkline
              data={history.map((h) => h.humidity)}
              label="Humidity"
              unit="%"
              latest={reading.humidity}
              color="hsl(var(--secondary))"
            />
            <MiniSparkline
              data={history.map((h) => h.ph)}
              label="pH"
              unit=""
              latest={reading.ph}
              decimals={2}
              color="hsl(var(--primary))"
            />
            <MiniSparkline
              data={history.map((h) => h.tds)}
              label="TDS"
              unit=" ppm"
              latest={reading.tds}
              decimals={0}
              color="hsl(var(--secondary))"
            />
          </motion.div>

          {/* ── Row 3: History Chart (full width) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' as const }}
            className="mb-6"
          >
            <HistoryChart history={history} />
          </motion.div>

          {/* ── Row 4: Pump | AI Recs | Weather ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' as const }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
          >
            <PumpControl
              pump={pump}
              elapsed={elapsed}
              onToggle={togglePump}
              onSchedule={schedulePump}
            />
            <AIRecommendationPanel recommendations={recommendations} crop={crop} />
            <WeatherPanel
              weather={weather}
              weatherIdx={weatherIdx}
              options={weatherOptions}
              onSelect={setWeatherIdx}
            />
          </motion.div>

          {/* ── Footer note ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-4 flex items-center gap-3"
          >
            <RefreshCw className="w-4 h-4 text-primary/60 shrink-0" />
            <p className="text-xs text-white/35">{demo.footer.note}</p>
          </motion.div>
        </div>
      </main>
    </>
  );
}
