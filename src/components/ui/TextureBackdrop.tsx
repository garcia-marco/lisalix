import type { ReactNode } from "react";
import { Contours } from "./Contours";

// Fractal noise tinted brand-dark, tiled as a paper/sand grain.
const grain = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.06 0 0 0 0 0.2 0 0 0 0 0.31 0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>",
)}")`;

const cornerSteps = [0.5, 1, 1.5, 2.05, 2.6, 3.2, 3.8, 4.45, 5.1];

/**
 * Shared "nautical chart" texture for the light-blue cards (hero, footer):
 * contour lines off the top-left and bottom-right corners plus a paper/sand
 * grain. The parent must be `relative overflow-hidden`; put content in a
 * `relative` element so it stacks above. `children` render between the
 * contours and the grain (e.g. the hero's glow).
 */
export function TextureBackdrop({ children }: { children?: ReactNode }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {children}

      <Contours
        steps={cornerSteps}
        className="absolute -top-70 -left-36 size-[480px] text-brand/15"
      />
      <Contours
        steps={cornerSteps}
        className="absolute -right-60 -bottom-80 size-[480px] rotate-[140deg] text-brand/10"
      />

      <div
        className="absolute inset-0 opacity-40 mix-blend-multiply"
        style={{ backgroundImage: grain }}
      />
    </div>
  );
}
