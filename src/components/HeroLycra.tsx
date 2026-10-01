import Image from 'next/image'
import { Contours, islandPath } from '@/components/ui/Contours'
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
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
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
        <Image
          src="/images/lycra-accueil.png"
          alt="Lycra de surf personnalisé Lisalix, bleu et blanc"
          width={1145}
          height={1374}
          priority
          sizes="(min-width: 768px) 440px, 90vw"
          className="h-full w-full object-contain drop-shadow-[0_20px_25px_rgba(15,50,80,0.35)] motion-safe:animate-hero-float motion-safe:[animation-delay:1.3s]"
        />
      </div>

      {/* Hang tags & embroidered patch */}
      <HangTag
        kicker="Sur mesure"
        label="Coupes & formes"
        className="top-[18%] left-0 motion-safe:[animation-delay:1.1s]"
        swayClassName="motion-safe:[animation-delay:-1s]"
      />
      <Patch
        label="Votre logo, vos couleurs"
        className="right-0 bottom-[40%] motion-safe:[animation-delay:1.25s]"
      />
      <HangTag
        kicker="Toute la gamme"
        label="Lycras, sweats, polos…"
        className="bottom-[18%] left-[2%] motion-safe:[animation-delay:1.4s]"
        swayClassName="motion-safe:[animation-delay:-3s]"
      />
    </div>
  )
}

/**
 * Clothing hang tag: notched card with an eyelet and a loose string, swaying
 * gently from the eyelet. Pop-in runs on the outer element and the sway on the
 * inner one, so the two `scale`/`rotate` animations don't override each other.
 */
function HangTag({
  kicker,
  label,
  className,
  swayClassName,
}: {
  kicker: string
  label: string
  className: string
  swayClassName: string
}) {
  return (
    <div className={cn('absolute motion-safe:animate-hero-pop', className)}>
      <div
        className={cn(
          'relative origin-[12px_50%] -rotate-3 drop-shadow-[0_8px_12px_rgba(15,50,80,0.25)] motion-safe:animate-tag-sway',
          swayClassName
        )}
      >
        <svg
          viewBox="0 0 40 48"
          className="absolute bottom-1/2 left-[12px] h-12 w-10 overflow-visible text-brand-dark/60"
          aria-hidden="true"
        >
          <path
            d="M0 48 C -6 34 -18 24 -12 12 C -8 4 2 2 6 -4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
        <p className="bg-white py-1.5 pr-4 pl-8 whitespace-nowrap text-brand [clip-path:polygon(18px_0,100%_0,100%_100%,18px_100%,0_50%)] sm:py-2">
          <span className="block text-[10px] font-semibold tracking-[0.2em] text-brand/60 uppercase">
            {kicker}
          </span>
          <span className="block font-heading text-base italic sm:text-lg">
            {label}
          </span>
        </p>
        <span
          className="absolute top-1/2 left-[8px] size-2.5 -translate-y-1/2 rounded-full bg-brand-light ring-2 ring-brand/30"
          aria-hidden="true"
        />
      </div>
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
