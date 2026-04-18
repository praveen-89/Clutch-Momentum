"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  Users, 
  Database, 
  CreditCard, 
  Zap, 
  Settings, 
  LogOut,
  ChevronRight,
  ShieldAlert
} from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

export function AdminSidebar() {
  const pathname = usePathname();
  const { logout } = useAuthStore();

  const navItems = [
    { name: "Admin Dashboard", href: "/admin/dashboard", icon: BarChart3 },
    { name: "Manage Contacts", href: "/admin/manage-contacts", icon: Database },
    { name: "Manage Users", href: "/admin/manage-users", icon: Users },
    { name: "Subscriptions", href: "/admin/subscriptions", icon: CreditCard },
    { name: "Lead Requests", href: "/admin/exclusive-requests", icon: Zap },
    { name: "System Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-950 flex flex-col h-full shadow-[20px_0_40px_rgba(0,0,0,0.5)]">
      <div className="p-8">
        <Link href="/admin/dashboard" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform">
            <ShieldAlert size={20} />
          </div>
          <div>
            <span className="block font-black tracking-tighter text-lg uppercase italic text-white leading-none">Admin</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 leading-none">Console</span>
          </div>
        </Link>
      </div>

      <div className="px-4 py-2">
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-3 mb-6">
          <div className="flex items-center gap-3 text-emerald-500 mb-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest leading-none">System Healthy</span>
          </div>
          <p className="text-[10px] text-slate-500 font-bold uppercase">Node Cluster: US-EAST-1</p>
        </div>
      </div>

      <nav className="flex-grow px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center justify-between px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-200",
                isActive 
                  ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20" 
                  : "text-slate-500 hover:text-white hover:bg-slate-900"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon size={16} className={cn(isActive ? "text-white" : "text-slate-600 group-hover:text-blue-500")} />
                {item.name}
              </div>
              {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white/50" />}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-slate-900">
        <button 
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-xs font-black uppercase tracking-widest text-slate-500 hover:text-red-500 hover:bg-red-500/10 transition-all border border-transparent hover:border-red-500/20"
        >
          <LogOut size={16} />
          Safe Eject
        </button>
      </div>
    </aside>
  );
}
