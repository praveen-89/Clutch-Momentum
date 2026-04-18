"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Target, Users, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="text-sm font-black uppercase tracking-[0.3em] text-primary">The Vision</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-black tracking-tighter italic uppercase leading-[0.9]"
          >
            About <br />
            <span className="text-glow text-primary outline-text-secondary">Clutch Momentum</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl lg:text-2xl text-foreground/60 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            A premier, creator-first marketplace meticulously designed to eliminate friction in brand collaborations.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard variant="frosted" className="p-12 border-white/10 relative group overflow-hidden">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
              
              <div className="relative z-10 space-y-8">
                <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
                  <Zap size={32} fill="currentColor" />
                </div>
                
                <h2 className="text-4xl font-black italic uppercase tracking-tight leading-none">
                  Empowering <br />
                  <span className="text-primary italic">Creators.</span>
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                    We empower high-performance creators by providing <span className="text-primary font-black underline decoration-primary/30 decoration-2 underline-offset-4">direct access to verified business decision-makers.</span>
                  </p>
                  <p className="text-lg text-foreground/50 leading-relaxed font-medium">
                    Our platform bypasses agency gatekeepers and cold DM noise. We put the absolute power of connection back into your hands.
                  </p>
                </div>

                <div className="pt-6">
                   <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
                </div>
              </div>
            </GlassCard>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            {[
              {
                title: "Our Mission",
                description: "To remove structural barriers between creators and brands and architect a direct, transparent collaboration ecosystem.",
                icon: <Target size={28} />,
                color: "text-primary"
              },
              {
                title: "Verified Connections",
                description: "Every contact in our curated database is manually verified to ensure they are active decision-makers looking for partnerships.",
                icon: <Zap size={28} />,
                color: "text-secondary"
              },
              {
                title: "Creator First",
                description: "Built by elite creators, for elite creators. We understand the struggle and are obsessed with solving it at scale.",
                icon: <Users size={28} />,
                color: "text-primary"
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-8 group cursor-default">
                <div className={`w-16 h-16 rounded-[1.25rem] bg-white/5 border border-white/10 flex items-center justify-center ${item.color} group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-primary/20 group-hover:scale-110 shrink-0`}>
                  {item.icon}
                </div>
                <div className="space-y-2 pt-1">
                  <h3 className="text-2xl font-black italic uppercase tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-base text-foreground/50 font-medium leading-relaxed group-hover:text-foreground/70 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
