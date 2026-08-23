import { motion, AnimatePresence } from 'motion/react';
import { Brain, AlertTriangle, CheckCircle2, Info, Zap } from 'lucide-react';
import type { AIRecommendation } from './useDemoData';

interface AIRecommendationPanelProps {
  recommendations: AIRecommendation[];
  crop: string;
}

const typeConfig = {
  info:    { icon: Info,          color: 'text-secondary',  bg: 'bg-secondary/10',  border: 'border-secondary/20' },
  warning: { icon: AlertTriangle, color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' },
  action:  { icon: Zap,           color: 'text-orange-400', bg: 'bg-orange-400/10', border: 'border-orange-400/20' },
  success: { icon: CheckCircle2,  color: 'text-primary',    bg: 'bg-primary/10',    border: 'border-primary/20' },
};

export default function AIRecommendationPanel({ recommendations, crop }: AIRecommendationPanelProps) {
  return (
    <div className="glass-card p-5 flex flex-col gap-4 h-full">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Brain className="w-4 h-4 text-primary" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">AI Recommendations</h3>
          <p className="text-xs text-white/40">Crop: {crop}</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="live-dot w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-xs text-primary/70">Live</span>
        </div>
      </div>

      {/* Recommendations */}
      <div className="flex flex-col gap-3 flex-1">
        <AnimatePresence mode="popLayout">
          {recommendations.map((rec, i) => {
            const cfg = typeConfig[rec.type];
            const Icon = cfg.icon;
            return (
              <motion.div
                key={`${rec.title}-${i}`}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.35, delay: i * 0.07, ease: 'easeOut' as const }}
                className={`rounded-xl border p-4 ${cfg.bg} ${cfg.border}`}
              >
                <div className="flex items-start gap-3">
                  <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${cfg.color}`} />
                  <div>
                    <p className={`text-xs font-bold mb-1 ${cfg.color}`}>{rec.title}</p>
                    <p className="text-xs text-white/60 leading-relaxed">{rec.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Footer note */}
      <p className="text-xs text-white/25 text-center border-t border-white/10 pt-3">
        Recommendations update with sensor readings every 2s
      </p>
    </div>
  );
}
