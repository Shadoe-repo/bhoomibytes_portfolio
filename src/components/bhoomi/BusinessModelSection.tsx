import { motion } from 'motion/react';
import { Cpu, LayoutDashboard, Wrench, Handshake } from 'lucide-react';

const models = [
  {
    icon: Cpu,
    title: 'IoT Hardware',
    desc: 'Sensor kits and ESP32 controller units for field deployment.',
    tag: 'Hardware',
  },
  {
    icon: LayoutDashboard,
    title: 'Software Subscription',
    desc: 'Platform access, AI recommendations, and dashboard features.',
    tag: 'SaaS',
  },
  {
    icon: Wrench,
    title: 'Installation & Maintenance',
    desc: 'Professional setup support and ongoing service for deployed systems.',
    tag: 'Services',
  },
  {
    icon: Handshake,
    title: 'Institutional Partnerships',
    desc: 'Collaborations with agricultural organizations, cooperatives, and government programs.',
    tag: 'B2B',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function BusinessModelSection() {
  return (
    <section id="business" className="relative py-24 px-4 section-deep overflow-hidden">
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
            Business Model
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Building a Sustainable AgriTech Business
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Multiple revenue streams designed for long-term growth and farmer accessibility.
          </p>
        </motion.div>

        {/* Revenue cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {models.map((m) => {
            const Icon = m.icon;
            return (
              <motion.div key={m.title} variants={item} className="glass-card-hover p-7">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base font-semibold text-white">{m.title}</h3>
                      <span className="glass-pill px-2 py-0.5 text-xs text-primary/80">{m.tag}</span>
                    </div>
                    <p className="text-sm text-white/55 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
