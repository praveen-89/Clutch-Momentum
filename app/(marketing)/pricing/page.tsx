"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { Check, Zap, Star, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$1",
      description: "Ideal for beginners starting their brand collaboration journey.",
      features: [
        "Access up to 20 company contacts / mo",
        "Basic platform features",
        "Email support",
        "Verified contacts list"
      ],
      cta: "Start for $1",
      popular: false
    },
    {
      name: "Growth",
      price: "$5",
      description: "Better reach and higher collaboration chances for growing creators.",
      features: [
        "Access up to 50 company contacts / mo",
        "Priority contact verification",
        "Better collaboration chances",
        "Premium support access"
      ],
      cta: "Join Growth",
      popular: true
    },
    {
      name: "Premium",
      price: "$9",
      description: "Maximum opportunities for professional creators and agencies.",
      features: [
        "Unlimited company contact access",
        "Maximum collaboration opportunities",
        "Priority profile visibility",
        "24/7 Dedicated account support"
      ],
      cta: "Go Premium",
      popular: false
    }
  ];

  return (
    <div className="pt-20 pb-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center mb-12 space-y-6">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary italic">Investment</span>
          </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-7xl font-black italic uppercase tracking-tighter leading-[0.95]"
        >
          Elite <span className="text-primary text-glow outline-text-secondary">Access.</span> <br />
          Transparent Pricing.
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <GlassCard 
              className={cn(
                "p-8 h-full flex flex-col relative overflow-hidden group transition-all duration-500",
                plan.popular ? "border-primary/40 bg-primary/[0.03] scale-105 z-10 shadow-[0_20px_40px_rgba(249,115,22,0.1)]" : "border-white/10",
                "hover:-translate-y-2 hover:border-primary/50 hover:bg-primary/[0.08]"
              )}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

              {plan.popular && (
                <div className="absolute top-4 right-4 text-right">
                  <span className="bg-primary text-black text-[9px] font-black uppercase px-2 py-1 rounded-full tracking-widest shadow-lg shadow-primary/20">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-black italic uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black italic tracking-tighter">{plan.price}</span>
                  <span className="text-foreground/40 font-black uppercase text-[10px] tracking-widest">/ Month</span>
                </div>
                <p className="text-sm text-foreground/50 mt-4 font-medium leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3 items-center group/item">
                    <div className="w-5 h-5 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-sm text-foreground/80 font-bold group-hover/item:text-foreground transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/register" className="block pt-4 border-t border-white/5">
                <CapsuleButton 
                  className={cn(
                    "w-full h-12 text-base",
                    plan.popular ? "shadow-[0_0_15px_rgba(249,115,22,0.2)] group-hover:shadow-primary/40" : ""
                  )} 
                  variant={plan.popular ? 'primary' : 'outline'}
                >
                  {plan.cta}
                </CapsuleButton>
              </Link>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Exclusive Leads Section */}
      <div className="max-w-5xl mx-auto px-6 mt-20">
        <GlassCard variant="frosted" className="p-8 lg:p-12 border-primary/20 bg-primary/[0.02] flex flex-col md:flex-row gap-10 items-center relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 pointer-events-none" />
          
          <div className="space-y-6 flex-grow relative z-10">
            <div className="flex items-center gap-3 text-primary">
              <Star size={20} fill="currentColor" className="animate-pulse" />
              <span className="text-xs font-black uppercase tracking-[0.3em]">Prestige Access</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-black italic uppercase tracking-tighter leading-none">
              Elite Lead <br />
              <span className="text-primary text-glow outline-text-secondary">Access.</span>
            </h2>
            
            <p className="text-base text-foreground/60 leading-relaxed font-medium max-w-xl">
              Experience the absolute pinnacle of brand collaboration. Our elite sales team hand-curates individual decision-makers for top-tier creators.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Handpicked Decision-Makers",
                "High-Value Opportunities",
                "Priority Concierge Support",
                "Exclusive Network Access"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group/li">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover/li:scale-150 transition-transform" />
                  <span className="text-xs font-bold uppercase tracking-tight text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="shrink-0 relative z-10">
            <Link href="/contact">
              <CapsuleButton 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary hover:text-black hover:border-primary px-8 h-14 text-base"
              >
                Contact Sales
              </CapsuleButton>
            </Link>
          </div>
        </GlassCard>
      </div>

      <div className="max-w-2xl mx-auto text-center mt-32 opacity-20 text-[11px] font-black uppercase tracking-[0.4em] pb-24">
        Pricing is subject to territory and market adjustments. Secure transactions via Stripe ecosystem.
      </div>
    </div>
  );
}
