import Image from "next/image";
import type { Metadata } from "next";
import { Container, Section, Eyebrow, H2, Subtitle, Card, Button, Icon } from "@/components/ui";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Vêtements et textiles personnalisés | LISALIX" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vêtements et textiles personnalisés | LISALIX",
    description: siteConfig.description,
  },
};

const products = [
  {
    icon: "waves",
    title: "Lycras",
    description: "Pour l'eau, les cours, les entraînements et les groupes.",
  },
  {
    icon: "checkroom",
    title: "Sweats",
    description: "Pour porter les couleurs du club au quotidien.",
  },
  {
    icon: "styler",
    title: "Polos",
    description: "Pour les moniteurs, les équipes, les dirigeants et les événements.",
  },
];

const audiences = [
  {
    icon: "school",
    title: "Écoles de surf",
    description: "Des vêtements pour les moniteurs, les groupes et les élèves.",
  },
  {
    icon: "shield",
    title: "Clubs",
    description: "Des équipements textiles qui permettent d'affirmer l'identité du club.",
  },
  {
    icon: "account_balance",
    title: "Institutions sportives",
    description: "Des supports textiles pour les équipes, événements et manifestations.",
  },
  {
    icon: "sailing",
    title: "Associations et structures nautiques",
    description: "Une identité commune pour les pratiquants et les encadrants.",
  },
];

const steps = [
  { number: "01", title: "Vous nous parlez de votre projet", description: "Indiquez-nous votre structure, vos besoins et les produits que vous recherchez." },
  { number: "02", title: "Nous échangeons", description: "Nous étudions votre demande et déterminons ensemble la solution adaptée." },
  { number: "03", title: "Nous préparons votre projet", description: "Votre identité, vos couleurs et vos éléments graphiques sont intégrés au projet." },
  { number: "04", title: "Vous validez", description: "Le projet est présenté avant lancement de la fabrication." },
  { number: "05", title: "Nous fabriquons", description: "Votre commande est mise en production." },
  { number: "06", title: "Vous recevez vos produits", description: "Votre identité textile prend vie." },
];

const reasons = [
  {
    icon: "waves",
    title: "Une spécialisation sur l'univers du surf",
    description: "Nous connaissons les codes et les besoins des structures liées à l'océan.",
  },
  {
    icon: "palette",
    title: "Une identité qui vous ressemble",
    description: "Vos vêtements sont pensés autour de votre image.",
  },
  {
    icon: "checkroom",
    title: "Des produits pour l'eau et pour la vie du club",
    description: "Du lycra aux vêtements portés au quotidien.",
  },
  {
    icon: "support_agent",
    title: "Un interlocuteur pour votre projet",
    description: "Un échange direct pour construire votre demande.",
  },
];

