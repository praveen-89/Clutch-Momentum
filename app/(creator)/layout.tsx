"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";

// Loading components for Phase 2/3
function PageLoader() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center space-y-4 animate-pulse">
      <div className="w-12 h-12 rounded-full bg-primary/20 border-4 border-primary/10 border-t-primary animate-spin" />
      <p className="text-sm font-bold uppercase tracking-widest text-foreground/40">Secure Connection Establishing...</p>
    </div>
  );
}

export default function CreatorLayout({
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
        router.push("/login");
      } else if (user?.role !== "creator") {
        router.push("/login");
      }
    }
  }, [isMounted, isAuthenticated, user, isLoading, router]);

  if (!isMounted || isLoading || !isAuthenticated || user?.role !== "creator") {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background">
        <PageLoader />
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-900 relative">
      {/* Background Decor - Elite Orange Theme */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-400/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-400/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <Sidebar />
      <div className="flex-grow flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-grow overflow-y-auto bg-slate-50/50 relative">
          <div className="max-w-[1600px] mx-auto p-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
