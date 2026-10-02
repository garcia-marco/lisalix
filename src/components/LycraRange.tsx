import Image from 'next/image'
import { Eyebrow, H2, Subtitle, contentWidth } from '@/components/ui'
import { Contours } from '@/components/ui/Contours'
import { TextureBackdrop, contourSteps } from '@/components/ui/TextureBackdrop'
import { cn } from '@/lib/cn'

type Lycra = {
  title: string
  description: string
  image: string
  /** Position of the contour lines in the card, different for each one. */
  contoursClassName: string
}

const lycras: Lycra[] = [
  {
    title: 'Lycra manche courte',
    description:
      'Le classique des écoles de surf : les épaules libres, idéal pour les cours et les journées d’été.',
    image: '/images/lycras/manche-courte-col-rond.webp',
    contoursClassName: '-top-40 -right-36 rotate-12',
  },
  {
    title: 'Lycra manche longue',
    description:
      'Les bras couverts contre le soleil et les frottements de la planche, pour les longues sessions.',
    image: '/images/lycras/manche-longue-col-montant.webp',
    contoursClassName: '-bottom-44 -left-40 rotate-[200deg]',
  },
  {
    title: 'Lycra sans manche',
    description:
      'Léger et sans entrave, pour l’entraînement, les compétitions et les journées les plus chaudes.',
    // TODO: replace with the sleeveless photo once we have it.
    image: '/images/lycras/manche-courte-col-rond.webp',
    contoursClassName: '-top-44 -left-32 rotate-[80deg]',
  },
]

/**
 * The three lycra types. Each card has a white-to-light-blue gradient with the
 * shared grain and its own contour lines; the photo bleeds above the card but
 * is clipped at the bottom and sides (clip-path with a negative top inset).
 */
export function LycraRange() {
  return (
    <section className={cn(contentWidth, 'py-12 sm:py-16')}>
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <Eyebrow
          icon="checkroom"
          className="mx-auto"
        >
          NOS LYCRAS
        </Eyebrow>
        <H2 className="[&_em]:font-normal">
          Un lycra pour chaque <em>session</em>
        </H2>
        <Subtitle>
          Manches courtes, longues ou sans manches : tous nos lycras se
          personnalisent à vos couleurs et à votre logo, pour vos moniteurs,
          vos élèves et vos équipes.
        </Subtitle>
      </div>

      <ul className="mt-28 grid gap-x-6 gap-y-32 md:grid-cols-3">
        {lycras.map((lycra) => (
          <li
            key={lycra.title}
            className="group mx-auto w-full max-w-sm md:max-w-none"
          >
            <div className="relative aspect-[3/2]">
              {/* Background: gradient, contour lines, grain */}
              <div className="absolute inset-0 overflow-hidden rounded-[42px] bg-linear-to-t from-brand-light to-white">
                <TextureBackdrop corners={false}>
                  <Contours
                    steps={contourSteps}
                    className={cn(
                      'absolute size-[360px] text-brand/15',
                      lycra.contoursClassName,
                    )}
                  />
                </TextureBackdrop>
              </div>

              {/* Photo: free above the card, clipped to it on the other sides */}
              <div className="absolute inset-0 [clip-path:inset(-200px_0_0_0_round_0_0_27px_27px)]">
                <Image
                  src={lycra.image}
                  alt={lycra.title}
                  width={800}
                  height={960}
                  sizes="(min-width: 768px) 380px, 90vw"
                  className="absolute -bottom-[20%] left-1/2 w-[88%] max-w-none -translate-x-1/2 drop-shadow-[0_20px_25px_rgba(15,50,80,0.25)] transition-transform duration-500 group-hover:-translate-y-2"
                />
              </div>
            </div>

            <h3 className="mt-6 font-heading text-2xl font-bold text-brand">
              {lycra.title}
            </h3>
            <Subtitle className="mt-2">{lycra.description}</Subtitle>
          </li>
        ))}
      </ul>
    </section>
  )
}
