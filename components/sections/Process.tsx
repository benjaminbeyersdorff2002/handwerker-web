"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { MessageSquare, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Erstgespräch",
    description:
      "In 30 Minuten besprechen wir Ihre Wünsche, Ihr Gewerk und Ihre Ziele. Sie liefern Fotos und Texte – den Rest übernehmen wir.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design & Konzept",
    description:
      "Wir erstellen einen individuellen Entwurf für Ihre Website. Sie geben Feedback, wir passen an – bis es perfekt passt.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Entwicklung",
    description:
      "Mit modernster Technologie setzen wir Ihre Website um: schnell, mobil-optimiert und SEO-freundlich.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description:
      "Ihre Website geht online! Wir kümmern uns um Hosting, Domain und stehen Ihnen auch danach zur Seite.",
  },
];

export default function Process() {
  return (
    <SectionWrapper id="ablauf" gray>
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          So funktioniert&apos;s
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-secondary">
          In 4 Schritten zu Ihrer neuen Website
        </h2>
        <p className="mt-4 text-muted max-w-2xl mx-auto text-lg">
          Kein komplizierter Prozess. Kein Technik-Stress. Wir machen es Ihnen
          so einfach wie möglich.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            {/* Connecting line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-[60%] w-[calc(100%-20%)] h-0.5 bg-primary/20" />
            )}

            <div className="text-center">
              <div className="relative inline-flex">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto">
                  <step.icon className="h-8 w-8" />
                </div>
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-6 font-bold text-secondary text-lg">
                {step.title}
              </h3>
              <p className="mt-2 text-muted text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
