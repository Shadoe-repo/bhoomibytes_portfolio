import { motion } from 'motion/react';
import { Users, Building2, Leaf, GraduationCap, Globe, Landmark } from 'lucide-react';

const secondary = [
  { icon: Building2, label: 'Agricultural Cooperatives' },
  { icon: Leaf, label: 'Smart Farms' },
  { icon: Users, label: 'Farming Communities' },
  { icon: GraduationCap, label: 'Agricultural Institutions' },
  { icon: Globe, label: 'AgriTech Organizations' },
  { icon: Landmark, label: 'Government-Supported Programs' },
];

const growth = [
  { label: 'West Bengal', sub: 'Starting point' },
  { label: 'India', sub: 'National expansion' },
  { label: 'Global Agricultural Markets', sub: 'Long-term vision' },
];

export default function MarketSection() {
  return (
    <section id="market" className="relative py-24 px-4 section-charcoal overflow-hidden">
      <div className="absolute inset-0 section-glow pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="text-center mb-16"
        >
          <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Target Market
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Who Are We Building For?
          </h2>
        </motion.div>

        {/* Primary market */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' as const }}
          className="glass-card-green p-8 text-center mb-8"
        >
          <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <div className="glass-pill inline-block px-3 py-1 text-xs text-primary font-semibold mb-3">Primary Market</div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Small & Medium-Scale Farmers</h3>
          <p className="text-white/55 max-w-md mx-auto text-sm">
            The backbone of Indian agriculture — farmers who need affordable, practical technology to improve their operations.
          </p>
        </motion.div>

        {/* Secondary markets */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' as const }}
          className="mb-10"
        >
          <p className="text-xs text-white/40 uppercase tracking-widest text-center mb-5">Secondary Markets</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {secondary.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.07, ease: 'easeOut' as const }}
                  className="glass-card-hover p-4 flex items-center gap-3"
                >
                  <Icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-medium text-white/75">{s.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Growth path */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' as const }}
          className="glass-card p-6"
        >
          <p className="text-xs text-white/40 uppercase tracking-widest text-center mb-5">Growth Path</p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {growth.map((g, i) => (
              <div key={g.label} className="flex items-center gap-3">
                <div className="text-center">
                  <div className="glass-pill px-4 py-2 mb-1">
                    <span className="text-sm font-semibold text-white">{g.label}</span>
                  </div>
                  <span className="text-xs text-white/35">{g.sub}</span>
                </div>
                {i < growth.length - 1 && (
                  <div className="flex items-center">
                    <div className="w-6 h-px roadmap-connector" />
                    <div className="w-0 h-0 border-t-3 border-b-3 border-l-3 border-transparent border-l-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
