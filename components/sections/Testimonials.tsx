"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { MessageSquare, Clock, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "1",
    title: "Kostenloses Erstgespräch",
    description:
      "30 Minuten, in denen wir Ihren Bedarf klären. Persönlich, telefonisch oder per Video – wie es Ihnen passt.",
    highlight: "Unverbindlich & kostenlos",
  },
  {
    icon: Clock,
    number: "2",
    title: "Entwurf in 48 Stunden",
    description:
      "Sie erhalten einen ersten Entwurf Ihrer Website innerhalb von zwei Werktagen – bevor Sie einen Cent bezahlen.",
    highlight: "Kein Risiko für Sie",
  },
  {
    icon: Rocket,
    number: "3",
    title: "Website online in 7 Tagen",
    description:
      "Nach Ihrer Freigabe geht Ihre fertige Website innerhalb einer Woche live. Inklusive Hosting, Domain und SSL.",
    highlight: "Schneller geht's nicht",
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper id="ablauf">
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          So arbeiten wir
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-secondary">
          Vom Gespräch zur fertigen Website – in 7 Tagen
        </h2>
        <p className="mt-4 text-muted max-w-2xl mx-auto text-lg">
          Kein komplizierter Prozess, keine langen Wartezeiten. Drei Schritte –
          und Ihr Betrieb ist online.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md relative"
          >
            {/* Step number */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <step.icon className="h-6 w-6" />
              </div>
              <span className="text-4xl font-extrabold text-primary/15">
                {step.number}
              </span>
            </div>

            <h3 className="text-lg font-bold text-secondary">{step.title}</h3>

            <p className="mt-3 text-muted leading-relaxed text-sm">
              {step.description}
            </p>

            <div className="mt-5 pt-4 border-t border-gray-100">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {step.highlight}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
