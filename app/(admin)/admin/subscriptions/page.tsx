"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { 
  CreditCard, 
  TrendingUp, 
  ArrowUpRight, 
  Calendar, 
  DollarSign,
  PieChart as PieChartIcon,
  ShieldCheck,
  Activity,
  Check,
  TrendingDown,
  Globe
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ResponsiveContainer, 
  Cell,
  PieChart,
  Pie,
  Tooltip
} from 'recharts';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const planDistribution = [
  { name: 'Free', value: 400, color: '#94a3b8' },
  { name: 'Starter', value: 300, color: '#10b981' },
  { name: 'Growth', value: 200, color: '#ea580c' },
  { name: 'Premium', value: 100, color: '#f59e0b' },
];

export default function SubscriptionsPage() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
                Monetization <span className="text-orange-600 text-glow">Hub.</span>
            </h1>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em]">
                Telemetry for recurring revenue and plan distribution
            </p>
        </div>
        
        <div className="bg-emerald-50 border border-emerald-100 p-3 px-6 rounded-2xl flex items-center gap-4 shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)] animate-pulse" />
            <div className="space-y-0.5">
                <span className="text-[10px] font-black uppercase text-emerald-600 block leading-none">Stripe Live Connector</span>
                <span className="text-sm font-black text-slate-900 tracking-tighter italic whitespace-nowrap">$12.4k Monthly Revenue</span>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
                <GlassCard className="p-10 space-y-6 bg-white/70 border-slate-200 shadow-xl shadow-slate-200/40 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <DollarSign size={80} className="text-orange-600" />
                </div>
                <div className="flex items-center justify-between relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Net Revenue (MTD)</p>
                    <div className="p-2 rounded-lg bg-orange-50 text-orange-600">
                        <TrendingUp size={16} />
                    </div>
                </div>
                <h3 className="text-5xl font-black text-slate-900 tracking-tighter italic relative z-10">$4,212.00</h3>
                <div className="flex items-center gap-2 text-emerald-600 text-[10px] font-black uppercase tracking-widest relative z-10">
                    <ArrowUpRight size={14} />
                    +14.2% vs Last Month
                </div>
                </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
                <GlassCard className="p-10 space-y-6 bg-white/70 border-slate-200 shadow-xl shadow-slate-200/40 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Activity size={80} className="text-emerald-600" />
                </div>
                <div className="flex items-center justify-between relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Churn Rate (Avg)</p>
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                        <Activity size={16} />
                    </div>
                </div>
                <h3 className="text-5xl font-black text-slate-900 tracking-tighter italic relative z-10">2.4%</h3>
                <div className="flex items-center gap-2 text-orange-600 text-[10px] font-black uppercase tracking-widest relative z-10">
                    <ShieldCheck size={14} />
                    Optimum Threshold
                </div>
                </GlassCard>
            </motion.div>
          </div>

          <GlassCard className="p-10 bg-white/70 border-slate-200 space-y-10 shadow-xl shadow-slate-200/40">
             <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-orange-600 mb-1">Subscription Lifecycles</h3>
                    <p className="text-xl font-black uppercase tracking-tighter italic text-slate-900">Real-time Transaction Feed</p>
                </div>
                <CapsuleButton variant="ghost" size="sm" className="text-[9px] font-black border border-slate-200 uppercase tracking-widest hover:bg-slate-50 transition-colors">Global Ledger</CapsuleButton>
             </div>
             
             <div className="space-y-6">
                {[
                  { user: 'Mark Sullivan', plan: 'Premium', status: 'Succeeded', amount: '$9.00', date: '3m ago' },
                  { user: 'Julia Zhang', plan: 'Growth', status: 'Succeeded', amount: '$5.00', date: '42m ago' },
                  { user: 'Creative Studios', plan: 'Premium', status: 'Succeeded', amount: '$9.00', date: '1h ago' },
                  { user: 'Sam Peterson', plan: 'Starter', status: 'Failed', amount: '$1.00', date: '5h ago' },
                ].map((tx, i) => (
                  <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-orange-500/30 hover:bg-white hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                        <ArrowUpRight size={22} className={tx.status === 'Failed' ? 'text-red-500 rotate-90' : 'text-emerald-500'} />
                      </div>
                      <div>
                        <p className="text-base font-black text-slate-900 italic tracking-tighter uppercase group-hover:text-orange-600 transition-colors leading-none mb-1.5">{tx.user}</p>
                        <div className="flex items-center gap-2">
                            <span className={cn(
                                "text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded border",
                                tx.plan === 'Premium' ? "text-amber-600 border-amber-100 bg-amber-50" :
                                tx.plan === 'Growth' ? "text-orange-600 border-orange-100 bg-orange-50" :
                                "text-emerald-600 border-emerald-100 bg-emerald-50"
                            )}>
                                {tx.plan} Authority
                            </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                       <p className="text-xl font-black text-slate-900 italic tracking-tighter mb-1 leading-none">{tx.amount}</p>
                       <p className={cn(
                         "text-[10px] font-black uppercase tracking-widest flex items-center justify-end gap-2",
                         tx.status === 'Failed' ? 'text-red-500' : 'text-emerald-600'
                       )}>
                         {tx.status === 'Failed' ? <TrendingDown size={10} /> : <TrendingUp size={10} />}
                         {tx.status} • {tx.date}
                       </p>
                    </div>
                  </div>
                ))}
             </div>
          </GlassCard>
        </div>

        <div className="lg:col-span-1 space-y-10">
          <GlassCard className="p-10 bg-white/70 border-slate-200 space-y-10 shadow-xl shadow-slate-200/40">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 text-center">Plan Distribution</h3>
            <div className="h-[280px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={planDistribution}
                    innerRadius={70}
                    outerRadius={95}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {planDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderColor: '#e2e8f0', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', fontWeight: 'bold' }}
                    itemStyle={{ color: '#0f172a', textTransform: 'uppercase', fontSize: '10px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                 <span className="text-3xl font-black text-slate-900 tracking-tighter italic">1,000</span>
                 <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Captured Units</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-4">
               {planDistribution.map((plan) => (
                 <div key={plan.name} className="flex flex-col gap-1 item-center justify-center p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-orange-500/20 transition-all">
                    <div className="flex items-center gap-2 mb-1">
                       <div className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: plan.color }} />
                       <span className="text-[10px] font-black uppercase text-slate-400 group-hover:text-slate-600 transition-colors tracking-widest">{plan.name}</span>
                    </div>
                    <span className="text-lg font-black text-slate-900 italic tracking-tighter leading-none">{plan.value}</span>
                 </div>
               ))}
            </div>
          </GlassCard>

          <GlassCard className="p-10 bg-orange-600 space-y-6 shadow-2xl shadow-orange-600/30 text-white relative overflow-hidden group border-none">
             {/* Abstract Background Element */}
             <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
             
             <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform border border-white/20">
                <ShieldCheck size={32} />
             </div>
             <div className="space-y-2">
                <h3 className="text-xl font-black uppercase tracking-tighter italic">Billing Logic Ops</h3>
                <p className="text-[11px] text-orange-100 font-bold leading-relaxed uppercase tracking-widest">
                    System will trigger <span className="text-white font-black underline underline-offset-4">242 monthly credit resets</span> in approximately 12 days. Automated Stripe sync is currently <span className="text-emerald-400 font-black">99.9% stable.</span>
                </p>
             </div>
             <CapsuleButton className="w-full text-[11px] font-black bg-white text-orange-600 hover:bg-orange-50 uppercase tracking-[0.2em] py-4 border-none shadow-xl active:scale-95 transition-all">
                Run Simulation
             </CapsuleButton>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
