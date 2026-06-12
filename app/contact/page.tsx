import { Section, PageHero, Eyebrow } from "@/components/ui";
import ContactForm from "@/components/ContactForm";

const info = [
  { label: "Adresse", value: "Goma, Nord-Kivu, RDC" },
  { label: "Téléphone", value: "+243 000 000 000" },
  { label: "Email", value: "contact@totalklean.com" },
  { label: "Horaires", value: "Lun – Sam · 8h00 – 18h00" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Une question ? Parlons de votre véhicule.</>}
        description="Que ce soit pour un devis, une question sur nos services ou une demande spécifique, notre équipe vous répond rapidement."
      />

      <Section className="bg-white text-obsidian">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <Eyebrow>Nos coordonnées</Eyebrow>
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8 leading-tight">
              Restons en contact.
            </h2>
            <ul className="space-y-6">
              {info.map((item) => (
                <li key={item.label}>
                  <p className="text-xs uppercase tracking-wide text-obsidian/40 mb-1">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
