import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

export function Eyebrow({
  children,
  icon,
  light = false,
  className,
}: {
  children: ReactNode;
  icon?: string;
  /** Use on a dark (brand) background. */
  light?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex w-max items-center gap-1.5 rounded-[20px] border px-[15px] py-0.5 text-xs font-bold tracking-wide",
        light ? "border-white text-white" : "border-brand text-brand",
        className
      )}
    >
      {icon && <Icon name={icon} size={14} />}
      {children}
    </p>
  );
}
