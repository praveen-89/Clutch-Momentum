"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Check, X, ShieldCheck, Zap, Target, Star, ArrowRight } from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    { title: "Register on the platform", desc: "Create your elite creator account in seconds and join the momentum." },
    { title: "Create your profile", desc: "Showcase your metrics, niche, and past successful brand collaborations." },
    { title: "Choose your plan", desc: "Select the access tier that matches your business growth goals." },
    { title: "Unlock brand contacts", desc: "Get instant access to verified decision-makers across top industries." },
    { title: "Reach out directly", desc: "Use our validated contact details to bypass gatekeepers and start the chat." },
    { title: "Close collaborations", desc: "Negotiate terms directly and build long-term high-value partnerships." }
  ];

  const comparison = [
    { feature: "Direct Brand Access", clutch: true, others: false },
    { feature: "Decision Maker Contacts", clutch: true, others: "Limited" },
    { feature: "High Intent Leads", clutch: true, others: false },
    { feature: "Pricing Model", clutch: "Flat & Simple", others: "Revenue Cuts" },
    { feature: "Agency Gatekeepers", clutch: "Eliminated", others: "Required" },
  ];

  const values = [
    "Save 10+ hours on weekly outreach",
    "Increase response rates by 400%",
    "Build direct, un-interrupted relationships",
    "Scale your brand deal revenue faster"
  ];

  return (
    <div className="pt-32 pb-40 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -z-10" />

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-24 space-y-8">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="text-sm font-black uppercase tracking-[0.3em] text-primary italic">The Process</span>
          </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.9]"
        >
          Direct Access <br />
          <span className="text-primary text-glow outline-text-secondary">Made Simple.</span>
        </motion.h1>
      </div>

      {/* Steps List */}
      <div className="max-w-3xl mx-auto px-6 grid grid-cols-1 gap-6 mb-40">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className="p-5 border-white/10 flex items-center gap-6 group hover:border-primary/50 hover:bg-primary/[0.08] transition-all duration-500">
               {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
              
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black text-xl group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-lg shadow-primary/10 shrink-0">
                  {i + 1}
              </div>
              
              <div className="space-y-1 flex-grow">
                <h3 className="text-xl font-black italic uppercase tracking-tight group-hover:text-primary transition-colors leading-none">{step.title}</h3>
                <p className="text-sm text-foreground/50 font-medium leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {step.desc}
                </p>
              </div>

              <ArrowRight className="text-foreground/10 group-hover:text-primary transition-colors translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-500 shrink-0 hidden md:block" size={20} />
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Why Section */}
      <section className="relative py-32 border-y border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/[0.02] -z-10" />
        
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
             <div className="flex items-center justify-center gap-3 text-primary mb-2">
              <Zap size={20} fill="currentColor" />
              <span className="text-xs font-black uppercase tracking-[0.3em]">The Comparison</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black italic uppercase tracking-tighter text-glow">
              Why <span className="text-primary italic">Clutch Momentum</span>
            </h2>
          </div>
          
          <GlassCard className="overflow-hidden border-white/10">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-white/5 bg-white/[0.02]">
                    <th className="p-8 text-xs font-black uppercase tracking-[0.3em] text-foreground/30">Advantage</th>
                    <th className="p-8 text-xs font-black uppercase tracking-[0.3em] text-primary bg-primary/[0.02]">Clutch Momentum</th>
                    <th className="p-8 text-xs font-black uppercase tracking-[0.3em] text-foreground/30 text-right">Others</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {comparison.map((row, i) => (
                    <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                        <td className="p-8 text-base font-black italic uppercase tracking-tight text-foreground/60">{row.feature}</td>
                        <td className="p-8 bg-primary/[0.01]">
                        {typeof row.clutch === "boolean" ? (
                            row.clutch ? (
                            <div className="inline-flex p-1.5 rounded-lg bg-primary/10 text-primary">
                                <Check size={20} strokeWidth={4} />
                            </div>
                            ) : (
                            <X className="text-foreground/20" size={20} strokeWidth={4} />
                            )
                        ) : (
                            <span className="text-base font-black text-primary uppercase italic">{row.clutch}</span>
                        )}
                        </td>
                        <td className="p-8 text-right">
                        {typeof row.others === "boolean" ? (
                            row.others ? (
                            <Check className="text-foreground/40 inline" size={20} strokeWidth={2} />
                            ) : (
                            <X className="text-foreground/10 inline" size={20} strokeWidth={2} />
                            )
                        ) : (
                            <span className="text-base font-bold text-foreground/20 uppercase">{row.others}</span>
                        )}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Value Section */}
      <div className="max-w-5xl mx-auto px-6 mt-40">
        <div className="text-center mb-20 space-y-4">
             <div className="flex items-center justify-center gap-3 text-secondary mb-2">
              <Star size={20} fill="currentColor" />
              <span className="text-xs font-black uppercase tracking-[0.3em]">Value Props</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black italic uppercase tracking-tighter">
            Value for <span className="text-primary text-glow outline-text-secondary italic">Creators</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <GlassCard key={i} className="p-8 border-white/10 flex gap-6 items-center group hover:bg-primary/[0.05] transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                <Check size={24} strokeWidth={4} />
              </div>
              <p className="text-lg font-black italic uppercase tracking-tight text-foreground/80 group-hover:text-foreground transition-colors">{v}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto text-center mt-32 opacity-20 text-[11px] font-black uppercase tracking-[0.4em] pb-24">
        Our proprietary verification engine ensures 99% bounce-free collaboration leads.
      </div>
    </div>
  );
}
