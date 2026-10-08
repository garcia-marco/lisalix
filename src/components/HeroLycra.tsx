import { Contours, islandPath } from '@/components/ui/Contours'
import { HangTag } from '@/components/ui/HangTag'
import { cn } from '@/lib/cn'

/**
 * Home hero visual: the lycra packshot over a brand-blue island ringed by
 * slowly turning contour lines (echoing the backdrop's nautical-chart corners),
 * plus hang tags, a patch and a few floating details. Every
 * animation is `motion-safe:` so reduced-motion users get the final, static
 * composition.
 */
export function HeroLycra() {
  return (
    <div className="relative mx-auto aspect-square md:mr-0 w-full max-w-[460px]">
      {/* Island + contour rings, same drawing as the backdrop's corners. The
          island (scale 3.4 ≈ 64% of the box) sits under the lycra; the rings
          around it turn very slowly. */}
      <Contours
        steps={[4, 4.6, 5.2]}
        className="absolute inset-0 h-full w-full overflow-visible text-brand/30"
        ringsClassName="motion-safe:animate-spin-slow"
      >
        <defs>
          <linearGradient
            id="hero-island"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="currentColor"
              className="text-brand"
            />
            <stop
              offset="100%"
              stopColor="currentColor"
              className="text-brand-dark"
            />
          </linearGradient>
        </defs>
        <path
          d={islandPath}
          transform="rotate(-10) scale(3.4 3.13)"
          fill="url(#hero-island)"
          className="motion-safe:animate-hero-pop"
        />
      </Contours>

      {/* Ground shadow, shrinks as the lycra floats up */}
      <div
        className="absolute bottom-[3%] left-1/2 h-[6%] w-[50%] -translate-x-1/2 rounded-[50%] bg-brand-dark/35 blur-md motion-safe:animate-hero-shadow"
        aria-hidden="true"
      />

      {/* Lycra: entrance on the wrapper, float on the image */}
      <div className="absolute inset-x-[4%] -top-[4%] bottom-[5%] rotate-6 motion-safe:animate-hero-in motion-safe:[animation-delay:150ms]">
        {/* Plain <img>: with `images.unoptimized` (static export) next/image emits no
            srcset, so the pre-resized WebP variants are listed by hand. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/lycra-accueil-800.webp"
          srcSet="/images/lycra-accueil-480.webp 480w, /images/lycra-accueil-800.webp 800w, /images/lycra-accueil-1145.webp 1145w"
          sizes="(min-width: 768px) 440px, 90vw"
          alt="Lycra de surf personnalisé Lisalix, bleu et blanc"
          width={1145}
          height={1374}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-contain drop-shadow-[0_20px_25px_rgba(15,50,80,0.35)] motion-safe:animate-hero-float motion-safe:[animation-delay:1.3s]"
        />
      </div>

      {/* Hang tags & embroidered patch */}
      <HangTag
        kicker="Sur mesure"
        label="Coupes & formes"
        className="top-[18%] left-0 motion-safe:animate-hero-pop motion-safe:[animation-delay:1.1s]"
        swayClassName="motion-safe:animate-tag-sway motion-safe:[animation-delay:-1s]"
      />
      <Patch
        label="Votre logo, vos couleurs"
        className="right-0 bottom-[45%] motion-safe:[animation-delay:1.25s]"
      />
      <HangTag
        kicker="Toute la gamme"
        label="Lycras, sweats, polos…"
        className="bottom-[18%] left-[2%] motion-safe:animate-hero-pop motion-safe:[animation-delay:1.4s]"
        swayClassName="motion-safe:animate-tag-sway motion-safe:[animation-delay:-3s]"
      />
    </div>
  )
}

/** Embroidered patch: merrowed edge plus an inner dashed stitch line. */
function Patch({ label, className }: { label: string; className: string }) {
  return (
    <p
      className={cn(
        'absolute -rotate-4 rounded-[14px] border-[3px] border-brand-dark bg-brand px-4 py-2.5 text-[11px] font-semibold tracking-[0.15em] whitespace-nowrap text-white uppercase shadow-[0_10px_24px_-10px_#0f3250] outline-2 -outline-offset-[8px] outline-white/60 outline-dashed motion-safe:animate-hero-pop sm:px-5 sm:py-3 sm:text-xs',
        className
      )}
    >
      {label}
    </p>
  )
}
