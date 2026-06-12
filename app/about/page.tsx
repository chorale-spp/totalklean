import Image from "next/image";
import { Section, PageHero, Eyebrow } from "@/components/ui";

const values = [
  {
    title: "Soin",
    desc: "Chaque véhicule est traité avec la même attention que s'il était le nôtre.",
  },
  {
    title: "Adaptabilité",
    desc: "Nos services s'adaptent à votre emploi du temps et à vos besoins, où que vous soyez.",
  },
  {
    title: "Fiabilité",
    desc: "Des rendez-vous respectés et des résultats constants, à chaque intervention.",
  },
  {
    title: "Excellence",
    desc: "Des techniques et produits professionnels pour un fini qui dépasse les attentes.",
  },
];

const team = [
  { name: "Équipe Total Klean", role: "Spécialiste detailing", img: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=600&auto=format&fit=crop" },
  { name: "Équipe Total Klean", role: "Restauration & polissage", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop" },
  { name: "Équipe Total Klean", role: "Service mobile", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=600&auto=format&fit=crop" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos de nous"
        title={<>L&apos;histoire derrière chaque véhicule que nous transformons.</>}
        description="Total Klean est né à Goma avec une idée simple : offrir un service de detailing automobile digne des plus grandes capitales, directement accessible à chacun."
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative h-80 sm:h-[28rem] rounded-3xl overflow-hidden order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1400&auto=format&fit=crop"
              alt="Atelier Total Klean"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>Notre mission</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-5 leading-tight">
              Pour des véhicules plus que propres, plus que brillants.
            </h2>
            <p className="text-white/60 leading-relaxed mb-4 max-w-lg">
              Total Klean est un service professionnel de detailing automobile et
              de restauration esthétique basé à Goma, en RDC. Nous sommes
              spécialisés dans la restauration de véhicules haut de gamme, le
              polissage, la protection céramique et l&apos;entretien, avec un
              service mobile signature qui vient à vous.
            </p>
            <p className="text-white/60 leading-relaxed max-w-lg">
              Chaque intervention est pensée comme un moment de soin pour votre
              véhicule — propreté, brillance et protection durable, sans jamais
              compromettre la qualité.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-white text-obsidian">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
          <Eyebrow>Nos valeurs</Eyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight">
            &quot;Soin, Adaptabilité, Fiabilité, Excellence&quot;
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {values.map((v) => (
            <div key={v.title} className="rounded-3xl bg-obsidian/[0.03] border border-obsidian/5 p-6 sm:p-8">
              <h3 className="font-display font-semibold text-xl mb-2 text-baltic">{v.title}</h3>
              <p className="text-sm text-obsidian/60 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-white text-obsidian">
        <div className="mb-12 animate-fade-up">
          <Eyebrow>Notre équipe</Eyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl max-w-xl leading-tight">
            Des professionnels passionnés, formés aux meilleures techniques.
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div key={i} className="rounded-3xl overflow-hidden bg-obsidian/[0.03] border border-obsidian/5">
              <div className="relative h-64">
                <Image src={member.img} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold">{member.name}</h3>
                <p className="text-sm text-obsidian/55">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
