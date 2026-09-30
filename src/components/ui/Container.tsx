import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Centers content at the site's shell width (1124px). Callers must supply their
 * own horizontal padding (e.g. `px-2.5` for chrome like the header/footer bars,
 * `px-6 sm:px-8` for page content) — Container itself stays unopinionated about it
 * so `Section`'s colored variants can bleed their background exactly to that edge.
 */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-[1124px]", className)}>{children}</div>;
}
