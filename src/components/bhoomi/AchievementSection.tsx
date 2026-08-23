import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function AchievementSection() {
  return (
    <section id="achievement" className="relative py-24 px-4 section-achievement overflow-hidden">
      {/* Ambient gold glow */}
      <div className="absolute inset-0 achievement-glow pointer-events-none" />

      {/* Decorative stars */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: `${15 + (i * 13) % 70}%`,
            left: `${5 + (i * 17) % 90}%`,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' as const }}
        >
          <Star className="w-3 h-3 text-yellow-400/40" fill="currentColor" />
        </motion.div>
      ))}

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="text-center mb-12"
        >
          <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Achievement</h2>
        </motion.div>

        {/* Achievement card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' as const }}
          className="glass-card-gold glass-card-gold-pulse p-8 md:p-12 text-center"
        >
          {/* Trophy */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' as const }}
            className="text-5xl mb-6"
            role="img"
            aria-label="Trophy"
          >
            🏆
          </motion.div>

          {/* Finalist badge */}
          <div className="glass-pill inline-block px-5 py-2 mb-4">
            <span className="text-sm font-bold tracking-widest uppercase text-gradient-gold">
              Finalist
            </span>
          </div>

          {/* Event name */}
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            BHABNAJU 1.0
          </h3>

          {/* Institution */}
          <p className="text-base text-white/70 mb-2">
            Institution's Innovation Council (IIC)
          </p>
          <p className="text-lg font-semibold text-white/90 mb-4">
            Jadavpur University
          </p>

          {/* Category badge */}
          <div className="glass-pill inline-block px-4 py-1.5 mb-8">
            <span className="text-xs font-semibold text-yellow-400/80 tracking-wider uppercase">
              Technology &amp; Applied Science
            </span>
          </div>

          {/* Divider */}
          <div className="w-24 h-px mx-auto mb-8 gold-divider" />

          {/* Quote */}
          <div className="glass-card p-6 text-left">
            <p className="text-sm text-white/70 leading-relaxed italic">
              "Bhoomi Bytes was selected as a finalist at BhabnaJU 1.0, an ideation and workshop program organized by IIC, Jadavpur University. The experience enabled the team to present the concept, participate in innovation-focused workshops, receive feedback, and refine the solution."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
