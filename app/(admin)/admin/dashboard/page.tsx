"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/ui/glass-card";
import { 
  Users, 
  CreditCard, 
  Database, 
  Zap, 
  TrendingUp, 
  Activity,
  ArrowUpRight,
  Monitor
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';

const growthData = [
  { name: 'Jan', users: 120, revenue: 400 },
  { name: 'Feb', users: 210, revenue: 700 },
  { name: 'Mar', users: 450, revenue: 1500 },
  { name: 'Apr', users: 800, revenue: 3200 },
];

export default function AdminDashboard() {
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
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-600">Global Analytics Engine</span>
            </motion.div>
            <h1 className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter leading-none text-slate-900">
                System <span className="text-orange-600 text-glow">Heuristics.</span>
            </h1>
            <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em] mt-2">
                Real-time platform performance monitoring & operational overrides
            </p>
        </div>
        
        <div className="flex gap-4">
           <GlassCard variant="frosted" className="p-1 px-4 border-orange-200 flex items-center gap-3 bg-white/80 shadow-sm">
             <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_15px_rgba(249,115,22,0.3)]" />
             </div>
             <span className="text-[10px] font-black uppercase tracking-widest text-orange-600">Active Signals: 142</span>
           </GlassCard>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Creators", val: "2,412", growth: "+12.5%", icon: Users, color: "text-orange-600", bg: "bg-orange-50" },
          { label: "Active Subs", val: "842", growth: "+8.2%", icon: CreditCard, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Total Contacts", val: "542", growth: "+4 New", icon: Database, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Lead Requests", val: "24", growth: "12 pending", icon: Zap, color: "text-purple-600", bg: "bg-purple-50" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className="p-8 group hover:border-orange-500/50 hover:bg-white transition-all duration-500 relative overflow-hidden bg-white/70 border-slate-200 shadow-sm hover:shadow-xl hover:shadow-orange-500/5">
                {/* Micro-shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                <div className="flex justify-between items-start mb-6">
                    <div className={cn("p-3 rounded-2xl border border-slate-100 group-hover:scale-110 transition-transform duration-500 shadow-sm", stat.bg, stat.color)}>
                        <stat.icon size={22} strokeWidth={2.5} />
                    </div>
                    <ArrowUpRight className="text-slate-400 group-hover:text-orange-500 transition-colors" size={20} />
                </div>
                
                <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-500 transition-colors">{stat.label}</p>
                    <h3 className="text-4xl font-black italic text-slate-900 tracking-tighter group-hover:text-orange-600 transition-colors duration-500">{stat.val}</h3>
                    <div className="flex items-center gap-2 pt-2">
                        <span className={cn("text-[10px] font-black uppercase tracking-widest", stat.color)}>{stat.growth}</span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase">vs last session</span>
                    </div>
                </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Chart */}
        <GlassCard className="lg:col-span-2 p-10 border-slate-200 bg-white/70 space-y-10 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
            <Activity size={200} className="text-orange-600" />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-1">
                <h3 className="text-xl font-black italic uppercase tracking-tight text-slate-900 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-600 shadow-[0_0_10px_rgba(249,115,22,0.2)]" />
                Growth & Conversion Matrix
                </h3>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-5">Operational yield visualization</p>
            </div>
            
            <div className="bg-slate-100 border border-slate-200 p-1.5 rounded-xl flex gap-1 self-start">
              <button className="px-5 py-2 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-lg shadow-orange-600/20">Users</button>
              <button className="px-5 py-2 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:text-slate-900 transition-colors">Revenue</button>
            </div>
          </div>
          
          <div className="h-[400px] relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={growthData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                <defs>
                    <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ea580c" stopOpacity={1} />
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.6} />
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
                  cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    borderColor: 'rgba(0, 0, 0, 0.05)', 
                    borderRadius: '16px',
                    backdropFilter: 'blur(12px)',
                    borderWidth: '1px',
                    padding: '16px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                  }}
                  itemStyle={{ color: '#ea580c', fontWeight: 900, fontSize: '12px', textTransform: 'uppercase' }}
                  labelStyle={{ color: '#64748b', fontWeight: 900, fontSize: '10px', marginBottom: '8px', textTransform: 'uppercase' }}
                />
                <Bar dataKey="users" fill="url(#orangeGradient)" radius={[8, 8, 0, 0]} barSize={45} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* System Events & Focus */}
        <div className="space-y-10">
          <GlassCard className="p-10 border-slate-200 bg-white/70 space-y-8 h-full shadow-sm">
            <div className="space-y-1">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 flex items-center gap-3">
                    <Monitor size={16} className="text-emerald-500" />
                    Operational Log
                </h3>
                <p className="text-xl font-black italic uppercase tracking-tight text-slate-900">Recent Events</p>
            </div>
            
            <div className="space-y-4">
              {[
                { title: 'New Creator Joined', user: 'Alex Rivers', time: '2m ago', color: 'bg-orange-500' },
                { title: 'Subscription Update', user: 'Mark S.', time: '14m ago', color: 'bg-emerald-500' },
                { title: 'Lead Request', user: 'Creative Agency', time: '21m ago', color: 'bg-purple-500' },
                { title: 'Contact Verification', user: 'System', time: '1h ago', color: 'bg-slate-300' },
              ].map((event, i) => (
                <div key={i} className="flex gap-5 p-4 rounded-2xl bg-white border border-slate-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md">
                  <div className={`w-1.5 h-10 rounded-full shrink-0 group-hover:scale-y-110 transition-transform ${event.color}`} />
                  <div className="min-w-0">
                    <p className="text-xs font-black text-slate-900 leading-none mb-1.5 uppercase italic group-hover:text-orange-600 transition-colors">{event.title}</p>
                    <p className="text-[10px] text-slate-400 font-bold leading-none uppercase tracking-widest">{event.user} • {event.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <GlassCard variant="frosted" className="p-6 border-orange-100 bg-orange-50/50 group overflow-hidden mt-6 shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                <div className="flex items-center gap-3 mb-4">
                    <Zap size={18} className="text-orange-600 animate-pulse" fill="currentColor" />
                    <h3 className="text-sm font-black text-slate-900 italic uppercase tracking-tighter">Operational Focus</h3>
                </div>
                <p className="text-[11px] font-bold text-slate-500 leading-relaxed uppercase mb-6">
                Notice: <span className="text-slate-900 font-black">12 exclusive lead requests</span> awaiting manual review. Process them to maintain response speed SLAs.
                </p>
                <button className="w-full bg-orange-600 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] text-white hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 active:scale-95">
                Open Request Queue
                </button>
            </GlassCard>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
