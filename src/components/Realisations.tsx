import { Eyebrow, H2, Section, Subtitle, contentWidth } from '@/components/ui'
import { Contours } from '@/components/ui/Contours'
import { HangTag } from '@/components/ui/HangTag'
import { TextureBackdrop, contourSteps } from '@/components/ui/TextureBackdrop'
import { cn } from '@/lib/cn'

type Realisation = {
  /** Short name, it has to fit on the hang tag. */
  client: string
  /** What we made for them, e.g. "Lycras moniteurs". Short too. */
  product: string
  /**
   * Path without extension: `<photo>-600.webp` and `<photo>.webp` (1200px max)
   * must exist. Without it the card renders a placeholder.
   */
  photo?: string
  /** CSS object-position, to keep the subject in frame when the tile crops. */
  objectPosition?: string
  /** Put the hang tag at the top when the bottom of the photo has the subject. */
  tagAtTop?: boolean
}

// TODO: replace with the real orders and photos. The first one gets the large
// tile, so pick the strongest photo for it.
const realisations: Realisation[] = [
  {
    client: 'Mimizan Surf Academy',
    product: 'Lycras',
    photo: '/images/realisations/lycra-mimizan-surf-academy',
    tagAtTop: true,
  },
  {
    client: 'Ligue de Surf Pays de la Loire',
    product: 'Sweats',
    photo: '/images/realisations/ligue-surf-pays-de-la-loire',
    tagAtTop: true,
  },
  {
    client: 'The Crew of Vieux Boucau',
    product: 'Tee-shirt & Poncho',
    photo: '/images/realisations/crew-vieux-boucau',
    tagAtTop: true,
  },
  {
    client: 'Surf Palace',
    product: 'Accessoires',
    photo: '/images/realisations/accessoires-surf-palace',
    tagAtTop: true,
  },
  {
    client: 'Boardingmania',
    product: 'Lycras',
    photo: '/images/realisations/boarding-mania',
    tagAtTop: true,
  },
]

/**
 * Real photos of delivered orders, on a light-blue chart card like the hero.
 * Bento grid: the first photo takes a 2×2 tile, the next four fill the
 * remaining cells. Each photo has a stitched edge (like the hero's patch) and a
 * hang tag naming the client, which sways on hover.
 */
export function Realisations() {
  return (
    <Section
      variant="light"
      className="relative overflow-hidden"
    >
      <TextureBackdrop />

      <div className={cn(contentWidth, 'relative')}>
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <Eyebrow
            icon="favorite"
            className="mx-auto"
          >
            NOS RÉALISATIONS
          </Eyebrow>
          <H2 className="[&_em]:font-normal">
            Nos textiles, sur le <em>terrain</em>
          </H2>
          <Subtitle>
            Écoles de surf, clubs, fédérations et entreprises : un aperçu des
            textiles que nous avons conçus et livrés.
          </Subtitle>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:auto-rows-[260px] lg:grid-cols-4">
          {realisations.map((realisation, index) => {
            const featured = index === 0
            return (
              <li
                key={`${realisation.client}-${realisation.product}`}
                className={cn(
                  'group relative aspect-[4/3] overflow-hidden rounded-[32px] bg-linear-to-t from-brand-light to-white shadow-[0_20px_40px_-28px_#0f3250] lg:aspect-auto',
                  featured && 'sm:col-span-2 lg:row-span-2',
                )}
              >
                {realisation.photo ? (
                  // Plain <img>: with `images.unoptimized` (static export) next/image
                  // emits no srcset, so the pre-resized WebP variants are listed by hand.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`${realisation.photo}.webp`}
                    srcSet={`${realisation.photo}-600.webp 600w, ${realisation.photo}.webp 1200w`}
                    sizes={
                      featured
                        ? '(min-width: 640px) 560px, 100vw'
                        : '(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw'
                    }
                    alt={`${realisation.product} pour ${realisation.client}`}
                    width={1200}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: realisation.objectPosition }}
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <Contours
                    steps={contourSteps}
                    className="absolute top-1/2 left-1/2 size-[420px] -translate-1/2 text-brand/15"
                  />
                )}

                {/* Stitch line along the edge */}
                <div
                  className={cn(
                    'pointer-events-none absolute inset-2.5 rounded-[24px] border-2 border-dashed',
                    realisation.photo ? 'border-white/60' : 'border-brand/20',
                  )}
                  aria-hidden="true"
                />

                <HangTag
                  kicker={realisation.product}
                  label={realisation.client}
                  wrap
                  className={cn(
                    featured
                      ? 'left-9 max-w-[calc(100%-4.5rem)]'
                      : 'left-7 max-w-[calc(100%-3.5rem)]',
                    realisation.tagAtTop
                      ? 'top-7'
                      : featured
                        ? 'bottom-8'
                        : 'bottom-6',
                  )}
                  // Always applied but paused: hovering only resumes it, so the tag
                  // never jumps to the first keyframe on enter or back on leave. `!` because
                  // the `animate-*` shorthand would reset the play state to running.
                  swayClassName="motion-safe:animate-tag-sway [animation-play-state:paused]! group-hover:[animation-play-state:running]!"
                />
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
