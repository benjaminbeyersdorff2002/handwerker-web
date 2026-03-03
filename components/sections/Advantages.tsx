"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import {
  Zap,
  Shield,
  Smartphone,
  Search,
  Users,
  PiggyBank,
} from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Blitzschnelle Lieferung",
    description: "Ihre Website ist in 5–14 Werktagen fertig – nicht in 3 Monaten.",
  },
  {
    icon: PiggyBank,
    title: "Faire Festpreise",
    description: "Kein Stundensatz-Roulette. Sie wissen vorher, was es kostet.",
  },
  {
    icon: Search,
    title: "SEO-optimiert",
    description: "Ihre Website wird bei Google gefunden – für lokale Suchbegriffe optimiert.",
  },
  {
    icon: Smartphone,
    title: "100% Responsive",
    description: "Perfekte Darstellung auf Handy, Tablet und Desktop.",
  },
  {
    icon: Users,
    title: "Persönlicher Kontakt",
    description: "Ein Ansprechpartner statt anonymer Agentur. Direkt und unkompliziert.",
  },
  {
    icon: Shield,
    title: "DSGVO-konform",
    description: "Rechtssichere Website inklusive Impressum, Datenschutz und Cookie-Hinweis.",
  },
];

export default function Advantages() {
  return (
    <SectionWrapper id="vorteile" gray>
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          Ihre Vorteile
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-secondary">
          Warum Handwerker uns vertrauen
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {advantages.map((adv) => (
          <div key={adv.title} className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <adv.icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-secondary">{adv.title}</h3>
              <p className="mt-1 text-sm text-muted leading-relaxed">
                {adv.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
