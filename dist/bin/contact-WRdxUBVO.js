import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
import { r as reactExports, j as jsxRuntimeExports, H as Helmet, L as Link } from "./entry-server-DDLVmiTf.js";
import { c as createLucideIcon, m as motion } from "./createLucideIcon-D9gvbV2V.js";
import { c as contact, A as ArrowLeft } from "./_virtual_content-4p8l59eO.js";
import { C as CircleCheck, A as AnimatePresence } from "./circle-check-CkmlLDAR.js";
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
const CircleAlert = createLucideIcon("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Download = createLucideIcon("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FileText = createLucideIcon("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LoaderCircle = createLucideIcon("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Send = createLucideIcon("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
function PitchInquiryForm({
  successContent,
  inquiryOptions
}) {
  const [status, setStatus] = reactExports.useState("idle");
  const [errorMsg, setErrorMsg] = reactExports.useState("");
  const [showSuccess, setShowSuccess] = reactExports.useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (formData.get("_gotcha")) return;
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const organization = String(formData.get("organization") ?? "").trim();
    const inquiryType = String(formData.get("inquiryType") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact/pitch-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          conversation: {
            messages_attributes: [{
              body: message || "New pitch inquiry submission"
            }],
            data: {
              __gd_contact_form_title: "Bhoomi Bytes Pitch Inquiry",
              "Inquiry Type": inquiryType,
              "Organization": organization || "Not provided"
            }
          },
          user: {
            email,
            name
          }
        })
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setShowSuccess(true);
        form.reset();
      } else {
        throw new Error(json.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }
  if (showSuccess) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.95
    }, animate: {
      opacity: 1,
      scale: 1
    }, transition: {
      duration: 0.4,
      ease: "easeOut"
    }, className: "flex flex-col items-center justify-center py-16 text-center gap-4", role: "status", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-8 h-8 text-primary" }) }),
      successContent,
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        setShowSuccess(false);
        setStatus("idle");
      }, className: "glass-pill px-5 py-2 text-sm text-white/60 hover:text-white transition-colors duration-200 mt-2", children: "Send another message" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, noValidate: true, className: "flex flex-col gap-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", name: "_gotcha", tabIndex: -1, autoComplete: "off", style: {
      position: "absolute",
      left: "-9999px"
    }, "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "contact-name", className: "text-xs font-semibold text-white/60 uppercase tracking-wider", children: [
          "Name ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "contact-name", name: "name", type: "text", required: true, placeholder: "Your full name", className: "w-full px-4 py-3 text-sm text-white placeholder-white/25 rounded-xl bg-white/5 border border-white/15 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-200" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "contact-email", className: "text-xs font-semibold text-white/60 uppercase tracking-wider", children: [
          "Email ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "contact-email", name: "email", type: "email", required: true, placeholder: "you@example.com", className: "w-full px-4 py-3 text-sm text-white placeholder-white/25 rounded-xl bg-white/5 border border-white/15 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-200" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "contact-org", className: "text-xs font-semibold text-white/60 uppercase tracking-wider", children: "Organization / Institution" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "contact-org", name: "organization", type: "text", placeholder: "Company, university, or cooperative name", className: "w-full px-4 py-3 text-sm text-white placeholder-white/25 rounded-xl bg-white/5 border border-white/15 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-200" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "contact-inquiry", className: "text-xs font-semibold text-white/60 uppercase tracking-wider", children: [
        "Inquiry Type ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "*" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "contact-inquiry", name: "inquiryType", required: true, defaultValue: "", className: "w-full px-4 py-3 text-sm text-white rounded-xl bg-background/80 border border-white/15 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-200 cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, className: "text-white/40", children: "Select inquiry type…" }),
        inquiryOptions
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "contact-message", className: "text-xs font-semibold text-white/60 uppercase tracking-wider", children: [
        "Message ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "*" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "contact-message", name: "message", required: true, rows: 5, placeholder: "Tell us about your interest in Bhoomi Bytes, your organization, and how you'd like to collaborate…", className: "w-full px-4 py-3 text-sm text-white placeholder-white/25 rounded-xl bg-white/5 border border-white/15 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-200 resize-none" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: -8
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0
    }, className: "flex items-center gap-3 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3", role: "alert", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-red-400 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-300", children: errorMsg })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: status === "sending", className: "flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]", children: status === "sending" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sending…" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Send Message" })
    ] }) })
  ] });
}
const site = "https://bhoomi-bytes.com";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${site}/contact#webpage`,
  name: "Contact & Pitch Deck — Bhoomi Bytes",
  url: `${site}/contact`,
  isPartOf: {
    "@id": `${site}/#website`
  },
  about: {
    "@id": `${site}/#organization`
  }
};
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: contact.meta.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: contact.meta.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: `${site}/contact` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: contact.meta.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:description", content: contact.meta.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: `${site}/contact` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "website" }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/team", className: "glass-pill px-3 py-1.5 text-xs font-semibold text-white/70 hover:text-white transition-all duration-200", children: "Our Team" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 px-4 text-center overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 section-glow pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 24
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6,
          ease: "easeOut"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-5", children: contact.hero.eyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-5 leading-tight", children: contact.hero.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-white/60 leading-relaxed", children: contact.hero.subtitle })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 pb-20 flex flex-col gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "aria-labelledby": "reasons-heading", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
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
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "reasons-heading", className: "text-xl font-bold text-white mb-6 text-center", children: contact.reasons.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: contact.reasons.items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
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
          }, className: "glass-card-hover p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl mb-4 block", role: "img", "aria-label": item.title, children: item.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white mb-2", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/55 leading-relaxed", children: item.desc })
          ] }, item.id)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            opacity: 0,
            x: -24
          }, whileInView: {
            opacity: 1,
            x: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.6,
            ease: "easeOut"
          }, className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card-green p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-white mb-1", children: contact.form.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/50", children: contact.form.subtitle })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PitchInquiryForm, { inquiryOptions: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: contact.form.inquiryTypes.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: type, className: "bg-background text-white", children: type }, type)) }), successContent: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white", children: contact.form.successTitle }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/60 max-w-xs", children: contact.form.successBody })
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            x: 24
          }, whileInView: {
            opacity: 1,
            x: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.6,
            delay: 0.1,
            ease: "easeOut"
          }, className: "lg:col-span-2 flex flex-col gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass-pill inline-block px-3 py-1 text-xs font-semibold text-primary mb-4", children: contact.pitchDeck.eyebrow }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-white mb-2", children: contact.pitchDeck.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/55 leading-relaxed mb-5", children: contact.pitchDeck.subtitle }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `${"/bhoomibytes_portfolio/"}pitch-deck.pdf`, download: true, className: "flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold border border-primary/40 text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]", "aria-label": "Download Bhoomi Bytes pitch deck PDF", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: contact.pitchDeck.buttonLabel })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-3 justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5 text-white/25" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/30", children: contact.pitchDeck.note })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold text-white/50 uppercase tracking-wider mb-5", children: contact.contact.eyebrow }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4", children: contact.contact.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl shrink-0", role: "img", "aria-label": item.label, children: item.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/35 mb-0.5", children: item.label }),
                  item.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: item.href, className: "text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200", children: item.value }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-white/75", children: item.value })
                ] })
              ] }, item.id)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card-gold p-6 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-3", role: "img", "aria-label": "Trophy", children: "🏆" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-yellow-400 uppercase tracking-wider mb-1", children: "Finalist" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-white", children: "BhabnaJU 1.0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/45 mt-1", children: "IIC, Jadavpur University" })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  ContactPage as default
};
