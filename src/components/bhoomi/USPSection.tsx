import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const flow = ['DATA', 'INTELLIGENCE', 'RECOMMENDATION', 'ACTION'];

const usps = [
  'All-in-one integrated platform',
  'Real-time IoT monitoring',
  'AI-powered recommendations',
  'Crop-specific intelligence',
  'Weather data integration',
  'Remote irrigation control',
  'Affordable & scalable approach',
  'Farmer-focused interface',
];

export default function USPSection() {
  return (
    <section id="usp" className="relative py-24 px-4 section-deep overflow-hidden">
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
            Our Difference
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            We Don't Just Collect Data.<br />
            <span className="text-gradient-green">We Turn It Into Action.</span>
          </h2>
        </motion.div>

        {/* Flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' as const }}
          className="flex flex-wrap justify-center items-center gap-2 mb-16"
        >
          {flow.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className="glass-card-green px-5 py-3 text-center">
                <span className="text-sm font-bold text-white tracking-wider">{step}</span>
              </div>
              {i < flow.length - 1 && (
                <div className="flex items-center">
                  <div className="w-8 h-px usp-arrow" />
                  <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-primary/50" />
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* USP grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' as const }}
          className="glass-card p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {usps.map((usp, i) => (
              <motion.div
                key={usp}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.06, ease: 'easeOut' as const }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-white/80">{usp}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
