import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
import { r as reactExports, j as jsxRuntimeExports, H as Helmet, L as Link } from "./entry-server-DDLVmiTf.js";
import { c as createLucideIcon, m as motion } from "./createLucideIcon-D9gvbV2V.js";
import { d as demo, A as ArrowLeft } from "./_virtual_content-4p8l59eO.js";
import { D as Droplets, C as Clock, B as Brain } from "./droplets-BJDTNy5U.js";
import { A as AnimatePresence, C as CircleCheck } from "./circle-check-CkmlLDAR.js";
import { Z as Zap, a as Cloud, C as Cpu } from "./zap-CnNL3bw_.js";
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
const Info = createLucideIcon("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Power = createLucideIcon("Power", [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RefreshCw = createLucideIcon("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Timer = createLucideIcon("Timer", [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TriangleAlert = createLucideIcon("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
const CROPS = ["Rice", "Wheat", "Potato", "Tomato", "Tea", "Maize"];
const CROP_OPTIMAL = {
  Rice: {
    moisture: [60, 80],
    ph: [5.5, 7],
    temp: [20, 35]
  },
  Wheat: {
    moisture: [40, 65],
    ph: [6, 7.5],
    temp: [15, 25]
  },
  Potato: {
    moisture: [50, 70],
    ph: [5, 6.5],
    temp: [15, 22]
  },
  Tomato: {
    moisture: [55, 75],
    ph: [6, 7],
    temp: [20, 30]
  },
  Tea: {
    moisture: [65, 85],
    ph: [4.5, 6],
    temp: [18, 28]
  },
  Maize: {
    moisture: [45, 70],
    ph: [5.8, 7],
    temp: [20, 32]
  }
};
const WEATHER_CONDITIONS = [{
  condition: "Sunny",
  temp: 32,
  humidity: 55,
  icon: "☀️",
  forecast: "Clear skies for next 48h. Irrigation recommended."
}, {
  condition: "Partly Cloudy",
  temp: 28,
  humidity: 65,
  icon: "⛅",
  forecast: "Light clouds. Moderate evaporation expected."
}, {
  condition: "Overcast",
  temp: 24,
  humidity: 78,
  icon: "☁️",
  forecast: "Overcast. Reduce irrigation by 20%."
}, {
  condition: "Light Rain",
  temp: 22,
  humidity: 88,
  icon: "🌦️",
  forecast: "Rain expected. Pause irrigation for 24h."
}, {
  condition: "Heavy Rain",
  temp: 20,
  humidity: 95,
  icon: "🌧️",
  forecast: "Heavy rain. Disable irrigation immediately."
}];
function clamp(val, min, max) {
  return Math.min(max, Math.max(min, val));
}
function jitter(val, range, min, max) {
  return clamp(val + (Math.random() - 0.5) * range, min, max);
}
function formatTime(d) {
  return d.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
}
function generateRecommendations(reading, crop, weather, pumpOn) {
  const recs = [];
  const opt = CROP_OPTIMAL[crop];
  if (weather.condition === "Heavy Rain" || weather.condition === "Light Rain") {
    recs.push({
      type: "warning",
      title: "Rain Detected",
      body: `${weather.forecast} Disable irrigation to avoid waterlogging.`
    });
  }
  if (reading.soilMoisture < opt.moisture[0]) {
    recs.push({
      type: "action",
      title: "Low Soil Moisture",
      body: `${crop} needs ${opt.moisture[0]}–${opt.moisture[1]}% moisture. Current: ${reading.soilMoisture.toFixed(1)}%. Activate irrigation.`
    });
  } else if (reading.soilMoisture > opt.moisture[1]) {
    recs.push({
      type: "warning",
      title: "Excess Moisture",
      body: `Soil moisture at ${reading.soilMoisture.toFixed(1)}% exceeds optimal range. Pause irrigation.`
    });
  } else {
    recs.push({
      type: "success",
      title: "Moisture Optimal",
      body: `Soil moisture at ${reading.soilMoisture.toFixed(1)}% is within the ideal range for ${crop}.`
    });
  }
  if (reading.ph < opt.ph[0]) {
    recs.push({
      type: "warning",
      title: "Acidic Soil",
      body: `pH ${reading.ph.toFixed(1)} is below optimal (${opt.ph[0]}–${opt.ph[1]}) for ${crop}. Consider lime application.`
    });
  } else if (reading.ph > opt.ph[1]) {
    recs.push({
      type: "warning",
      title: "Alkaline Soil",
      body: `pH ${reading.ph.toFixed(1)} exceeds optimal range. Consider sulfur treatment.`
    });
  }
  if (reading.temperature > opt.temp[1]) {
    recs.push({
      type: "warning",
      title: "Heat Stress Risk",
      body: `Temperature ${reading.temperature.toFixed(1)}°C exceeds optimal for ${crop}. Consider shade netting or evening irrigation.`
    });
  }
  if (reading.tds > 1200) {
    recs.push({
      type: "warning",
      title: "High TDS",
      body: `TDS at ${reading.tds.toFixed(0)} ppm. High dissolved solids may affect nutrient uptake. Check water source.`
    });
  }
  if (pumpOn) {
    recs.push({
      type: "info",
      title: "Pump Active",
      body: "Irrigation pump is running. Monitor soil moisture to avoid over-watering."
    });
  }
  return recs.slice(0, 3);
}
function useDemoData() {
  const [crop, setCrop] = reactExports.useState("Rice");
  const [weatherIdx, setWeatherIdx] = reactExports.useState(0);
  const [reading, setReading] = reactExports.useState({
    soilMoisture: 62,
    temperature: 28,
    humidity: 74,
    ph: 6.4,
    tds: 480
  });
  const [history, setHistory] = reactExports.useState(() => {
    const now = /* @__PURE__ */ new Date();
    return Array.from({
      length: 20
    }, (_, i) => ({
      time: formatTime(new Date(now.getTime() - (19 - i) * 3e3)),
      soilMoisture: 55 + Math.random() * 20,
      temperature: 25 + Math.random() * 8,
      humidity: 65 + Math.random() * 20,
      ph: 5.8 + Math.random() * 1.2,
      tds: 400 + Math.random() * 300
    }));
  });
  const [pump, setPump] = reactExports.useState({
    isOn: false,
    scheduledOff: null,
    totalRunSeconds: 0
  });
  const [elapsed, setElapsed] = reactExports.useState(0);
  const pumpRef = reactExports.useRef(pump);
  pumpRef.current = pump;
  const weather = WEATHER_CONDITIONS[weatherIdx];
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      setReading((prev) => {
        const next = {
          soilMoisture: jitter(prev.soilMoisture + (pumpRef.current.isOn ? 0.4 : -0.15), 1.2, 10, 98),
          temperature: jitter(prev.temperature, 0.6, 15, 45),
          humidity: jitter(prev.humidity, 1, 20, 98),
          ph: jitter(prev.ph, 0.05, 4, 9),
          tds: jitter(prev.tds, 12, 50, 1800)
        };
        setHistory((h) => {
          const point = {
            time: formatTime(/* @__PURE__ */ new Date()),
            ...next
          };
          return [...h.slice(-29), point];
        });
        return next;
      });
    }, 2e3);
    return () => clearInterval(id);
  }, []);
  reactExports.useEffect(() => {
    if (!pump.isOn) return;
    const id = setInterval(() => {
      setElapsed((e) => e + 1);
      setPump((p) => ({
        ...p,
        totalRunSeconds: p.totalRunSeconds + 1
      }));
    }, 1e3);
    return () => clearInterval(id);
  }, [pump.isOn]);
  reactExports.useEffect(() => {
    if (!pump.scheduledOff) return;
    const remaining = pump.scheduledOff - Date.now();
    if (remaining <= 0) {
      setPump((p) => ({
        ...p,
        isOn: false,
        scheduledOff: null
      }));
      return;
    }
    const id = setTimeout(() => {
      setPump((p) => ({
        ...p,
        isOn: false,
        scheduledOff: null
      }));
    }, remaining);
    return () => clearTimeout(id);
  }, [pump.scheduledOff]);
  const togglePump = reactExports.useCallback(() => {
    setPump((p) => {
      if (p.isOn) {
        setElapsed(0);
        return {
          ...p,
          isOn: false,
          scheduledOff: null
        };
      }
      setElapsed(0);
      return {
        ...p,
        isOn: true
      };
    });
  }, []);
  const schedulePump = reactExports.useCallback((minutes) => {
    setElapsed(0);
    setPump((p) => ({
      ...p,
      isOn: true,
      scheduledOff: Date.now() + minutes * 60 * 1e3
    }));
  }, []);
  const recommendations = generateRecommendations(reading, crop, weather, pump.isOn);
  return {
    crop,
    setCrop,
    crops: CROPS,
    weather,
    weatherIdx,
    setWeatherIdx,
    weatherOptions: WEATHER_CONDITIONS,
    reading,
    history,
    pump,
    togglePump,
    schedulePump,
    elapsed,
    recommendations,
    cropOptimal: CROP_OPTIMAL[crop]
  };
}
function SensorGauge({
  label,
  value,
  unit,
  min,
  max,
  optimalMin,
  optimalMax,
  decimals = 1,
  icon
}) {
  const pct = (value - min) / (max - min) * 100;
  const optMinPct = optimalMin != null ? (optimalMin - min) / (max - min) * 100 : null;
  const optMaxPct = optimalMax != null ? (optimalMax - min) / (max - min) * 100 : null;
  const inOptimal = optimalMin != null && optimalMax != null ? value >= optimalMin && value <= optimalMax : true;
  const statusColor = inOptimal ? "text-primary" : "text-yellow-400";
  const barColor = inOptimal ? "bg-primary" : "bg-yellow-400";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", role: "img", "aria-label": label, children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-white/60 uppercase tracking-wider", children: label })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-semibold ${inOptimal ? "text-primary" : "text-yellow-400"}`, children: inOptimal ? "Optimal" : "Check" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      scale: 1.08,
      opacity: 0.7
    }, animate: {
      scale: 1,
      opacity: 1
    }, transition: {
      duration: 0.3
    }, className: `text-3xl font-bold ${statusColor}`, children: [
      value.toFixed(decimals),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-normal text-white/40 ml-1", children: unit })
    ] }, value.toFixed(decimals)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-2 rounded-full bg-white/10 overflow-hidden", children: [
      optMinPct != null && optMaxPct != null && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 h-full rounded-full bg-primary/20", style: {
        left: `${optMinPct}%`,
        width: `${optMaxPct - optMinPct}%`
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: `absolute top-0 left-0 h-full rounded-full ${barColor}`, animate: {
        width: `${Math.min(100, Math.max(0, pct))}%`
      }, transition: {
        duration: 0.6,
        ease: "easeOut"
      } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-white/25", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        min,
        unit
      ] }),
      optimalMin != null && optimalMax != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary/50", children: [
        "Optimal: ",
        optimalMin,
        "–",
        optimalMax,
        unit
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        max,
        unit
      ] })
    ] })
  ] });
}
function MiniSparkline({
  data,
  width = 200,
  height = 48,
  color = "hsl(var(--primary))",
  label,
  unit = "",
  latest,
  decimals = 1
}) {
  if (data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => {
    const x = i / (data.length - 1) * width;
    const y = height - (v - min) / range * (height - 8) - 4;
    return `${x},${y}`;
  });
  const polyline = pts.join(" ");
  const first = pts[0].split(",");
  const last = pts[pts.length - 1].split(",");
  const area = `M${first[0]},${height} L${polyline.replace(/(\d+\.?\d*),(\d+\.?\d*)/g, "L$1,$2").slice(1)} L${last[0]},${height} Z`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4", children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/50 uppercase tracking-wider", children: label }),
      latest != null && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, { initial: {
        opacity: 0.6,
        scale: 1.05
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 0.3
      }, className: "text-sm font-bold text-white", children: [
        latest.toFixed(decimals),
        unit
      ] }, latest.toFixed(decimals))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: `0 0 ${width} ${height}`, width: "100%", height, preserveAspectRatio: "none", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: area, fill: color, fillOpacity: 0.12 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: polyline, fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: parseFloat(pts[pts.length - 1].split(",")[0]), cy: parseFloat(pts[pts.length - 1].split(",")[1]), r: "3", fill: color })
    ] })
  ] });
}
const SCHEDULE_OPTIONS = [5, 10, 15, 30];
function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function PumpControl({
  pump,
  elapsed,
  onToggle,
  onSchedule
}) {
  const scheduledRemaining = pump.scheduledOff ? Math.max(0, Math.ceil((pump.scheduledOff - Date.now()) / 1e3)) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card-green p-6 flex flex-col gap-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "w-5 h-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white uppercase tracking-wider", children: "Irrigation Pump" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-2 h-2 rounded-full ${pump.isOn ? "bg-primary live-dot" : "bg-white/20"}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-semibold ${pump.isOn ? "text-primary" : "text-white/40"}`, children: pump.isOn ? "RUNNING" : "IDLE" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { onClick: onToggle, whileTap: {
        scale: 0.94
      }, className: `relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${pump.isOn ? "bg-primary pump-glow-active" : "bg-white/10 border border-white/20"}`, "aria-label": pump.isOn ? "Turn pump off" : "Turn pump on", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: `w-8 h-8 ${pump.isOn ? "text-background" : "text-white/50"}` }),
        pump.isOn && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute inset-0 rounded-full border-2 border-primary/40", animate: {
          scale: [1, 1.3, 1],
          opacity: [0.8, 0, 0.8]
        }, transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: pump.isOn && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: -8
      }, animate: {
        opacity: 1,
        y: 0
      }, exit: {
        opacity: 0,
        y: -8
      }, className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "w-3.5 h-3.5 text-primary/70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-mono font-bold text-primary", children: formatDuration(elapsed) })
        ] }),
        scheduledRemaining != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-white/40 mt-1", children: [
          "Auto-off in ",
          formatDuration(scheduledRemaining)
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-white/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/40 uppercase tracking-wider", children: "Schedule" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2", children: SCHEDULE_OPTIONS.map((min) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => onSchedule(min), className: "glass-pill py-2 text-xs font-semibold text-white/70 hover:text-white hover:bg-white/15 transition-all duration-200", children: [
        min,
        "m"
      ] }, min)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 pt-2 border-t border-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/35 mb-1", children: "Total Run Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-white", children: formatDuration(pump.totalRunSeconds) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/35 mb-1", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-bold ${pump.isOn ? "text-primary" : "text-white/50"}`, children: pump.scheduledOff ? "Scheduled" : pump.isOn ? "Manual" : "Off" })
      ] })
    ] })
  ] });
}
const typeConfig = {
  info: {
    icon: Info,
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20"
  },
  warning: {
    icon: TriangleAlert,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20"
  },
  action: {
    icon: Zap,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20"
  },
  success: {
    icon: CircleCheck,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20"
  }
};
function AIRecommendationPanel({
  recommendations,
  crop
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5 flex flex-col gap-4 h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-4 h-4 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white", children: "AI Recommendations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-white/40", children: [
          "Crop: ",
          crop
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "live-dot w-1.5 h-1.5 rounded-full bg-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-primary/70", children: "Live" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: recommendations.map((rec, i) => {
      const cfg = typeConfig[rec.type];
      const Icon = cfg.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        x: -12
      }, animate: {
        opacity: 1,
        x: 0
      }, exit: {
        opacity: 0,
        x: 12
      }, transition: {
        duration: 0.35,
        delay: i * 0.07,
        ease: "easeOut"
      }, className: `rounded-xl border p-4 ${cfg.bg} ${cfg.border}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-4 h-4 mt-0.5 shrink-0 ${cfg.color}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs font-bold mb-1 ${cfg.color}`, children: rec.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/60 leading-relaxed", children: rec.body })
        ] })
      ] }) }, `${rec.title}-${i}`);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/25 text-center border-t border-white/10 pt-3", children: "Recommendations update with sensor readings every 2s" })
  ] });
}
function WeatherPanel({
  weather,
  weatherIdx,
  options,
  onSelect
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5 flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { className: "w-4 h-4 text-secondary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white uppercase tracking-wider", children: "Weather" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs text-white/30", children: "Simulate" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 8
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.3
    }, className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", role: "img", "aria-label": weather.condition, children: weather.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-white", children: weather.condition }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-xs text-white/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            weather.temp,
            "°C"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            weather.humidity,
            "% RH"
          ] })
        ] })
      ] })
    ] }, weather.condition),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      duration: 0.4
    }, className: "text-xs text-white/55 leading-relaxed bg-white/5 rounded-lg p-3", children: weather.forecast }, weather.forecast),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/30 mb-2 uppercase tracking-wider", children: "Simulate scenario" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: options.map((opt, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => onSelect(i), className: `glass-pill px-3 py-1.5 text-xs font-medium transition-all duration-200 ${i === weatherIdx ? "text-primary border-primary/40 bg-primary/10" : "text-white/50 hover:text-white"}`, children: [
        opt.icon,
        " ",
        opt.condition
      ] }, opt.condition)) })
    ] })
  ] });
}
const METRICS = [{
  key: "soilMoisture",
  label: "Soil Moisture",
  unit: "%",
  cssVar: "--primary",
  min: 0,
  max: 100
}, {
  key: "temperature",
  label: "Temperature",
  unit: "°C",
  cssVar: "--accent",
  min: 15,
  max: 45
}, {
  key: "humidity",
  label: "Humidity",
  unit: "%",
  cssVar: "--secondary",
  min: 20,
  max: 100
}, {
  key: "ph",
  label: "pH",
  unit: "",
  cssVar: "--primary",
  min: 4,
  max: 9
}, {
  key: "tds",
  label: "TDS",
  unit: "ppm",
  cssVar: "--secondary",
  min: 0,
  max: 2e3
}];
function HistoryChart({
  history
}) {
  const [active, setActive] = reactExports.useState("soilMoisture");
  const metric = METRICS.find((m) => m.key === active);
  const values = history.map((h) => h[active]);
  const {
    min,
    max
  } = metric;
  const color = `hsl(var(${metric.cssVar}))`;
  const W = 600;
  const H = 120;
  const PAD = 8;
  const pts = values.map((v, i) => {
    const x = PAD + i / Math.max(values.length - 1, 1) * (W - PAD * 2);
    const y = H - PAD - (v - min) / (max - min) * (H - PAD * 2);
    return {
      x,
      y,
      v
    };
  });
  const polyline = pts.map((p) => `${p.x},${p.y}`).join(" ");
  const area = pts.length > 0 ? `M${pts[0].x},${H - PAD} ${pts.map((p) => `L${p.x},${p.y}`).join(" ")} L${pts[pts.length - 1].x},${H - PAD} Z` : "";
  const latest = values[values.length - 1];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5 flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white", children: "Sensor History" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-white/35", children: [
          "Last ",
          history.length,
          " readings"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: METRICS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(m.key), className: `glass-pill px-3 py-1 text-xs font-medium transition-all duration-200 ${m.key === active ? "text-white bg-white/15" : "text-white/40 hover:text-white"}`, children: m.label }, m.key)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: `0 0 ${W} ${H}`, width: "100%", height: H, preserveAspectRatio: "none", "aria-label": `${metric.label} history chart`, role: "img", children: [
        [0.25, 0.5, 0.75].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: PAD, y1: PAD + f * (H - PAD * 2), x2: W - PAD, y2: PAD + f * (H - PAD * 2), stroke: "rgba(255,255,255,0.06)", strokeWidth: "1" }, f)),
        area && /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: area, fill: color, fillOpacity: 0.1 }),
        pts.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: polyline, fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        pts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: pts[pts.length - 1].x, cy: pts[pts.length - 1].y, r: "4", fill: color })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 right-0 flex flex-col justify-between h-full text-right pr-1 pointer-events-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-white/25", children: [
          max,
          metric.unit
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-white/25", children: [
          min,
          metric.unit
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-white/10 pt-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/40", children: "Latest" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold", style: {
        color
      }, children: [
        latest == null ? void 0 : latest.toFixed(metric.key === "tds" ? 0 : 1),
        metric.unit
      ] })
    ] })
  ] });
}
const site = "https://bhoomi-bytes.com";
function DemoPage() {
  const {
    crop,
    setCrop,
    crops,
    weather,
    weatherIdx,
    setWeatherIdx,
    weatherOptions,
    reading,
    history,
    pump,
    togglePump,
    schedulePump,
    elapsed,
    recommendations,
    cropOptimal
  } = useDemoData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: demo.meta.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: demo.meta.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: `${site}/demo` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: "Interactive Demo — Bhoomi Bytes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:description", content: "Live interactive dashboard simulating real-time IoT sensor data." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: `${site}/demo` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "website" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen section-deep", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-40 glass-nav px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Back to Home" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-px bg-white/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://isteam.wsimg.com/genai-assistant/logoagent/customer/9cb20ec8-eef8-432a-b965-c2daadfe1408/session/0c0811ef-ba62-4c56-af1f-d2ca7a1f21bd/horizontal-transparent-a13f845a-1dd4-4326-abd6-f594e39169d0/logo-logo.png", alt: "Bhoomi Bytes", className: "h-6 w-auto object-contain", onError: (e) => {
          e.currentTarget.src = `${"/bhoomibytes_portfolio/"}assets/uploads/airo-logo-shimmer-horizontal.svg`;
        } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 glass-pill px-3 py-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "live-dot w-2 h-2 rounded-full bg-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-primary", children: "Live Simulation" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/40 hidden md:inline", children: "Crop:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: crop, onChange: (e) => setCrop(e.target.value), className: "glass-pill px-3 py-1.5 text-xs font-semibold text-white bg-transparent border-0 outline-none cursor-pointer", "aria-label": "Select crop", children: crops.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, className: "bg-background text-foreground", children: c }, c)) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.5,
          ease: "easeOut"
        }, className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "w-5 h-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-white", children: demo.hero.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass-pill px-3 py-1 text-xs text-primary font-semibold", children: demo.hero.badge })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/45", children: demo.hero.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.5,
          delay: 0.1,
          ease: "easeOut"
        }, className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SensorGauge, { label: "Soil Moisture", value: reading.soilMoisture, unit: "%", min: 0, max: 100, optimalMin: cropOptimal.moisture[0], optimalMax: cropOptimal.moisture[1], decimals: 1, icon: "💧" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SensorGauge, { label: "Temperature", value: reading.temperature, unit: "°C", min: 15, max: 45, optimalMin: cropOptimal.temp[0], optimalMax: cropOptimal.temp[1], decimals: 1, icon: "🌡️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SensorGauge, { label: "Humidity", value: reading.humidity, unit: "%", min: 20, max: 100, decimals: 1, icon: "🌫️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SensorGauge, { label: "pH Level", value: reading.ph, unit: "", min: 4, max: 9, optimalMin: cropOptimal.ph[0], optimalMax: cropOptimal.ph[1], decimals: 2, icon: "⚗️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SensorGauge, { label: "TDS", value: reading.tds, unit: " ppm", min: 0, max: 2e3, decimals: 0, icon: "🧪" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.5,
          delay: 0.15,
          ease: "easeOut"
        }, className: "grid grid-cols-2 md:grid-cols-5 gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MiniSparkline, { data: history.map((h) => h.soilMoisture), label: "Moisture", unit: "%", latest: reading.soilMoisture, color: "hsl(var(--primary))" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MiniSparkline, { data: history.map((h) => h.temperature), label: "Temp", unit: "°C", latest: reading.temperature, color: "hsl(var(--accent))" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MiniSparkline, { data: history.map((h) => h.humidity), label: "Humidity", unit: "%", latest: reading.humidity, color: "hsl(var(--secondary))" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MiniSparkline, { data: history.map((h) => h.ph), label: "pH", unit: "", latest: reading.ph, decimals: 2, color: "hsl(var(--primary))" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MiniSparkline, { data: history.map((h) => h.tds), label: "TDS", unit: " ppm", latest: reading.tds, decimals: 0, color: "hsl(var(--secondary))" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.5,
          delay: 0.2,
          ease: "easeOut"
        }, className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HistoryChart, { history }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.5,
          delay: 0.25,
          ease: "easeOut"
        }, className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PumpControl, { pump, elapsed, onToggle: togglePump, onSchedule: schedulePump }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AIRecommendationPanel, { recommendations, crop }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(WeatherPanel, { weather, weatherIdx, options: weatherOptions, onSelect: setWeatherIdx })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          duration: 0.5,
          delay: 0.4
        }, className: "glass-card p-4 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 text-primary/60 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/35", children: demo.footer.note })
        ] })
      ] })
    ] })
  ] });
}
export {
  DemoPage as default
};
