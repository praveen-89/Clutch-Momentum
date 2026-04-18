"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { PremiumInput } from "@/components/ui/premium-input";
import { Mail, Phone, MapPin, Send, Star, Zap } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-40 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-8 mb-24">
          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <Star size={14} className="text-primary fill-primary animate-pulse" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary italic">Transmission Center</span>
            </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.9]"
          >
            Establish <br />
            <span className="text-primary text-glow outline-text-secondary">Connection.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl lg:text-2xl text-foreground/60 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Our elite support team is standing by to accelerate your creator journey. Focus on the craft, we'll handle the logistics.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <GlassCard className="p-8 space-y-8 border-white/10">
              <div className="flex gap-5 items-center group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-lg shadow-primary/10 shrink-0">
                  <Mail size={20} />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-foreground/30 leading-none">Email Support</p>
                  <p className="text-sm md:text-base font-black italic uppercase tracking-tight group-hover:text-primary transition-colors break-all">support@clutchmomentum.com</p>
                </div>
              </div>

              <div className="flex gap-5 items-center group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-lg shadow-primary/10 shrink-0">
                  <Phone size={20} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-foreground/30 leading-none">Direct Line</p>
                  <p className="text-sm md:text-base font-black italic uppercase tracking-tight group-hover:text-primary transition-colors">+91 967693875</p>
                </div>
              </div>

              <div className="flex gap-5 items-center group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all duration-500 shadow-lg shadow-secondary/10 shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-foreground/30 leading-none">Office HQ</p>
                  <p className="text-sm md:text-base font-black italic uppercase tracking-tight group-hover:text-secondary transition-colors">Dwarika, Delhi, India</p>
                </div>
              </div>
            </GlassCard>

            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.4 }}
            >
              <GlassCard variant="frosted" className="p-8 border-primary/20 bg-primary/[0.02] relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                <Zap size={18} className="text-primary mb-4 animate-pulse" fill="currentColor" />
                <p className="text-base font-black italic tracking-tighter text-foreground uppercase leading-tight mb-6">
                  "Clutch Momentum changed how I approach brands. Their support team was there whenever I needed help with a pitch."
                </p>
                <div className="pt-4 border-t border-white/5">
                    <p className="text-[10px] font-black uppercase text-primary tracking-widest">— Sarah J., Tech Creator</p>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 h-full"
          >
            <GlassCard className="p-10 lg:p-14 border-white/10 relative overflow-hidden group h-full">
               {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 pointer-events-none" />
              
              <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <PremiumInput label="Full Name" placeholder="Ex: Arjun Mehra" className="h-14" />
                  <PremiumInput label="Email Address" placeholder="Ex: arjun@momentum.com" type="email" className="h-14" />
                </div>
                
                <PremiumInput label="Subject / Inquiry Type" placeholder="How can we accelerate your journey?" className="h-14" />
                
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40 ml-1">
                    Message Transmission
                  </label>
                  <div className="relative group">
                    <textarea 
                        className={cn(
                        "w-full bg-white/[0.03] border border-white/10 rounded-2xl p-6 h-44 outline-none",
                        "focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300",
                         "placeholder:text-foreground/30 font-bold text-base"
                        )}
                        placeholder="Establish the details of your request here..."
                    />
                    <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity" />
                  </div>
                </div>

                <div className="pt-4">
                    <CapsuleButton 
                        size="lg" 
                        className="w-full h-16 text-lg group shadow-lg shadow-primary/20 hover:shadow-primary/40"
                    >
                    <span className="flex items-center gap-3 font-black uppercase italic tracking-widest text-black">
                        Send Transmission
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                    </CapsuleButton>
                </div>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
