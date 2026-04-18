"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./glass-card";
import { CapsuleButton } from "./capsule-button";
import { X, Zap, Check, Sparkles } from "lucide-react";

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  reason?: string;
}

export function UpgradeModal({ isOpen, onClose, reason }: UpgradeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="w-full max-w-lg relative z-10"
          >
            <GlassCard variant="frosted" className="p-10 border-primary/30 relative overflow-hidden shadow-3xl">
              <div className="absolute top-0 right-0 p-4">
                <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                  <X size={20} className="text-foreground/40" />
                </button>
              </div>

              <div className="text-center space-y-6">
                <div className="mx-auto w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center text-primary shadow-[0_0_30px_rgba(37,99,235,0.3)] border border-primary/20">
                  <Zap size={40} fill="currentColor" />
                </div>

                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tight">Scale Your Access</h2>
                  <p className="text-foreground/50">
                    {reason || "You've reached your monthly credit limit. Upgrade to continue connecting with world-class brands."}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-left space-y-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2 flex items-center gap-2">
                    <Sparkles size={14} />
                    Growth Plan Benefits
                  </p>
                  <ul className="grid grid-cols-1 gap-3">
                    {[
                      "50 Monthly Credits",
                      "Exclusive Premium Leads Access",
                      "Priority Support Queue",
                      "Advanced Performance Stats"
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                        <Check size={16} className="text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  <CapsuleButton className="w-full h-14 text-lg">
                    Upgrade to Growth - $5/mo
                  </CapsuleButton>
                  <button 
                    onClick={onClose}
                    className="text-xs font-bold uppercase tracking-widest text-foreground/30 hover:text-foreground/60 transition-colors"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </GlassCard>
            
            {/* Background Glow */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 blur-[100px] -z-10" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/20 blur-[100px] -z-10" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
