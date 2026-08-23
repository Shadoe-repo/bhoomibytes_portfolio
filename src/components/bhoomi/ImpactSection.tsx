import { motion } from 'motion/react';
import { Droplets, Brain, MapPin } from 'lucide-react';

const impacts = [
  {
    icon: Droplets,
    title: 'Water Efficiency',
    desc: 'Better irrigation decisions can reduce unnecessary water usage by delivering water when and where it is actually needed.',
    highlight: 'Smarter Irrigation',
  },
  {
    icon: Brain,
    title: 'Better Decisions',
    desc: 'Real-time data and AI-powered recommendations support informed farming decisions at every stage of the crop cycle.',
    highlight: 'Data-Driven Farming',
  },
  {
    icon: MapPin,
    title: 'Less Manual Effort',
    desc: 'Remote monitoring and control can reduce unnecessary field visits, saving time and effort for farmers.',
    highlight: 'Remote Management',
  },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="relative py-24 px-4 section-forest overflow-hidden">
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
            Real-World Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technology That Creates Real-World Impact
          </h2>
        </motion.div>

        {/* Impact panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {impacts.map((imp, i) => {
            const Icon = imp.icon;
            return (
              <motion.div
                key={imp.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' as const }}
                className="glass-card-hover p-7 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-semibold text-primary tracking-wider uppercase mb-2">{imp.highlight}</span>
                <h3 className="text-lg font-bold text-white mb-3">{imp.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed flex-1">{imp.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' as const }}
          className="glass-card-green p-8 text-center"
        >
          <p className="text-xl md:text-2xl font-bold text-white">
            More Efficient.{' '}
            <span className="text-primary">More Informed.</span>{' '}
            More Sustainable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
