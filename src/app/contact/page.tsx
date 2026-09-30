// import Image from "next/image";
// import Link from "next/link";
// import type { Metadata } from "next";
// import ContactForm from "@/components/ContactForm";
// import { Container, Section, Eyebrow, H2, Subtitle, Button, Hero, Icon } from "@/components/ui";
// import { siteConfig } from "@/lib/site";

// export const metadata: Metadata = {
//   title: "Demande de devis textile personnalisé",
//   description:
//     "Décrivez votre projet de lycras, sweats ou polos personnalisés : Lisalix vous répond sous 48h avec un devis clair et sans engagement.",
//   alternates: { canonical: "/contact" },
//   openGraph: {
//     title: "Demande de devis textile personnalisé — Lisalix",
//     description:
//       "Décrivez votre projet de lycras, sweats ou polos personnalisés : Lisalix vous répond sous 48h avec un devis clair et sans engagement.",
//   },
// };

// // Chiffres provisoires — à remplacer par les vraies valeurs de Lisalix.
// const stats = [
//   { icon: "military_tech", value: "10 ans", label: "d'expérience" },
//   { icon: "groups", value: "150+", label: "clubs et écoles équipés" },
//   { icon: "schedule", value: "48h", label: "délai de réponse" },
//   { icon: "inventory_2", value: "500+", label: "pièces produites / an" },
// ];

// export default function ContactPage() {
//   return (
//     <Container className="px-6 pt-4 pb-16 sm:px-8">
//       <Hero
//         eyebrow="CONTACT & DEVIS"
//         eyebrowIcon="mail"
//         title="Demandez votre devis textile personnalisé"
//         description="Un projet de lycras, sweats, polos ou vêtements personnalisés pour votre école de surf, votre club ou votre structure sportive ? Parlez-nous de votre projet, nous vous répondrons directement."
//       />

//       {/* Chiffres clés */}
//       <Section variant="plain">
//         <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
//           {stats.map((stat) => (
//             <div key={stat.label} className="text-center">
//               <Icon name={stat.icon} size={28} className="text-brand" />
//               <p className="mt-2 font-heading text-3xl font-bold text-brand">{stat.value}</p>
//               <p className="text-sm text-neutral-700">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </Section>

//       {/* Bloc formulaire + contact direct */}
//       <Section variant="light" className="space-y-10">
//         <div className="space-y-3">
//           <Eyebrow icon="design_services">VOTRE PROJET</Eyebrow>
//           <H2>Parlez-nous de votre projet</H2>
//           <Subtitle>
//             Que vous ayez déjà votre identité, vos couleurs et votre logo, ou que vous soyez encore
//             au stade de l&apos;idée, décrivez-nous simplement ce que vous recherchez.
//           </Subtitle>
//           <Subtitle>
//             Produits, quantités, personnalisation, délais : nous revenons vers vous avec un devis
//             clair sous 48h, sans engagement.
//           </Subtitle>
//         </div>

//         <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
//           <ContactForm />
//           <div className="relative aspect-[4/3] overflow-hidden rounded-[16px]">
//             <Image
//               src="/images/contact-lisalix.jpg"
//               alt="Surfeur portant un lycra personnalisé Lisalix"
//               fill
//               sizes="(min-width: 1024px) 50vw, 100vw"
//               className="object-cover"
//             />
//           </div>
//         </div>

//         <div className="border-t border-brand/20 pt-10">
//           <Subtitle>Vous préférez échanger directement ?</Subtitle>
//           <div className="mt-4 flex flex-wrap gap-6">
//             <div>
//               <p className="mb-1 text-sm text-neutral-700">Par téléphone</p>
//               <Button href={`tel:${siteConfig.phone}`} variant="solid">
//                 <Icon name="call" size={18} />
//                 {siteConfig.phoneDisplay}
//               </Button>
//             </div>
//             <div>
//               <p className="mb-1 text-sm text-neutral-700">Par email</p>
//               <Button href={`mailto:${siteConfig.email}`} variant="outline">
//                 <Icon name="email" size={18} />
//                 {siteConfig.email}
//               </Button>
//             </div>
//           </div>
//         </div>
//       </Section>

//       {/* À propos */}
//       <Section variant="plain" className="space-y-3">
//         <Eyebrow icon="info">LISALIX</Eyebrow>
//         <H2>Le textile personnalisé pour les écoles et clubs de surf</H2>
//         <Subtitle>
//           Depuis 10 ans, Lisalix accompagne plus de 150 écoles de surf, clubs et structures
//           sportives dans leurs projets de textile personnalisé, partout en France.
//         </Subtitle>
//         <Subtitle>
//           Du lycra porté sur l&apos;eau aux sweats et polos portés au quotidien, nous créons des
//           produits à l&apos;image de votre structure.
//         </Subtitle>
//         <Subtitle>
//           Confection soignée, délais tenus, un interlocuteur unique du devis à la livraison.
//         </Subtitle>
//         <Link
//           href="/qui-sommes-nous"
//           className="inline-block text-sm font-semibold text-brand underline underline-offset-4"
//         >
//           En savoir plus sur Lisalix →
//         </Link>
//       </Section>
//     </Container>
//   );
// }
