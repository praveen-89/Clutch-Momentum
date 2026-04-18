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
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex-grow flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-grow overflow-y-auto p-8 relative">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
