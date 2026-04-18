"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { PremiumInput } from "@/components/ui/premium-input";
import { cn } from "@/lib/utils";
import { 
  Bell, 
  Moon, 
  Sun, 
  Shield, 
  LogOut, 
  User, 
  Settings as SettingsIcon,
  Globe,
  Smartphone
} from "lucide-react";
import { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { motion } from "framer-motion";

export default function SettingsPage() {
  const { logout } = useAuthStore();
  const [notifications, setNotifications] = useState({
    emails: true,
    leads: true,
    marketing: false,
  });

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 w-fit"
            >
                <SettingsIcon size={12} className="text-orange-600" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-600">Instance Configuration Node</span>
            </motion.div>
            <h1 className="text-4xl lg:text-5xl font-black italic uppercase tracking-tighter leading-none text-slate-900">
                Global <span className="text-orange-600 text-glow">Parameters.</span>
            </h1>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mt-2">
                Configure your operational preferences and security protocols
            </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Navigation / Sections Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <GlassCard className="p-4 space-y-1 bg-white border-slate-200 shadow-sm">
            {[
              { name: "General Settings", icon: SettingsIcon, active: true },
              { name: "Security & Password", icon: Shield, active: false },
              { name: "Notifications", icon: Bell, active: false },
              { name: "Profile Management", icon: User, active: false },
              { name: "Display & Theme", icon: Moon, active: false },
            ].map((section) => (
              <button
                key={section.name}
                className={cn(
                  "w-full flex items-center gap-3 px-6 py-4 rounded-2xl text-[10px] uppercase tracking-widest font-black transition-all",
                  section.active 
                    ? "bg-orange-600 text-white shadow-xl shadow-orange-600/20" 
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                )}
              >
                <section.icon size={16} className={cn(section.active ? "text-white" : "text-slate-400")} />
                {section.name}
              </button>
            ))}
          </GlassCard>

          <GlassCard className="p-6 border-red-100 bg-red-50/30 group hover:bg-red-50 transition-colors shadow-sm">
            <button 
              onClick={logout}
              className="w-full flex items-center justify-center gap-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] text-red-600 transition-all border border-red-200 bg-white group-hover:bg-red-600 group-hover:text-white"
            >
              <LogOut size={16} />
              End Session
            </button>
          </GlassCard>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-10">
          {/* Security Section */}
          <GlassCard className="p-10 space-y-10 border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-5">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-orange-600 shadow-sm">
                <Shield size={22} />
              </div>
              <div>
                  <h3 className="text-xl font-black italic uppercase tracking-tight text-slate-900 leading-none">Security Encryption</h3>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mt-2">Manage access credentials</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PremiumInput label="Active Password" type="password" placeholder="••••••••" className="bg-slate-50 border-slate-200" />
              <div /> {/* Spacer */}
              <PremiumInput label="Revised Key" type="password" placeholder="••••••••" className="bg-slate-50 border-slate-200" />
              <PremiumInput label="Confirm Revised Key" type="password" placeholder="••••••••" className="bg-slate-50 border-slate-200" />
            </div>

            <div className="pt-6">
              <CapsuleButton className="bg-slate-900 text-white hover:bg-orange-600 transition-all py-5 px-10 border-none shadow-xl active:scale-95">
                <span className="text-[11px] font-black uppercase tracking-[0.3em]">Update Credentials</span>
              </CapsuleButton>
            </div>
          </GlassCard>

          {/* Notifications Section */}
          <GlassCard className="p-10 space-y-10 border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-5">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-orange-600 shadow-sm">
                <Bell size={22} />
              </div>
              <div>
                  <h3 className="text-xl font-black italic uppercase tracking-tight text-slate-900 leading-none">Telemetry Alerts</h3>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mt-2">Configure signal distribution</p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { title: 'In-App Signals', desc: 'Real-time alerts for lead requests and credit resets', icon: Globe, active: true },
                { title: 'Mobile Push Telemetry', desc: 'Receive updates even when instance is inactive', icon: Smartphone, active: false },
              ].map((pref, i) => (
                <div key={i} className="flex items-center justify-between p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-orange-200 transition-all group shadow-sm">
                    <div className="flex items-center gap-6">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 group-hover:text-orange-600 transition-colors shadow-sm">
                        <pref.icon size={20} />
                    </div>
                    <div>
                        <p className="text-sm font-black italic uppercase tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">{pref.title}</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{pref.desc}</p>
                    </div>
                    </div>
                    <div className={cn("w-14 h-8 rounded-full relative cursor-pointer border-2 transition-all duration-300", pref.active ? "bg-orange-600 border-orange-400/30" : "bg-slate-100 border-slate-200")}>
                        <div className={cn("absolute top-1 w-5 h-5 rounded-full bg-white transition-all shadow-md", pref.active ? "right-1" : "left-1")} />
                    </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <CapsuleButton variant="outline" className="border-slate-200 text-slate-500 py-5 px-10 hover:bg-slate-50 hover:text-slate-900">
                <span className="text-[11px] font-black uppercase tracking-[0.3em]">Apply Signal Rules</span>
              </CapsuleButton>
            </div>
          </GlassCard>

          {/* Appearance Section */}
          <GlassCard className="p-10 space-y-10 border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <div className="flex items-center gap-5">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-orange-600 shadow-sm">
                  <Sun size={22} />
                </div>
                <div>
                   <h3 className="text-xl font-black italic uppercase tracking-tight text-slate-900 leading-none">Visual Protocol</h3>
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mt-2">Adjust instance rendering</p>
                </div>
              </div>
              <div className="flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner">
                <button className="px-8 py-3 rounded-xl bg-white text-slate-900 shadow-xl flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border border-slate-200">
                  <Sun size={14} className="text-orange-600" /> Solar
                </button>
                <button className="px-8 py-3 rounded-xl text-slate-400 hover:text-slate-900 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest transition-colors">
                  <Moon size={14} /> Lunar
                </button>
              </div>
            </div>
            
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em] bg-slate-50 p-6 rounded-2xl border border-slate-200 italic leading-relaxed text-center">
                System Announcement: Theme protocols are currently synchronized across all member instances. Individual Lunar-switching is undergoing final verification.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
