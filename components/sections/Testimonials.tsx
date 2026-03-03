"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Thomas K.",
    role: "Elektro-Meisterbetrieb",
    text: "Endlich eine Website, die wirklich zu meinem Betrieb passt. In nur einer Woche war alles online – und ich bekomme seitdem mehr Anfragen über Google.",
    stars: 5,
  },
  {
    name: "Sandra M.",
    role: "Malerbetrieb",
    text: "Ich hatte vorher eine uralte Website, die auf dem Handy nicht funktioniert hat. Jetzt sieht alles super aus und meine Kunden finden mich endlich im Internet.",
    stars: 5,
  },
  {
    name: "Markus W.",
    role: "SHK-Betrieb",
    text: "Faire Preise, schnelle Umsetzung und ein super netter Kontakt. Kann ich jedem Handwerkskollegen nur empfehlen!",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          Kundenstimmen
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-secondary">
          Das sagen unsere Kunden
        </h2>
        <p className="mt-4 text-sm text-muted">
          (Platzhalter – wird durch echte Kundenbewertungen ersetzt)
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md"
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: testimonial.stars }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-primary fill-primary"
                />
              ))}
            </div>
            <p className="text-muted leading-relaxed text-sm italic">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-secondary text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
