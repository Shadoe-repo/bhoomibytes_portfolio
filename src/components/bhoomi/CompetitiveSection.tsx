import { motion } from 'motion/react';
import { Check, Minus } from 'lucide-react';

const competitors = ['Fasal', 'CropIn', 'DeHaat', 'Manual / Traditional', 'Bhoomi Bytes'];

const features = [
  { label: 'IoT Sensor Integration', values: [true, false, false, false, true] },
  { label: 'AI Recommendations', values: [true, true, false, false, true] },
  { label: 'Weather Integration', values: [true, true, false, false, true] },
  { label: 'Crop-Specific Intelligence', values: [true, true, false, false, true] },
  { label: 'Remote Irrigation Control', values: [false, false, false, false, true] },
  { label: 'Pump Scheduling', values: [false, false, false, false, true] },
];

export default function CompetitiveSection() {
  return (
    <section id="competitive" className="relative py-24 px-4 section-forest overflow-hidden">
      <div className="absolute inset-0 section-glow pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="text-center mb-16"
        >
          <span className="glass-pill inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Landscape
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Where We Fit In</h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm">
            Our unique combination of IoT, AI, weather intelligence, and remote control sets us apart.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' as const }}
          className="glass-card overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-xs font-semibold text-white/40 uppercase tracking-wider">Capability</th>
                  {competitors.map((c) => (
                    <th
                      key={c}
                      className={`p-4 text-xs font-semibold uppercase tracking-wider text-center ${
                        c === 'Bhoomi Bytes' ? 'text-primary' : 'text-white/40'
                      }`}
                    >
                      {c === 'Bhoomi Bytes' ? (
                        <span className="glass-pill px-2 py-1 text-primary">{c}</span>
                      ) : (
                        c
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((f, ri) => (
                  <tr key={f.label} className={ri % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                    <td className="p-4 text-sm text-white/70">{f.label}</td>
                    {f.values.map((v, ci) => (
                      <td key={ci} className="p-4 text-center">
                        {v ? (
                          <Check
                            className={`w-4 h-4 mx-auto ${
                              competitors[ci] === 'Bhoomi Bytes' ? 'text-primary' : 'text-white/30'
                            }`}
                          />
                        ) : (
                          <Minus className="w-4 h-4 mx-auto text-white/15" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <p className="text-center text-xs text-white/25 mt-4">
          * Competitive landscape based on publicly available information. Bhoomi Bytes focuses on its unique combination of capabilities.
        </p>
      </div>
    </section>
  );
}
