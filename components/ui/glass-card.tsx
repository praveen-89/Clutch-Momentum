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
        variant === "glass" && "bg-glass backdrop-blur-md border-glass-border shadow-lg",
        variant === "frosted" && "bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl",
        variant === "solid" && "bg-card border-glass-border shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
