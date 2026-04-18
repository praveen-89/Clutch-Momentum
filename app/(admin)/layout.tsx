"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AdminSidebar } from "@/components/dashboard/admin-sidebar";
import { ShieldCheck, Search, Bell } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, user, isLoading } = useAuthStore();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && !isLoading) {
      if (!isAuthenticated) {
        router.push("/admin-login");
      } else if (user?.role !== "admin") {
        router.push("/admin-login");
      }
    }
  }, [isMounted, isAuthenticated, user, isLoading, router]);

  if (!isMounted || isLoading || !isAuthenticated || user?.role !== "admin") {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-slate-950">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
          <p className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-500">
            Secure Admin Instance Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-950 text-slate-200">
      <AdminSidebar />
      <div className="flex-grow flex flex-col overflow-hidden">
        <header className="h-16 border-b border-slate-900 px-8 flex items-center justify-between bg-slate-950/50 backdrop-blur-xl">
          <div className="flex items-center gap-6">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
              Operational Override
            </h2>
            <div className="h-4 w-px bg-slate-800" />
            <div className="flex items-center gap-2 text-blue-500">
               <ShieldCheck size={14} />
               <span className="text-[10px] font-black uppercase">Root Access</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              <Search size={12} />
              Quick search (Alt+K)
            </div>
            <button className="relative p-2 rounded-lg bg-slate-900 text-slate-400">
              <Bell size={18} />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-500 rounded-full" />
            </button>
            <div className="h-8 w-px bg-slate-800" />
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-[10px] font-black uppercase leading-none">{user.name}</p>
                <p className="text-[8px] text-blue-500 uppercase font-black mt-1">Superuser</p>
              </div>
              <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center font-black text-xs">
                SYS
              </div>
            </div>
          </div>
        </header>
        
        <main className="flex-grow overflow-y-auto p-8 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.05),transparent)]">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
