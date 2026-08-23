import { motion } from 'motion/react';

interface SensorGaugeProps {
  label: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  optimalMin?: number;
  optimalMax?: number;
  decimals?: number;
  icon: string;
}

export default function SensorGauge({
  label, value, unit, min, max, optimalMin, optimalMax, decimals = 1, icon,
}: SensorGaugeProps) {
  const pct = ((value - min) / (max - min)) * 100;
  const optMinPct = optimalMin != null ? ((optimalMin - min) / (max - min)) * 100 : null;
  const optMaxPct = optimalMax != null ? ((optimalMax - min) / (max - min)) * 100 : null;

  const inOptimal =
    optimalMin != null && optimalMax != null
      ? value >= optimalMin && value <= optimalMax
      : true;

  const statusColor = inOptimal ? 'text-primary' : 'text-yellow-400';
  const barColor = inOptimal ? 'bg-primary' : 'bg-yellow-400';

  return (
    <div className="glass-card p-4 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg" role="img" aria-label={label}>{icon}</span>
          <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">{label}</span>
        </div>
        <span className={`text-xs font-semibold ${inOptimal ? 'text-primary' : 'text-yellow-400'}`}>
          {inOptimal ? 'Optimal' : 'Check'}
        </span>
      </div>

      {/* Value */}
      <motion.div
        key={value.toFixed(decimals)}
        initial={{ scale: 1.08, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`text-3xl font-bold ${statusColor}`}
      >
        {value.toFixed(decimals)}
        <span className="text-base font-normal text-white/40 ml-1">{unit}</span>
      </motion.div>

      {/* Bar */}
      <div className="relative h-2 rounded-full bg-white/10 overflow-hidden">
        {/* Optimal zone */}
        {optMinPct != null && optMaxPct != null && (
          <div
            className="absolute top-0 h-full rounded-full bg-primary/20"
            style={{ left: `${optMinPct}%`, width: `${optMaxPct - optMinPct}%` }}
          />
        )}
        {/* Value fill */}
        <motion.div
          className={`absolute top-0 left-0 h-full rounded-full ${barColor}`}
          animate={{ width: `${Math.min(100, Math.max(0, pct))}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
        />
      </div>

      {/* Range labels */}
      <div className="flex justify-between text-xs text-white/25">
        <span>{min}{unit}</span>
        {optimalMin != null && optimalMax != null && (
          <span className="text-primary/50">Optimal: {optimalMin}–{optimalMax}{unit}</span>
        )}
        <span>{max}{unit}</span>
      </div>
    </div>
  );
}
