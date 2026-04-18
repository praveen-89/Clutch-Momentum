"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Users, 
  Database, 
  CreditCard, 
  Zap, 
  Settings, 
  LogOut,
  ShieldAlert
} from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

export function AdminSidebar() {
  const pathname = usePathname();
  const { logout } = useAuthStore();

  const navItems = [
    { name: "Admin Dashboard", href: "/admin/dashboard", icon: BarChart3 },
    { name: "Manage Contacts", href: "/admin/manage-contacts", icon: Database },
    { name: "Manage Brands", href: "/admin/manage-brands", icon: ShieldAlert },
    { name: "Manage Users", href: "/admin/manage-users", icon: Users },
    { name: "Subscriptions", href: "/admin/subscriptions", icon: CreditCard },
    { name: "Lead Requests", href: "/admin/exclusive-requests", icon: Zap },
    { name: "System Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <aside className="w-72 border-r border-slate-200 bg-white/90 backdrop-blur-3xl flex flex-col h-full shadow-[20px_0_60px_rgba(0,0,0,0.05)] z-30 relative">
      <div className="p-8">
        <Link href="/admin/dashboard" className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-2xl bg-orange-600 flex items-center justify-center text-white font-black shadow-[0_0_30px_rgba(249,115,22,0.2)] group-hover:scale-110 transition-all duration-500 border border-orange-400/30">
            <ShieldAlert size={24} />
          </div>
          <div className="space-y-0.5">
            <span className="block font-black tracking-tighter text-2xl uppercase italic text-slate-900 leading-none">Admin</span>
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-600 leading-none">Console</span>
          </div>
        </Link>
      </div>


      <nav className="flex-grow px-6 space-y-3 overflow-y-auto mt-2 custom-scrollbar pr-2">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-3 group hover:border-orange-500/30 transition-all duration-500 shadow-sm text-center">
          <div className="flex items-center justify-center gap-3 text-emerald-600 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse outline outline-4 outline-emerald-500/10" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-none">System Healthy</span>
          </div>
          <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest leading-none">Active Node: <span className="text-slate-900">US-EAST-1</span></p>
        </div>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center justify-between px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 relative",
                isActive 
                  ? "text-white bg-orange-600 shadow-xl shadow-orange-600/20" 
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/50"
              )}
            >
              <div className="flex items-center gap-4 relative z-10">
                <item.icon size={18} className={cn(
                    "transition-all duration-300",
                    isActive ? "text-white scale-110" : "text-slate-400 group-hover:text-orange-600"
                )} />
                <span className={cn(isActive && "italic font-black")}>{item.name}</span>
              </div>

              {isActive && (
                <motion.div 
                    layoutId="active-nav-admin"
                    className="w-1.5 h-6 bg-white/40 rounded-full absolute right-3 z-10"
                />
              )}
            </Link>
          );
        })}
        <div className="h-10 w-full" />
      </nav>

      <div className="p-6 border-t border-slate-100 bg-slate-50/30 mt-auto">
        <button 
          onClick={logout}
          className="flex items-center justify-center gap-3 px-6 py-4 w-full rounded-2xl text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all border border-transparent hover:border-red-200 group active:scale-95 shadow-sm bg-white/50"
        >
          <LogOut size={16} className="group-hover:-translate-x-1 transition-transform" />
          Safe Eject
        </button>
      </div>
    </aside>
  );
}
