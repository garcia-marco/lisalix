import type { Metadata } from "next";
import { Bodoni_Moda, Poppins } from "next/font/google";
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

// Self-hosted at build time by next/font: no render-blocking request to Google
// Fonts, and the files are preloaded. The CSS variables feed `--font-sans` and
// `--font-heading` in globals.css.
const poppins = Poppins({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const bodoniModa = Bodoni_Moda({
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-bodoni",
});

// Every Material Symbol rendered on the site. Google Fonts requires this list
// sorted alphabetically. Add the name here when using a new icon, or it will
// render as its raw ligature text.
const materialIcons = [
  "beach_access",
  "call",
  "checklist",
  "checkroom",
  "design_services",
  "email",
  "explore",
  "favorite",
  "forum",
  "groups",
  "home",
  "info",
  "mail",
  "palette",
  "progress_activity",
  "request_quote",
  "sailing",
  "search_off",
  "send",
  "surfing",
  "waves",
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} ${bodoniModa.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* Warm up the connections before the icon stylesheet is requested. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Material Symbols, pinned to one axis point (outlined, regular weight) instead
            of the full variable range — a much smaller file since we only ever render
            static icons. `display=block` (not `swap`) avoids flashing the raw ligature
            name (e.g. "call") as text before the icon font is ready. */}
        {/* `icon_names` subsets the font to the glyphs we use (~4 KB instead of ~320 KB). */}
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=${materialIcons.join(",")}&display=block`}
        />

        {/* Privacy-friendly analytics by Plausible */}
        <script async src="https://plausible.io/js/pa-fu1StXmfzzNDP1Icmx39O.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()",
          }}
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
