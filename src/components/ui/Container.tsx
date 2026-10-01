import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Centers content at the site's shell width (1124px). Callers must supply their
 * own horizontal padding (e.g. `px-2.5` for chrome like the header/footer bars,
 * `px-6 sm:px-8` for page content) — Container itself stays unopinionated about it
 * so `Section`'s colored variants can bleed their background exactly to that edge.
 */
export function Container({
  children,
  className,
  fluid = false,
}: {
  children: ReactNode;
  className?: string;
  /** Wider 1440px shell instead of the default 1124px. */
  fluid?: boolean;
}) {
  return (
    <div className={cn("mx-auto", fluid ? "max-w-[1440px]" : "max-w-[1124px]", className)}>
      {children}
    </div>
  );
}

/**
 * Max width of the content inside the fluid cards (hero text + visual, client
 * logos).
 */
export const contentWidth = "mx-auto w-full max-w-[1200px]";
