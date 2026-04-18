"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { 
  CreditCard, 
  History, 
  Zap, 
  Check, 
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
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Credits & Billing</h1>
        <p className="text-foreground/50">Manage your subscription, view usage history, and upgrade your access.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Current Plan & Stats */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard className="p-8 space-y-6 bg-primary/5 border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <CreditCard size={100} />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Current Active Plan</p>
                <h3 className="text-3xl font-black italic uppercase tracking-tighter">
                  {user?.plan} <span className="text-primary">Master</span>
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground/50">Credits Remaining</span>
                  <span className="font-bold text-primary">{user?.credits} / 20</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                   <div className="w-[60%] h-full bg-primary" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-foreground/30 uppercase tracking-widest">
                  <Calendar size={12} />
                  Next reset: May 02, 2026
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/40">Total Unlocks</p>
                <h3 className="text-4xl font-bold">14</h3>
              </div>
              <div className="space-y-3">
                <p className="text-xs text-foreground/40 leading-relaxed font-medium">
                  You've saved approximately <span className="text-foreground font-bold">18 hours</span> of research this month.
                </p>
                <CapsuleButton variant="outline" className="w-full text-xs">Download Usage Report</CapsuleButton>
              </div>
            </GlassCard>
          </div>

          {/* History Section */}
          <GlassCard className="p-8 space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-foreground/40">
                  <History size={20} />
                </div>
                <h3 className="text-xl font-bold">Unlock History</h3>
              </div>
              <CapsuleButton variant="ghost" size="sm">Export CSV</CapsuleButton>
            </div>

            <div className="space-y-0 divide-y divide-white/5 border border-white/5 rounded-2xl overflow-hidden">
              {[
                { brand: 'Nike', type: 'Contact Unlock', date: 'Apr 17, 2026', cost: '-1 Credit' },
                { brand: 'Adobe', type: 'Exclusive Request', date: 'Apr 15, 2026', cost: 'Review Pending' },
                { brand: 'Samsung', type: 'Contact Unlock', date: 'Apr 12, 2026', cost: '-1 Credit' },
                { brand: 'Monthly Refresh', type: 'System', date: 'Apr 02, 2026', cost: '+20 Credits' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 px-6 hover:bg-white/5 transition-colors">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                       {item.type === 'System' ? <Calendar size={16} /> : <ArrowUpRight size={16} />}
                     </div>
                     <div>
                       <p className="text-sm font-bold">{item.brand}</p>
                       <p className="text-xs text-foreground/40">{item.type}</p>
                     </div>
                   </div>
                   <div className="text-right">
                     <p className="text-sm font-bold">{item.cost}</p>
                     <p className="text-xs text-foreground/30">{item.date}</p>
                   </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Right: Plan Comparison / CTA */}
        <div className="lg:col-span-1 space-y-6">
          <GlassCard className="p-8 space-y-8 bg-gradient-to-br from-secondary/10 to-primary/10 border-primary/20">
            <h3 className="text-xl font-bold tracking-tight">Need more credits?</h3>
            <div className="space-y-6">
              {plans.map((plan) => (
                <div key={plan.name} className="flex items-center justify-between group cursor-pointer">
                   <div className="space-y-1">
                     <div className="flex items-center gap-2">
                       <p className="font-bold">{plan.name}</p>
                       {plan.popular && (
                         <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full font-black uppercase">Pop</span>
                       )}
                     </div>
                     <p className="text-xs text-foreground/40">{plan.credits} Credits</p>
                   </div>
                   <p className="text-lg font-black italic">
                     ${plan.price}<span className="text-xs font-normal not-italic opacity-50">/mo</span>
                   </p>
                </div>
              ))}
            </div>
            
            <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 flex gap-3 text-orange-400">
               <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
               <p className="text-[10px] font-bold uppercase leading-relaxed font-black">
                 Premium plan offers total unlimited access to all brand contacts and priority lead matching.
               </p>
            </div>

            <CapsuleButton className="w-full py-4 text-glow">
              Upgrade to Premium
            </CapsuleButton>
            
            <p className="text-[10px] text-center text-foreground/30 uppercase font-black tracking-widest">
              Stripe Secure Payment
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
