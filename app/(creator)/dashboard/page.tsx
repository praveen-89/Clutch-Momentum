"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { useAuthStore } from "@/store/useAuthStore";
import { cn } from "@/lib/utils";
import { 
  Users, 
  CreditCard, 
  Zap, 
  ArrowUpRight,
  ShieldCheck,
  Search,
  TrendingUp,
  Activity
} from "lucide-react";
import Link from "next/link";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { motion } from "framer-motion";

const data = [
  { name: 'Mon', views: 400 },
  { name: 'Tue', views: 300 },
  { name: 'Wed', views: 900 },
  { name: 'Thu', views: 1200 },
  { name: 'Fri', views: 800 },
  { name: 'Sat', views: 500 },
  { name: 'Sun', views: 1100 },
];

export default function CreatorDashboard() {
  const { user } = useAuthStore();

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 w-fit"
            >
                <TrendingUp size={12} className="text-orange-600" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-600">Creator Performance Engine</span>
            </motion.div>
            <h1 className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter leading-none text-slate-900">
                Growth <span className="text-orange-600 text-glow">Matrices.</span>
            </h1>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mt-2">
                Real-time telemetry for brand outreach and visibility yields
            </p>
        </div>
        
        <div className="flex gap-4">
           <Link href="/brand-contacts">
             <CapsuleButton variant="outline" className="border-slate-200 bg-white/50 text-slate-900 shadow-sm hover:bg-white flex items-center gap-3 py-4">
                <Search size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Discovery Hub</span>
             </CapsuleButton>
           </Link>
           <CapsuleButton className="bg-orange-600 text-white shadow-xl shadow-orange-600/20 flex items-center gap-3 py-4 active:scale-95 border-none">
              <Zap size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">Priority Unlock</span>
           </CapsuleButton>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Plan Credits", val: user?.credits ?? "0", growth: "Resets in 12d", icon: CreditCard, color: "text-orange-600", bg: "bg-orange-50" },
          { label: "Unlocked Contacts", val: "12", growth: "+4 this week", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Exclusive Leads", val: "3", growth: "1 Pending", icon: Zap, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Profile Health", val: "85%", growth: "Needs Review", icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-50" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className="p-8 group hover:border-orange-500/50 hover:bg-white transition-all duration-500 relative overflow-hidden bg-white/70 border-slate-200 shadow-sm hover:shadow-xl hover:shadow-orange-500/5">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                <div className="flex justify-between items-start mb-6">
                    <div className={cn("p-3 rounded-2xl border border-slate-100 group-hover:scale-110 transition-transform duration-500 shadow-sm", stat.bg, stat.color)}>
                        <stat.icon size={22} strokeWidth={2.5} />
                    </div>
                    <ArrowUpRight className="text-slate-400 group-hover:text-orange-600 transition-colors" size={20} />
                </div>
                
                <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-600 transition-colors">{stat.label}</p>
                    <h3 className="text-4xl font-black italic text-slate-900 tracking-tighter group-hover:text-orange-600 transition-colors duration-500">{stat.val}</h3>
                    <div className="flex items-center gap-2 pt-2">
                        <span className={cn("text-[10px] font-black uppercase tracking-widest", stat.color)}>{stat.growth}</span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase">Current Session</span>
                    </div>
                </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Analytics Chart */}
        <GlassCard className="lg:col-span-2 p-10 border-slate-200 bg-white/70 space-y-10 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
            <Activity size={200} className="text-orange-600" />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-1">
                <h3 className="text-xl font-black italic uppercase tracking-tight text-slate-900 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.2)]" />
                Connectivity Yield
                </h3>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-5">Outreach engagement visualization</p>
            </div>
            
            <div className="bg-slate-100 border border-slate-200 p-1.5 rounded-xl flex gap-1 self-start">
              <button className="px-5 py-2 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-lg shadow-orange-600/20">Views</button>
              <button className="px-5 py-2 text-slate-500 text-[10px] font-black uppercase tracking-widest hover:text-slate-900 transition-colors">Invites</button>
            </div>
          </div>
          
          <div className="h-[400px] relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.03)" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 11, fontStyle: 'italic', fontWeight: 900, textAnchor: 'middle' }}
                  dy={15}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 900 }} 
                />
                <Tooltip 
                  cursor={{ stroke: '#f97316', strokeWidth: 2 }}
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    borderColor: 'rgba(0, 0, 0, 0.05)', 
                    borderRadius: '16px',
                    backdropFilter: 'blur(12px)',
                    borderWidth: '1px',
                    padding: '16px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                  }}
                  itemStyle={{ color: '#f97316', fontWeight: 900, fontSize: '12px', textTransform: 'uppercase' }}
                  labelStyle={{ color: '#64748b', fontWeight: 900, fontSize: '10px', marginBottom: '8px', textTransform: 'uppercase' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="views" 
                  stroke="#f97316" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#orangeGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* System Focus & Activity */}
        <div className="space-y-10">
          <GlassCard className="p-10 border-slate-200 bg-white/70 space-y-8 h-full shadow-sm">
            <div className="space-y-1">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 flex items-center gap-3">
                <Activity size={16} className="text-orange-600" />
                Activity Log
                </h3>
                <p className="text-xl font-black italic uppercase tracking-tight text-slate-900">Recent Signals</p>
            </div>
            
            <div className="space-y-4">
              {[
                { title: 'Contact Unlocked', user: 'Nike PR Lead', time: '2h ago', color: 'bg-orange-500' },
                { title: 'Lead Status Update', user: 'Adobe HQ', time: '5h ago', color: 'bg-emerald-500' },
                { title: 'Credit Refresh', user: 'System', time: '1d ago', color: 'bg-purple-500' },
                { title: 'Profile Verified', user: 'Trust Safety', time: '2d ago', color: 'bg-blue-300' },
              ].map((event, i) => (
                <div key={i} className="flex gap-5 p-4 rounded-2xl bg-white border border-slate-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md">
                  <div className={`w-1.5 h-10 rounded-full shrink-0 group-hover:scale-y-110 transition-transform ${event.color}`} />
                  <div className="min-w-0">
                    <p className="text-xs font-black text-slate-900 leading-none mb-1.5 uppercase italic group-hover:text-orange-600 transition-colors">{event.title}</p>
                    <p className="text-[10px] text-slate-500 font-bold leading-none uppercase tracking-widest">{event.user} • {event.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <GlassCard variant="frosted" className="p-6 border-orange-100 bg-orange-50/50 group overflow-hidden mt-6 shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                <div className="flex items-center gap-3 mb-4">
                    <Zap size={18} className="text-orange-600 animate-pulse" fill="currentColor" />
                    <h3 className="text-sm font-black text-slate-900 italic uppercase tracking-tighter">System Priority</h3>
                </div>
                <p className="text-[11px] font-bold text-slate-500 leading-relaxed uppercase mb-6">
                Notice: <span className="text-slate-900 font-black">Upgrade to Growth</span> to unlock 30 more premium brand contacts this month.
                </p>
                <Link href="/usage">
                  <button className="w-full bg-orange-600 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] text-white hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 active:scale-95">
                  Upgrade Instance
                  </button>
                </Link>
            </GlassCard>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
