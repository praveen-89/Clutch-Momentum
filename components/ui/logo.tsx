"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({ className, variant = "full", size = "md" }: LogoProps) {
  const sizeConfigs = {
    sm: { container: "px-4 py-2 rounded-lg", icon: "h-6" },
    md: { container: "px-6 py-4 rounded-xl", icon: "h-10" },
    lg: { container: "px-10 py-8 rounded-[1.5rem]", icon: "h-14" },
    xl: { container: "px-16 py-12 rounded-[2.5rem]", icon: "h-24" },
  };

  const config = sizeConfigs[size];

  if (variant === "icon") {
    return (
      <div className={cn("inline-flex items-center justify-center bg-white shadow-xl", config.container, className)}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(config.icon, "w-auto")}
        >
          <text
            x="50%"
            y="85"
            textAnchor="middle"
            className="font-black italic"
            style={{ fontSize: "90px", fill: "#FF4D00" }}
          >
            C
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div className={cn("inline-flex items-center justify-center bg-white shadow-2xl", config.container, className)}>
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(config.icon, "w-auto overflow-visible focus:outline-none")}
      >
        {/* Large 'C' - Perfectly centered vertically in 240 height */}
        <text
          x="10"
          y="160"
          className="font-black"
          style={{ 
            fontSize: "140px", 
            fill: "#FF4D00",
            fontFamily: "Inter, system-ui, sans-serif" 
          }}
        >
          C
        </text>

        {/* Vertical Text 'Clutch Momentum' - Centered composition */}
        <g transform="translate(120, 60)">
          <text
            x="0"
            y="0"
            transform="rotate(90)"
            className="font-black uppercase tracking-tighter"
            style={{ 
              fontSize: "24px", 
              fill: "#FF4D00",
              fontFamily: "Inter, system-ui, sans-serif"
            }}
          >
            Clutch
          </text>
          <text
            x="85"
            y="0"
            transform="rotate(90)"
            className="font-black uppercase tracking-tighter"
            style={{ 
              fontSize: "24px", 
              fill: "#000000",
              fontFamily: "Inter, system-ui, sans-serif"
            }}
          >
            Momentum
          </text>
        </g>

        {/* Large 'M' - Perfectly centered vertically in 240 height */}
        <text
          x="145"
          y="200"
          className="font-black"
          style={{ 
            fontSize: "140px", 
            fill: "#000000",
            fontFamily: "Inter, system-ui, sans-serif"
          }}
        >
          M
        </text>
      </svg>
    </div>
  );
}
