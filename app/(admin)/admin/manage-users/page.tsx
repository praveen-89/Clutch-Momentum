"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { 
  Users, 
  Search, 
  MoreHorizontal, 
  Mail, 
  ShieldCheck, 
  CreditCard,
  Ban,
  Filter
} from "lucide-react";

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
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black uppercase italic tracking-tighter">User Directory</h1>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Global registry of platform creators and entities</p>
        </div>
        <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
           <div className="flex flex-col items-end">
             <span className="text-blue-500 text-lg leading-none">2,412</span>
             <span>Total Registry</span>
           </div>
           <div className="w-px h-8 bg-slate-800" />
           <div className="flex flex-col items-end">
             <span className="text-emerald-500 text-lg leading-none">1,902</span>
             <span>Verified Nodes</span>
           </div>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-grow group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Query Registry UID, Email, or Entity Name..." 
            className="w-full bg-slate-900 border border-slate-800 rounded-xl py-4 pl-12 pr-6 text-sm outline-none focus:border-blue-500/50 transition-all font-bold"
          />
        </div>
        <button className="bg-slate-900 border border-slate-800 px-6 rounded-xl flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
          <Filter size={16} />
          Filter By Rank
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {users.map((user) => (
          <GlassCard key={user.id} className="p-4 bg-slate-900/40 border-slate-800 hover:bg-slate-900 transition-colors group">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4 flex-grow">
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center font-black text-slate-500">
                   {user.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-black text-white uppercase tracking-tight">{user.name}</h3>
                    {user.status === 'Active' ? (
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    )}
                  </div>
                  <p className="text-xs text-slate-500 font-medium">{user.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-12 text-center md:text-left">
                <div className="space-y-1">
                  <p className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-600">Plan Authority</p>
                  <p className={cn(
                    "text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded border inline-block",
                    user.plan === 'Premium' ? "text-purple-400 border-purple-500/30 bg-purple-500/5" :
                    user.plan === 'Growth' ? "text-blue-400 border-blue-500/30 bg-blue-500/5" :
                    user.plan === 'Starter' ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/5" :
                    "text-slate-500 border-slate-700 bg-slate-900"
                  )}>
                    {user.plan}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-600">Credit Balance</p>
                  <p className="text-xs font-bold text-white tracking-widest">
                    {user.credits === 999 ? "∞" : user.credits}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-600">Last Telemetry</p>
                  <p className="text-xs font-bold text-slate-400">{user.lastActive}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button title="Suspend Entity" className="p-2.5 rounded-lg bg-slate-950 text-slate-600 hover:text-red-500 hover:bg-red-500/10 transition-colors border border-slate-800">
                  <Ban size={16} />
                </button>
                <button title="Communications" className="p-2.5 rounded-lg bg-slate-950 text-slate-600 hover:text-blue-500 border border-slate-800">
                  <Mail size={16} />
                </button>
                <button className="p-2.5 rounded-lg bg-slate-950 text-slate-600 hover:text-white border border-slate-800">
                  <MoreHorizontal size={16} />
                </button>
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
