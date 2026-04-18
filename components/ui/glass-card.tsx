"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "glass" | "frosted";
}

export function GlassCard({ 
  children, 
  className, 
  variant = "glass",
  ...props 
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl border transition-all duration-300",
        variant === "glass" && "bg-glass/80 backdrop-blur-xl border-glass-border shadow-2xl hover:border-primary/30",
        variant === "frosted" && "bg-white/10 backdrop-blur-2xl border-white/20 shadow-2xl ring-1 ring-white/10",
        variant === "solid" && "bg-card backdrop-blur-md border-glass-border shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
