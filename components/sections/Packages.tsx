"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Check, X } from "lucide-react";

type Feature = {
  name: string;
  starter: boolean;
  professional: boolean;
  premium: boolean;
};

const features: Feature[] = [
  { name: "Responsives Design", starter: true, professional: true, premium: true },
  { name: "SEO-Grundoptimierung", starter: true, professional: true, premium: true },
  { name: "Kontaktformular", starter: true, professional: true, premium: true },
  { name: "Google Maps Integration", starter: false, professional: true, premium: true },
  { name: "Bildergalerie / Referenzen", starter: false, professional: true, premium: true },
  { name: "Google My Business Setup", starter: false, professional: true, premium: true },
  { name: "Online-Terminbuchung", starter: false, professional: false, premium: true },
  { name: "Blog / News-Bereich", starter: false, professional: false, premium: true },
];

const packages = [
  {
    name: "Starter",
    price: "799",
    pages: "1–3 Seiten (OnePager)",
    delivery: "5–7 Werktage",
    highlighted: false,
    key: "starter" as const,
  },
  {
    name: "Professional",
    price: "1.499",
    pages: "5–7 Seiten",
    delivery: "7–10 Werktage",
    highlighted: true,
    key: "professional" as const,
  },
  {
    name: "Premium",
    price: "2.499",
    pages: "8–12+ Seiten",
    delivery: "10–14 Werktage",
    highlighted: false,
    key: "premium" as const,
  },
];

export default function Packages() {
  return (
    <SectionWrapper id="pakete">
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          Pakete & Preise
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-secondary">
          Transparente Festpreise. Keine Überraschungen.
        </h2>
        <p className="mt-4 text-muted max-w-2xl mx-auto text-lg">
          Wählen Sie das Paket, das zu Ihrem Betrieb passt. Alle Preise sind
          Festpreise – ohne versteckte Kosten.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {packages.map((pkg) => (
          <Card key={pkg.name} highlighted={pkg.highlighted} className="flex flex-col">
            {pkg.highlighted && (
              <div className="text-center -mt-2 mb-4">
                <span className="bg-primary text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                  Beliebteste Wahl
                </span>
              </div>
            )}
            <h3 className="text-xl font-bold text-secondary">{pkg.name}</h3>
            <div className="mt-4">
              <span className="text-4xl font-extrabold text-secondary">{pkg.price}</span>
              <span className="text-muted ml-1">€</span>
            </div>
            <p className="text-sm text-muted mt-2">{pkg.pages}</p>
            <p className="text-sm text-primary font-medium mt-1">
              Lieferzeit: {pkg.delivery}
            </p>

            <ul className="mt-6 space-y-3 flex-1">
              {features.map((feature) => {
                const included = feature[pkg.key];
                return (
                  <li
                    key={feature.name}
                    className={`flex items-center gap-2 text-sm ${
                      included ? "text-secondary" : "text-gray-300"
                    }`}
                  >
                    {included ? (
                      <Check className="h-4 w-4 text-green-500 shrink-0" />
                    ) : (
                      <X className="h-4 w-4 text-gray-300 shrink-0" />
                    )}
                    {feature.name}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <Button
                href="#kontakt"
                variant={pkg.highlighted ? "primary" : "outline"}
                className="w-full"
              >
                Jetzt anfragen
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
