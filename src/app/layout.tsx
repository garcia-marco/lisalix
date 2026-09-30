import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: "/images/contact-lisalix.jpg", width: 1200, height: 900 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

// Marquage global (présent sur toutes les pages) plutôt que dupliqué page par page.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* Warm up the connections before the stylesheets are requested. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Poppins (body) + Bodoni Moda (headings) in a single request. `display=swap`
            shows the fallback immediately and swaps in the webfont once it's ready. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- this rule targets
            the Pages Router; the root layout is the correct App Router place for this. */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@800&family=Poppins:wght@300;400;600&display=swap"
        />
        {/* Material Symbols, pinned to one axis point (outlined, regular weight) instead
            of the full variable range — a much smaller file since we only ever render
            static icons. `display=block` (not `swap`) avoids flashing the raw ligature
            name (e.g. "call") as text before the icon font is ready. */}
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
