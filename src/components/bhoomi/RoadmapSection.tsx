import { motion } from 'motion/react';

const roadmap = [
  {
    num: '01',
    title: 'Smart Monitoring',
    desc: 'Real-time IoT sensor data collection and live dashboard.',
  },
  {
    num: '02',
    title: 'Smart Irrigation',
    desc: 'Data-driven irrigation decisions and remote pump control.',
  },
  {
    num: '03',
    title: 'AI Intelligence',
    desc: 'Crop-specific AI recommendations integrated with weather data.',
  },
  {
    num: '04',
    title: 'Predictive Farming',
    desc: 'Predictive analytics for crop health, yield, and resource planning.',
  },
  {
    num: '05',
    title: 'Advanced Automation',
    desc: 'Fully automated irrigation and farm management workflows.',
  },
  {
    num: '06',
    title: 'Scale',
    desc: 'Expanding to more crops, regions, and agricultural ecosystems.',
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-24 px-4 section-charcoal overflow-hidden">
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
            Future Roadmap
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            From Smart Monitoring to Intelligent Farming
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            A phased journey toward fully intelligent, automated agriculture.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px roadmap-connector z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 relative z-10">
            {roadmap.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const }}
                className="glass-card-hover p-5 flex flex-col"
              >
                {/* Number circle */}
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center mb-4 mx-auto lg:mx-0">
                  <span className="text-xs font-bold text-primary">{step.num}</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2 text-center lg:text-left">{step.title}</h3>
                <p className="text-xs text-white/45 leading-relaxed text-center lg:text-left">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
