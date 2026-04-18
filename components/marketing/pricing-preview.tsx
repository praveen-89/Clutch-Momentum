"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/glass-card";
import { CapsuleButton } from "../ui/capsule-button";
import { Check, Info } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$1",
    description: "Perfect for new creators getting started.",
    credits: "20 Credits / month",
    features: [
      "Access to Brand Database",
      "Manual Contact Verification",
      "Standard Email Templates",
      "Monthly Credit Reset",
    ],
    cta: "Start for $1",
    popular: false,
  },
  {
    name: "Growth",
    price: "$5",
    description: "For active creators scaling their outreach.",
    credits: "50 Credits / month",
    features: [
      "Everything in Starter",
      "Exclusive Premium Leads",
      "Priority Verification Request",
      "Visual Analytics Dashboard",
    ],
    cta: "Start for $5",
    popular: true,
  },
  {
    name: "Premium",
    price: "$9",
    description: "The ultimate power tool for creator agencies.",
    credits: "Unlimited Credits",
    features: [
      "Everything in Growth",
      "Pre-release Hub Access",
      "Dedicated Support",
      "Early Access to Features",
    ],
    cta: "Start for $9",
    popular: false,
  },
];

export function PricingPreview() {
  return (
    <section id="pricing" className="py-24 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">Flexible Plans for Every Stage</h2>
          <p className="text-lg text-foreground/50 max-w-2xl mx-auto">
            Choose the plan that fits your collaboration goals. Registration is always free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard 
                variant={plan.popular ? "frosted" : "glass"}
                className={`p-8 flex flex-col h-full relative ${
                  plan.popular ? "border-primary ring-4 ring-primary/10 shadow-3xl transform lg:-translate-y-4" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest shadow-xl">
                    Most Popular
                  </div>
                )}

                <div className="space-y-4 mb-8">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    <span className="text-foreground/50 font-medium">/month</span>
                  </div>
                  <p className="text-sm text-foreground/60">{plan.description}</p>
                </div>

                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-bold text-primary">{plan.credits}</span>
                  </div>
                  <Info size={14} className="text-primary/50" />
                </div>

                <div className="space-y-6 flex-grow mb-10">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex iems-start gap-3">
                        <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/register">
                  <CapsuleButton 
                    variant={plan.popular ? "primary" : "outline"} 
                    className="w-full"
                  >
                    {plan.cta}
                  </CapsuleButton>
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-foreground/40 italic">
            Note: All plans are billed monthly. You can upgrade, downgrade, or cancel at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
