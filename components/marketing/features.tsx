"use client";

import { cn } from "@/lib/utils";
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
    <section id="features" className="py-32 relative overflow-hidden bg-white/[0.01]">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/5 blur-[150px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-24">
          <h2 className="text-4xl lg:text-7xl font-black italic uppercase tracking-tighter leading-[0.9]">
            Stop Chasing <span className="text-primary text-glow">Brands.</span> <br />
            <span className="opacity-40">Start Connecting Directly.</span>
          </h2>
          <p className="text-xl text-foreground/60 font-medium max-w-2xl mx-auto leading-relaxed">
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
              <GlassCard 
                className={cn(
                  "p-10 h-full flex flex-col space-y-8 group transition-all duration-500",
                  "hover:bg-primary/[0.03] hover:border-primary/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(249,115,22,0.1)]"
                )}
              >
                <div className={cn(
                  "w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500",
                  "group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:scale-110",
                  feature.color
                )}>
                  <feature.icon size={30} />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-black italic uppercase tracking-tight transition-colors group-hover:text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-base text-foreground/60 font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 mt-auto">
                    <div className="w-10 h-1 bg-primary/20 rounded-full group-hover:w-full group-hover:bg-primary/40 transition-all duration-700" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
