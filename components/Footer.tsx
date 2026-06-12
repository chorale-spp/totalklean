import Link from "next/link";
import Image from "next/image";

const sitemap = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "À propos" },
  { href: "/pricing", label: "Tarifs" },
];

const resources = [
  { href: "/blog", label: "Blog" },
  { href: "/temoignages", label: "Avis clients" },
  { href: "/booking", label: "Réserver" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/10 pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        <div className="col-span-2 lg:col-span-1">
          <Link href="/" translate="no" className="flex items-center gap-2 mb-4">
            <span className="relative w-9 h-9 rounded-full overflow-hidden bg-gradient-to-br from-baltic to-aqua flex items-center justify-center">
              <Image
                src="/images/logo/logo-icon.svg"
                alt="Total Klean"
                fill
                className="object-contain p-1.5"
              />
            </span>
            <span className="font-display font-bold text-lg">
              <span className="text-white">Total</span>{" "}
              <span className="text-amber italic">Klean</span>
            </span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Pour des véhicules plus que propre, plus que brillant. Service de
            detailing premium et mobile à Goma, RDC.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm tracking-wide uppercase text-white/40 mb-4">
            Navigation
          </h4>
          <ul className="space-y-3">
            {sitemap.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm tracking-wide uppercase text-white/40 mb-4">
            Ressources
          </h4>
          <ul className="space-y-3">
            {resources.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm tracking-wide uppercase text-white/40 mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>Goma, Nord-Kivu, RDC</li>
            <li>+243 000 000 000</li>
            <li>contact@totalklean.com</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} Total Klean. Tous droits réservés.</p>
        <div className="flex gap-6">
          <Link href="/confidentialite" className="hover:text-white transition-colors">
            Politique de confidentialité
          </Link>
          <Link href="/conditions" className="hover:text-white transition-colors">
            Conditions d&apos;utilisation
          </Link>
        </div>
      </div>
    </footer>
  );
}
