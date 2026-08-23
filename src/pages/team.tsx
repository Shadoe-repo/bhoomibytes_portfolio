import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { ArrowLeft, Users, Lightbulb, Trophy, ArrowRight, Crown, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { team } from 'virtual:content';

const site = 'https://bhoomi-bytes.com';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${site}/team#webpage`,
  name: team.meta.title,
  url: `${site}/team`,
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#organization` },
};

export default function TeamPage() {
  return (
    <>
      <Helmet>
        <title>{team.meta.title}</title>
        <meta name="description" content={team.meta.description} />
        <link rel="canonical" href={`${site}/team`} />
        <meta property="og:title" content={team.meta.title} />
        <meta property="og:description" content={team.meta.description} />
        <meta property="og:url" content={`${site}/team`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="min-h-screen section-deep">

        {/* ── Top bar ── */}
        <div className="sticky top-0 z-40 glass-nav px-4 py-3">
          <div className="max-w-6xl mx-auto flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 text-sm">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
            <div className="h-4 w-px bg-white/20" />
            <img
              src="/airo-assets/images/logo/horizontal/dark"
              alt="Bhoomi Bytes"
              className="h-6 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = '/assets/uploads/airo-logo-shimmer-horizontal.svg';
              }}
            />
            <div className="ml-auto flex items-center gap-3">
              <Link to="/demo" className="flex items-center gap-2 glass-pill px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/10 transition-all duration-200">
                <span className="live-dot w-1.5 h-1.5 rounded-full bg-primary" />
                Live Demo
              </Link>
              <Link to="/contact" className="glass-pill px-3 py-1.5 text-xs font-semibold text-white/70 hover:text-white transition-all duration-200">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/airo-assets/images/pages/team/hero"
              alt="Bhoomi Bytes team working on IoT agriculture project"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              width={1400}
              height={500}
              onError={(e) => {
                e.currentTarget.src = '/assets/uploads/hero-field-bg.svg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 pt-28 pb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
            >
              <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-5">
                {team.hero.eyebrow}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
                {team.hero.title}
              </h1>
              <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
                {team.hero.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col gap-20">

          {/* ── Origin Story ── */}
          <section id="origin">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="text-center mb-12"
            >
              <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
                {team.origin.eyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{team.origin.title}</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.origin.paragraphs.map((para, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const }}
                  className="glass-card p-6"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <span className="text-xs font-bold text-primary">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-sm text-white/65 leading-relaxed">{para}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Team Members ── */}
          <section id="team-members">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="text-center mb-12"
            >
              <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
                {team.team.eyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{team.team.title}</h2>
              <p className="text-white/50 max-w-xl mx-auto">{team.team.intro}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.team.members.map((member, i) => {
                const isLeader = member.name === 'Priyam Sarkar';
                return (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' as const }}
                    className={`glass-card-hover p-8 flex flex-col relative transition-all duration-300 ${
                      isLeader
                        ? 'border border-amber-500/30 bg-gradient-to-b from-amber-500/10 via-primary/5 to-transparent'
                        : 'border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 via-primary/5 to-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/25 flex items-center justify-center">
                        <Users className="w-7 h-7 text-primary/70" />
                      </div>
                      {isLeader ? (
                        <span className="glass-pill px-3 py-1.5 text-xs font-bold tracking-wider uppercase text-amber-300 border border-amber-500/40 bg-amber-500/10 flex items-center gap-1.5 shadow-sm">
                          <Crown className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                          FOUNDER &amp; TEAM LEAD
                        </span>
                      ) : (
                        <span className="glass-pill px-3 py-1.5 text-xs font-bold tracking-wider uppercase text-emerald-300 border border-emerald-500/40 bg-emerald-500/10 flex items-center gap-1.5 shadow-sm">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                          CO-FOUNDER
                        </span>
                      )}
                    </div>

                    {/* Name */}
                    <h3 className="text-2xl font-bold text-white mb-1.5 tracking-tight">{member.name}</h3>

                    {/* Role */}
                    <p className="text-xs font-bold text-primary tracking-wide uppercase mb-1">{member.role}</p>

                    {/* Specialization / Focus */}
                    <p className="text-xs text-white/50 mb-4">{member.focus}</p>

                    {/* Description / Bio */}
                    <p className="text-sm text-white/70 leading-relaxed mb-6 flex-1">{member.bio}</p>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                      {member.skills.map((skill) => (
                        <span key={skill} className="glass-pill px-2.5 py-1 text-xs text-white/70 font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── Core Values ── */}
          <section id="values">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="text-center mb-12"
            >
              <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
                {team.values.eyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{team.values.title}</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {team.values.items.map((val, i) => (
                <motion.div
                  key={val.id}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const }}
                  className="glass-card-hover p-6 flex items-start gap-4"
                >
                  <span className="text-3xl shrink-0" role="img" aria-label={val.title}>{val.icon}</span>
                  <div>
                    <h3 className="text-base font-bold text-white mb-2">{val.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── BhabnaJU Journey ── */}
          <section id="bhabnaju" className="relative">
            <div className="absolute inset-0 achievement-glow pointer-events-none rounded-3xl" />
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' as const }}
                className="text-center mb-12"
              >
                <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
                  {team.bhabnaju.eyebrow}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{team.bhabnaju.title}</h2>
                <p className="text-white/55 max-w-xl mx-auto">{team.bhabnaju.intro}</p>
              </motion.div>

              {/* What is BhabnaJU + image */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: 'easeOut' as const }}
                  className="glass-card-gold p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                      <span className="text-sm font-bold text-yellow-400 uppercase tracking-wider">Finalist</span>
                    </div>
                    <div className="text-5xl mb-4" role="img" aria-label="Trophy">🏆</div>
                    <h3 className="text-2xl font-bold text-white mb-1">BHABNAJU 1.0</h3>
                    <p className="text-white/60 text-sm mb-1">{team.bhabnaju.institution}</p>
                    <div className="glass-pill inline-block px-3 py-1 mt-2">
                      <span className="text-xs font-semibold text-yellow-400/80">{team.bhabnaju.category}</span>
                    </div>
                  </div>
                  <blockquote className="mt-6 border-l-2 border-primary/40 pl-4">
                    <p className="text-sm text-white/65 italic leading-relaxed">"{team.bhabnaju.quote}"</p>
                  </blockquote>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: 'easeOut' as const }}
                  className="glass-card p-7"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-4 h-4 text-primary" />
                    <h3 className="text-sm font-bold text-white">{team.bhabnaju.what.label}</h3>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">{team.bhabnaju.what.desc}</p>
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src="/airo-assets/images/pages/team/jadavpur"
                      alt="Jadavpur University campus"
                      className="w-full h-40 object-cover opacity-70"
                      loading="lazy"
                      width={800}
                      height={160}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Timeline */}
              <div className="glass-card p-7">
                <h3 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-6">Our Journey</h3>
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-primary/20" />
                  <div className="flex flex-col gap-6">
                    {team.bhabnaju.timeline.map((step, i) => (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' as const }}
                        className="flex items-start gap-5 pl-10 relative"
                      >
                        {/* Dot */}
                        <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-primary/30 border-2 border-primary/60 -translate-x-1/2" />
                        <div>
                          <span className="text-xs font-bold text-primary uppercase tracking-wider">{step.phase}</span>
                          <p className="text-sm text-white/60 mt-1 leading-relaxed">{step.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
            className="glass-card-green p-10 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{team.cta.title}</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-7">{team.cta.subtitle}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 hover:scale-105"
            >
              <span>{team.cta.buttonLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.section>

        </div>
      </main>
    </>
  );
}
