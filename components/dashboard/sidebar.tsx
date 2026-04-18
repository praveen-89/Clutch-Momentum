"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  Zap, 
  User, 
  Settings, 
  LogOut,
  ChevronRight
} from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { motion } from "framer-motion";

export function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuthStore();

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Brand Contacts", href: "/brand-contacts", icon: Users },
    { name: "Exclusive Leads", href: "/exclusive-leads", icon: Zap },
    { name: "Credits & Usage", href: "/usage", icon: CreditCard },
    { name: "My Profile", href: "/profile", icon: User },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <aside className="w-72 border-r border-slate-200 bg-white/90 backdrop-blur-3xl flex flex-col h-full shadow-[20px_0_60px_rgba(0,0,0,0.05)] z-30 relative">
      <div className="p-8">
        <Link href="/dashboard" className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-2xl bg-orange-600 flex items-center justify-center text-white font-black shadow-[0_0_30px_rgba(249,115,22,0.2)] group-hover:scale-110 transition-all duration-500 border border-orange-400/30">
            <span className="text-xl">C</span>
          </div>
          <div className="space-y-0.5">
            <span className="block font-black tracking-tighter text-2xl uppercase italic text-slate-900 leading-none">Clutch</span>
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-600 leading-none">Momentum</span>
          </div>
        </Link>
      </div>

      <div className="px-6 py-2">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-4 group hover:border-orange-500/30 transition-all duration-500 shadow-sm text-center">
          <div className="flex items-center justify-center gap-3 text-emerald-600 mb-2">
            <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse outline outline-4 outline-emerald-500/10" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-none">Account Valid</span>
          </div>
          <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest leading-none">Identity: <span className="text-slate-900">Passed</span></p>
        </div>
      </div>

      <nav className="flex-grow px-6 space-y-3 overflow-y-auto mt-2 custom-scrollbar pr-2">
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
                    layoutId="active-nav-creator"
                    className="w-1.5 h-6 bg-white/40 rounded-full absolute right-3 z-10"
                />
              )}
            </Link>
          );
        })}
        
        <div className="pt-8 pb-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 group cursor-help hover:border-orange-200 transition-all shadow-sm">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-orange-600 mb-2">Member Authority</p>
                <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-black italic tracking-tighter uppercase text-slate-900 leading-none">Starter Plan</p>
                    <span className="text-[9px] font-black text-slate-400">85% Health</span>
                </div>
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mb-4">
                    <div className="w-[85%] h-full bg-orange-600 shadow-[0_0_10px_rgba(249,115,22,0.4)]" />
                </div>
                <Link href="/usage" className="block text-center text-[9px] text-slate-400 font-black uppercase tracking-widest hover:text-orange-600 transition-colors">
                    Account Management
                </Link>
            </div>
        </div>
      </nav>

      <div className="p-6 border-t border-slate-100 bg-slate-50/30 mt-auto">
        <button 
          onClick={logout}
          className="flex items-center justify-center gap-3 px-6 py-4 w-full rounded-2xl text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all border border-transparent hover:border-red-200 group active:scale-95 shadow-sm bg-white/50"
        >
          <LogOut size={16} className="group-hover:-translate-x-1 transition-transform" />
          Logout
        </button>
      </div>
    </aside>
  );
}
