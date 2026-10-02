import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

// Content pages give their Container `px-6 sm:px-8` (the text gutter). Colored
// sections cancel that with an equal negative margin and add it back as their
// own padding, so the background bleeds out to the container's edge while the
// text lands exactly where plain, uncolored text sits.
const variantClasses = {
  /** Light blue rounded card, used for hero blocks and highlighted content. */
  light: "-mx-6 sm:-mx-8 rounded-[42px] bg-brand-light px-6 sm:px-8",
  /** Solid brand-blue rounded card, used for high-contrast CTA blocks. */
  brand: "-mx-6 sm:-mx-8 rounded-[42px] bg-brand px-6 sm:px-8",
  /** No background/border, just consistent vertical rhythm. */
  plain: "",
};

export function Section({
  children,
  variant = "plain",
  className,
  as: Tag = "section",
}: {
  children: ReactNode;
  variant?: keyof typeof variantClasses;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Tag className={cn("py-14 sm:py-16", variantClasses[variant], className)}>{children}</Tag>
  );
}
