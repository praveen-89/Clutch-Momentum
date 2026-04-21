"use client";

import { motion } from "framer-motion";
import { CapsuleButton } from "../ui/capsule-button";
import { GlassCard } from "../ui/glass-card";
import { Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center py-12 lg:pt-16 lg:pb-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-gradient-premium opacity-50" />
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-secondary/20 rounded-full blur-[100px] animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Sparkles size={14} className="text-secondary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-foreground/70">
              Elite Creator Brand Access
            </span>
          </div>

          <h1 className="text-4xl lg:text-7xl font-black tracking-tighter leading-[0.95] uppercase italic">
            Unlock Real Brand <br />
            <span className="text-primary text-glow outline-text-secondary">
              Collaborations
            </span> <br />
            <span className="text-foreground/40">With Decision Makers</span>
          </h1>

          <p className="text-lg lg:text-xl text-foreground/60 leading-relaxed max-w-xl font-medium">
            Clutch Momentum is the premier marketplace where elite Indian creators connect directly with brand founders to unlock massive collaboration opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/register">
              <CapsuleButton size="lg" className="group shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)]">
                Get Started Free
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </CapsuleButton>
            </Link>
            <Link href="/dashboard">
              <CapsuleButton variant="outline" size="lg" className="border-primary/20 hover:border-primary/50 backdrop-blur-sm">Access Brand Contacts</CapsuleButton>
            </Link>
          </div>

          <div className="flex items-center gap-8 pt-6">
            {[
              { label: "Brands", value: "500+" },
              { label: "Creators", value: "2k+" },
              { label: "Connections", value: "10k+" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1 group cursor-default">
                <span className="text-2xl font-black italic tracking-tight group-hover:text-primary transition-colors">{stat.value}</span>
                <span className="text-[10px] text-foreground/40 uppercase tracking-[0.2em] font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:-mt-20"
        >
          {/* Main Card */}
          <motion.div
            whileHover={{ 
              rotateX: 5, 
              rotateY: -5,
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="perspective-1000"
          >
            <GlassCard variant="frosted" className="p-10 space-y-8 relative z-10 border-white/20 shadow-2xl overflow-hidden group">
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
              
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-primary to-secondary p-[3px] shadow-lg shadow-primary/20">
                    <div className="w-full h-full rounded-[1.3rem] bg-background flex items-center justify-center font-black text-xl italic text-primary">
                      AM
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xl font-black italic uppercase tracking-tight">Arjun Mehra</h4>
                      <div className="p-1 rounded-full bg-primary/10 text-primary">
                        <ShieldCheck size={14} fill="currentColor" className="text-primary" />
                      </div>
                    </div>
                    <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest">Elite Tech Creator</p>
                  </div>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
                  Verified Elite
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 group-hover:border-primary/20 transition-colors">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-foreground/40 uppercase tracking-widest">Monthly Credits</span>
                    <span className="text-xs font-black text-primary italic">50 / 50</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_10px_var(--color-primary)]" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center group-hover:bg-primary/5 transition-colors">
                    <Zap size={20} className="mx-auto mb-2 text-secondary" />
                    <span className="block text-2xl font-black italic tracking-tight">12</span>
                    <span className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest">Unlocked</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center group-hover:bg-primary/5 transition-colors">
                    <ShieldCheck size={20} className="mx-auto mb-2 text-primary" />
                    <span className="block text-2xl font-black italic tracking-tight">4</span>
                    <span className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest">Collaborations</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5">
                <p className="text-sm font-bold italic text-foreground/50 leading-relaxed text-center">
                  "Clutch Momentum saved me 20 hours of cold outreach in the first month."
                </p>
              </div>
            </GlassCard>
          </motion.div>
          
          {/* Floating Accents */}
          <motion.div 
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" 
          />
          <motion.div 
            animate={{ 
              y: [0, 30, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ repeat: Infinity, duration: 8 }}
            className="absolute -bottom-16 -left-16 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" 
          />
        </motion.div>
      </div>
    </section>
  );
}
