import Image from 'next/image'
import { cn } from '@/lib/cn'
import { contentWidth } from '@/components/ui'

type Client = {
  name: string
  logo?: {
    src: string
    width: number
    height: number
    /** Optical size tweak, e.g. padding to shrink a heavy logo in its box. */
    className?: string
  }
}

// Logos without a `logo` render as a grey placeholder until we get the file.
const clients: Client[] = [
  {
    name: 'Novespace',
    logo: { src: '/images/clients/novespace.png', width: 2363, height: 768 },
  },
  {
    name: 'Fédération Française de Vol Libre',
    logo: { src: '/images/clients/ffvl.png', width: 170, height: 170 },
  },
  {
    name: 'KEDGE Business School Bordeaux',
    logo: {
      src: '/images/clients/kedge.svg',
      width: 599,
      height: 206,
      className: 'px-2.5 sm:px-5',
    },
  },
  {
    name: 'Surf Palace',
    logo: { src: '/images/clients/surf-palace.jpg', width: 580, height: 500 },
  },
  {
    name: 'Cdiscount',
    logo: { src: '/images/clients/cdiscount.svg', width: 4070, height: 939 },
  },
  {
    name: 'Terra Aquatica',
    logo: { src: '/images/clients/terra-aquatica.webp', width: 966, height: 400 },
  },
]

/**
 * Static row of client logos with edges fading out. The row is 120% of the
 * block's width in six equal columns, centered: whatever the screen width, the
 * first and last logos sit exactly half past the edges, and four fit fully in
 * between. Every logo gets the same box (capped at 144×64).
 */
export function ClientLogos() {
  return (
    <section className={cn(contentWidth, 'pt-4 pb-12 sm:pb-14')}>
      <p className="mb-4 text-center text-sm text-brand/70">
        Ils portent déjà nos{' '}
        <em className="font-heading text-lg text-brand">couleurs</em>
      </p>
      <div className="-mx-6 flex justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] sm:-mx-8">
        <ul className="grid w-[110%] shrink-0 grid-cols-6 items-center">
          {clients.map((client) => (
            <li
              key={client.name}
              className="flex h-10 items-center justify-center px-1.5 sm:h-16 sm:px-6"
            >
              {client.logo ? (
                <Image
                  src={client.logo.src}
                  alt={client.name}
                  width={client.logo.width}
                  height={client.logo.height}
                  className={cn(
                    'h-full w-full max-w-36 object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0',
                    client.logo.className
                  )}
                />
              ) : (
                <div className="flex h-full w-full max-w-36 items-center justify-center rounded-[10px] bg-neutral-200 px-2 text-center text-xs text-neutral-500">
                  {client.name}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
