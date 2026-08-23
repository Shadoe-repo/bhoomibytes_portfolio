import { motion } from 'motion/react';
import { Radio, BarChart3, Lightbulb, Zap } from 'lucide-react';

const steps = [
  {
    icon: Radio,
    step: 'SENSE',
    title: 'Collect',
    desc: 'IoT sensors gather real-time soil moisture, temperature, humidity, pH, and TDS data from the field.',
    color: 'text-primary',
  },
  {
    icon: BarChart3,
    step: 'ANALYZE',
    title: 'Process',
    desc: 'Field data is combined with crop profiles and live weather intelligence for comprehensive analysis.',
    color: 'text-secondary',
  },
  {
    icon: Lightbulb,
    step: 'RECOMMEND',
    title: 'Advise',
    desc: 'AI generates practical, crop-specific guidance tailored to current field and weather conditions.',
    color: 'text-primary',
  },
  {
    icon: Zap,
    step: 'ACT',
    title: 'Execute',
    desc: 'Remotely control or schedule irrigation pumps directly from the platform — anywhere, anytime.',
    color: 'text-secondary',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function SolutionSection() {
  return (
    <section id="solution" className="relative py-24 px-4 section-forest overflow-hidden">
      <div className="absolute inset-0 section-glow pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="text-center mb-16"
        >
          <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            The Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Bhoomi Bytes
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            IoT monitoring, weather intelligence, AI-powered recommendations and remote farm control in one platform.
          </p>
        </motion.div>

        {/* Flow steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative"
        >
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.step} variants={item} className="relative">
                <div className="glass-card-hover p-6 h-full flex flex-col">
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <span className="text-xs font-bold tracking-widest text-primary/70 uppercase">{s.step}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <Icon className={`w-6 h-6 ${s.color}`} />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed flex-1">{s.desc}</p>
                </div>

                {/* Arrow connector (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 items-center">
                    <div className="w-6 h-px pipeline-line" />
                    <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-primary/40" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
