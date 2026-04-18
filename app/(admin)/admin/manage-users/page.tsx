"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { 
  Users, 
  Search, 
  MoreHorizontal, 
  Mail, 
  ShieldCheck, 
  CreditCard,
  Ban,
  Filter,
  TrendingUp,
  Activity,
  UserPlus
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface UserRecord {
  id: string;
  name: string;
  email: string;
  plan: 'Free' | 'Starter' | 'Growth' | 'Premium';
  credits: number;
  status: 'Active' | 'Inactive';
  lastActive: string;
}

const MOCK_USERS: UserRecord[] = [
  { id: 'u1', name: 'Jordan Devens', email: 'jordan@example.com', plan: 'Growth', credits: 42, status: 'Active', lastActive: '2m ago' },
  { id: 'u2', name: 'Mia Wong', email: 'mia.w@example.com', plan: 'Starter', credits: 12, status: 'Active', lastActive: '1h ago' },
  { id: 'u3', name: 'Demo Creator', email: 'creator@clutchmomentum.com', plan: 'Starter', credits: 20, status: 'Active', lastActive: 'Just now' },
  { id: 'u4', name: 'Liam Foster', email: 'liam.f@gmail.com', plan: 'Premium', credits: 999, status: 'Active', lastActive: '5h ago' },
  { id: 'u5', name: 'Sofia Garcia', email: 'sofia.g@outlook.com', plan: 'Free', credits: 0, status: 'Inactive', lastActive: '3 days ago' },
];

export default function ManageUsersPage() {
  const [users] = useState<UserRecord[]>(MOCK_USERS);

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="space-y-2">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 w-fit"
            >
                <Users size={12} className="text-orange-600" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-600">Unified Entity Pipeline</span>
            </motion.div>
            <h1 className="text-4xl lg:text-5xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
                Identity <span className="text-orange-600 text-glow">Registry.</span>
            </h1>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mt-2">
                Global catalog of platform creators and authorized entities
            </p>
        </div>
        
        <div className="flex gap-10">
           <div className="flex flex-col items-end group cursor-help">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp size={14} className="text-orange-600" />
                <span className="text-2xl font-black text-slate-900 tracking-tighter italic">2,412</span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-orange-600 transition-colors">Total Registry</span>
           </div>
           
           <div className="w-px h-10 bg-slate-200" />
           
           <div className="flex flex-col items-end group cursor-help">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span className="text-2xl font-black text-slate-900 tracking-tighter italic">1,902</span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-emerald-600 transition-colors">Verified Nodes</span>
           </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-3 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/20 relative">
        <div className="relative flex-grow group">
          <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-600 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Query Registry UID, Identity Email, or Entity Name..." 
            className="w-full bg-slate-50 border border-transparent rounded-[2rem] py-6 pl-16 pr-8 text-sm font-bold uppercase tracking-tight text-slate-900 outline-none focus:bg-white focus:border-orange-500/30 transition-all placeholder:text-slate-300 placeholder:italic shadow-inner focus:shadow-none duration-300"
          />
        </div>
        <button className="bg-slate-50 border border-slate-200 px-10 rounded-[1.5rem] flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 hover:text-orange-600 hover:bg-white hover:border-orange-200 transition-all shadow-sm active:scale-95 italic">
          <Filter size={18} />
          Refine Ranks
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {users.map((user, i) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className="p-8 bg-white/70 border-slate-200 hover:bg-white transition-all duration-500 group shadow-xl shadow-slate-200/20 hover:shadow-orange-500/10 hover:border-orange-500/30 relative overflow-hidden">
                {/* Horizontal Shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-12 relative z-10">
                <div className="flex items-center gap-8 flex-grow ">
                    <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center font-black text-slate-300 group-hover:bg-orange-600 group-hover:text-white transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-inner text-xl">
                    {user.name.charAt(0)}
                    </div>
                    <div>
                    <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic group-hover:text-orange-600 transition-colors leading-none">{user.name}</h3>
                        {user.status === 'Active' ? (
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)] animate-pulse" />
                        ) : (
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        )}
                    </div>
                    <div className="flex items-center gap-3">
                        <Mail size={14} className="text-slate-300" />
                        <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.2em]">{user.email}</p>
                    </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 text-center md:text-left flex-grow lg:flex-grow-0 min-w-fit pr-12 border-x border-slate-100 px-12">
                    <div className="space-y-2">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Rank Authority</p>
                    <p className={cn(
                        "text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-xl border inline-block shadow-sm transition-all duration-500",
                        user.plan === 'Premium' ? "text-amber-600 border-amber-200 bg-amber-50 group-hover:bg-amber-600 group-hover:text-white" :
                        user.plan === 'Growth' ? "text-orange-600 border-orange-200 bg-orange-50 group-hover:bg-orange-600 group-hover:text-white" :
                        user.plan === 'Starter' ? "text-emerald-600 border-emerald-200 bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white" :
                        "text-slate-500 border-slate-200 bg-slate-50 group-hover:bg-slate-900 group-hover:text-white"
                    )}>
                        {user.plan}
                    </p>
                    </div>
                    <div className="space-y-2 hidden md:block">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Operational Power</p>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                        <Activity size={14} className="text-orange-400" />
                        <p className="text-lg font-black text-slate-900 tracking-tighter italic">
                            {user.credits === 999 ? "MAX-CAP" : user.credits}
                        </p>
                    </div>
                    </div>
                    <div className="space-y-2">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Net Activity</p>
                    <p className="text-[11px] font-black text-slate-800 uppercase italic tracking-widest leading-none">{user.lastActive}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 ml-auto">
                    <button title="Suspend Entity" className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-300 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all shadow-sm hover:scale-110 active:scale-95">
                    <Ban size={20} />
                    </button>
                    <button title="Transmit Signal" className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-300 hover:text-orange-600 hover:border-orange-200 hover:bg-orange-50 transition-all shadow-sm hover:scale-110 active:scale-95">
                    <Mail size={20} />
                    </button>
                    <button className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-300 hover:text-slate-900 transition-all shadow-sm">
                    <MoreHorizontal size={20} />
                    </button>
                </div>
                </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center pt-8">
        <CapsuleButton className="bg-slate-900 hover:bg-black text-white px-12 py-6 text-[11px] font-black uppercase tracking-[0.4em] shadow-2xl active:scale-95 border-none transition-all italic">
          Load More Users
        </CapsuleButton>
      </div>
    </div>
  );
}
