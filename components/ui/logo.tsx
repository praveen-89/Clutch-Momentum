"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({ className, variant = "full", size = "md" }: LogoProps) {
  const sizeConfigs = {
    sm: { width: 56, height: 56 },
    md: { width: 80, height: 80 },
    lg: { width: 120, height: 120 },
    xl: { width: 220, height: 220 },
  };

  const config = sizeConfigs[size];

  return (
    <div className={cn("inline-flex items-center justify-center shrink-0 overflow-visible p-1", className)}>
      <Image
        src="/logo.png"
        alt="Clutch Momentum"
        width={config.width}
        height={config.height}
        className="object-contain"
        priority
      />
    </div>
  );
}
