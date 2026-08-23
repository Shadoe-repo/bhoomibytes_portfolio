import { motion } from 'motion/react';
import { Sprout, Wifi, Brain } from 'lucide-react';

const evolution = [
  {
    icon: Sprout,
    label: 'Traditional Farming',
    desc: 'Experience-based decisions, manual monitoring, conventional methods.',
  },
  {
    icon: Wifi,
    label: 'Connected Farming',
    desc: 'IoT sensors, real-time data, remote monitoring and control.',
  },
  {
    icon: Brain,
    label: 'Intelligent Farming',
    desc: 'AI-powered decisions, predictive analytics, fully optimized operations.',
  },
];

export default function VisionSection() {
  return (
    <section id="vision" className="relative py-24 px-4 section-forest overflow-hidden">
      <div className="absolute inset-0 section-glow pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="text-center mb-12"
        >
          <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Our Vision
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A Smarter Future for Every Farmer
          </h2>
          <div className="glass-card-green p-8 max-w-3xl mx-auto mb-12">
            <p className="text-lg text-white/80 leading-relaxed italic">
              "We envision a future where farmers combine experience with real-time data and intelligent technology to make better decisions, use resources efficiently, and build more sustainable farms."
            </p>
          </div>
        </motion.div>

        {/* Evolution flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px roadmap-connector z-0" />

          {evolution.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.div
                key={e.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' as const }}
                className="glass-card-hover p-7 text-center relative z-10"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{e.label}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{e.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
