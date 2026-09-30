# Lisalix

Site vitrine — Next.js (export statique) + Tailwind CSS, avec un formulaire de contact envoyé
par email via [Resend](https://resend.com), le tout hébergé gratuitement sur Cloudflare Pages.

## Stack

- **Next.js 16** (App Router) en mode [export statique](https://nextjs.org/docs/app/guides/static-exports) (`output: "export"`) : pages 100% statiques, rapides, bonnes pour le SEO.
- **Tailwind CSS 4** pour le style.
- **Cloudflare Pages Functions** (`functions/api/contact.ts`) pour la route serveur qui envoie l'email de contact — c'est la seule partie "dynamique" du site.
- **Resend** pour l'envoi d'email (API HTTP, pas de SMTP nécessaire).

## Développement local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000). Le formulaire de contact ne fonctionnera
pas avec `next dev` seul (la route `/api/contact` est une Cloudflare Pages Function, pas une
route Next.js). Pour tester le site complet, y compris le formulaire :

```bash
cp .dev.vars.example .dev.vars
# éditer .dev.vars avec une vraie clé Resend
npm run preview
```

`npm run preview` build le site puis le sert avec `wrangler pages dev`, exactement comme en
production sur Cloudflare.

## Déploiement sur Cloudflare Pages (gratuit)

1. Pousser ce repo sur GitHub/GitLab.
2. Sur [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Créer** → **Pages** → **Connecter un dépôt Git**.
3. Configuration du build :
   - Framework preset : `Next.js (Static HTML Export)`
   - Build command : `npm run build`
   - Output directory : `out`
4. Dans **Settings → Environment variables**, ajouter (en tant que secrets pour la prod) :
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` — l'adresse qui doit recevoir les demandes de devis
   - `CONTACT_FROM_EMAIL` — l'adresse expéditrice (doit être sur un domaine vérifié dans Resend ;
     pour tester rapidement, `onboarding@resend.dev` fonctionne mais n'envoie qu'à l'adresse du
     compte Resend)
5. Déployer. Le dossier `functions/` est détecté automatiquement par Cloudflare Pages.

### Domaine personnalisé

Une fois déployé, ajouter le nom de domaine dans **Custom domains** sur le projet Pages. Cloudflare
gère le DNS/SSL automatiquement si le domaine est déjà sur Cloudflare.

## Personnalisation

- Coordonnées et infos de l'entreprise : [src/lib/site.ts](src/lib/site.ts)
- Contenu des pages : [src/app/page.tsx](src/app/page.tsx), [src/app/services/page.tsx](src/app/services/page.tsx), [src/app/contact/page.tsx](src/app/contact/page.tsx)
- Mentions légales à compléter avant mise en ligne : [src/app/mentions-legales/page.tsx](src/app/mentions-legales/page.tsx)
- Logique d'envoi d'email : [functions/api/contact.ts](functions/api/contact.ts)
