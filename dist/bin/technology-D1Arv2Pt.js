import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
import { j as jsxRuntimeExports, H as Helmet, L as Link } from "./entry-server-DDLVmiTf.js";
import { c as createLucideIcon, m as motion } from "./createLucideIcon-D9gvbV2V.js";
import { a as tech, A as ArrowLeft } from "./_virtual_content-4p8l59eO.js";
import { R as Radio, D as Database } from "./radio-BXb0Pb-p.js";
import { C as Cpu, Z as Zap, a as Cloud } from "./zap-CnNL3bw_.js";
import "util";
import "crypto";
import "async_hooks";
import "stream";
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GitBranch = createLucideIcon("GitBranch", [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
]);
const site = "https://bhoomi-bytes.com";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": `${site}/technology#webpage`,
  name: tech.meta.title,
  url: `${site}/technology`,
  isPartOf: {
    "@id": `${site}/#website`
  },
  about: {
    "@id": `${site}/#organization`
  }
};
const layerIcons = [Radio, Cpu, Database, GitBranch, Zap];
function TechPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: tech.meta.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: tech.meta.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: `${site}/technology` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: tech.meta.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:description", content: tech.meta.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: `${site}/technology` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify(jsonLd) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen section-deep", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-40 glass-nav px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Back to Home" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-px bg-white/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://isteam.wsimg.com/genai-assistant/logoagent/customer/9cb20ec8-eef8-432a-b965-c2daadfe1408/session/0c0811ef-ba62-4c56-af1f-d2ca7a1f21bd/horizontal-transparent-a13f845a-1dd4-4326-abd6-f594e39169d0/logo-logo.png", alt: "Bhoomi Bytes", className: "h-6 w-auto object-contain", onError: (e) => {
          e.currentTarget.src = `${"/bhoomibytes_portfolio/"}assets/uploads/airo-logo-shimmer-horizontal.svg`;
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/demo", className: "flex items-center gap-2 glass-pill px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/10 transition-all duration-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "live-dot w-1.5 h-1.5 rounded-full bg-primary" }),
            "Live Demo"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/team", className: "glass-pill px-3 py-1.5 text-xs font-semibold text-white/70 hover:text-white transition-all duration-200", children: "Our Team" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "glass-pill px-3 py-1.5 text-xs font-semibold text-white/70 hover:text-white transition-all duration-200", children: "Contact" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 px-4 text-center overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 section-glow pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none opacity-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("pattern", { id: "circuit", x: "0", y: "0", width: "80", height: "80", patternUnits: "userSpaceOnUse", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 40 0 L 40 30 M 40 50 L 40 80 M 0 40 L 30 40 M 50 40 L 80 40", stroke: "#a8d5b5", strokeWidth: "1", fill: "none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "40", cy: "40", r: "4", fill: "none", stroke: "#a8d5b5", strokeWidth: "1" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "url(#circuit)" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 24
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6,
          ease: "easeOut"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-5", children: tech.hero.eyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-6xl font-bold text-white mb-5 leading-tight", children: tech.hero.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-white/60 max-w-2xl mx-auto leading-relaxed", children: tech.hero.subtitle })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 pb-20 flex flex-col gap-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "overview", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 24
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.6,
            ease: "easeOut"
          }, className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4", children: tech.overview.eyebrow }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-3", children: tech.overview.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 max-w-xl mx-auto", children: tech.overview.subtitle })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: tech.overview.layers.map((layer, i) => {
            const Icon = layerIcons[i];
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
              opacity: 0,
              x: -24
            }, whileInView: {
              opacity: 1,
              x: 0
            }, viewport: {
              once: true
            }, transition: {
              duration: 0.45,
              delay: i * 0.08,
              ease: "easeOut"
            }, className: "glass-card-hover flex items-center gap-5 px-6 py-5", style: {
              marginLeft: `${i * 20}px`,
              marginRight: `${(4 - i) * 4}px`
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-primary/60", children: layer.number }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white", children: layer.name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/50 leading-relaxed", children: layer.desc })
              ] }),
              i < tech.overview.layers.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block text-white/20 text-lg shrink-0", children: "↓" })
            ] }, layer.id);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "hardware", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 24
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.6,
            ease: "easeOut"
          }, className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4", children: tech.hardware.eyebrow }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-3", children: tech.hardware.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 max-w-xl mx-auto", children: tech.hardware.intro })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
              opacity: 0,
              x: -20
            }, whileInView: {
              opacity: 1,
              x: 0
            }, viewport: {
              once: true
            }, transition: {
              duration: 0.5,
              ease: "easeOut"
            }, className: "glass-card p-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-white", children: tech.hardware.esp32.title })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3", children: tech.hardware.esp32.specs.map((spec) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 py-2 border-b border-white/5 last:border-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/40 shrink-0 w-28", children: spec.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/80 text-right", children: spec.value })
              ] }, spec.id)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4", children: tech.hardware.sensors.map((sensor, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
              opacity: 0,
              x: 20
            }, whileInView: {
              opacity: 1,
              x: 0
            }, viewport: {
              once: true
            }, transition: {
              duration: 0.4,
              delay: i * 0.07,
              ease: "easeOut"
            }, className: "glass-card-hover p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl shrink-0", role: "img", "aria-label": sensor.name, children: sensor.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white", children: sensor.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass-pill px-2 py-0.5 text-xs text-white/40", children: sensor.model })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/50 mb-3 leading-relaxed", children: sensor.desc }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-primary/70", children: [
                    "Range: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: sensor.range })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-primary/70", children: [
                    "Accuracy: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: sensor.accuracy })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-primary/70", children: [
                    "Interface: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: sensor.interface })
                  ] })
                ] })
              ] })
            ] }) }, sensor.id)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "firmware", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 24
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.6,
            ease: "easeOut"
          }, className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4", children: tech.firmware.eyebrow }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-3", children: tech.firmware.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 max-w-xl mx-auto", children: tech.firmware.intro })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4", children: tech.firmware.tasks.map((task, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
              opacity: 0,
              y: 16
            }, whileInView: {
              opacity: 1,
              y: 0
            }, viewport: {
              once: true
            }, transition: {
              duration: 0.4,
              delay: i * 0.08,
              ease: "easeOut"
            }, className: "glass-card-hover p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white", children: task.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto glass-pill px-2 py-0.5 text-xs text-primary/70", children: task.interval })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/55 leading-relaxed pl-5", children: task.desc })
            ] }, task.id)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
              opacity: 0,
              x: 20
            }, whileInView: {
              opacity: 1,
              x: 0
            }, viewport: {
              once: true
            }, transition: {
              duration: 0.5,
              ease: "easeOut"
            }, className: "glass-card p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-red-400/60" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-yellow-400/60" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-green-400/60" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-xs text-white/30 font-mono", children: "telemetry_payload.json" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "text-xs text-primary/80 font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap", children: tech.firmware.payload })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "pipeline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 24
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.6,
            ease: "easeOut"
          }, className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4", children: tech.pipeline.eyebrow }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-3", children: tech.pipeline.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 max-w-xl mx-auto", children: tech.pipeline.intro })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-8 top-8 bottom-8 w-px bg-primary/15 hidden md:block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-5", children: tech.pipeline.stages.map((stage, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
              opacity: 0,
              x: -20
            }, whileInView: {
              opacity: 1,
              x: 0
            }, viewport: {
              once: true
            }, transition: {
              duration: 0.45,
              delay: i * 0.09,
              ease: "easeOut"
            }, className: "glass-card-hover flex items-start gap-5 p-6 md:pl-16 relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center hidden md:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-primary", children: stage.step }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white", children: stage.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass-pill px-2.5 py-0.5 text-xs text-primary/70", children: stage.tech })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/55 leading-relaxed", children: stage.desc })
              ] })
            ] }, stage.id)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "ai", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 24
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.6,
            ease: "easeOut"
          }, className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4", children: tech.ai.eyebrow }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-3", children: tech.ai.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 max-w-xl mx-auto", children: tech.ai.intro })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
              opacity: 0,
              y: 20
            }, whileInView: {
              opacity: 1,
              y: 0
            }, viewport: {
              once: true
            }, transition: {
              duration: 0.5,
              ease: "easeOut"
            }, className: "glass-card p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold text-white/50 uppercase tracking-wider mb-5", children: "Model Inputs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: tech.ai.inputs.map((inp) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-white/80", children: inp.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/35", children: inp.source })
                ] })
              ] }, inp.id)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 flex flex-col gap-5", children: [
              tech.ai.models.map((model, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
                opacity: 0,
                x: 20
              }, whileInView: {
                opacity: 1,
                x: 0
              }, viewport: {
                once: true
              }, transition: {
                duration: 0.45,
                delay: i * 0.1,
                ease: "easeOut"
              }, className: "glass-card-hover p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 mb-3 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white mb-1", children: model.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass-pill px-2.5 py-0.5 text-xs text-primary/70", children: model.type })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-pill px-3 py-1.5 text-right", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/35 mb-0.5", children: "Performance" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary", children: model.accuracy })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/55 leading-relaxed", children: model.desc })
              ] }, model.id)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
                opacity: 0,
                y: 12
              }, whileInView: {
                opacity: 1,
                y: 0
              }, viewport: {
                once: true
              }, transition: {
                duration: 0.4,
                ease: "easeOut"
              }, className: "glass-card p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-white/40 uppercase tracking-wider mb-3", children: "Supported Crops" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: tech.ai.crops.map((crop) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass-pill px-3 py-1.5 text-xs font-semibold text-white/70", children: crop }, crop)) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "weather", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 24
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.6,
            ease: "easeOut"
          }, className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4", children: tech.weather.eyebrow }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-3", children: tech.weather.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 max-w-xl mx-auto", children: tech.weather.intro })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
              opacity: 0,
              x: -20
            }, whileInView: {
              opacity: 1,
              x: 0
            }, viewport: {
              once: true
            }, transition: {
              duration: 0.5,
              ease: "easeOut"
            }, className: "glass-card p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { className: "w-4 h-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white", children: "API Endpoints Used" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4", children: tech.weather.endpoints.map((ep) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-white/5 pb-4 last:border-0 last:pb-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-white/80 mb-1", children: ep.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-xs text-primary/70 font-mono block mb-1", children: ep.endpoint }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/40", children: ep.use })
              ] }, ep.id)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
              opacity: 0,
              x: 20
            }, whileInView: {
              opacity: 1,
              x: 0
            }, viewport: {
              once: true
            }, transition: {
              duration: 0.5,
              ease: "easeOut"
            }, className: "glass-card p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(GitBranch, { className: "w-4 h-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white", children: "Weather Decision Logic" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4", children: tech.weather.logic.map((rule) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-white/50 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary/70 font-semibold", children: "IF " }),
                  rule.condition
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-white/75", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-semibold", children: "→ " }),
                  rule.action
                ] })
              ] }, rule.id)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "actuation", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 24
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.6,
            ease: "easeOut"
          }, className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4", children: tech.actuation.eyebrow }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-3", children: tech.actuation.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 max-w-xl mx-auto", children: tech.actuation.intro })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: tech.actuation.features.map((feat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.4,
            delay: i * 0.08,
            ease: "easeOut"
          }, className: "glass-card-hover p-6 flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl shrink-0", role: "img", "aria-label": feat.title, children: feat.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white mb-2", children: feat.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/55 leading-relaxed", children: feat.desc })
            ] })
          ] }, feat.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "tech-roadmap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 24
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.6,
            ease: "easeOut"
          }, className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4", children: tech.roadmapTech.eyebrow }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white", children: tech.roadmapTech.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: tech.roadmapTech.items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.4,
            delay: i * 0.09,
            ease: "easeOut"
          }, className: "glass-card-hover p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass-pill inline-block px-2.5 py-1 text-xs font-bold text-primary mb-4", children: item.phase }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white mb-2", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/50 leading-relaxed", children: item.desc })
          ] }, item.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.section, { initial: {
          opacity: 0,
          y: 24
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.6,
          ease: "easeOut"
        }, className: "glass-card-green p-10 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-3", children: "Want to See It Live?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 max-w-xl mx-auto mb-7", children: "Explore the interactive demo with real-time sensor simulation, AI recommendations, and pump control — or get in touch to discuss a pilot deployment." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/demo", className: "inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 hover:scale-105", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "live-dot w-2 h-2 rounded-full bg-primary-foreground" }),
              "Try Live Demo"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold border border-primary/40 text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-105", children: "Contact the Team" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  TechPage as default
};
