"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { Zap, Lock, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExclusiveLead {
  id: string;
  brand: string;
  opportunity: string;
  deadline: string;
  status: 'locked' | 'pending' | 'approved';
  matchScore: number;
}

export default function ExclusiveLeadsPage() {
  const [leads, setLeads] = useState<ExclusiveLead[]>([
    { id: '1', brand: 'Nike', opportunity: 'Fall Tech-Wear Campaign', deadline: 'Oct 30, 2026', status: 'locked', matchScore: 94 },
    { id: '2', brand: 'Adobe', opportunity: 'Creative Cloud Express Ambassador', deadline: 'Nov 15, 2026', status: 'locked', matchScore: 88 },
    { id: '3', brand: 'Samsung', opportunity: 'Galaxy Z Fold 6 Global Launch', deadline: 'Dec 01, 2026', status: 'pending', matchScore: 92 },
  ]);

  const [selectedLead, setSelectedLead] = useState<ExclusiveLead | null>(null);

  const handleRequestAccess = (id: string) => {
    setLeads(prev => prev.map(lead => 
      lead.id === id ? { ...lead, status: 'pending' } : lead
    ));
    setSelectedLead(null);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Exclusive Leads</h1>
        <p className="text-foreground/50">High-value, time-sensitive collaboration opportunities curated for top-tier creators.</p>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-r from-secondary/20 to-primary/20 border border-white/10 flex items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shadow-[0_0_20px_rgba(192,38,211,0.3)]">
            <Zap size={24} fill="currentColor" />
          </div>
          <div>
            <p className="font-bold">Premium Perk</p>
            <p className="text-sm text-foreground/60 leading-relaxed">Exclusive leads are manually vetted and typically result in 3x higher deal values.</p>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-foreground/40">
            Updated Hourly
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leads.map((lead) => (
          <GlassCard key={lead.id} className="p-8 space-y-8 relative overflow-hidden group">
            {lead.status === 'locked' && (
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-all">
                <Lock size={120} />
              </div>
            )}
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">New Opportunity</span>
                </div>
                <div className="flex items-center gap-1 text-primary font-bold text-xs">
                  <Zap size={12} className="fill-current" />
                  {lead.matchScore}% Match
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold tracking-tight">{lead.brand}</h3>
                <p className="text-sm text-foreground/50 font-medium">{lead.opportunity}</p>
              </div>

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-2 text-xs font-medium text-foreground/40">
                  <Clock size={14} />
                  Deadline: {lead.deadline}
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-foreground/40">
                  <CheckCircle2 size={14} />
                  Budget: Verified Premium
                </div>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              {lead.status === 'locked' && (
                <CapsuleButton 
                  onClick={() => setSelectedLead(lead)}
                  variant="secondary" 
                  className="w-full h-12 flex items-center justify-center gap-2"
                >
                  <Lock size={16} />
                  Request Access
                </CapsuleButton>
              )}

              {lead.status === 'pending' && (
                <div className="w-full h-12 flex items-center justify-center gap-2 px-6 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-foreground/40 italic">
                  <Clock size={16} />
                  Request Pending Review
                </div>
              )}

              {lead.status === 'approved' && (
                <CapsuleButton variant="primary" className="w-full h-12 flex items-center justify-center gap-2">
                  <Send size={16} />
                  Submit Pitch
                </CapsuleButton>
              )}
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Request Modal */}
      <AnimatePresence>
        {selectedLead && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-md"
            >
              <GlassCard variant="frosted" className="p-8 border-secondary/30 relative">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary mb-4">
                      <Zap size={32} fill="currentColor" />
                    </div>
                    <h2 className="text-2xl font-bold">Request Access</h2>
                    <p className="text-xs text-foreground/50">Request access to the <span className="text-foreground font-bold">{selectedLead.brand}</span> exclusive lead.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 flex gap-3 text-amber-500">
                      <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                      <p className="text-[10px] font-bold uppercase leading-relaxed font-black">
                        Requests are reviewed by our internal team. Access is granted based on niche relevancy and profile health.
                      </p>
                    </div>
                    
                    <textarea 
                      placeholder="Briefly state why you're a good match for this brand (e.g. past experience, target demographic)..."
                      className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-sm outline-none focus:border-secondary/50 focus:ring-4 focus:ring-secondary/5 transition-all"
                    />
                  </div>

                  <div className="flex gap-3">
                    <CapsuleButton 
                      onClick={() => setSelectedLead(null)}
                      variant="ghost" 
                      className="flex-1"
                    >
                      Cancel
                    </CapsuleButton>
                    <CapsuleButton 
                      onClick={() => handleRequestAccess(selectedLead.id)}
                      variant="secondary" 
                      className="flex-1"
                    >
                      Submit Request
                    </CapsuleButton>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
