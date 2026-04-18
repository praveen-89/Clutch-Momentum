"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface PremiumInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  className?: string;
}

export function PremiumInput({
  label,
  error,
  className,
  ...props
}: PremiumInputProps) {
  return (
    <div className="space-y-2 w-full">
      <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">
        {label}
      </label>
      <div className="relative group">
        <input
          className={cn(
            "w-full bg-glass border border-glass-border rounded-xl px-4 py-3 text-sm outline-none",
            "focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300",
            error && "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/10",
            className
          )}
          {...props}
        />
        <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity" />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[10px] font-bold text-rose-500 ml-1 uppercase"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
