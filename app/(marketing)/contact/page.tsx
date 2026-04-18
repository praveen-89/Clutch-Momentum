"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { PremiumInput } from "@/components/ui/premium-input";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter"
          >
            Get in <span className="text-primary text-glow">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-xl mx-auto text-lg font-medium"
          >
            Establish contact with our elite support team. Unlock your full creator potential with direct guidance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex gap-6 items-center group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Email Support</p>
                <p className="text-lg font-bold">support@clutchmomentum.com</p>
              </div>
            </div>

            <div className="flex gap-6 items-center group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Direct Line</p>
                <p className="text-lg font-bold">+91 967693875</p>
              </div>
            </div>

            <div className="flex gap-6 items-center group">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Office</p>
                <p className="text-lg font-bold">Bangalore, India</p>
              </div>
            </div>

            <div className="pt-10">
              <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 space-y-4">
                <p className="text-sm font-bold italic tracking-tight text-slate-400">
                  "Clutch Momentum changed how I approach brands. Their support team was there whenever I needed help with a pitch."
                </p>
                <p className="text-[10px] font-black uppercase text-primary tracking-widest">— Sarah J., Tech Creator</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-10 md:p-16 border-white/5">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <PremiumInput label="Full Name" placeholder="John Doe" />
                  <PremiumInput label="Email Address" placeholder="john@example.com" type="email" />
                </div>
                
                <PremiumInput label="Subject" placeholder="How can we help?" />
                
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">
                    Message
                  </label>
                  <textarea 
                    className="w-full bg-slate-900/50 border border-white/5 rounded-3xl p-6 h-40 outline-none focus:border-primary/50 transition-all font-bold text-sm"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <CapsuleButton size="lg" className="w-full md:w-auto px-12 group">
                  <span className="flex items-center gap-2">
                    Send Transmission
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </CapsuleButton>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
