"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { Zap, Lock, Clock, Send, ShieldCheck, AlertCircle, TrendingUp } from "lucide-react";
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
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 w-fit"
            >
                <Zap size={12} className="text-orange-600" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-600">Priority Opportunity Hub</span>
            </motion.div>
            <h1 className="text-4xl lg:text-5xl font-black italic uppercase tracking-tighter leading-none text-slate-900">
                Exclusive <span className="text-orange-600 text-glow">Leads.</span>
            </h1>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mt-2">
                High-value, time-sensitive collaboration nodes curated for elite creators
            </p>
        </div>
      </div>

      <div className="p-8 rounded-[2rem] bg-orange-600 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl shadow-orange-600/20 group">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-700 pointer-events-none" />
        <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
          <Zap size={100} fill="currentColor" />
        </div>
        
        <div className="flex items-center gap-6 relative z-10">
          <div className="w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-xl">
            <TrendingUp size={32} />
          </div>
          <div>
            <p className="text-sm font-black italic uppercase tracking-tighter">Premium Advantage</p>
            <p className="text-xs font-bold opacity-80 leading-relaxed uppercase tracking-widest max-w-md">Our manual vetting yield typically results in 3x higher deal values for verified member instances.</p>
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="px-6 py-3 rounded-2xl bg-white/20 border border-white/30 text-[10px] font-black uppercase tracking-widest animate-pulse">
            Instance Update: Real-time
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leads.map((lead) => (
          <GlassCard key={lead.id} className="p-8 space-y-8 relative overflow-hidden group bg-white border-slate-200 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500">
            {lead.status === 'locked' && (
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] group-hover:scale-110 transition-all duration-700 pointer-events-none">
                <Lock size={150} />
              </div>
            )}
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.4)]" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Priority Node</span>
                </div>
                <div className="flex items-center gap-2 text-orange-600 font-black italic text-xs uppercase tracking-tighter">
                  <Zap size={14} className="fill-current" />
                  {lead.matchScore}% Yield
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900 group-hover:text-orange-600 transition-colors duration-500">{lead.brand}</h3>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-2">{lead.opportunity}</p>
              </div>

              <div className="pt-4 space-y-4 border-t border-slate-50">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <Clock size={16} className="text-orange-600" />
                  Expiring: <span className="text-slate-900 ml-auto">{lead.deadline}</span>
                </div>
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <ShieldCheck size={16} className="text-emerald-500" />
                  Budget Status: <span className="text-slate-900 ml-auto uppercase italic">Verified Prime</span>
                </div>
              </div>
            </div>

            <div className="pt-10 relative z-10">
              {lead.status === 'locked' && (
                <CapsuleButton 
                  onClick={() => setSelectedLead(lead)}
                  className="w-full py-5 flex items-center justify-center gap-3 bg-slate-900 text-white hover:bg-orange-600 transition-all active:scale-95 border-none shadow-xl hover:shadow-orange-600/20"
                >
                  <Lock size={16} />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">Request Access</span>
                </CapsuleButton>
              )}

              {lead.status === 'pending' && (
                <div className="w-full py-5 flex items-center justify-center gap-3 px-6 rounded-2xl bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400 italic">
                  <Clock size={18} />
                  Processing Verification...
                </div>
              )}

              {lead.status === 'approved' && (
                <CapsuleButton className="w-full py-5 flex items-center justify-center gap-3 bg-orange-600 text-white shadow-xl shadow-orange-600/20 border-none active:scale-95">
                  <Send size={16} />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">Initiate Pitch</span>
                </CapsuleButton>
              )}
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Access Request Overlay */}
      <AnimatePresence>
        {selectedLead && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/20 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-xl"
            >
              <GlassCard className="p-12 border-slate-200 bg-white relative overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.1)]">
                <div className="space-y-10 relative z-10">
                  <div className="text-center space-y-3">
                    <div className="mx-auto w-20 h-20 rounded-[2rem] bg-orange-600 flex items-center justify-center text-white mb-6 shadow-xl shadow-orange-600/20 border border-orange-400/30">
                      <Zap size={32} fill="currentColor" />
                    </div>
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter text-slate-900">Request <span className="text-orange-600">Instance.</span></h2>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">Accessing exclusive lead: {selectedLead.brand}</p>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100 flex gap-5 text-orange-600">
                      <AlertCircle size={22} className="flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-slate-900 mb-1">Operational Protocol</p>
                        <p className="text-[11px] font-bold uppercase leading-relaxed tracking-widest opacity-80">
                            Requests are manually audited based on instance niche relevancy and historical profile yields. Results in 24-48h.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Pitch Rationale</label>
                        <textarea 
                        placeholder="State your unique value proposition for this brand node..."
                        className="w-full h-40 bg-slate-50 border border-slate-200 rounded-[2rem] p-8 text-sm font-medium outline-none focus:border-orange-500/50 focus:ring-8 focus:ring-orange-500/5 transition-all shadow-inner placeholder:text-slate-300"
                        />
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <CapsuleButton 
                      onClick={() => setSelectedLead(null)}
                      variant="outline" 
                      className="flex-1 py-5 border-slate-200 text-slate-500 text-[11px] font-black uppercase tracking-widest"
                    >
                      Abort Request
                    </CapsuleButton>
                    <CapsuleButton 
                      onClick={() => handleRequestAccess(selectedLead.id)}
                      className="flex-1 py-5 bg-orange-600 text-white shadow-xl shadow-orange-600/20 active:scale-95 border-none"
                    >
                      <span className="text-[11px] font-black uppercase tracking-widest">Submit Rationale</span>
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
