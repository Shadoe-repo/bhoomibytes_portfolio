import { motion } from 'motion/react';

const pills = ['IoT', 'AI', 'Weather Intelligence', 'Smart Irrigation', 'Sustainable Agriculture'];

export default function FinalSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="final" className="relative min-h-screen flex items-center justify-center py-24 px-4 section-final overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full glow-orb final-orb-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full glow-orb final-orb-2 pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="mb-8"
        >
          <img
            src="https://isteam.wsimg.com/genai-assistant/logoagent/customer/9cb20ec8-eef8-432a-b965-c2daadfe1408/session/0c0811ef-ba62-4c56-af1f-d2ca7a1f21bd/horizontal-transparent-a13f845a-1dd4-4326-abd6-f594e39169d0/logo-logo.png"
            alt="Bhoomi Bytes"
            className="h-12 w-auto object-contain mx-auto"
            onError={(e) => {
              e.currentTarget.src = `${import.meta.env.BASE_URL}assets/uploads/airo-logo-shimmer-horizontal.svg`;
            }}
          />
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' as const }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold text-white tracking-[0.04em] mb-4"
        >
          BHOOMI BYTES
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' as const }}
          className="text-2xl md:text-3xl font-medium text-primary mb-4"
        >
          From Field Data to Smart Action.
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' as const }}
          className="text-white/60 mb-10 text-base"
        >
          Empowering farmers with data, intelligence, and technology.
        </motion.p>

        {/* Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' as const }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {pills.map((pill) => (
            <span key={pill} className="glass-pill px-4 py-1.5 text-sm font-medium text-white/75">
              {pill}
            </span>
          ))}
        </motion.div>

        {/* Final statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' as const }}
          className="glass-card-green p-8 max-w-2xl mx-auto mb-12"
        >
          <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
            "Bhoomi Bytes turns real-time farm data into{' '}
            <span className="text-primary font-semibold">intelligent agricultural action.</span>"
          </p>
        </motion.div>

        {/* Back to top */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={() => handleScroll('#hero')}
          className="glass-pill px-6 py-2.5 text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
        >
          Back to top ↑
        </motion.button>
      </div>
    </section>
  );
}
