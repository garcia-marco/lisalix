import { cn } from "@/lib/cn";

/**
 * Material Symbols (outlined) ligature icon. Font size is set inline (not via
 * a Tailwind text-* class) so it can't lose a cascade/specificity fight
 * against the `.material-symbols-outlined` rule shipped by the Google Fonts
 * stylesheet.
 *
 * The box is pinned to a fixed `size` (width + height) and clipped with
 * `overflow: hidden`. Without this, the element's width follows whatever is
 * rendering inside it — while the font is still loading that's the raw
 * ligature name (e.g. "request_quote" is much wider than a square icon), so
 * the box would visibly resize the instant the font swaps in. A fixed box is
 * correctly sized from the very first paint, so there's nothing to shift.
 */
export function Icon({
  name,
  size = 20,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "material-symbols-outlined inline-flex select-none items-center justify-center overflow-hidden align-middle",
        name === "progress_activity" && "animate-spin",
        className
      )}
      style={{ fontSize: size, width: size, height: size }}
      aria-hidden="true"
      translate="no"
    >
      {name}
    </span>
  );
}
