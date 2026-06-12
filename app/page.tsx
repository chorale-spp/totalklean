import Image from "next/image";
import Link from "next/link";
import { Section, Container, Eyebrow, PrimaryButton, SecondaryButton } from "@/components/ui";

const services = [
  {
    title: "Lavage extérieur premium",
    desc: "Nettoyage en profondeur, décontamination et finition brillante sans rayures.",
    img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1200&auto=format&fit=crop",
    href: "/services#exterieur",
  },
  {
    title: "Detailing intérieur",
    desc: "Aspiration, traitement du cuir, des plastiques et désinfection complète.",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    href: "/services#interieur",
  },
  {
    title: "Protection céramique",
    desc: "Une couche de protection longue durée pour une brillance qui dure.",
    img: "https://images.unsplash.com/photo-1619767886558-efdc259b6e09?q=80&w=1200&auto=format&fit=crop",
    href: "/services#ceramique",
  },
  {
    title: "Restauration & polissage",
    desc: "Correction de peinture, élimination des micro-rayures et tourbillons.",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1200&auto=format&fit=crop",
    href: "/services#restauration",
  },
];

const stats = [
  { value: "8+", label: "Années d'expérience" },
  { value: "1200+", label: "Véhicules traités" },
  { value: "97%", label: "Clients satisfaits" },
  { value: "100%", label: "Service mobile" },
];

export default function Home() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1920&auto=format&fit=crop')",
            backgroundPosition: "center 60%",
          }}
        />
        {/* top blur */}
        <div className="absolute top-0 left-0 right-0 h-[45%] hero-blur-top" />
        {/* overall darken */}
        <div className="absolute inset-0 bg-black/20" />
        {/* bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />

        <div className="relative z-10 flex flex-col items-center text-center px-6 translate-y-[2vh]">
          <h1
            translate="no"
            className="font-display font-extrabold leading-[0.95] tracking-tight text-[clamp(3.2rem,12vw,9.5rem)] drop-shadow-[0_8px_40px_rgba(0,0,0,0.45)] animate-fade-up delay-1"
          >
            <span className="text-white">Total</span>{" "}
            <span className="text-amber italic">Klean</span>
          </h1>
          <p className="mt-5 max-w-[38ch] text-white/90 font-light text-[clamp(1rem,2.4vw,1.4rem)] tracking-wide drop-shadow-md animate-fade-up delay-2">
            Pour des véhicules plus que propre, plus que brillant.
          </p>
          <div className="mt-9 animate-fade-up delay-3">
            <PrimaryButton href="/booking">Réservez</PrimaryButton>
          </div>
        </div>
      </section>

      {/* ===================== STATS / INTRO ===================== */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <Eyebrow>Depuis 2015</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
              Une expérience de detailing pensée pour votre véhicule, et pour vous.
            </h2>
            <p className="text-white/60 leading-relaxed mb-8 max-w-xl">
              Total Klean est un service professionnel de detailing automobile et
              de restauration esthétique basé à Goma, RDC. Nous offrons un
              service mobile premium directement chez vous, avec des produits
              et techniques de qualité supérieure.
            </p>
            <SecondaryButton href="/about">Découvrir notre histoire</SecondaryButton>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl glass-light text-obsidian p-6 sm:p-8 flex flex-col gap-1"
              >
                <span className="font-display font-bold text-3xl sm:text-4xl text-baltic">
                  {stat.value}
                </span>
                <span className="text-sm text-obsidian/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===================== SERVICES OVERVIEW ===================== */}
      <Section className="bg-white text-obsidian rounded-t-[2.5rem] sm:rounded-t-[3rem]">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="animate-fade-up">
            <Eyebrow>Nos services</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl max-w-xl leading-tight">
              Tout ce dont votre véhicule a besoin, en un seul endroit.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-baltic font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            Voir tous les services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-3xl overflow-hidden bg-obsidian/[0.03] border border-obsidian/5 flex flex-col transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <h3 className="font-display font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-obsidian/55 leading-relaxed">{service.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ===================== GALLERY PREVIEW ===================== */}
      <Section className="bg-white text-obsidian">
        <div className="mb-10 animate-fade-up">
          <Eyebrow>Notre travail</Eyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl max-w-xl leading-tight">
            Des résultats qui parlent d&apos;eux-mêmes.
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {[
            "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1619767886558-efdc259b6e09?q=80&w=800&auto=format&fit=crop",
          ].map((src, i) => (
            <div key={i} className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src={src} alt="Total Klean - réalisation" fill className="object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </Section>

      {/* ===================== CTA ===================== */}
      <Section className="bg-white text-obsidian">
        <div className="relative overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] px-6 sm:px-16 py-16 sm:py-24 text-center bg-obsidian">
          <div
            className="absolute inset-0 opacity-30 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/40" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-3xl sm:text-5xl mb-5 leading-tight">
              Prêt à donner une nouvelle vie à votre véhicule ?
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Réservez votre créneau dès aujourd&apos;hui et laissez notre équipe
              s&apos;occuper du reste — où que vous soyez à Goma.
            </p>
            <PrimaryButton href="/booking">Réservez maintenant</PrimaryButton>
          </div>
        </div>
      </Section>
    </>
  );
}
