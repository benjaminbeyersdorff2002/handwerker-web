"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Brauche ich wirklich eine Website? Ich habe genug Aufträge.",
    answer:
      "Super! Aber was passiert, wenn ein Stammkunde wegfällt? Eine Website ist Ihre Versicherung für die Zukunft – und kostet weniger als eine Anzeige in der Zeitung. Außerdem stärkt eine professionelle Website das Vertrauen neuer Kunden.",
  },
  {
    question: "Was kostet mich das insgesamt?",
    answer:
      "Sie zahlen einmalig den Festpreis des gewählten Pakets (ab 799 €). Keine versteckten Kosten. Optional können Sie einen Wartungsvertrag ab 29 €/Monat für Hosting und Updates dazubuchen.",
  },
  {
    question: "Wie lange dauert es, bis meine Website fertig ist?",
    answer:
      "Je nach Paket zwischen 5 und 14 Werktagen. Beim Starter-Paket kann Ihre Website schon in einer Woche online sein. Wir brauchen von Ihnen nur ein 30-minütiges Erstgespräch und ein paar Fotos.",
  },
  {
    question: "Ich kenne jemanden, der das günstiger macht.",
    answer:
      "Günstiger gibt es immer. Die Frage ist: Funktioniert die Website danach auf dem Handy? Lädt sie schnell? Wird sie bei Google gefunden? Das sind die Dinge, die den Unterschied machen – und genau das bekommen Sie bei uns.",
  },
  {
    question: "Ich habe keine Zeit, mich darum zu kümmern.",
    answer:
      "Genau deshalb machen wir das für Sie. Wir brauchen von Ihnen nur ein kurzes Gespräch und ein paar Fotos Ihrer Arbeit. Den gesamten Rest – Design, Entwicklung, Texte, SEO – erledigen wir komplett.",
  },
  {
    question: "Muss ich mich um die Technik kümmern?",
    answer:
      "Nein. Wir übernehmen Hosting, Domain-Einrichtung, SSL-Zertifikat und laufende Updates. Sie müssen sich um nichts kümmern – außer um Ihre Kunden.",
  },
  {
    question: "Kann ich die Website später selbst bearbeiten?",
    answer:
      "Ja, auf Wunsch richten wir ein einfaches Content-Management-System ein, mit dem Sie Texte und Bilder selbst aktualisieren können. Oder wir übernehmen das für Sie im Rahmen eines Wartungsvertrags.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="font-semibold text-secondary pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-muted shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-muted leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <SectionWrapper id="faq" gray>
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          FAQ
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-secondary">
          Häufige Fragen
        </h2>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-md p-6 md:p-8">
        {faqs.map((faq) => (
          <FAQItem key={faq.question} {...faq} />
        ))}
      </div>
    </SectionWrapper>
  );
}
