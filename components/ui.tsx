import Link from "next/link";
import { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-6xl mx-auto px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-amber font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm mb-3">
      {children}
    </p>
  );
}

export function PrimaryButton({
  href,
  children,
  variant = "light",
}: {
  href: string;
  children: ReactNode;
  variant?: "light" | "dark";
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full font-semibold px-7 sm:px-9 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)] ${
        variant === "dark" ? "bg-obsidian text-white" : "bg-white text-obsidian"
      }`}
    >
      {children}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  variant = "dark",
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light";
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full font-semibold px-7 sm:px-9 py-4 transition-all duration-300 border ${
        variant === "light"
          ? "border-obsidian/15 text-obsidian hover:bg-obsidian/5"
          : "border-white/25 text-white hover:bg-white/10"
      }`}
    >
      {children}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <Section className="pt-36 sm:pt-44 pb-12 sm:pb-16">
      <div className="max-w-3xl animate-fade-up">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-display font-bold text-4xl sm:text-6xl leading-[1.05] mb-5">
          {title}
        </h1>
        <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </Section>
  );
}