export default function HomePage() {
  return (
    <Container className="px-6 pt-4 sm:px-8">
      {/* Hero — l'image avant le texte */}
      <Section variant="light">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-3">
            <Eyebrow icon="waves">LYCRAS & TEXTILE SURF</Eyebrow>
            <h1 className="font-heading text-4xl font-bold text-brand sm:text-5xl">
              Le surf comme univers. Le textile comme moyen de l&apos;exprimer.
            </h1>
            <Subtitle>
              Lycras, sweats, polos et vêtements personnalisés pour les écoles de surf, les clubs
              et les structures sportives.
            </Subtitle>
            <Button href="/contact" variant="solid" className="mt-2">
              <Icon name="request_quote" size={18} />
              Demander un devis
            </Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[16px]">
            <Image
              src="/images/contact-lisalix.jpg"
              alt="Lycra personnalisé Lisalix porté par un surfeur"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Section>

      {/* L'océan est notre point de départ */}
      <Section variant="plain" className="space-y-3">
        <Eyebrow icon="beach_access">NOTRE UNIVERS</Eyebrow>
        <H2>Le surf est notre univers</H2>
        <Subtitle>
          Lisalix est né dans l&apos;univers du surf : l&apos;océan, la glisse, les clubs, les
          écoles, les moniteurs et les pratiquants sont notre terrain naturel.
        </Subtitle>
        <Subtitle>
          Mais le surf ne s&apos;arrête pas à l&apos;eau. Autour d&apos;un club ou d&apos;une
          école se crée une véritable identité : couleurs, logo, équipe, moniteurs, élèves,
          partenaires, communauté.
        </Subtitle>
        <Subtitle>
          Le textile permet de rendre cette identité visible. Lisalix accompagne les structures
          sportives dans cette démarche, du lycra porté dans l&apos;eau aux vêtements portés au
          quotidien.
        </Subtitle>
      </Section>

      {/* Le lycra, produit emblématique */}
      <Section variant="light" className="space-y-3">
        <Eyebrow icon="waves">LE LYCRA</Eyebrow>
        <H2>Le lycra, premier support de communication dans les sports aquatiques</H2>
        <Subtitle className="max-w-3xl">
          Dans une école ou un club de surf, le lycra est bien plus qu&apos;un vêtement : il
          identifie une équipe, permet de reconnaître les moniteurs et les groupes, donne de la
          visibilité au club et véhicule ses couleurs, son identité et celles de ses partenaires.
          Sur la plage comme dans l&apos;eau, il devient un véritable support de communication.
        </Subtitle>
        <Button href="/contact" variant="solid" className="mt-2">
          <Icon name="forum" size={18} />
          Parler de mon projet
        </Button>
      </Section>

      {/* Votre identité */}
      <Section variant="plain" className="space-y-3">
        <Eyebrow icon="palette">VOTRE IDENTITÉ</Eyebrow>
        <H2>Vos couleurs. Votre logo. Votre image.</H2>
        <Subtitle>
          Chaque structure possède son identité. Lisalix permet de la traduire sur ses vêtements :
          logo du club, couleurs, identité graphique, partenaires, événements ou groupes — votre
          textile devient une extension de votre communication.
        </Subtitle>
        <Subtitle>
          L&apos;objectif n&apos;est pas simplement de produire un vêtement personnalisé.
          L&apos;objectif est de créer un textile qui vous ressemble.
        </Subtitle>
      </Section>

      {/* Au-delà du lycra */}
      <Section variant="light">
        <Eyebrow icon="checkroom">NOS PRODUITS</Eyebrow>
        <H2 className="mt-3">Du surf à toute l&apos;identité textile de votre structure</H2>
        <Subtitle className="mt-3 max-w-2xl">
          Le lycra est notre point de départ. Mais une école ou un club ne vit pas uniquement dans
          l&apos;eau : moniteurs, équipes, dirigeants, événements, compétitions ou rencontres sont
          aussi l&apos;occasion de porter les couleurs de votre structure.
        </Subtitle>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {products.map((product) => (
            <Card key={product.title} className="bg-white">
              <Icon name={product.icon} size={24} className="text-brand" />
              <h3 className="mt-3 text-lg font-semibold text-brand">{product.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{product.description}</p>
            </Card>
          ))}
        </div>
        <Button href="/services" variant="outline" className="mt-8">
          <Icon name="explore" size={18} />
          Découvrir nos produits
        </Button>
      </Section>

      {/* Pour qui ? */}
      <Section variant="plain">
        <Eyebrow icon="groups">POUR QUI ?</Eyebrow>
        <H2 className="mt-3">Pensé pour les structures qui font vivre le sport</H2>
        <Subtitle className="mt-3 max-w-2xl">
          Lisalix s&apos;adresse en priorité aux structures qui ont besoin d&apos;une identité
          textile cohérente.
        </Subtitle>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <Card key={audience.title}>
              <Icon name={audience.icon} size={24} className="text-brand" />
              <h3 className="mt-3 text-lg font-semibold text-brand">{audience.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{audience.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Votre projet */}
      <Section variant="light" className="space-y-3">
        <Eyebrow icon="design_services">VOTRE PROJET</Eyebrow>
        <H2>Vous avez une idée ? Nous la transformons en textile.</H2>
        <Subtitle className="max-w-3xl">
          Vous avez déjà votre logo et votre identité graphique ? Parfait. Vous avez simplement
          une idée, quelques couleurs ou une envie particulière ? Nous pouvons partir de là.
          Lisalix vous accompagne dans la réalisation de votre projet textile, de votre identité à
          un produit concret.
        </Subtitle>
      </Section>

      {/* Notre process */}
      <Section variant="plain">
        <Eyebrow icon="checklist">NOTRE PROCESS</Eyebrow>
        <H2 className="mt-3">Un projet textile en quelques étapes</H2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <p className="font-heading text-3xl font-bold text-brand/30">{step.number}</p>
              <h3 className="mt-1 text-lg font-semibold text-brand">{step.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{step.description}</p>
            </div>
          ))}
        </div>
        <Button href="/contact" variant="solid" className="mt-10">
          <Icon name="request_quote" size={18} />
          Demander un devis
        </Button>
      </Section>

      {/* Notre histoire */}
      <Section variant="brand" className="space-y-3">
        <Eyebrow light icon="sailing">
          NOTRE HISTOIRE
        </Eyebrow>
        <H2 light>Une histoire qui commence avec le surf</H2>
        <Subtitle light className="max-w-3xl">
          Depuis ses débuts, Lisalix évolue dans l&apos;univers du textile et du surf. Notre
          connaissance de cet environnement nous permet de comprendre les besoins particuliers des
          écoles, des clubs et des structures sportives.
        </Subtitle>
        <Subtitle light className="max-w-3xl">
          Le surf reste notre ADN. L&apos;océan reste notre point d&apos;entrée. Mais notre
          savoir-faire textile nous permet d&apos;aller plus loin. Lisalix, c&apos;est le surf et
          les produits qui l&apos;accompagnent.
        </Subtitle>
        <Button href="/qui-sommes-nous" variant="white" className="mt-2">
          <Icon name="sailing" size={18} />
          Découvrir Lisalix
        </Button>
      </Section>

      {/* Pourquoi Lisalix */}
      <Section variant="plain">
        <Eyebrow icon="favorite">POURQUOI LISALIX ?</Eyebrow>
        <H2 className="mt-3">Parce qu&apos;un vêtement peut être bien plus qu&apos;un vêtement</H2>
        <Subtitle className="mt-3 max-w-2xl">
          Votre textile est vu par vos élèves, vos pratiquants, vos familles, vos partenaires et
          votre public. Il participe à l&apos;image de votre structure.
        </Subtitle>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <Icon name={reason.icon} size={24} className="mt-1 shrink-0 text-brand" />
              <div>
                <h3 className="text-lg font-semibold text-brand">{reason.title}</h3>
                <p className="mt-1 text-sm text-neutral-700">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA final */}
      <Section variant="light" className="text-center">
        <Eyebrow icon="mail">VOTRE PROJET</Eyebrow>
        <H2 className="mt-3">Vous avez un projet pour votre club ou votre école ?</H2>
        <Subtitle className="mx-auto mt-4 max-w-xl">
          Que vous recherchiez des lycras pour vos cours, des vêtements pour votre équipe ou une
          gamme textile complète pour votre structure, nous pouvons étudier votre demande. Votre
          projet commence ici.
        </Subtitle>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/contact" variant="solid">
            <Icon name="request_quote" size={18} />
            Demander un devis
          </Button>
          <Button href={`tel:${siteConfig.phone}`} variant="outline">
            <Icon name="call" size={18} />
            Nous appeler
          </Button>
        </div>
      </Section>
    </Container>
  );
}
