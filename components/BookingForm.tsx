"use client";

import { useState } from "react";

const services = [
  "Lavage extérieur premium",
  "Detailing intérieur",
  "Protection céramique",
  "Restauration & polissage",
  "Service mobile à domicile",
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: connect to booking backend / API route.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-obsidian/[0.03] border border-obsidian/5 p-8 sm:p-12 text-center">
        <h3 className="font-display font-semibold text-2xl mb-3">Demande envoyée !</h3>
        <p className="text-obsidian/60 max-w-md mx-auto">
          Merci pour votre réservation. Notre équipe vous contactera très
          rapidement pour confirmer la date, l&apos;heure et le lieu de
          l&apos;intervention.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 sm:gap-5">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="name">Nom complet</label>
        <input
          id="name"
          name="name"
          required
          className="rounded-2xl border border-obsidian/10 bg-obsidian/[0.02] px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-baltic/40 transition"
          placeholder="Votre nom"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="phone">Téléphone</label>
        <input
          id="phone"
          name="phone"
          required
          className="rounded-2xl border border-obsidian/10 bg-obsidian/[0.02] px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-baltic/40 transition"
          placeholder="+243 ..."
        />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label className="text-sm font-medium" htmlFor="service">Service souhaité</label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="rounded-2xl border border-obsidian/10 bg-obsidian/[0.02] px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-baltic/40 transition"
        >
          <option value="" disabled>Choisissez un service</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="date">Date souhaitée</label>
        <input
          id="date"
          name="date"
          type="date"
          required
          className="rounded-2xl border border-obsidian/10 bg-obsidian/[0.02] px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-baltic/40 transition"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="time">Heure préférée</label>
        <input
          id="time"
          name="time"
          type="time"
          required
          className="rounded-2xl border border-obsidian/10 bg-obsidian/[0.02] px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-baltic/40 transition"
        />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label className="text-sm font-medium" htmlFor="address">Adresse d&apos;intervention</label>
        <input
          id="address"
          name="address"
          required
          className="rounded-2xl border border-obsidian/10 bg-obsidian/[0.02] px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-baltic/40 transition"
          placeholder="Quartier, avenue, ville"
        />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label className="text-sm font-medium" htmlFor="notes">Détails supplémentaires</label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="rounded-2xl border border-obsidian/10 bg-obsidian/[0.02] px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-baltic/40 transition resize-none"
          placeholder="Marque, modèle, état du véhicule, etc."
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-amber text-white font-semibold px-9 py-4 shadow-[0_4px_16px_rgba(239,118,47,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(239,118,47,0.5)]"
        >
          Confirmer la réservation
        </button>
      </div>
    </form>
  );
}
