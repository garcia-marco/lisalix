import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Subtitle({
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
    <p className={cn(light ? "text-white/80" : "text-neutral-700", className)}>{children}</p>
  );
}
