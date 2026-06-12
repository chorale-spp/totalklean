import Image from "next/image";
import { Section, PageHero, PrimaryButton } from "@/components/ui";

const testimonials = [
  {
    name: "Olivia Grant",
    role: "Cliente régulière",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    quote:
      "Service impeccable et très professionnel. Ma voiture n'a jamais été aussi propre, et l'équipe est venue directement chez moi sans aucun souci.",
  },
  {
    name: "Jean-Marc K.",
    role: "Propriétaire de flotte",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
    quote:
      "Nous confions l'entretien de toute notre flotte à Total Klean. Ponctualité, qualité constante et un vrai sens du détail.",
  },
  {
    name: "Aline M.",
    role: "Cliente particulière",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    quote:
      "La protection céramique a complètement changé l'entretien de ma voiture. Elle reste propre beaucoup plus longtemps, c'est impressionnant.",
  },
  {
    name: "David T.",
    role: "Passionné automobile",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    quote:
      "Le polissage a complètement éliminé les rayures sur ma carrosserie noire. Un travail de précision, vraiment au top.",
  },
  {
    name: "Sarah B.",
    role: "Cliente régulière",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    quote:
      "Toujours à l'heure, toujours soigneux. Je recommande Total Klean les yeux fermés à toute personne qui aime sa voiture.",
  },
  {
    name: "Patrick N.",
    role: "Cliente professionnelle",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    quote:
      "Un rapport qualité-prix excellent. Le service mobile m'a fait gagner un temps précieux sans compromis sur la qualité.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Avis clients"
        title={<>Ce que nos clients disent de leur expérience Total Klean.</>}
        description="La satisfaction de nos clients est notre meilleure carte de visite. Voici quelques retours parmi les centaines de véhicules que nous avons eu le plaisir de traiter."
      />

      <Section className="bg-white text-obsidian">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-3xl bg-obsidian/[0.03] border border-obsidian/5 p-6 sm:p-8 flex flex-col">
              <p className="text-obsidian/75 leading-relaxed mb-6 flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={t.img} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-obsidian/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <PrimaryButton href="/booking" variant="dark">Rejoignez nos clients satisfaits</PrimaryButton>
        </div>
      </Section>
    </>
  );
}
