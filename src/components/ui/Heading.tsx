import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function H1({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h1 className={cn("font-heading text-4xl font-bold text-brand sm:text-5xl", className)}>
      {children}
    </h1>
  );
}

export function H2({
  children,
  className,
  light = false,
}: {
  children: ReactNode;
  className?: string;
  /** Use on a dark (brand) background. */
  light?: boolean;
}) {
  return (
    <h2
      className={cn(
        "font-heading text-2xl font-bold sm:text-3xl",
        light ? "text-white" : "text-brand",
        className
      )}
    >
      {children}
    </h2>
  );
}
