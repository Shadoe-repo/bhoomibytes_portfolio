import { motion } from 'motion/react';
import { Link } from 'react-router';

const metrics = [
  { label: 'Soil Moisture', value: '68%' },
  { label: 'Temperature', value: '28°C' },
  { label: 'Humidity', value: '74%' },
  { label: 'pH Level', value: '6.8' },
];

const pills = ['IoT', 'AI', 'Smart Irrigation', 'Weather Intelligence'];

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/airo-assets/images/pages/home/hero"
          alt="Indian agricultural field"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
          onError={(e) => {
            e.currentTarget.src = '/assets/uploads/hero-field-bg.svg';
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full glow-orb hero-glow-orb pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-16 max-w-5xl mx-auto w-full">
        {/* Platform badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' as const }}
        >
          <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-6">
            AgriTech Innovation Platform
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' as const }}
          className="text-4xl sm:text-6xl md:text-8xl font-bold text-white tracking-[0.04em] mb-4"
        >
          BHOOMI BYTES
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' as const }}
          className="text-2xl md:text-3xl font-medium text-primary mb-6"
        >
          From Field Data to Smart Action.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: 'easeOut' as const }}
          className="text-base md:text-lg text-white/70 max-w-2xl mb-8 leading-relaxed"
        >
          An IoT and AI-powered smart agriculture platform that transforms real-time field data into intelligent farming decisions.
        </motion.p>

        {/* Tech pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' as const }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {pills.map((pill, i) => (
            <motion.span
              key={pill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.85 + i * 0.08, ease: 'easeOut' as const }}
              className="glass-pill px-4 py-1.5 text-sm font-medium text-white/85"
            >
              {pill}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' as const }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <button
            onClick={() => handleScroll('#solution')}
            className="px-7 py-3 rounded-full text-sm font-semibold bg-primary text-primary-foreground transition-all duration-300 hover:opacity-90 hover:scale-105"
          >
            Explore Solution
          </button>
          <Link
            to="/demo"
            className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border border-primary/40 text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
          >
            <span className="live-dot w-2 h-2 rounded-full bg-primary inline-block" />
            Live Demo
          </Link>
          <button
            onClick={() => handleScroll('#achievement')}
            className="glass-pill px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/15 hover:scale-105"
          >
            Our Journey
          </button>
        </motion.div>

        {/* Floating glass dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' as const }}
          className="float-bob w-full max-w-lg"
        >
          <div className="glass-card-green p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="live-dot w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-semibold text-primary tracking-wider uppercase">Live Field Data</span>
              </div>
              <span className="text-xs text-white/40">Field Station 01</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {metrics.map((m) => (
                <div key={m.label} className="glass-card p-3 text-center">
                  <div className="text-xl font-bold text-white mb-0.5">{m.value}</div>
                  <div className="text-xs text-white/50">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/40 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' as const }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
