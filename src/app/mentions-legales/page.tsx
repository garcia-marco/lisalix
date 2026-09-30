import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="font-heading text-3xl font-bold text-brand">Mentions légales</h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-neutral-700">
        <p>
          <em>
            Contenu à compléter avec les informations légales réelles de l&apos;entreprise
            (forme juridique, SIRET, adresse, capital social, etc.) avant mise en ligne.
          </em>
        </p>

        <section>
          <h2 className="text-lg font-semibold text-brand">Éditeur du site</h2>
          <p className="mt-2">
            {siteConfig.name}
            <br />
            Téléphone : {siteConfig.phoneDisplay}
            <br />
            Email : {siteConfig.email}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand">Hébergement</h2>
          <p className="mt-2">
            Ce site est hébergé par Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand">Propriété intellectuelle</h2>
          <p className="mt-2">
            L&apos;ensemble des contenus présents sur ce site (textes, images, logos) est protégé
            et ne peut être reproduit sans autorisation préalable.
          </p>
        </section>
      </div>
    </div>
  );
}
