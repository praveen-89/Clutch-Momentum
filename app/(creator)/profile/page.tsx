"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { PremiumInput } from "@/components/ui/premium-input";
import { 
  Camera, 
  Video, 
  Globe, 
  Share2, 
  CheckCircle2, 
  AlertCircle,
  Send,
  User
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const { user } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 w-fit"
            >
                <User size={12} className="text-orange-600" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-600">Identity Management Hub</span>
            </motion.div>
            <h1 className="text-4xl lg:text-5xl font-black italic uppercase tracking-tighter leading-none text-slate-900">
                Member <span className="text-orange-600 text-glow">Dossier.</span>
            </h1>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mt-2">
                Configure your public-facing authority and niche expertise
            </p>
        </div>
        
        <div className="flex gap-4">
          <CapsuleButton variant="outline" className="flex items-center gap-3 border-slate-200 bg-white/50 text-slate-900 shadow-sm hover:bg-white py-4">
            <Share2 size={16} className="text-slate-400" />
            <span className="text-[10px] font-black uppercase tracking-widest">Share Node</span>
          </CapsuleButton>
          <CapsuleButton 
            onClick={() => setIsEditing(!isEditing)}
            className="bg-orange-600 text-white shadow-xl shadow-orange-600/20 flex items-center gap-3 py-4 border-none active:scale-95"
          >
            <span className="text-[10px] font-black uppercase tracking-widest">
                {isEditing ? "Encrypt & Save" : "Modify Dossier"}
            </span>
          </CapsuleButton>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Profile Card Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <GlassCard className="p-10 text-center space-y-8 border-slate-200 bg-white shadow-sm transition-all hover:bg-orange-50/10 duration-500 group">
            <div className="relative inline-block">
              <div className="w-40 h-40 rounded-[2.5rem] bg-orange-600 border border-orange-400/30 p-1 shadow-2xl shadow-orange-500/20 group-hover:scale-105 transition-transform duration-700">
                <div className="w-full h-full rounded-[2.2rem] bg-white flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent shadow-inner" />
                   <span className="text-6xl font-black italic italic-0 text-slate-900 leading-none relative z-10">
                     {user?.name.charAt(0)}
                   </span>
                </div>
              </div>
              <button className="absolute -bottom-2 -right-2 p-4 rounded-2xl bg-slate-900 text-white shadow-2xl hover:bg-orange-600 transition-colors z-20">
                <Camera size={20} />
              </button>
            </div>

            <div>
              <h3 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900 group-hover:text-orange-600 transition-colors">{user?.name}</h3>
              <p className="text-[10px] text-orange-600 font-black uppercase tracking-[0.3em] mt-2">Tech & Lifestyle Strategist</p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-between text-emerald-600 shadow-sm">
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
                <CheckCircle2 size={18} />
                Authority Verified
              </div>
              <span className="text-[9px] bg-emerald-600 text-white px-3 py-1 rounded-full font-black shadow-lg shadow-emerald-600/20">ELITE</span>
            </div>

            <div className="space-y-4 pt-8 border-t border-slate-100">
              <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest">
                <span className="text-slate-400">Deployment</span>
                <span className="text-slate-900">New York, USA</span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest">
                <span className="text-slate-400">Commissioned</span>
                <span className="text-slate-900">April 2026</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8 space-y-6 border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between mb-2">
                <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Dossier Readiness</h4>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-[10px] font-black text-orange-600">85% Complete</span>
                </div>
            </div>
            
            <div className="space-y-6">
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                <div className="w-[85%] h-full bg-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.4)]" />
              </div>
              <p className="text-[10px] text-slate-500 font-bold leading-relaxed uppercase tracking-widest italic flex gap-3">
                <AlertCircle size={14} className="text-orange-500 flex-shrink-0" />
                Instruction: Synchronizing YouTube analytics increases brand trust yield by 40%.
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Edit Form Area */}
        <div className="lg:col-span-2 space-y-10">
          <GlassCard className="p-10 space-y-10 border-slate-200 bg-white shadow-sm">
            <h3 className="text-xl font-black italic uppercase tracking-tight text-slate-900 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-orange-600 shadow-[0_0_10px_rgba(249,115,22,0.2)]" />
              Operational Parameters
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PremiumInput label="Subject Name" defaultValue={user?.name} className="bg-slate-50 border-slate-200 focus:border-orange-500/50" />
              <PremiumInput label="Encrypted Email" defaultValue={user?.email} readOnly className="opacity-60 bg-slate-100 border-slate-200" />
              <PremiumInput label="Mobile Node" placeholder="+1 (555) 000-0000" className="bg-slate-50 border-slate-200" />
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Deployment Niche</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm font-bold uppercase tracking-tight text-slate-900 outline-none focus:border-orange-500/50 focus:ring-8 focus:ring-orange-500/5 transition-all shadow-inner">
                  <option>Technology & Gadgets</option>
                  <option>Lifestyle & Travel</option>
                  <option>Fashion & Beauty</option>
                  <option>Fitness & Wellness</option>
                  <option>Business & Finance</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-4">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Executive Summary / Rationale</label>
              <textarea 
                className="w-full h-40 bg-slate-50 border border-slate-200 rounded-[2rem] p-8 text-sm font-medium outline-none focus:border-orange-500/50 focus:ring-8 focus:ring-orange-500/5 transition-all shadow-inner placeholder:text-slate-300"
                placeholder="Share a brief overview of your content and why brands should collaborate with you..."
                defaultValue="Tech enthusiast and full-stack developer sharing journey into high-performance web systems and AI tools. 85k combined followers across major platforms."
              />
            </div>
          </GlassCard>

          <GlassCard className="p-10 space-y-10 border-slate-200 bg-white shadow-sm">
            <h3 className="text-xl font-black italic uppercase tracking-tight text-slate-900 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-orange-600 shadow-[0_0_10px_rgba(249,115,22,0.2)]" />
              Network Connectivity
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <Camera className="absolute left-6 top-1/2 -translate-y-1/2 text-orange-600" size={20} />
                <input 
                  type="text" 
                  placeholder="Instagram Linkage" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-16 pr-6 text-xs font-black uppercase tracking-widest text-slate-900 outline-none focus:border-orange-500/50 focus:ring-8 focus:ring-orange-500/5 transition-all shadow-inner placeholder:text-slate-300"
                />
              </div>
              <div className="relative group">
                <Send className="absolute left-6 top-1/2 -translate-y-1/2 text-orange-600" size={20} />
                <input 
                  type="text" 
                  placeholder="X Network Linkage" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-16 pr-6 text-xs font-black uppercase tracking-widest text-slate-900 outline-none focus:border-orange-500/50 focus:ring-8 focus:ring-orange-500/5 transition-all shadow-inner placeholder:text-slate-300"
                />
              </div>
              <div className="relative group">
                <Video className="absolute left-6 top-1/2 -translate-y-1/2 text-orange-600" size={20} />
                <input 
                  type="text" 
                  placeholder="YouTube Linkage" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-16 pr-6 text-xs font-black uppercase tracking-widest text-slate-900 outline-none focus:border-orange-500/50 focus:ring-8 focus:ring-orange-500/5 transition-all shadow-inner placeholder:text-slate-300"
                />
              </div>
              <div className="relative group">
                <Globe className="absolute left-6 top-1/2 -translate-y-1/2 text-orange-600" size={20} />
                <input 
                  type="text" 
                  placeholder="Domain Linkage" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-16 pr-6 text-xs font-black uppercase tracking-widest text-slate-900 outline-none focus:border-orange-500/50 focus:ring-8 focus:ring-orange-500/5 transition-all shadow-inner placeholder:text-slate-300"
                />
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
