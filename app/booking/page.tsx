import { Section, PageHero, Eyebrow } from "@/components/ui";
import BookingForm from "@/components/BookingForm";

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Réservation"
        title={<>Réservez votre créneau en quelques clics.</>}
        description="Remplissez le formulaire ci-dessous avec vos disponibilités et l'adresse souhaitée. Notre équipe vous contactera pour confirmer votre rendez-vous."
      />

      <Section className="bg-white text-obsidian">
        <div className="max-w-3xl mx-auto">
          <Eyebrow>Formulaire de réservation</Eyebrow>
          <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8 leading-tight">
            Vos informations
          </h2>
          <BookingForm />
        </div>
      </Section>
    </>
  );
}
