"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Check, X, ShieldCheck } from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    "Register on the platform",
    "Create your profile",
    "Choose your plan",
    "Unlock brand contacts",
    "Reach out directly",
    "Close collaborations"
  ];

  const comparison = [
    { feature: "Direct Brand Access", clutch: true, others: false },
    { feature: "Decision Maker Contacts", clutch: true, others: "Limited" },
    { feature: "High Intent Leads", clutch: true, others: false },
    { feature: "Pricing", clutch: "Affordable", others: "Expensive" },
    { feature: "Middleman", clutch: false, others: true },
  ];

  const values = [
    "Save time on outreach",
    "Increase collaboration success rate",
    "Build direct brand relationships",
    "Scale your creator business"
  ];

  return (
    <div className="pt-32 pb-32">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter"
        >
          How It <span className="text-primary text-glow">Works</span>
        </motion.h1>
      </div>

      {/* Steps List */}
      <div className="max-w-4xl mx-auto px-6 space-y-6 mb-32">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className="p-6 md:p-8 border-white/5 flex items-center gap-8 group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black font-black text-xl shrink-0 group-hover:scale-110 transition-transform">
                {i + 1}
              </div>
              <p className="text-xl font-bold text-slate-200">{step}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Why Section */}
      <section className="py-24 border-y border-white/5 bg-slate-900/10 mb-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-4 text-glow">
              Why <span className="text-primary">Clutch Momentum</span>
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-500">Feature</th>
                  <th className="p-6 text-xs font-black uppercase tracking-widest text-primary">Clutch Momentum</th>
                  <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-500 text-right">Others</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-bold">
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 text-slate-400">{row.feature}</td>
                    <td className="p-6">
                      {typeof row.clutch === "boolean" ? (
                        row.clutch ? (
                          <Check className="text-primary" size={20} strokeWidth={4} />
                        ) : (
                          <X className="text-slate-600" size={20} strokeWidth={4} />
                        )
                      ) : (
                        <span className="text-primary">{row.clutch}</span>
                      )}
                    </td>
                    <td className="p-6 text-right">
                       {typeof row.others === "boolean" ? (
                        row.others ? (
                          <Check className="text-slate-400 inline" size={20} strokeWidth={4} />
                        ) : (
                          <X className="text-slate-600 inline" size={20} strokeWidth={4} />
                        )
                      ) : (
                        <span className="text-slate-600">{row.others}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-16 text-center">
          Value for <span className="text-primary text-glow">Creators</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <GlassCard key={i} className="p-8 border-white/5 flex gap-6 items-center">
              <Check className="text-primary shrink-0" size={24} strokeWidth={4} />
              <p className="text-lg font-bold text-slate-200">{v}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
