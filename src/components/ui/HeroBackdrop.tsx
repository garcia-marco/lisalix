import { TextureBackdrop } from "./TextureBackdrop";

/**
 * Decorative layer behind the hero content: the shared texture (grain and
 * contour corners), a sun-like glow and two drifting swell layers at the bottom. Each wave SVG is 200%
 * wide and its path repeats every 720 viewBox units, so translating it by -50%
 * (1440 units) loops seamlessly.
 */
const swell =
  "M0 60 Q180 20 360 60 T720 60 T1080 60 T1440 60 T1800 60 T2160 60 T2520 60 T2880 60 V120 H0 Z";

export function HeroBackdrop() {
  return (
    <>
      <TextureBackdrop>
        {/* Glow behind the visual */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_45%,rgba(255,255,255,0.85)_0%,transparent_45%)]" />
      </TextureBackdrop>

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Swell */}
        <svg
          viewBox="0 0 2880 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 h-20 w-[200%] fill-brand/10 sm:h-18 motion-safe:animate-wave-drift-slow"
        >
          <path d={swell} />
        </svg>
        <svg
          viewBox="0 0 2880 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 h-14 w-[200%] fill-white/60 sm:h-10 motion-safe:animate-wave-drift"
        >
          <path d={swell} />
        </svg>
      </div>
    </>
  );
}
