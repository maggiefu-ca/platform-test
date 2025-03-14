
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  shimmerEffect?: boolean;
  animationDelay?: '100' | '200' | '300' | '400' | '500';
}

const GlassCard = ({
  children,
  className,
  hoverEffect = true,
  shimmerEffect = false,
  animationDelay,
  ...props
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/10 dark:border-white/5 p-5",
        "shadow-glass transition-all duration-300 ease-in-out",
        hoverEffect && "hover:shadow-glass-hover hover:bg-white/15 dark:hover:bg-black/15 hover:-translate-y-0.5",
        shimmerEffect && "shimmer",
        animationDelay && `delay-${animationDelay}`,
        "animate-scale-in",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
