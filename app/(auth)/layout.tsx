"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 relative overflow-hidden text-slate-100">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      
      {/* Decorative Elite Orange Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/20 blur-[120px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-600/10 blur-[120px] rounded-full animate-pulse pointer-events-none" />

      <div className="flex-grow flex items-start justify-center p-4 py-24 lg:p-12 relative z-10 overflow-y-auto custom-scrollbar">
        <div className="w-full max-w-md">
          <div className="text-center mb-10 flex justify-center">
            <Link href="/" className="inline-flex items-center gap-3 group transition-transform hover:scale-105 active:scale-95">
              <Logo size="lg" />
            </Link>
          </div>
          
          <GlassCard variant="frosted" className="p-8 md:p-12 shadow-2xl shadow-black border-slate-800 bg-slate-900/60 backdrop-blur-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none" />
            {children}
          </GlassCard>
          
          <div className="mt-8 text-center flex items-center justify-center gap-2 opacity-50">
             <div className="w-1 h-1 rounded-full bg-slate-500" />
             <div className="w-1 h-1 rounded-full bg-slate-500" />
             <div className="w-1 h-1 rounded-full bg-slate-500" />
          </div>
          <div className="mt-4 text-center">
            <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">
              &copy; {year || "2026"} Clutch Momentum. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
