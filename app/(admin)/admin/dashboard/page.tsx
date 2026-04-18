"use client";

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
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

const growthData = [
  { name: 'Jan', users: 120, revenue: 400 },
  { name: 'Feb', users: 210, revenue: 700 },
  { name: 'Mar', users: 450, revenue: 1500 },
  { name: 'Apr', users: 800, revenue: 3200 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black uppercase italic tracking-tighter">System Overview</h1>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Real-time platform performance heuristics</p>
        </div>
        <div className="flex gap-4">
           <div className="bg-slate-900 border border-slate-800 p-2 px-4 rounded-xl flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
             <span className="text-[10px] font-black uppercase text-slate-400">Live: 142 Users</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Creators", val: "2,412", growth: "+12.5%", icon: Users, color: "text-blue-500" },
          { label: "Active Subs", val: "842", growth: "+8.2%", icon: CreditCard, color: "text-emerald-500" },
          { label: "Total Contacts", val: "542", growth: "+4", icon: Database, color: "text-amber-500" },
          { label: "Lead Requests", val: "24", growth: "12 pending", icon: Zap, color: "text-purple-500" },
        ].map((stat, i) => (
          <GlassCard key={i} className="p-6 bg-slate-900/50 border-slate-800 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</p>
              <h3 className="text-2xl font-black text-white">{stat.val}</h3>
              <p className="text-[10px] font-bold text-slate-400 italic">{stat.growth}</p>
            </div>
            <div className={`p-3 rounded-xl bg-slate-950 border border-slate-800 ${stat.color}`}>
              <stat.icon size={20} />
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <GlassCard className="lg:col-span-2 p-8 bg-slate-900/50 border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
              <Activity size={16} className="text-blue-500" />
              Growth & Conversion Metrics
            </h3>
            <div className="bg-slate-950 p-1 rounded-lg flex gap-1">
              <button className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black rounded-md">Users</button>
              <button className="px-3 py-1 text-slate-500 text-[10px] font-black hover:text-white">Revenue</button>
            </div>
          </div>
          
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.02)" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#475569', fontSize: 10, fontWeight: 900 }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#475569', fontSize: 10, fontWeight: 900 }} 
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                  contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b', borderRadius: '12px' }}
                />
                <Bar dataKey="users" fill="#2563eb" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <div className="space-y-8">
          <GlassCard className="p-8 bg-slate-900/50 border-slate-800 space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
              <Monitor size={16} className="text-emerald-500" />
              Recent System Events
            </h3>
            <div className="space-y-4">
              {[
                { title: 'New Creator Joined', user: 'Alex Rivers', time: '2m ago', color: 'bg-blue-500' },
                { title: 'Subscription Update', user: 'Mark S.', time: '14m ago', color: 'bg-emerald-500' },
                { title: 'Lead Request', user: 'Creative Agency', time: '21m ago', color: 'bg-purple-500' },
                { title: 'Contact Verification', user: 'System', time: '1h ago', color: 'bg-slate-500' },
              ].map((event, i) => (
                <div key={i} className="flex gap-4 p-3 rounded-xl hover:bg-slate-800/50 transition-colors">
                  <div className={`w-1 h-8 rounded-full ${event.color}`} />
                  <div>
                    <p className="text-[10px] font-black text-white leading-none mb-1 uppercase">{event.title}</p>
                    <p className="text-[10px] text-slate-500 leading-none">{event.user} • {event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8 bg-blue-600/10 border-blue-600/20 space-y-4">
            <h3 className="text-sm font-black text-white italic uppercase tracking-tighter shadow-sm">
              Operational Focus
            </h3>
            <p className="text-[10px] font-bold text-slate-400 leading-relaxed uppercase">
              Notice: There are <span className="text-white font-black">12 exclusive lead requests</span> awaiting manual review. Process them to maintain response speed SLAs.
            </p>
            <button className="w-full bg-blue-600 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20">
              Open Request Queue
            </button>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
