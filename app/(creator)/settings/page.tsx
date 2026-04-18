"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { CapsuleButton } from "@/components/ui/capsule-button";
import { PremiumInput } from "@/components/ui/premium-input";
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

export default function SettingsPage() {
  const { logout } = useAuthStore();
  const [notifications, setNotifications] = useState({
    emails: true,
    leads: true,
    marketing: false,
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
        <p className="text-foreground/50">Manage your preferences, security, and account status.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Navigation / Sections Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <GlassCard className="p-4 space-y-1">
            {[
              { name: "General Settings", icon: SettingsIcon, active: true },
              { name: "Security & Password", icon: Shield, active: false },
              { name: "Notifications", icon: Bell, active: false },
              { name: "Profile Management", icon: User, active: false },
              { name: "Display & Theme", icon: Moon, active: false },
            ].map((section) => (
              <button
                key={section.name}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  section.active 
                    ? "bg-primary text-white" 
                    : "text-foreground/60 hover:bg-white/5"
                }`}
              >
                <section.icon size={18} />
                {section.name}
              </button>
            ))}
          </GlassCard>

          <GlassCard className="p-4 border-rose-500/20 bg-rose-500/5">
            <button 
              onClick={logout}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-rose-500 hover:bg-rose-500/10 transition-colors"
            >
              <LogOut size={18} />
              Terminate Session
            </button>
          </GlassCard>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-2 space-y-8">
          {/* Security Section */}
          <GlassCard className="p-8 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Shield size={20} />
              </div>
              <h3 className="text-xl font-bold">Security & Password</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PremiumInput label="Current Password" type="password" placeholder="••••••••" />
              <div /> {/* Spacer */}
              <PremiumInput label="New Password" type="password" placeholder="••••••••" />
              <PremiumInput label="Confirm New Password" type="password" placeholder="••••••••" />
            </div>

            <div className="pt-4">
              <CapsuleButton>Update Password</CapsuleButton>
            </div>
          </GlassCard>

          {/* Notifications Section */}
          <GlassCard className="p-8 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary">
                <Bell size={20} />
              </div>
              <h3 className="text-xl font-bold">Notification Preferences</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-white/5 text-foreground/40">
                    <Globe size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">In-App Notifications</p>
                    <p className="text-xs text-foreground/40">Alerts for lead requests and credit resets</p>
                  </div>
                </div>
                <div className="w-12 h-6 rounded-full bg-primary relative cursor-pointer">
                  <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-white/5 text-foreground/40">
                    <Smartphone size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Browser Push</p>
                    <p className="text-xs text-foreground/40">Receive updates even when tab is closed</p>
                  </div>
                </div>
                <div className="w-12 h-6 rounded-full bg-foreground/10 relative cursor-pointer group">
                  <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-foreground/40 group-hover:bg-foreground/60 transition-all shadow-sm" />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <CapsuleButton variant="outline">Save Preferences</CapsuleButton>
            </div>
          </GlassCard>

          {/* Appearance Section */}
          <GlassCard className="p-8 space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                  <Sun size={20} />
                </div>
                <h3 className="text-xl font-bold">Display Settings</h3>
              </div>
              <div className="flex p-1 rounded-xl bg-white/5 border border-white/10">
                <button className="p-2 px-4 rounded-lg bg-primary text-white shadow-lg flex items-center gap-2 text-xs font-bold">
                  <Sun size={14} /> Light
                </button>
                <button className="p-2 px-4 rounded-lg text-foreground/40 hover:text-foreground flex items-center gap-2 text-xs font-bold">
                  <Moon size={14} /> Dark
                </button>
              </div>
            </div>
            
            <p className="text-sm text-foreground/40 bg-white/5 p-4 rounded-xl border border-white/5 italic">
              Theme settings are currently mocked in this demo. Real system-wide theme switching will be implemented in the next phase.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
