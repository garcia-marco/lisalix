import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function H1({
  children,
  className,
  display = false,
}: {
  children: ReactNode;
  className?: string;
  /** Larger editorial size; `<em>` inside renders as light Bodoni italic. */
  display?: boolean;
}) {
  return (
    <h1
      className={cn(
        "font-heading font-bold text-brand",
        display
          ? "text-4xl leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-5xl lg:text-[4.25rem] [&_em]:font-normal"
          : "text-4xl sm:text-5xl",
        className
      )}
    >
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
