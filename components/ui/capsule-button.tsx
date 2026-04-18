"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CapsuleButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function CapsuleButton({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: CapsuleButtonProps) {
  const variants = {
    primary: "bg-primary text-white shadow-[0_0_10px_rgba(249,115,22,0.2)] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]",
    secondary: "bg-secondary text-black shadow-[0_0_10px_rgba(250,204,21,0.2)] hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]",
    outline: "border-2 border-primary/50 text-primary hover:bg-primary/10",
    ghost: "text-foreground/70 hover:text-foreground hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm font-medium",
    lg: "px-8 py-3.5 text-base font-semibold",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
