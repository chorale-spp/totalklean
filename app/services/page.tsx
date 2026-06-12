import Image from "next/image";
import { Section, PageHero, Eyebrow, PrimaryButton } from "@/components/ui";

const services = [
  {
    id: "exterieur",
    title: "Lavage extérieur premium",
    desc: "Un lavage en profondeur, sans contact agressif, pour préserver la peinture tout en éliminant la saleté incrustée, le goudron et les résidus.",
    points: [
      "Pré-lavage et décontamination",
      "Lavage main avec produits pH neutre",
      "Nettoyage des jantes et passages de roue",
      "Séchage sans traces",
    ],
    img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "interieur",
    title: "Detailing intérieur",
    desc: "Un nettoyage complet de l'habitacle : sièges, tapis, plastiques et vitres, pour un intérieur frais et impeccable.",
    points: [
      "Aspiration complète et shampoing tapis/sièges",
      "Nettoyage et hydratation du cuir",
      "Traitement des plastiques et surfaces",
      "Désinfection et désodorisation",
    ],
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "ceramique",
    title: "Protection céramique",
    desc: "Une couche de protection nanotechnologique qui protège la peinture des UV, des taches et de l'oxydation pendant des années.",
    points: [
      "Préparation et décontamination de la peinture",
      "Application de revêtement céramique professionnel",
      "Brillance et hydrophobie longue durée",
      "Protection contre les rayures légères",
    ],
    img: "https://images.unsplash.com/photo-1619767886558-efdc259b6e09?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "restauration",
    title: "Restauration & polissage",
    desc: "Correction de peinture pour éliminer les rayures, tourbillons et imperfections et redonner à votre véhicule son éclat d'origine.",
    points: [
      "Diagnostic complet de la peinture",
      "Polissage multi-étapes",
      "Correction des micro-rayures",
      "Finition miroir",
    ],
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "mobile",
    title: "Service mobile à domicile",
    desc: "Toute notre expertise se déplace chez vous ou à votre bureau — équipement professionnel, sans branchement nécessaire.",
    points: [
      "Intervention à l'adresse de votre choix",
      "Équipe équipée et autonome",
      "Disponible 7j/7 sur rendez-vous",
      "Idéal pour particuliers et flottes",
    ],
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title={<>Une gamme complète de soins, pensée pour chaque véhicule.</>}
        description="De l'entretien régulier à la restauration complète, chaque service Total Klean est exécuté avec rigueur, par des professionnels formés et passionnés."
      />

      {services.map((service, i) => (
        <Section key={service.id} id={service.id} className={i % 2 === 1 ? "bg-white text-obsidian" : ""}>
          <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden">
              <Image src={service.img} alt={service.title} fill className="object-cover" />
            </div>
            <div>
              <Eyebrow>Service 0{i + 1}</Eyebrow>
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4 leading-tight">
                {service.title}
              </h2>
              <p className={`leading-relaxed mb-6 max-w-lg ${i % 2 === 1 ? "text-obsidian/60" : "text-white/60"}`}>
                {service.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {service.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <span className="mt-1 w-5 h-5 rounded-full bg-amber/15 text-amber flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className={i % 2 === 1 ? "text-obsidian/75" : "text-white/75"}>{p}</span>
                  </li>
                ))}
              </ul>
              <PrimaryButton href="/booking" variant={i % 2 === 1 ? "dark" : "light"}>Réservez ce service</PrimaryButton>
            </div>
          </div>
        </Section>
      ))}
    </>
  );
}
