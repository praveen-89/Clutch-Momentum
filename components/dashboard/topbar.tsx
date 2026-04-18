"use client";

import { Bell, Search, ShieldCheck } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

export function Topbar() {
  const { user } = useAuthStore();

  return (
    <header className="h-20 border-b border-slate-200 px-10 flex items-center justify-between bg-white/40 backdrop-blur-2xl z-20 sticky top-0">
      <div className="flex items-center gap-8">
        <div className="space-y-1">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 leading-none">
            Network Sync: <span className="text-orange-600">Encrypted</span>
            </h2>
            <p className="text-lg font-black italic uppercase tracking-tighter text-slate-900 leading-none">
                Creator Panel
            </p>
        </div>
        <div className="h-8 w-px bg-slate-200" />
        <div className="flex items-center gap-2 group cursor-pointer">
           <div className="p-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
            <ShieldCheck size={16} />
           </div>
           <span className="text-[11px] font-black uppercase tracking-widest text-orange-600">Secure Instance Verified</span>
        </div>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="hidden xl:flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/50 border border-slate-200 text-[11px] font-black text-slate-500 uppercase tracking-widest hover:border-orange-500/50 transition-all cursor-pointer group shadow-sm">
          <Search size={14} className="group-hover:text-orange-600 transition-colors" />
          <span>Quick Database Search</span>
          <kbd className="ml-4 px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-[9px] font-sans text-slate-500">Alt+K</kbd>
        </div>
        
        <div className="flex items-center gap-4">
            <button className="relative p-3 rounded-2xl bg-white/50 border border-slate-200 text-slate-400 hover:text-orange-600 transition-all group shadow-sm">
                <Bell size={20} />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-orange-600 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.4)] border-2 border-white group-hover:scale-110 transition-transform" />
            </button>
            
            <div className="px-4 py-2 rounded-2xl bg-orange-50 border border-orange-100 flex items-center gap-3 group cursor-pointer hover:bg-white transition-all">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.2)]" />
                <span className="text-[11px] font-black uppercase tracking-widest text-orange-600">{user?.credits} Credits Available</span>
            </div>

            <div className="h-10 w-px bg-slate-200 mx-2" />
            
            <div className="flex items-center gap-4 group cursor-pointer">
                <div className="text-right hidden sm:block">
                    <p className="text-xs font-black uppercase tracking-tight text-slate-900 leading-none group-hover:text-orange-600 transition-colors">{user?.name}</p>
                    <p className="text-[9px] text-orange-600/60 uppercase font-black mt-1.5 tracking-widest">{user?.plan} Membership</p>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-orange-600 border border-orange-400/30 flex items-center justify-center font-black text-sm text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-all">
                    {user?.name?.substring(0, 1).toUpperCase()}
                </div>
            </div>
        </div>
      </div>
    </header>
  );
}
