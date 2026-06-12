"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to an email service or API route.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-obsidian/[0.03] border border-obsidian/5 p-8 sm:p-10 text-center">
        <h3 className="font-display font-semibold text-xl mb-2">Message envoyé !</h3>
        <p className="text-obsidian/60 text-sm">
          Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.
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
          className="rounded-2xl border border-obsidian/10 bg-obsidian/[0.02] px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-baltic/40 transition"
          placeholder="+243 ..."
        />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label className="text-sm font-medium" htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-2xl border border-obsidian/10 bg-obsidian/[0.02] px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-baltic/40 transition"
          placeholder="vous@email.com"
        />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label className="text-sm font-medium" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="rounded-2xl border border-obsidian/10 bg-obsidian/[0.02] px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-baltic/40 transition resize-none"
          placeholder="Comment pouvons-nous vous aider ?"
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-obsidian text-white font-semibold px-9 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
        >
          Envoyer le message
        </button>
      </div>
    </form>
  );
}
