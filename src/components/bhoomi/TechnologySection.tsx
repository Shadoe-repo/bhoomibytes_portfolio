import { motion } from 'motion/react';

const layers = [
  {
    label: 'Control Layer',
    sublabel: 'Remote pump operation and scheduling',
    items: ['Remote Pump Control', 'Irrigation Scheduling', 'Automated Triggers'],
    cls: 'tech-layer-outer',
    delay: 0,
  },
  {
    label: 'Intelligence Layer',
    sublabel: 'AI crop intelligence + weather API',
    items: ['AI Recommendations', 'Weather API Integration', 'Crop-Specific Models'],
    cls: 'tech-layer-outer',
    delay: 0.1,
  },
  {
    label: 'Data Layer',
    sublabel: 'Real-time collection and processing',
    items: ['Real-Time Streaming', 'Data Processing', 'Cloud Storage'],
    cls: 'tech-layer-inner',
    delay: 0.2,
  },
  {
    label: 'Sensor Layer',
    sublabel: 'Physical field sensors',
    items: ['Soil Moisture', 'Temperature', 'Humidity', 'pH', 'TDS'],
    cls: 'tech-layer-inner',
    delay: 0.3,
  },
  {
    label: 'IoT Core',
    sublabel: 'ESP32 / microcontrollers',
    items: ['ESP32 Controller', 'Wireless Connectivity', 'Edge Processing'],
    cls: 'tech-layer-core',
    delay: 0.4,
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="relative py-24 px-4 section-forest overflow-hidden">
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
            Under the Hood
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technology Behind Bhoomi Bytes
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            A layered ecosystem — from physical sensors to intelligent action.
          </p>
        </motion.div>

        {/* Layered stack */}
        <div className="flex flex-col gap-4">
          {layers.map((layer) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: layer.delay, ease: 'easeOut' as const }}
              className={`${layer.cls} rounded-2xl p-5 backdrop-blur-xl`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="md:w-56 shrink-0">
                  <h3 className="text-sm font-bold text-white mb-0.5">{layer.label}</h3>
                  <p className="text-xs text-white/45">{layer.sublabel}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((it) => (
                    <span key={it} className="glass-pill px-3 py-1 text-xs font-medium text-primary">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple note for judges */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-xs text-white/30 mt-8"
        >
          Each layer communicates seamlessly — sensors feed data upward, intelligence flows back down as action.
        </motion.p>
      </div>
    </section>
  );
}
