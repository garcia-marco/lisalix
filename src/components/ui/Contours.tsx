import type { ReactNode } from "react";

/**
 * One irregular "island" outline. Repeated at growing scales (with a slight
 * twist each step) it draws contour lines like on a nautical chart. It spans
 * roughly ±54 units, inside a -300..300 viewBox.
 */
export const islandPath =
  "M0 -50 C 32 -54 58 -30 54 -4 C 51 24 36 50 6 52 C -24 54 -50 36 -54 6 C -57 -22 -34 -47 0 -50 Z";

export function Contours({
  steps,
  className,
  ringsClassName,
  children,
}: {
  /** Scale of each ring (1 ≈ 54 units radius). */
  steps: number[];
  className?: string;
  ringsClassName?: string;
  /** Extra SVG content drawn under the rings, in the same coordinate space. */
  children?: ReactNode;
}) {
  return (
    <svg viewBox="-300 -300 600 600" className={className} aria-hidden="true">
      {children}
      <g fill="none" stroke="currentColor" className={ringsClassName}>
        {steps.map((scale, i) => (
          <path
            key={scale}
            d={islandPath}
            transform={`rotate(${i * 7}) scale(${scale} ${scale * 0.92})`}
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </g>
    </svg>
  );
}
