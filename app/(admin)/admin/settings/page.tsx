"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { PremiumInput } from "@/components/ui/premium-input";
import { 
  ShieldCheck, 
  Globe, 
  Database, 
  ShieldAlert, 
  Activity,
  Server,
  Key,
  Terminal,
  Lock,
  RefreshCw,
  Cpu,
  Settings
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="space-y-2">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 w-fit"
            >
                <Settings size={12} className="text-orange-600" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-600">Global Configuration</span>
            </motion.div>
            <h1 className="text-4xl lg:text-5xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
                System <span className="text-orange-600 text-glow">Heuristics.</span>
            </h1>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mt-2">
                Platform architecture and node-level operational configuration
            </p>
        </div>
        
        <CapsuleButton className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 shadow-sm flex items-center gap-4 py-5 px-10 border-none group active:scale-95 transition-all">
           <ShieldAlert size={20} className="group-hover:animate-bounce" />
           <span className="text-[11px] font-black uppercase tracking-[0.3em]">Emergency Node Override</span>
        </CapsuleButton>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
        >
            <GlassCard className="p-10 bg-white/70 border-slate-200 space-y-10 shadow-xl shadow-slate-200/20 transition-all hover:bg-white duration-500 h-full group/card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none" />
            <div className="flex items-center gap-6 relative z-10">
                <div className="p-4 rounded-[1.5rem] bg-orange-50 text-orange-600 border border-orange-100 shadow-sm group-hover/card:bg-orange-600 group-hover/card:text-white transition-colors duration-500">
                <Globe size={28} />
                </div>
                <div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tighter italic uppercase leading-none mb-2">Platform API Config</h3>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Global Endpoint Registry</p>
                </div>
            </div>

            <div className="space-y-8 relative z-10">
                <PremiumInput 
                label="Production Base URL" 
                defaultValue="https://api.clutchmomentum.com/v1" 
                className="bg-slate-50 border-slate-200 text-slate-900 font-bold focus:bg-white focus:border-orange-500/50"
                />
                <PremiumInput 
                label="Stripe Webhook Secret" 
                type="password" 
                defaultValue="whsec_••••••••••••••••" 
                className="bg-slate-50 border-slate-200 text-slate-900 font-bold focus:bg-white focus:border-orange-500/50"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <PremiumInput 
                    label="API Rate Limit (Req/min)" 
                    defaultValue="1000" 
                    className="bg-slate-50 border-slate-200 text-slate-900 font-bold focus:bg-white focus:border-orange-500/50"
                />
                <PremiumInput 
                    label="Request Timeout (ms)" 
                    defaultValue="30000" 
                    className="bg-slate-50 border-slate-200 text-slate-900 font-bold focus:bg-white focus:border-orange-500/50"
                />
                </div>
            </div>
            
            <div className="pt-8 relative z-10">
                <CapsuleButton variant="ghost" className="w-full sm:w-auto border border-slate-200 text-slate-400 hover:text-orange-600 hover:border-orange-200 hover:bg-orange-50 transition-all font-black text-[10px] uppercase tracking-widest py-5">
                    <RefreshCw size={16} className="mr-3" />
                    Synchronize Master Node
                </CapsuleButton>
            </div>
            </GlassCard>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
        >
            <GlassCard className="p-10 bg-white/70 border-slate-200 space-y-10 shadow-xl shadow-slate-200/20 transition-all hover:bg-white duration-500 h-full group/card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-amber-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none" />
            <div className="flex items-center gap-6 relative z-10">
                <div className="p-4 rounded-[1.5rem] bg-amber-50 text-amber-600 border border-amber-100 shadow-sm group-hover/card:bg-amber-600 group-hover/card:text-white transition-colors duration-500">
                <Database size={28} />
                </div>
                <div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tighter italic uppercase leading-none mb-2">Node Thresholds</h3>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Storage & Pipeline Latency</p>
                </div>
            </div>

            <div className="space-y-6 relative z-10">
                {[
                    { title: "Enable Real-time CDC", sub: "Synchronize data across all edge clusters", icon: Activity, active: true },
                    { title: "Automated Backups", sub: "Encrypted snapshot every 6 hours", icon: Lock, active: true },
                    { title: "Debug Logging Mode", sub: "High-verbosity operational logging", icon: Terminal, active: false }
                ].map((item, id) => (
                    <div key={id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-orange-500/20 hover:bg-white transition-all duration-300">
                    <div className="flex gap-5 items-center">
                        <div className={cn(
                            "p-3 rounded-2xl border transition-colors",
                            item.active ? "bg-orange-50 text-orange-600 border-orange-100" : "bg-white text-slate-300 border-slate-100"
                        )}>
                            <item.icon size={18} />
                        </div>
                        <div className="space-y-1.5">
                            <p className="text-sm font-black uppercase text-slate-900 leading-none tracking-tight">{item.title}</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.1em]">{item.sub}</p>
                        </div>
                    </div>
                    <button className={cn(
                        "w-14 h-8 rounded-full transition-all relative shadow-inner self-start sm:self-auto",
                        item.active ? 'bg-orange-600' : 'bg-slate-200'
                    )}>
                        <div className={cn(
                            "absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all",
                            item.active ? 'left-7' : 'left-1'
                        )} />
                    </button>
                    </div>
                ))}
            </div>
            
            <div className="pt-8 relative z-10">
                <CapsuleButton className="w-full bg-orange-600 hover:bg-orange-700 py-6 text-white shadow-xl shadow-orange-600/20 active:scale-95 border-none">
                    <span className="text-[11px] font-black uppercase tracking-[0.3em] italic">Deploy Global Heuristics</span>
                </CapsuleButton>
            </div>
            </GlassCard>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
        >
            <GlassCard className="p-10 md:p-12 bg-white/70 border-slate-200 space-y-12 shadow-2xl shadow-slate-200/40 overflow-hidden relative transition-all duration-500 hover:bg-white">
                {/* Background Decoration */}
                <div className="absolute -right-40 -bottom-40 w-96 h-96 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 relative z-10">
                    <div className="flex items-center gap-6">
                        <div className="p-4 rounded-[1.5rem] bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm">
                            <Server size={28} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-slate-900 tracking-tighter italic uppercase leading-none mb-2">Access Control & IAM</h3>
                            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">Active Root Nodes Security Protocol</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 px-8 py-4 rounded-[1.5rem] shadow-inner">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Valid Sessions: <span className="text-emerald-600 font-black">02</span></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {[
                        { name: 'SysAdmin Root', key: 'ADMIN_FULL_ACCESS', lastUsed: '2m ago', level: 'Level 4 Clearance' },
                        { name: 'Analytics Node', key: 'READ_ONLY_HEURISTICS', lastUsed: '14h ago', level: 'Level 1 Clearance' },
                        { name: 'Lead Manager', key: 'LEAD_OPS_ACCESS', lastUsed: 'Just now', level: 'Level 2 Clearance' },
                    ].map((token, id) => (
                        <div key={token.key} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 space-y-8 hover:bg-white hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-500/20 transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500/50 transition-all duration-700" />
                        
                        <div className="flex items-start justify-between">
                            <div className="p-3 rounded-xl bg-white border border-slate-100 text-slate-400 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm group-hover:scale-110">
                                <Key size={18} />
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-[8px] font-black uppercase text-slate-400 group-hover:text-orange-600 transition-colors">{token.level}</span>
                                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
                            </div>
                        </div>
                        <div>
                            <p className="text-base font-black text-slate-900 uppercase italic tracking-tighter leading-none mb-3 group-hover:text-orange-600 transition-colors">{token.name}</p>
                            <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-inner group-hover:border-orange-100 transition-colors">
                                <code className="text-[10px] text-slate-400 font-black block tracking-widest">{token.key}_••••••</code>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                            <div className="flex items-center gap-2.5">
                                <Cpu size={12} className="text-slate-300" />
                                <p className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em]">{token.lastUsed}</p>
                            </div>
                            <button className="text-[9px] font-black text-red-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all hover:scale-105">Revoke</button>
                        </div>
                        </div>
                    ))}
                    
                    <button className="p-8 rounded-[2rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-6 text-slate-400 hover:text-orange-600 hover:border-orange-300 hover:bg-orange-50/50 transition-all group overflow-hidden relative shadow-inner hover:shadow-none min-h-[280px]">
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-600/5 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform relative z-10 shadow-sm border border-slate-100 group-hover:border-orange-200">
                            <RefreshCw size={28} />
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-[0.3em] relative z-10 italic">Generate Key</span>
                    </button>
                </div>
            </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
