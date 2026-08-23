import { motion } from 'motion/react';
import { Cloud } from 'lucide-react';
import type { WeatherData } from './useDemoData';

interface WeatherPanelProps {
  weather: WeatherData;
  weatherIdx: number;
  options: WeatherData[];
  onSelect: (idx: number) => void;
}

export default function WeatherPanel({ weather, weatherIdx, options, onSelect }: WeatherPanelProps) {
  return (
    <div className="glass-card p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Cloud className="w-4 h-4 text-secondary" />
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Weather</h3>
        <span className="ml-auto text-xs text-white/30">Simulate</span>
      </div>

      {/* Current weather */}
      <motion.div
        key={weather.condition}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-4"
      >
        <span className="text-4xl" role="img" aria-label={weather.condition}>{weather.icon}</span>
        <div>
          <p className="text-lg font-bold text-white">{weather.condition}</p>
          <div className="flex gap-3 text-xs text-white/50">
            <span>{weather.temp}°C</span>
            <span>{weather.humidity}% RH</span>
          </div>
        </div>
      </motion.div>

      {/* Forecast */}
      <motion.p
        key={weather.forecast}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-xs text-white/55 leading-relaxed bg-white/5 rounded-lg p-3"
      >
        {weather.forecast}
      </motion.p>

      {/* Scenario selector */}
      <div>
        <p className="text-xs text-white/30 mb-2 uppercase tracking-wider">Simulate scenario</p>
        <div className="flex flex-wrap gap-2">
          {options.map((opt, i) => (
            <button
              key={opt.condition}
              onClick={() => onSelect(i)}
              className={`glass-pill px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                i === weatherIdx
                  ? 'text-primary border-primary/40 bg-primary/10'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {opt.icon} {opt.condition}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
