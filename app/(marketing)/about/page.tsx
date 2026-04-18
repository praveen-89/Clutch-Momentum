"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Target, Users, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="h-px w-8 bg-primary/50" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">About Our Mission</span>
            <span className="h-px w-8 bg-primary/50" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black tracking-tighter italic uppercase"
          >
            About <span className="text-glow text-primary">Clutch Momentum</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Clutch Momentum is a creator-first marketplace designed to simplify brand collaborations.
          </motion.p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard className="p-10 border-white/5 bg-slate-900/40">
              <h2 className="text-3xl font-bold mb-6">Empowering Creators</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                We empower creators by providing <span className="text-white font-bold">direct access to verified business contacts</span>, 
                enabling faster communication, better deals, and long-term partnerships.
              </p>
              <p className="text-slate-400 leading-relaxed">
                No more cold DMs or waiting for agency gatekeepers. We put the power back in your hands.
              </p>
            </GlassCard>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Our Mission</h3>
                <p className="text-slate-500 text-sm">
                  To remove barriers between creators and brands and create a direct, transparent collaboration ecosystem.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Verified Connections</h3>
                <p className="text-slate-500 text-sm">
                  Every contact in our database is verified to be an active decision-maker looking for brand partnerships.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Creator First</h3>
                <p className="text-slate-500 text-sm">
                  Built by creators for creators. We understand the struggle and are here to solve it.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
