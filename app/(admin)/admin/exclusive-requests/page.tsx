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
  X
} from "lucide-react";

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

  const updateStatus = (id: string, newStatus: 'Approved' | 'Rejected') => {
    setRequests(prev => prev.map(req => 
      req.id === id ? { ...req, status: newStatus } : req
    ));
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black uppercase italic tracking-tighter">Lead Approval Queue</h1>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Review and synchronize exclusive brand opportunities</p>
        </div>
        <div className="flex gap-4">
           <div className="flex flex-col items-end">
             <span className="text-purple-500 text-lg font-black leading-none">12</span>
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Awaiting Feedback</span>
           </div>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-grow group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-purple-500 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search by creator name or brand..." 
            className="w-full bg-slate-900 border border-slate-800 rounded-xl py-4 pl-12 pr-6 text-sm outline-none focus:border-purple-500/50 transition-all font-bold"
          />
        </div>
        <button className="bg-slate-900 border border-slate-800 px-6 rounded-xl flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
           <Filter size={16} /> Filter
        </button>
      </div>

      <div className="space-y-6">
        {requests.map((request) => (
          <GlassCard key={request.id} className="p-8 bg-slate-900/40 border-slate-800 relative group overflow-hidden">
            {request.status === 'Pending' && (
              <div className="absolute top-0 right-0 p-1 px-4 bg-purple-600/20 text-purple-400 border-b border-l border-purple-500/30 rounded-bl-xl text-[8px] font-black uppercase tracking-widest">
                Priority Review Required
              </div>
            )}
            
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center font-black text-slate-500 shadow-inner">
                    {request.creatorName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight leading-none mb-1">{request.creatorName}</h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase group-hover:text-purple-500 transition-colors">Verified Creator Node</p>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 space-y-2">
                   <div className="flex items-center gap-2 text-xs font-black uppercase text-slate-400">
                     <Zap size={14} fill="currentColor" className="text-purple-500" />
                     {request.brand}
                   </div>
                   <p className="text-xs text-slate-500 italic">"{request.opportunity}"</p>
                </div>
              </div>

              <div className="flex-grow space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">Creator's Justification Statement</p>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-sm text-slate-300 leading-relaxed italic relative">
                  "{request.message}"
                  <div className="absolute bottom-2 right-4 text-[10px] text-slate-600 non-italic">
                    Logged {request.timestamp}
                  </div>
                </div>
              </div>

              <div className="lg:w-1/4 flex flex-col justify-center gap-4">
                {request.status === 'Pending' ? (
                  <>
                    <button 
                      onClick={() => updateStatus(request.id, 'Approved')}
                      className="w-full h-12 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-2"
                    >
                      <Check size={16} /> Grant Access
                    </button>
                    <button 
                      onClick={() => updateStatus(request.id, 'Rejected')}
                      className="w-full h-12 bg-slate-900 hover:bg-red-500/10 hover:text-red-500 border border-slate-800 hover:border-red-500/20 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                    >
                      <X size={16} /> Deny Request
                    </button>
                  </>
                ) : (
                  <div className={cn(
                    "w-full h-12 rounded-xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest border",
                    request.status === 'Approved' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : "bg-red-500/10 text-red-500 border-red-500/20"
                  )}>
                    {request.status === 'Approved' ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                    Request {request.status}
                  </div>
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
