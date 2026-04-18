"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { PremiumInput } from "@/components/ui/premium-input";
import { 
  Settings, 
  ShieldCheck, 
  Globe, 
  Database, 
  ShieldAlert, 
  Activity,
  Server,
  Key
} from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black uppercase italic tracking-tighter">System Configuration</h1>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Platform architecture and global operational heuristics</p>
        </div>
        <CapsuleButton className="flex items-center gap-2">
           <ShieldAlert size={16} />
           Global Override
        </CapsuleButton>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard className="p-8 bg-slate-900/50 border-slate-800 space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-500 border border-blue-500/20">
               <Globe size={20} />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Platform API Settings</h3>
          </div>

          <div className="space-y-6">
            <PremiumInput 
              label="Production Base URL" 
              defaultValue="https://api.clutchmomentum.com/v1" 
              className="bg-slate-950 border-slate-800 text-slate-400"
            />
            <PremiumInput 
              label="Stripe Webhook Secret" 
              type="password" 
              defaultValue="whsec_••••••••••••••••" 
              className="bg-slate-950 border-slate-800 text-slate-400"
            />
            <div className="flex gap-4">
              <PremiumInput 
                label="API Rate Limit (Req/min)" 
                defaultValue="1000" 
                className="bg-slate-950 border-slate-800 text-slate-400"
              />
              <PremiumInput 
                label="Request Timeout (ms)" 
                defaultValue="30000" 
                className="bg-slate-950 border-slate-800 text-slate-400"
              />
            </div>
          </div>
          
          <div className="pt-4">
            <CapsuleButton variant="outline" className="border-slate-800 text-slate-400">Sync Master Config</CapsuleButton>
          </div>
        </GlassCard>

        <GlassCard className="p-8 bg-slate-900/50 border-slate-800 space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-600/10 text-purple-500 border border-purple-500/20">
               <Database size={20} />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Database Thresholds</h3>
          </div>

          <div className="space-y-6">
             <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800">
               <div className="space-y-1">
                 <p className="text-[10px] font-black uppercase text-white">Enable Real-time CDC</p>
                 <p className="text-[10px] text-slate-600 font-bold">Synchronize data across all edge clusters</p>
               </div>
               <div className="w-10 h-5 bg-blue-600 rounded-full relative">
                  <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-white rounded-full" />
               </div>
             </div>

             <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800">
               <div className="space-y-1">
                 <p className="text-[10px] font-black uppercase text-white">Automated Backups</p>
                 <p className="text-[10px] text-slate-600 font-bold">Encrypted snapshot every 6 hours</p>
               </div>
               <div className="w-10 h-5 bg-blue-600 rounded-full relative">
                  <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-white rounded-full" />
               </div>
             </div>

             <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800">
               <div className="space-y-1">
                 <p className="text-[10px] font-black uppercase text-white">Debug Logging Mode</p>
                 <p className="text-[10px] text-slate-600 font-bold">High-verbosity operational logging</p>
               </div>
               <div className="w-10 h-5 bg-slate-800 rounded-full relative">
                  <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-slate-600 rounded-full" />
               </div>
             </div>
          </div>
          
          <div className="pt-4">
             <CapsuleButton className="w-full bg-purple-600 hover:bg-purple-500 text-glow">Apply Global Changes</CapsuleButton>
          </div>
        </GlassCard>

        <GlassCard className="lg:col-span-2 p-8 bg-slate-900/50 border-slate-800 space-y-8">
           <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-600/10 text-emerald-500 border border-emerald-500/20">
                   <Server size={20} />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">Access Control & IAM</h3>
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                 Active Root Nodes: 2
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'SysAdmin Root', key: 'ADMIN_FULL_ACCESS', lastUsed: '2m ago' },
                { name: 'Analytics Node', key: 'READ_ONLY_HEURISTICS', lastUsed: '14h ago' },
                { name: 'Lead Manager', key: 'LEAD_OPS_ACCESS', lastUsed: 'Just now' },
              ].map((token) => (
                <div key={token.key} className="p-6 rounded-2xl bg-slate-950 border border-slate-900 space-y-4">
                   <div className="flex items-center justify-between">
                      <Key size={16} className="text-slate-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                   </div>
                   <div>
                     <p className="text-xs font-bold text-white leading-none">{token.name}</p>
                     <code className="text-[8px] text-slate-600 block mt-2">{token.key}_••••••</code>
                   </div>
                   <p className="text-[8px] font-black uppercase text-slate-500">Telemetry: {token.lastUsed}</p>
                </div>
              ))}
           </div>
        </GlassCard>
      </div>
    </div>
  );
}
