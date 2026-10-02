import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { siteConfig } from '@/lib/site'
import { Container, contentWidth, H1 } from '@/components/ui'
import { cn } from '@/lib/cn'

export const metadata: Metadata = {
  title: 'Mentions légales',
  robots: { index: false, follow: true },
}

function LegalSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-brand">{title}</h2>
      <div className="mt-2 space-y-2">{children}</div>
    </section>
  )
}

export default function MentionsLegalesPage() {
  return (
    <Container
      fluid
      className="px-8.5 pt-4 sm:px-10.5"
    >
      <div className={cn(contentWidth)}>
        <H1
          display
          className="mt-12"
        >
          Mentions légales
        </H1>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-neutral-700">
          <p>
            Conformément aux dispositions de l&apos;article 6 de la loi n°
            2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie
            numérique (LCEN), il est porté à la connaissance des utilisateurs du
            site {siteConfig.url.replace('https://', '')} les présentes mentions
            légales.
          </p>

          <LegalSection title="Éditeur du site">
            <p>
              Le site {siteConfig.url.replace('https://', '')} est édité par{' '}
              LISALIX, SARL au capital de 20 000,00 €, immatriculée au Registre
              du commerce et des sociétés (RCS) de Bordeaux sous le numéro 527
              865 034.
            </p>
            <p>
              Siège social : IMMEUBLE POMEROL 147 AVENUE DE LA SOMME 33700
              MERIGNAC
              <br />
              SIRET : 527 865 034 00013
              <br />
              N° de TVA intracommunautaire : FR80527865034
              <br />
              Téléphone : {siteConfig.phoneDisplay}
              <br />
              Email : {siteConfig.email}
            </p>
            <p>
              Directeur de la publication : Olivier Aucheron, en qualité de
              gérant.
            </p>
          </LegalSection>

          <LegalSection title="Hébergement">
            <p>
              Ce site est hébergé par Cloudflare, Inc., 101 Townsend St, San
              Francisco, CA 94107, États-Unis — +1 650 319 8930 —
              www.cloudflare.com.
            </p>
          </LegalSection>

          <LegalSection title="Propriété intellectuelle">
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images,
              photographies, logos, marques, éléments graphiques) est la
              propriété exclusive de {siteConfig.name} ou de ses partenaires, et
              est protégé par le Code de la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification ou adaptation de
              tout ou partie de ces éléments, par quelque procédé que ce soit,
              est interdite sans l&apos;autorisation écrite préalable de{' '}
              {siteConfig.name}. Les logos des clients présentés sur le site
              restent la propriété de leurs titulaires respectifs.
            </p>
          </LegalSection>

          <LegalSection title="Données personnelles">
            <p>
              Les informations que vous nous transmettez via le formulaire de
              contact, par email ou par téléphone sont utilisées uniquement pour
              répondre à vos demandes de devis et de renseignements. Elles ne
              sont ni vendues ni cédées à des tiers, et sont conservées pendant
              3 ans à compter du dernier contact.
            </p>
            <p>
              Les messages envoyés via le formulaire de contact transitent par
              notre prestataire d&apos;envoi d&apos;emails, Resend, Inc.
              (États-Unis), qui agit uniquement pour notre compte.
            </p>
            <p>
              Conformément au Règlement général sur la protection des données
              (RGPD) et à la loi Informatique et Libertés, vous disposez
              d&apos;un droit d&apos;accès, de rectification, d&apos;effacement,
              d&apos;opposition et de limitation du traitement de vos données.
              Pour l&apos;exercer, écrivez à {siteConfig.email}. Vous pouvez
              également introduire une réclamation auprès de la CNIL
              (www.cnil.fr).
            </p>
          </LegalSection>

          <LegalSection title="Cookies et mesure d'audience">
            <p>
              Ce site n&apos;utilise aucun cookie et ne dépose aucun traceur sur
              votre appareil.
            </p>
            <p>
              La mesure d&apos;audience est assurée par Plausible Analytics, un
              outil respectueux de la vie privée, hébergé dans l&apos;Union
              européenne. Il ne collecte aucune donnée personnelle et ne permet
              pas de vous identifier ni de vous suivre d&apos;un site à
              l&apos;autre : seules des statistiques de fréquentation agrégées
              et anonymes sont produites (pages consultées, provenance des
              visites, type d&apos;appareil, pays). Aucun consentement
              n&apos;est donc requis.
            </p>
          </LegalSection>

          <LegalSection title="Responsabilité">
            <p>
              {siteConfig.name} s&apos;efforce d&apos;assurer l&apos;exactitude
              des informations diffusées sur ce site, sans pouvoir en garantir
              l&apos;exhaustivité. {siteConfig.name} ne saurait être tenue
              responsable des erreurs, omissions ou d&apos;une indisponibilité
              du site.
            </p>
          </LegalSection>

          <p className="text-xs text-neutral-500">
            Dernière mise à jour : 02 octobre 2026
          </p>
        </div>
      </div>
    </Container>
  )
}
