import type { Metadata } from "next";
import { Container, Icon, H1, Subtitle, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="px-6 py-36 text-center sm:px-8">
      <Icon name="search_off" size={48} className="mb-6 text-brand" />
      <H1>Page introuvable</H1>
      <Subtitle className="mx-auto mt-4 max-w-md">
        Cette page n&apos;existe pas ou plus. Elle a peut-être été déplacée, ou l&apos;adresse
        comporte une erreur.
      </Subtitle>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/" variant="solid">
          <Icon name="home" size={18} />
          Retour à l&apos;accueil
        </Button>
        <Button href="/contact" variant="outline">
          <Icon name="mail" size={18} />
          Nous contacter
        </Button>
      </div>
    </Container>
  );
}
