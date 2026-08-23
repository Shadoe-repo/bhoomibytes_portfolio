import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { Link } from 'react-router';
import { contact } from 'virtual:content';
import PitchInquiryForm from '@/components/contact/PitchInquiryForm';

const site = 'https://bhoomi-bytes.com';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${site}/contact#webpage`,
  name: 'Contact & Pitch Deck — Bhoomi Bytes',
  url: `${site}/contact`,
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#organization` },
};

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>{contact.meta.title}</title>
        <meta name="description" content={contact.meta.description} />
        <link rel="canonical" href={`${site}/contact`} />
        <meta property="og:title" content={contact.meta.title} />
        <meta property="og:description" content={contact.meta.description} />
        <meta property="og:url" content={`${site}/contact`} />
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
              <Link to="/team" className="glass-pill px-3 py-1.5 text-xs font-semibold text-white/70 hover:text-white transition-all duration-200">
                Our Team
              </Link>
            </div>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="relative py-24 px-4 text-center overflow-hidden">
          <div className="absolute inset-0 section-glow pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
            >
              <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-5">
                {contact.hero.eyebrow}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                {contact.hero.title}
              </h1>
              <p className="text-lg text-white/60 leading-relaxed">
                {contact.hero.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 pb-20 flex flex-col gap-16">

          {/* ── Why Connect ── */}
          <section aria-labelledby="reasons-heading">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
            >
              <h2 id="reasons-heading" className="text-xl font-bold text-white mb-6 text-center">
                {contact.reasons.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {contact.reasons.items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' as const }}
                    className="glass-card-hover p-6"
                  >
                    <span className="text-3xl mb-4 block" role="img" aria-label={item.title}>{item.icon}</span>
                    <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-white/55 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* ── Form + Sidebar ── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Form — 3 cols */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="lg:col-span-3"
            >
              <div className="glass-card-green p-8">
                {/* Form header — content rendered inline */}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-white mb-1">{contact.form.title}</h2>
                  <p className="text-sm text-white/50">{contact.form.subtitle}</p>
                </div>

                <PitchInquiryForm
                  inquiryOptions={
                    <>
                      {contact.form.inquiryTypes.map((type) => (
                        <option key={type} value={type} className="bg-background text-white">{type}</option>
                      ))}
                    </>
                  }
                  successContent={
                    <>
                      <h3 className="text-lg font-bold text-white">{contact.form.successTitle}</h3>
                      <p className="text-sm text-white/60 max-w-xs">{contact.form.successBody}</p>
                    </>
                  }
                />
              </div>
            </motion.div>

            {/* Sidebar — 2 cols */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' as const }}
              className="lg:col-span-2 flex flex-col gap-5"
            >

              {/* Pitch Deck Download */}
              <div className="glass-card p-7">
                <span className="glass-pill inline-block px-3 py-1 text-xs font-semibold text-primary mb-4">
                  {contact.pitchDeck.eyebrow}
                </span>
                <h2 className="text-lg font-bold text-white mb-2">{contact.pitchDeck.title}</h2>
                <p className="text-sm text-white/55 leading-relaxed mb-5">{contact.pitchDeck.subtitle}</p>

                <a
                  href="/pitch-deck.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold border border-primary/40 text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="Download Bhoomi Bytes pitch deck PDF"
                >
                  <Download className="w-4 h-4" />
                  <span>{contact.pitchDeck.buttonLabel}</span>
                </a>

                <div className="flex items-center gap-2 mt-3 justify-center">
                  <FileText className="w-3.5 h-3.5 text-white/25" />
                  <span className="text-xs text-white/30">{contact.pitchDeck.note}</span>
                </div>
              </div>

              {/* Direct contact */}
              <div className="glass-card p-7">
                <h3 className="text-xs font-bold text-white/50 uppercase tracking-wider mb-5">
                  {contact.contact.eyebrow}
                </h3>
                <div className="flex flex-col gap-4">
                  {contact.contact.items.map((item) => (
                    <div key={item.id} className="flex items-start gap-3">
                      <span className="text-xl shrink-0" role="img" aria-label={item.label}>{item.icon}</span>
                      <div>
                        <p className="text-xs text-white/35 mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-white/75">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievement badge */}
              <div className="glass-card-gold p-6 text-center">
                <div className="text-4xl mb-3" role="img" aria-label="Trophy">🏆</div>
                <p className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-1">Finalist</p>
                <p className="text-sm font-bold text-white">BhabnaJU 1.0</p>
                <p className="text-xs text-white/45 mt-1">IIC, Jadavpur University</p>
              </div>

            </motion.div>
          </div>

        </div>
      </main>
    </>
  );
}
