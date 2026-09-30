import type { Metadata } from 'next'
import {
  Container,
  Section,
  H2,
  Subtitle,
  Button,
  Icon,
  Hero,
} from '@/components/ui'
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
    <Container className="px-6 pt-4 sm:px-8">
      <Hero
        eyebrow="LYCRAS & TEXTILE SURF"
        eyebrowIcon="surfing"
        title="Le surf comme univers. Le textile comme moyen de l'exprimer."
        description="Lycras, sweats, polos et vêtements personnalisés pour les écoles de surf, les clubs et les structures sportives."
      />

      <Section
        variant="plain"
        className="space-y-3"
      >
        <Icon
          name="handyman"
          size={48}
          className="mb-6 text-brand"
        />
        <H2>Site en construction</H2>
        <Subtitle>
          Lisalix fait peau neuve ! Revenez bientôt pour découvrir notre nouveau
          site.
          <br />
          En attendant, vous pouvez nous contacter par téléphone ou par email.
        </Subtitle>
        <div className="mt-4 flex flex-wrap gap-6">
          <div>
            <p className="mb-1 text-sm text-neutral-700">Par téléphone</p>
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
          </div>
          <div>
            <p className="mb-1 text-sm text-neutral-700">Par email</p>
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
        </div>
      </Section>
    </Container>
  )
}
