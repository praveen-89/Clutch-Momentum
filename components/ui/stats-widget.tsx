"use client";

import { GlassCard } from "./glass-card";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatsWidgetProps {
  label: string;
  value: string | number;
  description?: string;
  trend?: {
    value: number;
    isUp: boolean;
  };
  icon?: React.ReactNode;
  className?: string;
}

export function StatsWidget({
  label,
  value,
  description,
  trend,
  icon,
  className,
}: StatsWidgetProps) {
  return (
    <GlassCard className={cn("p-6 flex flex-col justify-between h-full", className)}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
            {label}
          </p>
          <h3 className="text-3xl font-bold tracking-tight">{value}</h3>
        </div>
        {icon && (
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            {icon}
          </div>
        )}
      </div>
      
      {(trend || description) && (
        <div className="mt-6 flex items-center justify-between text-xs">
          {description && <p className="text-foreground/40 font-medium">{description}</p>}
          {trend && (
            <div className={cn(
              "flex items-center gap-1 font-bold",
              trend.isUp ? "text-emerald-500" : "text-rose-500"
            )}>
              {trend.isUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              {trend.value}%
            </div>
          )}
        </div>
      )}
    </GlassCard>
  );
}
