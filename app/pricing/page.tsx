import { Section, PageHero, Eyebrow, PrimaryButton, SecondaryButton } from "@/components/ui";

const plans = [
  {
    name: "Essentiel",
    price: "25",
    desc: "L'entretien régulier pour garder votre véhicule propre au quotidien.",
    features: [
      "Lavage extérieur complet",
      "Nettoyage des jantes",
      "Aspiration intérieure",
      "Nettoyage des vitres",
      "Séchage sans traces",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: "60",
    desc: "Notre formule la plus populaire — un soin complet intérieur et extérieur.",
    features: [
      "Tout le forfait Essentiel",
      "Detailing intérieur complet",
      "Traitement du cuir & plastiques",
      "Décontamination de la peinture",
      "Cire de protection",
      "Désodorisation",
    ],
    highlight: true,
  },
  {
    name: "Signature",
    price: "Sur devis",
    desc: "Restauration complète avec polissage et protection céramique longue durée.",
    features: [
      "Tout le forfait Premium",
      "Polissage multi-étapes",
      "Correction de peinture",
      "Protection céramique",
      "Suivi personnalisé",
    ],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Tarifs"
        title={<>Des forfaits clairs, adaptés à chaque besoin.</>}
        description="Tous nos forfaits incluent le déplacement de notre équipe mobile à Goma. Les prix sont indicatifs et peuvent varier selon le type et l'état du véhicule."
      />

      <Section className="bg-white text-obsidian">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col ${
                plan.highlight
                  ? "bg-obsidian text-white shadow-2xl lg:-translate-y-4"
                  : "bg-obsidian/[0.03] border border-obsidian/5"
              }`}
            >
              {plan.highlight && (
                <span className="self-start mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-amber">
                  Le plus populaire
                </span>
              )}
              <h3 className="font-display font-bold text-2xl mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-white/60" : "text-obsidian/55"}`}>
                {plan.desc}
              </p>
              <div className="mb-8">
                {plan.price === "Sur devis" ? (
                  <span className="font-display font-bold text-3xl">Sur devis</span>
                ) : (
                  <>
                    <span className="font-display font-bold text-4xl">${plan.price}</span>
                    <span className={`text-sm ml-1 ${plan.highlight ? "text-white/50" : "text-obsidian/50"}`}>
                      / véhicule
                    </span>
                  </>
                )}
              </div>
              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? "bg-amber/20 text-amber" : "bg-amber/15 text-amber"}`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className={plan.highlight ? "text-white/80" : "text-obsidian/70"}>{f}</span>
                  </li>
                ))}
              </ul>
              {plan.highlight ? (
                <PrimaryButton href="/booking">Réservez</PrimaryButton>
              ) : (
                <SecondaryButton href="/booking" variant="light">Réservez</SecondaryButton>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-obsidian/40 text-sm mt-10">
          Tarifs en USD, à titre indicatif. Contactez-nous pour un devis précis selon votre véhicule et votre localisation.
        </p>
      </Section>
    </>
  );
}
