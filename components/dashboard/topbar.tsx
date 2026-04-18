"use client";

import { Bell, Search, Sparkles, User } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { cn } from "@/lib/utils";

export function Topbar() {
  const { user } = useAuthStore();

  return (
    <header className="h-20 border-b border-white/5 bg-background/50 backdrop-blur-xl px-8 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-4 w-full max-w-md">
        <div className="relative w-full group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-primary transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search brand contacts, industries..." 
            className="w-full bg-white/5 border border-white/5 rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20">
          <Sparkles size={16} className="text-primary" />
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70 leading-none mb-1">Available Credits</span>
            <span className="text-sm font-black text-primary leading-none">{user?.credits ?? 0}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-xl hover:bg-white/5 transition-colors text-foreground/50 hover:text-foreground">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background" />
          </button>
          
          <div className="h-8 w-px bg-white/5" />
          
          <div className="flex items-center gap-3 pl-2">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold leading-none">{user?.name}</p>
              <p className="text-[10px] text-foreground/40 mt-1 uppercase font-bold tracking-wider">{user?.plan} plan</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary p-[2px]">
              <div className="w-full h-full rounded-xl bg-background flex items-center justify-center font-bold">
                {user?.name?.charAt(0)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
