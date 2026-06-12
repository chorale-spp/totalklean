"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "À propos" },
  { href: "/pricing", label: "Tarifs" },
  { href: "/blog", label: "Blog" },
  { href: "/temoignages", label: "Avis" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 sm:px-6 pt-4 sm:pt-5 pointer-events-none">
      <nav className="w-full max-w-6xl flex items-center justify-between gap-3">
        {/* Brand */}
        <Link
          href="/"
          translate="no"
          className={`pointer-events-auto flex items-center gap-2 sm:gap-3 rounded-full pl-2 pr-4 sm:pr-5 py-2 transition-colors duration-300 glass ${
            scrolled ? "!bg-obsidian/55" : ""
          }`}
        >
          <span className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-baltic to-aqua flex items-center justify-center">
            <Image
              src="/images/logo/logo-icon.svg"
              alt="Total Klean"
              fill
              className="object-contain p-1.5"
              priority
            />
          </span>
          <span className="font-display font-bold text-base sm:text-lg whitespace-nowrap">
            <span className="text-white">Total</span>{" "}
            <span className="text-amber italic">Klean</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1 rounded-full p-2 glass pointer-events-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                pathname === link.href
                  ? "bg-white text-obsidian"
                  : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact button (desktop) */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex pointer-events-auto items-center justify-center rounded-full bg-amber text-white font-semibold text-sm px-7 py-3 border border-white/20 shadow-[0_4px_16px_rgba(239,118,47,0.4)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(239,118,47,0.5)]"
        >
          Contact
        </Link>

        {/* Mobile toggle */}
        <button
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden pointer-events-auto relative w-11 h-11 rounded-full glass flex items-center justify-center"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              open ? "rotate-45 translate-y-0" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute block w-5 h-0.5 bg-white transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-0" : "translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden w-full max-w-6xl overflow-hidden transition-[max-height,opacity,margin] duration-400 ease-in-out pointer-events-auto rounded-3xl glass-strong ${
          open ? "max-h-[28rem] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="flex flex-col p-3 gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-3.5 rounded-2xl text-base font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "bg-white text-obsidian"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-1 text-center px-4 py-3.5 rounded-2xl bg-amber text-white font-semibold"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
