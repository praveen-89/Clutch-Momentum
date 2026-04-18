"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { 
  CreditCard, 
  History, 
  ArrowUpRight, 
  Calendar,
  AlertCircle
} from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  { name: "Starter", price: 1, credits: 20 },
  { name: "Growth", price: 5, credits: 50, popular: true },
  { name: "Premium", price: 9, credits: "Unlimited" },
];

export default function CreditsUsagePage() {
  const { user } = useAuthStore();

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 w-fit"
            >
                <CreditCard size={12} className="text-orange-600" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-600">Financial Telemetry Node</span>
            </motion.div>
            <h1 className="text-4xl lg:text-5xl font-black italic uppercase tracking-tighter leading-none text-slate-900">
                Credits <span className="text-orange-600 text-glow">Billing.</span>
            </h1>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mt-2">
                Manage your subscription authority and usage instance yields
            </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard className="p-10 space-y-8 bg-orange-50/50 border-orange-100 relative overflow-hidden shadow-xl shadow-orange-500/5 transition-all hover:bg-white duration-500 group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000 pointer-events-none">
                <CreditCard size={150} />
              </div>
              <div className="space-y-3">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">Active Authority</p>
                <h3 className="text-4xl font-black italic uppercase tracking-tighter text-slate-900">
                  {user?.plan} <span className="text-orange-600">Instance</span>
                </h3>
              </div>
              <div className="space-y-5">
                <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest">
                  <span className="text-slate-500">Credits Remaining</span>
                  <span className="text-orange-600">{user?.credits} / 20</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                   <div className="w-[60%] h-full bg-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.4)]" />
                </div>
                <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                  <Calendar size={14} className="text-orange-500" />
                  Authority Resets: <span className="text-slate-900">May 02, 2026</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-10 space-y-8 flex flex-col justify-between border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all">
              <div className="space-y-3">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Total Unlocks Captured</p>
                <h3 className="text-5xl font-black italic text-slate-900 tracking-tighter">14</h3>
              </div>
              <div className="space-y-6">
                <p className="text-[11px] text-slate-400 font-bold leading-relaxed uppercase tracking-widest">
                  You have saved <span className="text-slate-900 font-black">18 hours</span> of research yield this cycle.
                </p>
                <CapsuleButton variant="outline" className="w-full text-[10px] font-black uppercase tracking-widest border-slate-200 py-4 hover:bg-slate-50">Download yield Report</CapsuleButton>
              </div>
            </GlassCard>
          </div>

          <GlassCard className="p-10 space-y-10 border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 shadow-sm">
                  <History size={22} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-black italic uppercase tracking-tight text-slate-900">Instance Logs</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Historical outreach audit</p>
                </div>
              </div>
              <CapsuleButton variant="ghost" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600">Export Raw Node</CapsuleButton>
            </div>

            <div className="space-y-0 border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm">
              {[
                { brand: 'Nike', type: 'Dossier Unlock', date: 'Apr 17, 2026', cost: '-1 Credit', status: 'verified' },
                { brand: 'Adobe', type: 'Exclusive Request', date: 'Apr 15, 2026', cost: 'Pending', status: 'alert' },
                { brand: 'Samsung', type: 'Dossier Unlock', date: 'Apr 12, 2026', cost: '-1 Credit', status: 'verified' },
                { brand: 'Monthly Cycle', type: 'System Auth', date: 'Apr 02, 2026', cost: '+20 Credits', status: 'success' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-6 px-10 border-b border-slate-50 last:border-0 hover:bg-orange-50/20 transition-all duration-300 group">
                   <div className="flex items-center gap-6">
                     <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 group-hover:text-orange-600 group-hover:scale-110 transition-all duration-500">
                       {item.type === 'System Auth' ? <Calendar size={18} /> : <ArrowUpRight size={18} />}
                     </div>
                     <div>
                       <p className="text-sm font-black italic uppercase tracking-tighter text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">{item.brand}</p>
                       <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{item.type}</p>
                     </div>
                   </div>
                   <div className="text-right">
                     <p className="text-sm font-black text-slate-900 tracking-tight">{item.cost}</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{item.date}</p>
                   </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <GlassCard className="p-10 space-y-10 border-orange-200 bg-white relative overflow-hidden shadow-2xl shadow-orange-500/10 group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none" />
            <div className="space-y-2 relative z-10">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900 leading-none">Scaling <span className="text-orange-600">Authority.</span></h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Upgrade instance capability</p>
            </div>
            
            <div className="space-y-8 relative z-10">
              {plans.map((plan) => (
                <div key={plan.name} className="flex items-center justify-between group/item cursor-pointer">
                   <div className="space-y-1.5">
                     <div className="flex items-center gap-3">
                       <p className="text-sm font-black uppercase italic tracking-tighter text-slate-900 group-hover/item:text-orange-600 transition-colors">{plan.name}</p>
                       {plan.popular && (
                         <span className="text-[8px] bg-orange-600 text-white px-2 py-0.5 rounded-full font-black uppercase tracking-widest shadow-lg shadow-orange-600/20">Alpha</span>
                       )}
                     </div>
                     <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{plan.credits} Credits</p>
                   </div>
                   <p className="text-xl font-black italic text-slate-900 group-hover/item:scale-110 transition-transform">
                     ${plan.price}<span className="text-[10px] font-black uppercase italic text-slate-400 ml-1">/mo</span>
                   </p>
                </div>
              ))}
            </div>
            
            <div className="p-6 rounded-[1.5rem] bg-orange-50 border border-orange-100 flex gap-4 text-orange-600 relative z-10">
               <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
               <p className="text-[10px] font-black uppercase leading-relaxed tracking-widest italic">
                 Premium plan offers <span className="text-orange-950 underline decoration-2">total unlimited access</span> to all brand contacts and priority lead matching.
               </p>
            </div>

            <CapsuleButton className="w-full py-6 bg-orange-600 text-white shadow-xl shadow-orange-600/30 active:scale-95 border-none relative z-10 group/btn">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] group-hover/btn:tracking-[0.4em] transition-all duration-500 italic">Upgrade Instance</span>
            </CapsuleButton>
            
            <p className="text-[9px] text-center text-slate-300 uppercase font-black tracking-[0.3em] relative z-10">
              Stripe Secure Encryption
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
