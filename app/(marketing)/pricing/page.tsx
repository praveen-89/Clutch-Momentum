"use client";

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
    <div className="pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20 space-y-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter"
        >
          Elite <span className="text-primary text-glow">Access.</span> <br />
          Transparent Pricing.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-xl mx-auto text-lg"
        >
          Platform registration is completely free. Subscription is only required to unlock brand contact access.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <GlassCard className={`p-10 h-full flex flex-col relative overflow-hidden group hover:border-primary/50 transition-colors ${plan.popular ? 'border-primary/40 bg-primary/[0.02]' : 'border-white/5'}`}>
              {plan.popular && (
                <div className="absolute top-5 right-5">
                  <span className="bg-primary text-black text-[10px] font-black uppercase px-2 py-1 rounded tracking-widest">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tight">{plan.price}</span>
                  <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">/ Month</span>
                </div>
                <p className="text-sm text-slate-500 mt-4 leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3 items-center">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-sm text-slate-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/register" className="block">
                <CapsuleButton 
                  className="w-full" 
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
      <div className="max-w-4xl mx-auto px-6 mt-32">
        <GlassCard className="p-12 border-blue-500/20 bg-blue-500/[0.02] flex flex-col md:flex-row gap-12 items-center">
          <div className="space-y-6 flex-grow">
            <div className="flex items-center gap-2 text-blue-500">
              <Star size={20} fill="currentColor" />
              <span className="text-xs font-black uppercase tracking-widest">Exclusive Access</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-glow">Elite Lead Access</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Experience the highest tier of brand collaboration. Our sales team hand-curates individual decision-makers for elite creators and boutique agencies.
            </p>
            <ul className="space-y-2">
              {[
                "Handpicked brand decision-makers",
                "High-value collaboration opportunities",
                "Priority and limited access"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-300 font-bold">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-blue-500 text-xs font-black uppercase tracking-widest pt-4 border-t border-white/5">
              To access exclusive leads, please connect with our sales team for pricing and availability.
            </p>
          </div>
          <div className="shrink-0">
            <Link href="/contact">
              <CapsuleButton variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                Contact Sales Team
              </CapsuleButton>
            </Link>
          </div>
        </GlassCard>
      </div>

      <div className="max-w-2xl mx-auto text-center mt-20 opacity-30 text-[10px] font-bold uppercase tracking-[0.3em] pb-20">
        Pricing is subject to territory and market adjustments. All payments are secured via Stripe/Razorpay.
      </div>
    </div>
  );
}
