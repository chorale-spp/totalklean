# Total Klean — site web

Site officiel de Total Klean, construit avec **Next.js 16 (App Router)** et **Tailwind CSS v4**.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrez http://localhost:3000

## Build de production

```bash
npm run build
npm start
```

## Structure

- `app/` — pages (Accueil, Services, À propos, Tarifs, Blog, Avis, Contact, Réservation)
- `components/` — Navbar, Footer, formulaires et composants UI partagés
- `public/images/` — voir `public/images/README.md` pour le guide de nommage des images
- `lib/blog.ts` — contenu des articles de blog

## Déploiement

Le moyen le plus simple est [Vercel](https://vercel.com) :
1. Poussez ce dossier sur un dépôt GitHub
2. Importez le dépôt sur Vercel
3. Vercel détecte automatiquement Next.js — aucune configuration nécessaire

## Personnalisation

- **Couleurs de marque** : définies dans `app/globals.css` (`--color-baltic`, `--color-aqua`, `--color-amber`, `--color-obsidian`)
- **Polices** : Kanit (titres) et Inter (texte), chargées via `next/font/google` dans `app/layout.tsx`
- **Images** : remplacez les fichiers dans `public/images/` en respectant les noms indiqués dans `public/images/README.md`
- **Formulaires** : `components/ContactForm.tsx` et `components/BookingForm.tsx` sont prêts visuellement mais doivent être connectés à un service d'envoi d'email ou une API (ex: Resend, Formspree, route API Next.js)

## Liquid glass / animations

Les utilitaires `.glass`, `.glass-strong` et `.glass-light` (dans `app/globals.css`) gèrent l'effet de verre dépoli. Les animations d'apparition utilisent `.animate-fade-up`.
