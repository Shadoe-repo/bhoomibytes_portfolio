import { useState } from 'react';
import type { HistoryPoint } from './useDemoData';

type Metric = 'soilMoisture' | 'temperature' | 'humidity' | 'ph' | 'tds';

interface HistoryChartProps {
  history: HistoryPoint[];
}

// All colors use CSS variables — no hardcoded hex
const METRICS: { key: Metric; label: string; unit: string; cssVar: string; min: number; max: number }[] = [
  { key: 'soilMoisture', label: 'Soil Moisture', unit: '%',   cssVar: '--primary',   min: 0,   max: 100 },
  { key: 'temperature',  label: 'Temperature',   unit: '°C',  cssVar: '--accent',    min: 15,  max: 45  },
  { key: 'humidity',     label: 'Humidity',      unit: '%',   cssVar: '--secondary', min: 20,  max: 100 },
  { key: 'ph',           label: 'pH',            unit: '',    cssVar: '--primary',   min: 4,   max: 9   },
  { key: 'tds',          label: 'TDS',           unit: 'ppm', cssVar: '--secondary', min: 0,   max: 2000},
];

export default function HistoryChart({ history }: HistoryChartProps) {
  const [active, setActive] = useState<Metric>('soilMoisture');

  const metric = METRICS.find((m) => m.key === active)!;
  const values = history.map((h) => h[active] as number);
  const { min, max } = metric;
  const color = `hsl(var(${metric.cssVar}))`;

  const W = 600;
  const H = 120;
  const PAD = 8;

  const pts = values.map((v, i) => {
    const x = PAD + (i / Math.max(values.length - 1, 1)) * (W - PAD * 2);
    const y = H - PAD - ((v - min) / (max - min)) * (H - PAD * 2);
    return { x, y, v };
  });

  const polyline = pts.map((p) => `${p.x},${p.y}`).join(' ');
  const area =
    pts.length > 0
      ? `M${pts[0].x},${H - PAD} ${pts.map((p) => `L${p.x},${p.y}`).join(' ')} L${pts[pts.length - 1].x},${H - PAD} Z`
      : '';

  const latest = values[values.length - 1];

  return (
    <div className="glass-card p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h3 className="text-sm font-bold text-white">Sensor History</h3>
          <p className="text-xs text-white/35">Last {history.length} readings</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {METRICS.map((m) => (
            <button
              key={m.key}
              onClick={() => setActive(m.key)}
              className={`glass-pill px-3 py-1 text-xs font-medium transition-all duration-200 ${
                m.key === active ? 'text-white bg-white/15' : 'text-white/40 hover:text-white'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="relative">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          width="100%"
          height={H}
          preserveAspectRatio="none"
          aria-label={`${metric.label} history chart`}
          role="img"
        >
          {[0.25, 0.5, 0.75].map((f) => (
            <line
              key={f}
              x1={PAD}
              y1={PAD + f * (H - PAD * 2)}
              x2={W - PAD}
              y2={PAD + f * (H - PAD * 2)}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          ))}
          {area && <path d={area} fill={color} fillOpacity={0.1} />}
          {pts.length > 1 && (
            <polyline
              points={polyline}
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          {pts.length > 0 && (
            <circle cx={pts[pts.length - 1].x} cy={pts[pts.length - 1].y} r="4" fill={color} />
          )}
        </svg>

        <div className="absolute top-0 right-0 flex flex-col justify-between h-full text-right pr-1 pointer-events-none">
          <span className="text-xs text-white/25">{max}{metric.unit}</span>
          <span className="text-xs text-white/25">{min}{metric.unit}</span>
        </div>
      </div>

      {/* Latest value */}
      <div className="flex items-center justify-between border-t border-white/10 pt-3">
        <span className="text-xs text-white/40">Latest</span>
        <span className="text-sm font-bold" style={{ color }}>
          {latest?.toFixed(metric.key === 'tds' ? 0 : 1)}{metric.unit}
        </span>
      </div>
    </div>
  );
}
