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
    <div className="min-h-screen flex flex-col bg-gradient-premium relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full animate-pulse" />

      <div className="flex-grow flex items-center justify-center p-6 lg:p-12 relative z-10">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <span className="text-2xl font-bold tracking-tight">Clutch Momentum</span>
            </Link>
          </div>
          
          <GlassCard variant="frosted" className="p-8 shadow-2xl border-white/20">
            {children}
          </GlassCard>
          
          <div className="mt-8 text-center">
            <p className="text-xs text-foreground/40 font-medium">
              &copy; {year || "2026"} Clutch Momentum. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
