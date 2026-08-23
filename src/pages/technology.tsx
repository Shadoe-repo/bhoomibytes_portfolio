import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { ArrowLeft, Cpu, Database, Cloud, Zap, GitBranch, Radio } from 'lucide-react';
import { Link } from 'react-router';
import { tech } from 'virtual:content';

const site = 'https://bhoomi-bytes.com';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  '@id': `${site}/technology#webpage`,
  name: tech.meta.title,
  url: `${site}/technology`,
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#organization` },
};

const layerIcons = [Radio, Cpu, Database, GitBranch, Zap];

export default function TechPage() {
  return (
    <>
      <Helmet>
        <title>{tech.meta.title}</title>
        <meta name="description" content={tech.meta.description} />
        <link rel="canonical" href={`${site}/technology`} />
        <meta property="og:title" content={tech.meta.title} />
        <meta property="og:description" content={tech.meta.description} />
        <meta property="og:url" content={`${site}/technology`} />
        <meta property="og:type" content="article" />
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
              <Link to="/contact" className="glass-pill px-3 py-1.5 text-xs font-semibold text-white/70 hover:text-white transition-all duration-200">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="relative py-24 px-4 text-center overflow-hidden">
          <div className="absolute inset-0 section-glow pointer-events-none" />
          {/* Decorative circuit lines */}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 40 30 M 40 50 L 40 80 M 0 40 L 30 40 M 50 40 L 80 40" stroke="#a8d5b5" strokeWidth="1" fill="none"/>
                  <circle cx="40" cy="40" r="4" fill="none" stroke="#a8d5b5" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)"/>
            </svg>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
            >
              <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-5">
                {tech.hero.eyebrow}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
                {tech.hero.title}
              </h1>
              <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                {tech.hero.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 pb-20 flex flex-col gap-20">

          {/* ── System Overview ── */}
          <section id="overview">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="text-center mb-12"
            >
              <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
                {tech.overview.eyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{tech.overview.title}</h2>
              <p className="text-white/50 max-w-xl mx-auto">{tech.overview.subtitle}</p>
            </motion.div>

            {/* Layered stack diagram */}
            <div className="flex flex-col gap-3">
              {tech.overview.layers.map((layer, i) => {
                const Icon = layerIcons[i];
                return (
                  <motion.div
                    key={layer.id}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' as const }}
                    className="glass-card-hover flex items-center gap-5 px-6 py-5"
                    style={{ marginLeft: `${i * 20}px`, marginRight: `${(4 - i) * 4}px` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold text-primary/60">{layer.number}</span>
                        <h3 className="text-sm font-bold text-white">{layer.name}</h3>
                      </div>
                      <p className="text-xs text-white/50 leading-relaxed">{layer.desc}</p>
                    </div>
                    {/* Connector arrow */}
                    {i < tech.overview.layers.length - 1 && (
                      <div className="hidden md:block text-white/20 text-lg shrink-0">↓</div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── Hardware ── */}
          <section id="hardware">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="text-center mb-12"
            >
              <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
                {tech.hardware.eyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{tech.hardware.title}</h2>
              <p className="text-white/50 max-w-xl mx-auto">{tech.hardware.intro}</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* ESP32 specs */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const }}
                className="glass-card p-7"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-white">{tech.hardware.esp32.title}</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {tech.hardware.esp32.specs.map((spec) => (
                    <div key={spec.id} className="flex items-start justify-between gap-4 py-2 border-b border-white/5 last:border-0">
                      <span className="text-xs text-white/40 shrink-0 w-28">{spec.label}</span>
                      <span className="text-xs text-white/80 text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Sensor grid */}
              <div className="flex flex-col gap-4">
                {tech.hardware.sensors.map((sensor, i) => (
                  <motion.div
                    key={sensor.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' as const }}
                    className="glass-card-hover p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-2xl shrink-0" role="img" aria-label={sensor.name}>{sensor.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="text-sm font-bold text-white">{sensor.name}</h3>
                          <span className="glass-pill px-2 py-0.5 text-xs text-white/40">{sensor.model}</span>
                        </div>
                        <p className="text-xs text-white/50 mb-3 leading-relaxed">{sensor.desc}</p>
                        <div className="flex flex-wrap gap-3">
                          <span className="text-xs text-primary/70">Range: <span className="text-white/60">{sensor.range}</span></span>
                          <span className="text-xs text-primary/70">Accuracy: <span className="text-white/60">{sensor.accuracy}</span></span>
                          <span className="text-xs text-primary/70">Interface: <span className="text-white/60">{sensor.interface}</span></span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Firmware ── */}
          <section id="firmware">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="text-center mb-12"
            >
              <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
                {tech.firmware.eyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{tech.firmware.title}</h2>
              <p className="text-white/50 max-w-xl mx-auto">{tech.firmware.intro}</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Task loop */}
              <div className="flex flex-col gap-4">
                {tech.firmware.tasks.map((task, i) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' as const }}
                    className="glass-card-hover p-5"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <h3 className="text-sm font-bold text-white">{task.name}</h3>
                      <span className="ml-auto glass-pill px-2 py-0.5 text-xs text-primary/70">{task.interval}</span>
                    </div>
                    <p className="text-xs text-white/55 leading-relaxed pl-5">{task.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* JSON payload */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  <span className="ml-2 text-xs text-white/30 font-mono">telemetry_payload.json</span>
                </div>
                <pre className="text-xs text-primary/80 font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap">
                  {tech.firmware.payload}
                </pre>
              </motion.div>
            </div>
          </section>

          {/* ── Data Pipeline ── */}
          <section id="pipeline">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="text-center mb-12"
            >
              <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
                {tech.pipeline.eyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{tech.pipeline.title}</h2>
              <p className="text-white/50 max-w-xl mx-auto">{tech.pipeline.intro}</p>
            </motion.div>

            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-8 bottom-8 w-px bg-primary/15 hidden md:block" />
              <div className="flex flex-col gap-5">
                {tech.pipeline.stages.map((stage, i) => (
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.09, ease: 'easeOut' as const }}
                    className="glass-card-hover flex items-start gap-5 p-6 md:pl-16 relative"
                  >
                    {/* Step circle */}
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center hidden md:flex">
                      <span className="text-xs font-bold text-primary">{stage.step}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-sm font-bold text-white">{stage.name}</h3>
                        <span className="glass-pill px-2.5 py-0.5 text-xs text-primary/70">{stage.tech}</span>
                      </div>
                      <p className="text-sm text-white/55 leading-relaxed">{stage.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ── AI Engine ── */}
          <section id="ai">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="text-center mb-12"
            >
              <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
                {tech.ai.eyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{tech.ai.title}</h2>
              <p className="text-white/50 max-w-xl mx-auto">{tech.ai.intro}</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
              {/* Inputs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const }}
                className="glass-card p-6"
              >
                <h3 className="text-xs font-bold text-white/50 uppercase tracking-wider mb-5">Model Inputs</h3>
                <div className="flex flex-col gap-3">
                  {tech.ai.inputs.map((inp) => (
                    <div key={inp.id} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-white/80">{inp.label}</p>
                        <p className="text-xs text-white/35">{inp.source}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Models — span 2 cols */}
              <div className="lg:col-span-2 flex flex-col gap-5">
                {tech.ai.models.map((model, i) => (
                  <motion.div
                    key={model.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' as const }}
                    className="glass-card-hover p-6"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                      <div>
                        <h3 className="text-sm font-bold text-white mb-1">{model.name}</h3>
                        <span className="glass-pill px-2.5 py-0.5 text-xs text-primary/70">{model.type}</span>
                      </div>
                      <div className="glass-pill px-3 py-1.5 text-right">
                        <p className="text-xs text-white/35 mb-0.5">Performance</p>
                        <p className="text-xs font-semibold text-primary">{model.accuracy}</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/55 leading-relaxed">{model.desc}</p>
                  </motion.div>
                ))}

                {/* Supported crops */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: 'easeOut' as const }}
                  className="glass-card p-5"
                >
                  <p className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3">Supported Crops</p>
                  <div className="flex flex-wrap gap-2">
                    {tech.ai.crops.map((crop) => (
                      <span key={crop} className="glass-pill px-3 py-1.5 text-xs font-semibold text-white/70">{crop}</span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ── Weather Integration ── */}
          <section id="weather">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="text-center mb-12"
            >
              <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
                {tech.weather.eyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{tech.weather.title}</h2>
              <p className="text-white/50 max-w-xl mx-auto">{tech.weather.intro}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* API endpoints */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Cloud className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-bold text-white">API Endpoints Used</h3>
                </div>
                <div className="flex flex-col gap-4">
                  {tech.weather.endpoints.map((ep) => (
                    <div key={ep.id} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <p className="text-xs font-bold text-white/80 mb-1">{ep.name}</p>
                      <code className="text-xs text-primary/70 font-mono block mb-1">{ep.endpoint}</code>
                      <p className="text-xs text-white/40">{ep.use}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Decision logic */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-2 mb-5">
                  <GitBranch className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-bold text-white">Weather Decision Logic</h3>
                </div>
                <div className="flex flex-col gap-4">
                  {tech.weather.logic.map((rule) => (
                    <div key={rule.id} className="glass-card p-4">
                      <p className="text-xs text-white/50 mb-2">
                        <span className="text-primary/70 font-semibold">IF </span>
                        {rule.condition}
                      </p>
                      <p className="text-xs text-white/75">
                        <span className="text-primary font-semibold">→ </span>
                        {rule.action}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* ── Actuation ── */}
          <section id="actuation">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="text-center mb-12"
            >
              <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
                {tech.actuation.eyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{tech.actuation.title}</h2>
              <p className="text-white/50 max-w-xl mx-auto">{tech.actuation.intro}</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {tech.actuation.features.map((feat, i) => (
                <motion.div
                  key={feat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' as const }}
                  className="glass-card-hover p-6 flex items-start gap-4"
                >
                  <span className="text-2xl shrink-0" role="img" aria-label={feat.title}>{feat.icon}</span>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-2">{feat.title}</h3>
                    <p className="text-xs text-white/55 leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Technical Roadmap ── */}
          <section id="tech-roadmap">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="text-center mb-12"
            >
              <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
                {tech.roadmapTech.eyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{tech.roadmapTech.title}</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {tech.roadmapTech.items.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.09, ease: 'easeOut' as const }}
                  className="glass-card-hover p-6"
                >
                  <span className="glass-pill inline-block px-2.5 py-1 text-xs font-bold text-primary mb-4">{item.phase}</span>
                  <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Want to See It Live?</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-7">
              Explore the interactive demo with real-time sensor simulation, AI recommendations, and pump control — or get in touch to discuss a pilot deployment.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 hover:scale-105"
              >
                <span className="live-dot w-2 h-2 rounded-full bg-primary-foreground" />
                Try Live Demo
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold border border-primary/40 text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-105"
              >
                Contact the Team
              </Link>
            </div>
          </motion.section>

        </div>
      </main>
    </>
  );
}
