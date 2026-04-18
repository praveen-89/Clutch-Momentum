"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/glass-card";
import { Users, Zap, ShieldCheck, Mail, Target, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Direct Access",
    description: "Connect directly with verified brand decision-makers. No agencies, no middlemen, just real relationships.",
    icon: Users,
    color: "text-blue-500",
  },
  {
    title: "Verified Contacts",
    description: "Every contact label is manually verified to ensure accuracy. Reach out with confidence.",
    icon: ShieldCheck,
    color: "text-emerald-500",
  },
  {
    title: "Faster Outreach",
    description: "Skip the generic 'info@' emails. Our marketplace puts you in front of the right person instantly.",
    icon: Zap,
    color: "text-amber-500",
  },
  {
    title: "Exclusive Leads",
    description: "Get access to high-value opportunities that aren't posted anywhere else. Stay ahead of the competition.",
    icon: Target,
    color: "text-rose-500",
  },
  {
    title: "Email Templates",
    description: "Use our proven outreach templates designed to convert. Say the right thing every time.",
    icon: Mail,
    color: "text-purple-500",
  },
  {
    title: "Visual Analytics",
    description: "Track your outreach performance and connection rate with our premium creator dashboard.",
    icon: BarChart3,
    color: "text-indigo-500",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center space-y-4 mb-20">
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
          Stop Chasing Brands. <br />
          <span className="text-foreground/50">Start Connecting Directly.</span>
        </h2>
        <p className="text-lg text-foreground/50 max-w-2xl mx-auto">
          Position yourself as a top-tier creator and save weeks of time with our curated brand decision-maker database.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlassCard className="p-8 h-full space-y-6 group hover:border-primary/50 transition-colors">
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform`}>
                <feature.icon size={24} />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed leading-[1.6]">
                  {feature.description}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
