"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { 
  Zap, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ArrowUpRight,
  User,
  Filter,
  Search,
  Check,
  X,
  ShieldCheck,
  MessageSquare,
  Globe,
  Bell
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LeadRequest {
  id: string;
  creatorName: string;
  brand: string;
  opportunity: string;
  message: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  timestamp: string;
}

const MOCK_REQUESTS: LeadRequest[] = [
  { id: 'r1', creatorName: 'Jordan Devens', brand: 'Nike', opportunity: 'Fall Tech-Wear Campaign', message: 'I have a strong tech-focused audience and have worked with similar brands before.', status: 'Pending', timestamp: '2h ago' },
  { id: 'r2', creatorName: 'Mia Wong', brand: 'Adobe', opportunity: 'Creative Cloud Express Ambassador', message: 'I use Adobe products daily and my creative tutorials reach 50k+ designers.', status: 'Pending', timestamp: '5h ago' },
  { id: 'r3', creatorName: 'Liam Foster', brand: 'Samsung', opportunity: 'Galaxy Z Fold 6 Global Launch', message: 'Top mobile reviewer on YouTube with high engagement in tech enthusiast segment.', status: 'Approved', timestamp: '1 day ago' },
];

export default function ExclusiveRequestsPage() {
  const [requests, setRequests] = useState<LeadRequest[]>(MOCK_REQUESTS);
  const [searchQuery, setSearchQuery] = useState("");

  const updateStatus = (id: string, newStatus: 'Approved' | 'Rejected') => {
    setRequests(prev => prev.map(req => 
      req.id === id ? { ...req, status: newStatus } : req
    ));
  };

  const filteredRequests = requests.filter(req => 
    req.creatorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    req.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="space-y-2">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 w-fit"
            >
                <Bell size={12} className="text-orange-600" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-600">Pending Authorization Queue</span>
            </motion.div>
            <h1 className="text-4xl lg:text-5xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
                Approval <span className="text-orange-600 text-glow">Protocol.</span>
            </h1>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mt-2">
                Review and synchronize exclusive partner opportunities
            </p>
        </div>
        
        <div className="flex gap-10">
           <div className="flex flex-col items-end group cursor-help">
              <div className="flex items-center gap-2 mb-1">
                <Clock size={14} className="text-orange-600 animate-pulse" />
                <span className="text-2xl font-black text-slate-900 tracking-tighter italic">12</span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-orange-600 transition-colors">Awaiting Decision</span>
           </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-3 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/20 relative">
        <div className="relative flex-grow group">
          <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-600 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search by creator profile or brand target node..." 
            className="w-full bg-slate-50 border border-transparent rounded-[2rem] py-6 pl-16 pr-8 text-sm font-bold uppercase tracking-tight text-slate-900 outline-none focus:bg-white focus:border-orange-500/30 transition-all placeholder:text-slate-300 placeholder:italic shadow-inner focus:shadow-none duration-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="bg-slate-50 border border-slate-200 px-10 rounded-[1.5rem] flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 hover:text-orange-600 hover:bg-white hover:border-orange-200 transition-all shadow-sm active:scale-95 italic">
          <Filter size={18} />
          Refine Queue
        </button>
      </div>

      <div className="space-y-8">
        {filteredRequests.map((request, i) => (
          <motion.div
            key={request.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <GlassCard className="p-10 bg-white/70 border-slate-200 relative group overflow-hidden shadow-2xl shadow-slate-200/40 hover:shadow-orange-500/10 hover:border-orange-500/30 hover:bg-white transition-all duration-700">
                {request.status === 'Pending' && (
                <div className="absolute top-0 right-0 p-2 px-8 bg-orange-600 text-white rounded-bl-[2rem] text-[10px] font-black uppercase tracking-[0.3em] shadow-xl shadow-orange-600/30 z-20 italic">
                    Immediate Action Required
                </div>
                )}
                
                <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                <div className="lg:w-1/3 space-y-10 border-r border-slate-100 pr-12 lg:pr-12 md:pr-0 sm:pr-0 border-dashed">
                    <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center font-black text-slate-300 group-hover:bg-orange-600 group-hover:text-white transition-all duration-700 shadow-inner group-hover:rotate-12 group-hover:scale-110 text-xl">
                        {request.creatorName.charAt(0)}
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tighter italic leading-none mb-2 uppercase group-hover:text-orange-600 transition-colors">{request.creatorName}</h3>
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={14} className="text-emerald-500" />
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Verified Origin Node</p>
                        </div>
                    </div>
                    </div>
                    
                    <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 space-y-5 transition-all duration-500 group-hover:bg-white group-hover:border-orange-100">
                    <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-slate-950 italic">
                        <div className="p-2.5 rounded-xl bg-orange-600 text-white shadow-lg shadow-orange-600/20">
                            <Zap size={16} fill="currentColor" />
                        </div>
                        {request.brand} Objective
                    </div>
                    <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.2em] leading-relaxed">Scope: "{request.opportunity}"</p>
                    </div>
                </div>

                <div className="flex-grow space-y-8">
                    <div className="flex items-center gap-4">
                        <MessageSquare size={16} className="text-orange-600" />
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Creator Payload / Justification</p>
                    </div>
                    <div className="p-10 rounded-[3rem] bg-slate-50/50 border border-slate-100 text-xl font-black text-slate-900 tracking-tight leading-relaxed italic relative min-h-[160px] shadow-inner group-hover:bg-white transition-all duration-500 group-hover:border-orange-50/50 group-hover:shadow-none">
                    "{request.message}"
                    <div className="absolute bottom-6 right-10 text-[10px] text-slate-400 uppercase tracking-widest non-italic font-black border-t border-slate-100 pt-3 px-4 flex items-center gap-3">
                        <Globe size={12} className="text-orange-400" />
                        Capture Log: {request.timestamp}
                    </div>
                    </div>
                </div>

                <div className="lg:w-1/4 flex flex-col justify-center gap-5">
                    {request.status === 'Pending' ? (
                    <>
                        <button 
                        onClick={() => updateStatus(request.id, 'Approved')}
                        className="w-full py-6 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] transition-all shadow-xl shadow-orange-600/30 flex items-center justify-center gap-4 active:scale-95 border-none italic group/btn"
                        >
                        <Check size={20} className="group-hover:scale-125 transition-transform" /> Authorize Bit
                        </button>
                        <button 
                        onClick={() => updateStatus(request.id, 'Rejected')}
                        className="w-full py-6 bg-white hover:bg-red-50 hover:text-red-600 border border-slate-200 hover:border-red-200 text-slate-400 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 active:scale-95 shadow-sm group/btn"
                        >
                        <X size={20} className="group-hover:rotate-90 transition-transform" /> Purge Request
                        </button>
                    </>
                    ) : (
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className={cn(
                        "w-full py-8 rounded-[2rem] flex flex-col items-center justify-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] border shadow-xl italic transition-all duration-700",
                        request.status === 'Approved' ? "bg-emerald-50 text-emerald-600 border-emerald-100 shadow-emerald-500/10" : "bg-red-50 text-red-600 border-red-100 shadow-red-500/10"
                    )}>
                        {request.status === 'Approved' ? <CheckCircle2 size={32} className="mb-1" /> : <XCircle size={32} className="mb-1" />}
                        Outcome: {request.status}
                    </motion.div>
                    )}
                </div>
                </div>
            </GlassCard>
          </motion.div>
        ))}
        {filteredRequests.length === 0 && (
          <div className="py-40 text-center space-y-6">
            <div className="w-24 h-24 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto shadow-inner text-slate-200">
              <Zap size={32} />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Queue is fully synchronized / Empty</p>
          </div>
        )}
      </div>
    </div>
  );
}
