import type { Metadata } from 'next'
import { Container, Button, Icon, Hero } from '@/components/ui'
import { HeroLycra } from '@/components/HeroLycra'
import { ClientLogos } from '@/components/ClientLogos'
import { LycraRange } from '@/components/LycraRange'
import { Realisations } from '@/components/Realisations'
import { ProductRange } from '@/components/ProductRange'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: 'Vêtements et textiles personnalisés | LISALIX' },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Vêtements et textiles personnalisés | LISALIX',
    description: siteConfig.description,
  },
}

export default function HomePage() {
  return (
    <Container
      fluid
      className="px-8.5 pt-4 sm:px-10.5"
    >
      <Hero
        eyebrow="LYCRAS & TEXTILE SURF"
        eyebrowIcon="surfing"
        title={
          <>
            Le surf comme <em>univers</em>. Le textile comme moyen de{' '}
            <em>l’exprimer</em>.
          </>
        }
        description="Lycras, sweats, polos et vêtements personnalisés pour les écoles de surf, les clubs et les structures sportives."
        media={<HeroLycra />}
      >
        <div className="flex flex-wrap gap-3 pt-5 pb-5">
          <Button
            href={`tel:${siteConfig.phone}`}
            variant="solid"
          >
            <Icon
              name="call"
              size={18}
            />
            {siteConfig.phoneDisplay}
          </Button>
          <Button
            href={`mailto:${siteConfig.email}`}
            variant="outline"
          >
            <Icon
              name="email"
              size={18}
            />
            {siteConfig.email}
          </Button>
        </div>
      </Hero>

      <ClientLogos />

      <LycraRange />

      <Realisations />

      <ProductRange />
    </Container>
  )
}
