"use client";

import { motion } from "framer-motion";
import { CapsuleButton } from "../ui/capsule-button";
import { GlassCard } from "../ui/glass-card";
import { Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-gradient-premium opacity-50" />
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-secondary/20 rounded-full blur-[100px] animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Sparkles size={14} className="text-secondary" />
            <span className="text-xs font-bold uppercase tracking-wider text-foreground/70">
              The Future of Creator Brand Access
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Unlock Real Brand <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Collaborations
            </span>
          </h1>

          <p className="text-xl text-foreground/60 leading-relaxed max-w-xl">
            Stop chasing brands. Start connecting directly with verified decision makers. 
            No middlemen. Just real opportunities for creators who mean business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/register">
              <CapsuleButton size="lg" className="group">
                Get Started Free
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </CapsuleButton>
            </Link>
            <Link href="/how-it-works">
              <CapsuleButton variant="outline" size="lg">How It Works</CapsuleButton>
            </Link>
          </div>

          <div className="flex items-center gap-8 pt-6">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold">500+</span>
              <span className="text-xs text-foreground/40 uppercase tracking-widest">Brands</span>
            </div>
            <div className="h-10 w-px bg-foreground/10" />
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold">2k+</span>
              <span className="text-xs text-foreground/40 uppercase tracking-widest">Creators</span>
            </div>
            <div className="h-10 w-px bg-foreground/10" />
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold">10k+</span>
              <span className="text-xs text-foreground/40 uppercase tracking-widest">Connections</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative perspective-1000"
        >
          <GlassCard variant="frosted" className="p-8 space-y-8 relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px]">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center font-bold">JD</div>
                </div>
                <div>
                  <h4 className="font-bold">Jordan Devens</h4>
                  <p className="text-xs text-foreground/50">Tech Content Creator</p>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
                Growth Plan
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-foreground/60 uppercase">Monthly Credits</span>
                  <span className="text-xs font-bold text-primary">50 / 50</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    className="h-full bg-primary" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <Zap size={20} className="mx-auto mb-2 text-secondary" />
                  <span className="block text-xl font-bold">12</span>
                  <span className="text-[10px] text-foreground/40 uppercase">Unlocked</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <ShieldCheck size={20} className="mx-auto mb-2 text-primary" />
                  <span className="block text-xl font-bold">4</span>
                  <span className="text-[10px] text-foreground/40 uppercase">Collaborations</span>
                </div>
              </div>
            </div>

            <div className="pt-4 text-center">
              <p className="text-sm font-medium italic text-foreground/70">
                "Clutch Momentum saved me 20 hours of cold outreach in the first month."
              </p>
            </div>
          </GlassCard>
          
          {/* Floating Accents */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -top-10 -right-10 w-24 h-24 bg-secondary/30 rounded-3xl blur-2xl -z-1" 
          />
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl -z-1" 
          />
        </motion.div>
      </div>
    </section>
  );
}
