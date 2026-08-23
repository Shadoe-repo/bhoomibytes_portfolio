import { motion } from 'motion/react';
import { Cpu, Wifi, Database, Brain, Lightbulb, Droplets } from 'lucide-react';

const pipeline = [
  { icon: Cpu, label: 'Field Sensors', sub: 'Soil, Temp, Humidity, pH, TDS' },
  { icon: Wifi, label: 'ESP32 / IoT Controller', sub: 'Data transmission' },
  { icon: Database, label: 'Data Processing', sub: 'Real-time collection' },
  { icon: Brain, label: 'AI + Weather Intelligence', sub: 'Smart analysis' },
  { icon: Lightbulb, label: 'Smart Recommendation', sub: 'Crop-specific guidance' },
  { icon: Droplets, label: 'Remote Pump Control', sub: 'Irrigation action' },
];

const sensors = ['Soil Moisture', 'Temperature', 'Humidity', 'pH', 'TDS'];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 px-4 section-deep overflow-hidden">
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
            Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-white/50 max-w-xl mx-auto">
            A seamless pipeline from physical sensors to intelligent action.
          </p>
        </motion.div>

        {/* Pipeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
        >
          {pipeline.map((node, i) => {
            const Icon = node.icon;
            return (
              <motion.div key={node.label} variants={item} className="relative flex flex-col items-center">
                {/* Node card */}
                <div className="glass-card-green p-4 flex flex-col items-center text-center w-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs font-semibold text-white leading-tight mb-1">{node.label}</p>
                  <p className="text-xs text-white/40">{node.sub}</p>
                </div>

                {/* Arrow (desktop) */}
                {i < pipeline.length - 1 && (
                  <div className="hidden lg:flex absolute top-8 -right-3 z-10 items-center">
                    <div className="w-5 h-px pipeline-line" />
                    <div className="w-0 h-0 border-t-3 border-b-3 border-l-3 border-transparent border-l-primary/40" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Sensor pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' as const }}
          className="flex flex-wrap justify-center gap-3"
        >
          <span className="text-xs text-white/40 self-center mr-2 uppercase tracking-wider">Monitors:</span>
          {sensors.map((s) => (
            <span key={s} className="glass-pill px-4 py-1.5 text-sm font-medium text-primary">
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
