import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const baseClass =
  "flex items-center gap-2 rounded-full px-[30px] py-2.5 text-sm font-medium transition-colors duration-200 disabled:opacity-60";

const variantClasses = {
  solid: "border border-brand bg-brand text-white hover:bg-brand-dark",
  outline: "border border-brand bg-transparent text-brand hover:bg-brand-light-hover",
  /** Solid white button, for use on a brand-colored background. */
  white: "border border-white bg-white text-brand hover:bg-brand-light",
};

type CommonProps = {
  variant?: keyof typeof variantClasses;
  className?: string;
  children: ReactNode;
};

type ButtonProps =
  | (CommonProps & { href: string } & Omit<
        ComponentProps<typeof Link>,
        "href" | "className" | "children"
      >)
  | (CommonProps & { href?: never } & Omit<ComponentProps<"button">, "className" | "children">);

export function Button({ variant = "solid", className, children, href, ...rest }: ButtonProps) {
  const classes = cn(baseClass, variantClasses[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(rest as Omit<ComponentProps<typeof Link>, "href">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentProps<"button">)}>
      {children}
    </button>
  );
}
