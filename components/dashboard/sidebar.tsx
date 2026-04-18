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
    <aside className="w-64 border-r border-white/5 bg-background/50 backdrop-blur-xl flex flex-col h-full">
      <div className="p-6">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">
            C
          </div>
          <span className="font-bold tracking-tight">Clutch Momentum</span>
        </Link>
      </div>

      <nav className="flex-grow px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "text-foreground/50 hover:text-foreground hover:bg-white/5"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon size={18} className={cn(isActive ? "text-white" : "text-foreground/40 group-hover:text-primary")} />
                {item.name}
              </div>
              {isActive && <ChevronRight size={14} className="text-white/50" />}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/5 mb-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Current Plan</p>
          <p className="text-sm font-bold">Starter Plan</p>
          <Link href="/usage" className="text-[10px] text-primary hover:underline font-bold mt-2 inline-block">
            Upgrade for more credits
          </Link>
        </div>

        <button 
          onClick={logout}
          className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm font-medium text-rose-500 hover:bg-rose-500/10 transition-colors"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
