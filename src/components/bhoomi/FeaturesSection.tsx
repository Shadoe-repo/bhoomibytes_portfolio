import { motion } from 'motion/react';
import { Activity, Droplets, Wifi, Clock, Cloud, Brain, Sprout, Monitor } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    desc: 'Live sensor data streams from your field — soil, temperature, humidity, pH and TDS at a glance.',
  },
  {
    icon: Droplets,
    title: 'Smart Irrigation',
    desc: 'Data-driven watering decisions that match actual field conditions, not guesswork.',
  },
  {
    icon: Wifi,
    title: 'Remote Pump Control',
    desc: 'Control your irrigation pump from anywhere via the platform — no physical presence needed.',
  },
  {
    icon: Clock,
    title: 'Pump Scheduling',
    desc: 'Automate irrigation schedules based on time, sensor thresholds, or weather forecasts.',
  },
  {
    icon: Cloud,
    title: 'Weather Intelligence',
    desc: 'Local weather data integrated directly into farming decisions and recommendations.',
  },
  {
    icon: Brain,
    title: 'AI Recommendations',
    desc: 'Intelligent, crop-specific guidance generated from real-time field and weather data.',
  },
  {
    icon: Sprout,
    title: 'Crop-Specific Intelligence',
    desc: 'Tailored insights for rice, wheat, potato, vegetables, tea and more.',
  },
  {
    icon: Monitor,
    title: 'Responsive Dashboard',
    desc: 'Access your farm data and controls from any device — desktop, tablet, or mobile.',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-4 section-charcoal overflow-hidden">
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
            Platform Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything a Smart Farm Needs
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            One integrated platform covering monitoring, intelligence, and control.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} variants={item} className="glass-card-hover p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
