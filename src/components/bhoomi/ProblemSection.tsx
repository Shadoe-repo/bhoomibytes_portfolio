import { motion } from 'motion/react';
import { Droplets, CloudLightning, WifiOff, Eye, Sprout } from 'lucide-react';

const problems = [
  {
    icon: Droplets,
    title: 'Water Wastage',
    desc: 'Inefficient irrigation without real-time soil data leads to over or under-watering.',
  },
  {
    icon: CloudLightning,
    title: 'Unpredictable Weather',
    desc: 'Sudden weather changes affect crop decisions without advance warning.',
  },
  {
    icon: WifiOff,
    title: 'No Real-Time Data',
    desc: 'Farmers lack instant field insights to make timely, informed decisions.',
  },
  {
    icon: Eye,
    title: 'Manual Monitoring',
    desc: 'Time-consuming, error-prone field checks that cannot scale effectively.',
  },
  {
    icon: Sprout,
    title: 'Complex Decisions',
    desc: 'Crop-specific guidance is hard to access without expert knowledge.',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function ProblemSection() {
  return (
    <section id="problem" className="relative py-24 px-4 section-charcoal overflow-hidden">
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
            The Challenge
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Agriculture Is Facing a Data Problem
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Modern farming demands real-time intelligence, yet most farmers still operate without it.
          </p>
        </motion.div>

        {/* Problem cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
        >
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.title} variants={item} className="glass-card-hover p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' as const }}
          className="glass-card-green p-8 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-white/90 leading-relaxed italic">
            "Farmers don't just need more data. They need the right information at the right time, translated into practical action."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
