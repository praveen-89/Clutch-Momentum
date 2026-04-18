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

export default function ProfilePage() {
  const { user } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
          <p className="text-foreground/50">Showcase your brand-readiness and niche expertise.</p>
        </div>
        
        <div className="flex gap-3">
          <CapsuleButton variant="outline" className="flex items-center gap-2">
            <Share2 size={16} />
            Share Profile
          </CapsuleButton>
          <CapsuleButton onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Save Changes" : "Edit Profile"}
          </CapsuleButton>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <GlassCard className="p-8 text-center space-y-6">
            <div className="relative inline-block group">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary to-secondary p-[3px] shadow-[0_0_40px_rgba(37,99,235,0.2)]">
                <div className="w-full h-full rounded-[21px] bg-background flex items-center justify-center text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {user?.name.charAt(0)}
                </div>
              </div>
              <button className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-primary text-white shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera size={16} />
              </button>
            </div>

            <div>
              <h3 className="text-2xl font-bold">{user?.name}</h3>
              <p className="text-sm text-foreground/50 font-medium">Tech & Lifestyle Creator</p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-between text-emerald-500">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <CheckCircle2 size={16} />
                Profile Verified
              </div>
              <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded-full font-black">PRO</span>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground/40 font-medium">Location</span>
                <span className="font-bold">New York, USA</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground/40 font-medium">Joined</span>
                <span className="font-bold">April 2026</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/40">Profile Completion</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-bold">
                <span>Overall Status</span>
                <span className="text-primary">85%</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-primary shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
              </div>
              <p className="text-xs text-foreground/40 leading-relaxed italic">
                * Tip: Adding your YouTube analytics increases brand trust by 40%.
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Edit Form Area */}
        <div className="lg:col-span-2 space-y-8">
          <GlassCard className="p-8 space-y-8">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <User size={20} className="text-primary" />
              Creator Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PremiumInput label="Full Name" defaultValue={user?.name} />
              <PremiumInput label="Email Address" defaultValue={user?.email} readOnly />
              <PremiumInput label="Phone Number" placeholder="+1 (555) 000-0000" />
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70 ml-1">Creator Niche</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none">
                  <option>Technology & Gadgets</option>
                  <option>Lifestyle & Travel</option>
                  <option>Fashion & Beauty</option>
                  <option>Fitness & Wellness</option>
                  <option>Business & Finance</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70 ml-1">Bio / Outreach Statement</label>
              <textarea 
                className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                placeholder="Share a brief overview of your content and why brands should collaborate with you..."
                defaultValue="Tech enthusiast and full-stack developer sharing journey into high-performance web systems and AI tools. 85k combined followers across major platforms."
              />
            </div>
          </GlassCard>

          <GlassCard className="p-8 space-y-8">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Share2 size={20} className="text-secondary" />
              Social Media Links
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <Camera className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-500" size={18} />
                <input 
                  type="text" 
                  placeholder="Instagram URL" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm outline-none focus:border-pink-500/50 focus:ring-4 focus:ring-pink-500/5 transition-all"
                />
              </div>
              <div className="relative group">
                <Send className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-400" size={18} />
                <input 
                  type="text" 
                  placeholder="X (Twitter) URL" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm outline-none focus:border-sky-400/50 focus:ring-4 focus:ring-sky-400/5 transition-all"
                />
              </div>
              <div className="relative group">
                <Video className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" size={18} />
                <input 
                  type="text" 
                  placeholder="YouTube URL" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm outline-none focus:border-red-500/50 focus:ring-4 focus:ring-red-500/5 transition-all"
                />
              </div>
              <div className="relative group">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Personal Website URL" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm outline-none focus:border-emerald-400/50 focus:ring-4 focus:ring-emerald-400/5 transition-all"
                />
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
