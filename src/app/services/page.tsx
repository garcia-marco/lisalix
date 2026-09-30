// Page désactivée le temps de la construction du site : renvoie une 404.
// Pour la réactiver, supprimer ces lignes et décommenter le code ci-dessous.
import { notFound } from 'next/navigation'

export default function Page() {
  notFound()
}

// import type { Metadata } from "next";
// import { Container, Section, Eyebrow, H1, H2, Subtitle, Card, Button, Icon } from "@/components/ui";

// export const metadata: Metadata = {
//   title: "Lycras, sweats & polos personnalisés",
//   description:
//     "Du lycra porté sur l'eau au sweat et au polo portés au quotidien : découvrez les vêtements personnalisables Lisalix, adaptés à l'identité de votre club.",
//   alternates: { canonical: "/services" },
//   openGraph: {
//     title: "Lycras, sweats & polos personnalisés — Lisalix",
//     description:
//       "Du lycra porté sur l'eau au sweat et au polo portés au quotidien : découvrez les vêtements personnalisables Lisalix, adaptés à l'identité de votre club.",
//   },
// };

// const products = [
//   {
//     icon: "waves",
//     title: "Lycra personnalisé",
//     description:
//       "Le vêtement emblématique des écoles et clubs de surf. Porté dans l'eau, il permet de repérer les moniteurs, distinguer les groupes de niveau et afficher les couleurs de votre structure. Logo, couleurs et coupe s'adaptent à votre identité et à la pratique de vos élèves.",
//   },
//   {
//     icon: "checkroom",
//     title: "Sweat personnalisé",
//     description:
//       "Le sweat prolonge l'identité du club en dehors de l'eau. Porté par les moniteurs, les équipes ou les élèves au quotidien, il renforce le sentiment d'appartenance et donne de la visibilité à votre structure, sur la plage comme en dehors.",
//   },
//   {
//     icon: "styler",
//     title: "Polo personnalisé",
//     description:
//       "Le polo habille les moniteurs, les dirigeants et les équipes lors des événements, compétitions ou rencontres officielles. Plus formel que le sweat, il incarne une image professionnelle tout en gardant votre identité visuelle.",
//   },
//   {
//     icon: "add_circle",
//     title: "Autres vêtements",
//     description:
//       "Un besoin différent ? Coupe-vent, bonnet, sac... Lisalix peut étudier avec vous d'autres pièces textiles pour compléter l'identité de votre structure.",
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <Container className="px-6 py-20 sm:px-8">
//       <div className="max-w-2xl space-y-3">
//         <Eyebrow icon="checkroom">NOS PRODUITS</Eyebrow>
//         <H1>Lycras, sweats & polos personnalisés</H1>
//         <Subtitle className="text-lg">
//           Du lycra porté sur l&apos;eau aux vêtements portés au quotidien, chaque pièce est
//           pensée pour représenter votre structure.
//         </Subtitle>
//       </div>

//       <H2 className="sr-only">Nos produits personnalisables</H2>
//       <div className="mt-12 grid gap-8 sm:grid-cols-2">
//         {products.map((product) => (
//           <Card key={product.title}>
//             <Icon name={product.icon} size={24} className="text-brand" />
//             <h3 className="mt-3 text-xl font-semibold text-brand">{product.title}</h3>
//             <p className="mt-3 text-neutral-700">{product.description}</p>
//           </Card>
//         ))}
//       </div>

//       <Section variant="plain" className="max-w-2xl space-y-3">
//         <Eyebrow icon="palette">PERSONNALISATION</Eyebrow>
//         <H2>Vos couleurs. Votre logo. Votre identité.</H2>
//         <Subtitle>
//           Chaque produit peut être personnalisé avec votre logo, vos couleurs et votre identité
//           visuelle. Vous partez d&apos;une identité déjà définie ou d&apos;une simple idée : nous
//           nous adaptons à votre projet.
//         </Subtitle>
//       </Section>

//       <Section variant="brand" className="text-center">
//         <H2 light>Prêt à démarrer votre projet ?</H2>
//         <Subtitle light className="mx-auto mt-3 max-w-xl">
//           Contactez-nous pour un devis gratuit et sans engagement.
//         </Subtitle>
//         <Button href="/contact" variant="white" className="mt-6">
//           <Icon name="request_quote" size={18} />
//           Demander un devis
//         </Button>
//       </Section>
//     </Container>
//   );
// }
