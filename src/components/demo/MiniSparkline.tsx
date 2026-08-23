import { motion } from 'motion/react';

interface MiniSparklineProps {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
  label?: string;
  unit?: string;
  latest?: number;
  decimals?: number;
}

export default function MiniSparkline({
  data,
  width = 200,
  height = 48,
  color = 'hsl(var(--primary))',
  label,
  unit = '',
  latest,
  decimals = 1,
}: MiniSparklineProps) {
  if (data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / range) * (height - 8) - 4;
    return `${x},${y}`;
  });

  const polyline = pts.join(' ');

  // Area fill path
  const first = pts[0].split(',');
  const last = pts[pts.length - 1].split(',');
  const area = `M${first[0]},${height} L${polyline.replace(/(\d+\.?\d*),(\d+\.?\d*)/g, 'L$1,$2').slice(1)} L${last[0]},${height} Z`;

  return (
    <div className="glass-card p-4">
      {label && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-white/50 uppercase tracking-wider">{label}</span>
          {latest != null && (
            <motion.span
              key={latest.toFixed(decimals)}
              initial={{ opacity: 0.6, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-sm font-bold text-white"
            >
              {latest.toFixed(decimals)}{unit}
            </motion.span>
          )}
        </div>
      )}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        height={height}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Area fill */}
        <path d={area} fill={color} fillOpacity={0.12} />
        {/* Line */}
        <polyline
          points={polyline}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Latest dot */}
        <circle
          cx={parseFloat(pts[pts.length - 1].split(',')[0])}
          cy={parseFloat(pts[pts.length - 1].split(',')[1])}
          r="3"
          fill={color}
        />
      </svg>
    </div>
  );
}
