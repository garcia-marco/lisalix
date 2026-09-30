// Page désactivée le temps de la construction du site : renvoie une 404.
// Pour la réactiver, supprimer ces lignes et décommenter le code ci-dessous.
import { notFound } from 'next/navigation'

export default function Page() {
  notFound()
}

// import type { Metadata } from "next";
// import { Container, Section, Eyebrow, H1, H2, Subtitle, Card, Button, Icon } from "@/components/ui";

// export const metadata: Metadata = {
//   title: "Qui sommes-nous",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Découvrez l'histoire et la mission de Lisalix.",
//   alternates: { canonical: "/qui-sommes-nous" },
//   openGraph: {
//     title: "Qui sommes-nous — Lisalix",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Découvrez l'histoire et la mission de Lisalix.",
//   },
// };

// // Contenu provisoire (lorem ipsum) — à remplacer par le vrai texte de présentation de Lisalix.
// const values = [
//   {
//     icon: "waves",
//     title: "Lorem ipsum",
//     description: "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
//   },
//   {
//     icon: "palette",
//     title: "Dolor sit amet",
//     description: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi.",
//   },
//   {
//     icon: "support_agent",
//     title: "Consectetur elit",
//     description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
//   },
// ];

// export default function QuiSommesNousPage() {
//   return (
//     <Container className="px-6 pt-4 pb-16 sm:px-8">
//       <Section variant="light" className="space-y-3">
//         <Eyebrow icon="sailing">NOTRE HISTOIRE</Eyebrow>
//         <H1>Qui sommes-nous ?</H1>
//         <Subtitle className="max-w-3xl">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//           incididunt ut labore et dolore magna aliqua.
//         </Subtitle>
//       </Section>

//       <Section variant="plain" className="space-y-3">
//         <H2>Notre histoire</H2>
//         <Subtitle>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis
//           nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//         </Subtitle>
//         <Subtitle>
//           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
//           nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
//           officia deserunt mollit anim id est laborum.
//         </Subtitle>
//       </Section>

//       <Section variant="light" className="space-y-3">
//         <H2>Notre mission</H2>
//         <Subtitle className="max-w-3xl">
//           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
//           laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.
//         </Subtitle>
//         <div className="mt-6 grid gap-6 sm:grid-cols-3">
//           {values.map((value) => (
//             <Card key={value.title} className="bg-white">
//               <Icon name={value.icon} size={24} className="text-brand" />
//               <h3 className="mt-3 text-lg font-semibold text-brand">{value.title}</h3>
//               <p className="mt-2 text-sm text-neutral-700">{value.description}</p>
//             </Card>
//           ))}
//         </div>
//       </Section>

//       <Section variant="plain" className="text-center">
//         <H2>Envie d&apos;en discuter ?</H2>
//         <Subtitle className="mx-auto mt-3 max-w-xl">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//           incididunt.
//         </Subtitle>
//         <Button href="/contact" variant="solid" className="mt-6">
//           <Icon name="request_quote" size={18} />
//           Parler de mon projet
//         </Button>
//       </Section>
//     </Container>
//   );
// }
