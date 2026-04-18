"use client";

import { StatsWidget } from "@/components/ui/stats-widget";
import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { useAuthStore } from "@/store/useAuthStore";
import { 
  Users, 
  CreditCard, 
  Zap, 
  BarChart3, 
  ArrowUpRight,
  ShieldCheck,
  Search,
  CheckCircle2
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
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, {user?.name.split(' ')[0]}!</h1>
          <p className="text-foreground/50 mt-1">Here's what's happening with your brand outreach today.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/brand-contacts">
            <CapsuleButton variant="outline" className="flex items-center gap-2">
              <Search size={16} />
              Browse Contacts
            </CapsuleButton>
          </Link>
          <CapsuleButton className="flex items-center gap-2 text-glow">
            <Zap size={16} />
            Unlock New Leads
          </CapsuleButton>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsWidget 
          label="Plan Credits" 
          value={user?.credits ?? 0} 
          description="Resets in 12 days"
          trend={{ value: 20, isUp: true }}
          icon={<CreditCard />}
        />
        <StatsWidget 
          label="Unlocked Contacts" 
          value="12" 
          description="4 this week"
          trend={{ value: 15, isUp: true }}
          icon={<Users />}
        />
        <StatsWidget 
          label="Exclusive Leads" 
          value="3" 
          description="1 pending approval"
          icon={<Zap />}
        />
        <StatsWidget 
          label="Profile Health" 
          value="85%" 
          description="Complete your social links"
          icon={<CheckCircle2 />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Analytics Chart */}
        <GlassCard className="lg:col-span-2 p-6 flex flex-col space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 size={20} className="text-primary" />
              <h3 className="font-bold">Contact View Activity</h3>
            </div>
            <select className="bg-white/5 border border-white/10 rounded-lg text-xs px-2 py-1 outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 12 }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 12 }} 
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(10,10,10,0.8)', 
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)'
                  }}
                  itemStyle={{ color: '#2563eb' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="views" 
                  stroke="#2563eb" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorViews)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Upgrade Card / Tip */}
        <div className="space-y-8">
          <GlassCard variant="frosted" className="p-8 border-primary/20 bg-primary/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap size={80} />
            </div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-xl font-bold leading-tight">Scale Your Outreach</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Unlock 30 more credits and get access to exclusive premium leads by upgrading to the Growth plan.
              </p>
              <Link href="/usage">
                <CapsuleButton className="w-full">Upgrade Now</CapsuleButton>
              </Link>
            </div>
          </GlassCard>

          <GlassCard className="p-6 space-y-4">
            <h3 className="font-bold flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-500" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Users size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Unlocked Nike PR Lead</p>
                    <p className="text-[10px] text-foreground/40 uppercase mt-1">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/usage" className="block text-center text-xs text-primary font-bold hover:underline py-2">
              View All History
            </Link>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
