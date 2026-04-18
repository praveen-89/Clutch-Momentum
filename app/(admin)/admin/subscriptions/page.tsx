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
  Check
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

const planDistribution = [
  { name: 'Free', value: 400, color: '#475569' },
  { name: 'Starter', value: 300, color: '#10b981' },
  { name: 'Growth', value: 200, color: '#3b82f6' },
  { name: 'Premium', value: 100, color: '#a855f7' },
];

export default function SubscriptionsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black uppercase italic tracking-tighter">Monetization Hub</h1>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Telemetry for recurring revenue and plan distribution</p>
        </div>
        <div className="bg-emerald-500/10 border border-emerald-500/20 p-2 px-4 rounded-xl flex items-center gap-3">
           <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
           <span className="text-[10px] font-black uppercase text-emerald-500">Stripe Live: $12.4k MRR</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard className="p-8 space-y-4 bg-slate-900/50 border-slate-800">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Net Revenue (MTD)</p>
                <DollarSign size={16} className="text-emerald-500" />
              </div>
              <h3 className="text-4xl font-black text-white">$4,212.00</h3>
              <div className="flex items-center gap-2 text-emerald-500 text-[10px] font-black uppercase">
                <TrendingUp size={12} />
                +14.2% vs Last Month
              </div>
            </GlassCard>

            <GlassCard className="p-8 space-y-4 bg-slate-900/50 border-slate-800">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Churn Rate (Avg)</p>
                <Activity size={16} className="text-blue-500" />
              </div>
              <h3 className="text-4xl font-black text-white">2.4%</h3>
              <div className="flex items-center gap-2 text-blue-500 text-[10px] font-black uppercase">
                <ShieldCheck size={12} />
                Optimum Threshold
              </div>
            </GlassCard>
          </div>

          <GlassCard className="p-8 bg-slate-900/50 border-slate-800 space-y-8">
             <div className="flex items-center justify-between">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Subscription Lifecycles</h3>
                <CapsuleButton variant="ghost" size="sm" className="text-[8px] border border-slate-800">Global Ledger</CapsuleButton>
             </div>
             
             <div className="space-y-4">
                {[
                  { user: 'Mark Sullivan', plan: 'Premium', status: 'Succeeded', amount: '$9.00', date: '3m ago' },
                  { user: 'Julia Zhang', plan: 'Growth', status: 'Succeeded', amount: '$5.00', date: '42m ago' },
                  { user: 'Creative Studios', plan: 'Premium', status: 'Succeeded', amount: '$9.00', date: '1h ago' },
                  { user: 'Sam Peterson', plan: 'Starter', status: 'Failed', amount: '$1.00', date: '5h ago' },
                ].map((tx, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-900 group hover:border-blue-500/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                        <ArrowUpRight size={18} className={tx.status === 'Failed' ? 'text-red-500' : 'text-emerald-500'} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{tx.user}</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">{tx.plan} Authority</p>
                      </div>
                    </div>
                    <div className="text-right">
                       <p className="text-sm font-black text-white">{tx.amount}</p>
                       <p className={cn(
                         "text-[8px] font-black uppercase tracking-widest",
                         tx.status === 'Failed' ? 'text-red-400' : 'text-emerald-500'
                       )}>
                         {tx.status} • {tx.date}
                       </p>
                    </div>
                  </div>
                ))}
             </div>
          </GlassCard>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <GlassCard className="p-8 bg-slate-900/50 border-slate-800 space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 text-center">Plan Distribution</h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={planDistribution}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {planDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b', borderRadius: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
               {planDistribution.map((plan) => (
                 <div key={plan.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full" style={{ backgroundColor: plan.color }} />
                       <span className="text-[10px] font-black uppercase text-slate-400">{plan.name}</span>
                    </div>
                    <span className="text-xs font-black text-white">{plan.value}</span>
                 </div>
               ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8 bg-white/5 border-slate-800 space-y-4">
             <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500 mb-2">
                <Check size={24} />
             </div>
             <h3 className="text-sm font-black uppercase tracking-widest">Billing Logic Ops</h3>
             <p className="text-[10px] text-slate-500 font-bold leading-relaxed uppercase">
                System will trigger <span className="text-white font-black">242 monthly credit resets</span> in approximately 12 days. Automated Stripe sync is active. 
             </p>
             <CapsuleButton variant="ghost" className="w-full text-[10px] font-black border border-slate-800 uppercase">
                Run Simulation
             </CapsuleButton>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
