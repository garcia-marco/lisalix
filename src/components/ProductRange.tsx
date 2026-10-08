import type { ReactNode } from 'react'
import { Eyebrow, H2, Subtitle, contentWidth } from '@/components/ui'
import { Contours, islandPath } from '@/components/ui/Contours'
import { cn } from '@/lib/cn'

type Product = {
  title: string
  description: string
  /** Line picto drawn in a 48×48 box, white over the island. */
  picto: ReactNode
  /** Rotation of the island, different for each one. */
  rotate: number
}

const products: Product[] = [
  {
    title: 'Lycras',
    description:
      'Manches courtes, longues ou sans manches, pour les moniteurs, les élèves et les compétitions.',
    rotate: -10,
    picto: (
      <>
        <path d="M19 8 Q24 12 29 8 L35 10 L42 34 L38 35 L33 19 V42 H15 V19 L10 35 L6 34 L13 10 Z" />
        <path d="M20 9 L15.5 19 M28 9 L32.5 19" />
      </>
    ),
  },
  {
    title: 'Sweats',
    description:
      'À capuche ou col rond, pour les équipes, les clubs et la boutique.',
    rotate: 35,
    picto: (
      <>
        <path d="M17 10 C17 3 31 3 31 10 L36 12 L42 34 L38 35.5 L34 22 V42 H14 V22 L10 35.5 L6 34 L12 12 Z" />
        <path d="M19 11 Q24 16 29 11 M22 14 V20 M26 14 V20 M19 31 H29 L31 38 H17 Z" />
      </>
    ),
  },
  {
    title: 'Tee-shirts & polos',
    description:
      'Les essentiels du quotidien, de l’accueil des élèves aux événements.',
    rotate: 80,
    picto: (
      <path d="M18 8 Q24 13 30 8 L38 11 L43 19 L37 22 L34 19 V42 H14 V19 L11 22 L5 19 L10 11 Z" />
    ),
  },
  {
    title: 'Pantalons',
    description:
      'Joggings et pantalons assortis, pour habiller l’équipe de la tête aux pieds.',
    rotate: 140,
    picto: (
      <>
        <path d="M14 6 H34 V10 H14 Z" />
        <path d="M14 10 L12 42 H21 L24 18 L27 42 H36 L34 10 M24 10 V18 M18 10 Q18 14 14 15 M30 10 Q30 14 34 15" />
      </>
    ),
  },
  {
    title: 'Casquettes & bonnets',
    description:
      'Brodés ou imprimés, pour la plage l’été comme le bord de mer l’hiver.',
    rotate: 200,
    picto: (
      <>
        <path d="M9 30 C9 19 16 12 25 12 C34 12 40 19 40 30 Z" />
        <path d="M9 30 C14 36 32 38 44 34 C43 32 41 30 40 30 M25 12 C21 16 19 23 19 30" />
        <circle
          cx="25"
          cy="11"
          r="1.5"
        />
      </>
    ),
  },
  {
    title: 'Et tout le reste…',
    description:
      'Ponchos, sacs, bananes, pin’s, porte-clés… Vous l’imaginez, on le fabrique.',
    rotate: 260,
    picto: (
      <>
        <path d="M10 18 H38 L36 42 H12 Z" />
        <path d="M17 18 V14 C17 8 31 8 31 14 V18" />
      </>
    ),
  },
]

/**
 * Everything we customise. Each product sits on the hero's brand-blue island
 * and contour rings, with a white line picto on top. The rings turn slowly like
 * the hero's, every other one the opposite way so they don't look in sync.
 * No card background, unlike the lycra range.
 */
export function ProductRange() {
  return (
    <section className={cn(contentWidth, 'py-12 sm:py-16')}>
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <Eyebrow
          icon="palette"
          className="mx-auto"
        >
          NOS PRODUITS
        </Eyebrow>
        <H2 className="[&_em]:font-normal">
          Toute la <em>gamme</em>, à vos couleurs
        </H2>
        <Subtitle>
          Du lycra à la casquette, nous personnalisons tout votre textile : un
          seul interlocuteur pour équiper toute votre structure.
        </Subtitle>
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3">
        {products.map((product, index) => (
          <li
            key={product.title}
            className="group text-center"
          >
            <div className="relative mx-auto aspect-square w-full max-w-[220px]">
              {/* Island + contour rings, same drawing as the hero visual */}
              <Contours
                steps={[4, 4.6, 5.2]}
                className="absolute inset-0 size-full overflow-visible text-brand/30"
                ringsClassName={cn(
                  'motion-safe:animate-spin-slow',
                  // `!`: the `animate-*` shorthand would reset the direction.
                  index % 2 === 1 && '[animation-direction:reverse]!',
                )}
              >
                <defs>
                  <linearGradient
                    id={`product-island-${index}`}
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
                  transform={`rotate(${product.rotate}) scale(3.4 3.13)`}
                  fill={`url(#product-island-${index})`}
                />
              </Contours>

              <svg
                viewBox="0 0 48 48"
                className="absolute top-1/2 left-1/2 size-[38%] -translate-1/2 text-white transition-transform duration-500 group-hover:-translate-y-[calc(50%+6px)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {product.picto}
              </svg>
            </div>

            <h3 className="mt-4 font-heading text-xl font-bold text-brand sm:text-2xl">
              {product.title}
            </h3>
            <Subtitle className="mx-auto mt-2 max-w-xs text-sm sm:text-base">
              {product.description}
            </Subtitle>
          </li>
        ))}
      </ul>
    </section>
  )
}
