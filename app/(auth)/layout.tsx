"use client";

import { GlassCard } from "@/components/ui/glass-card";
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

      <div className="flex-grow flex items-center justify-center p-6 lg:p-12 relative z-10">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              <div className="w-12 h-12 rounded-2xl bg-orange-600 flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-orange-600/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                C
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase italic">Clutch <span className="text-orange-500 text-glow">Momentum</span></span>
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
