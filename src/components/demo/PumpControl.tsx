import { motion, AnimatePresence } from 'motion/react';
import { Power, Clock, Droplets, Timer } from 'lucide-react';
import type { PumpState } from './useDemoData';

interface PumpControlProps {
  pump: PumpState;
  elapsed: number;
  onToggle: () => void;
  onSchedule: (minutes: number) => void;
}

const SCHEDULE_OPTIONS = [5, 10, 15, 30] as const;

function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function PumpControl({ pump, elapsed, onToggle, onSchedule }: PumpControlProps) {
  const scheduledRemaining = pump.scheduledOff
    ? Math.max(0, Math.ceil((pump.scheduledOff - Date.now()) / 1000))
    : null;

  return (
    <div className="glass-card-green p-6 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Droplets className="w-5 h-5 text-primary" />
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Irrigation Pump</h3>
        <div className="ml-auto flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${pump.isOn ? 'bg-primary live-dot' : 'bg-white/20'}`} />
          <span className={`text-xs font-semibold ${pump.isOn ? 'text-primary' : 'text-white/40'}`}>
            {pump.isOn ? 'RUNNING' : 'IDLE'}
          </span>
        </div>
      </div>

      {/* Big toggle */}
      <div className="flex flex-col items-center gap-4">
        <motion.button
          onClick={onToggle}
          whileTap={{ scale: 0.94 }}
          className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
            pump.isOn ? 'bg-primary pump-glow-active' : 'bg-white/10 border border-white/20'
          }`}
          aria-label={pump.isOn ? 'Turn pump off' : 'Turn pump on'}
        >
          <Power className={`w-8 h-8 ${pump.isOn ? 'text-background' : 'text-white/50'}`} />
          {pump.isOn && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/40"
              animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' as const }}
            />
          )}
        </motion.button>

        {/* Timer */}
        <AnimatePresence>
          {pump.isOn && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="text-center"
            >
              <div className="flex items-center gap-2 justify-center">
                <Timer className="w-3.5 h-3.5 text-primary/70" />
                <span className="text-2xl font-mono font-bold text-primary">
                  {formatDuration(elapsed)}
                </span>
              </div>
              {scheduledRemaining != null && (
                <p className="text-xs text-white/40 mt-1">
                  Auto-off in {formatDuration(scheduledRemaining)}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Schedule buttons */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-3.5 h-3.5 text-white/40" />
          <span className="text-xs text-white/40 uppercase tracking-wider">Schedule</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {SCHEDULE_OPTIONS.map((min) => (
            <button
              key={min}
              onClick={() => onSchedule(min)}
              className="glass-pill py-2 text-xs font-semibold text-white/70 hover:text-white hover:bg-white/15 transition-all duration-200"
            >
              {min}m
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10">
        <div className="text-center">
          <p className="text-xs text-white/35 mb-1">Total Run Time</p>
          <p className="text-sm font-bold text-white">{formatDuration(pump.totalRunSeconds)}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-white/35 mb-1">Status</p>
          <p className={`text-sm font-bold ${pump.isOn ? 'text-primary' : 'text-white/50'}`}>
            {pump.scheduledOff ? 'Scheduled' : pump.isOn ? 'Manual' : 'Off'}
          </p>
        </div>
      </div>
    </div>
  );
}
