import type { Metadata } from "next";
import { faqItems } from "@/data/haustechnik-mueller";
import SubpageHero from "@/components/showcase/haustechnik-mueller/SubpageHero";
import FAQAccordion from "@/components/showcase/haustechnik-mueller/FAQAccordion";
import CTASection from "@/components/showcase/haustechnik-mueller/CTASection";

export const metadata: Metadata = {
  title: "Häufige Fragen",
  description:
    "Antworten auf häufig gestellte Fragen zu Heizung, GEG, Förderung, Badsanierung und Notdienst – Haustechnik Müller.",
};

export default function FAQPage() {
  return (
    <>
      <SubpageHero
        title="Häufige Fragen"
        subtitle="Hier finden Sie Antworten auf die wichtigsten Fragen rund um Heizung, Förderung, Badsanierung und mehr."
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTASection
        title="Noch Fragen?"
        subtitle="Wir beraten Sie gerne persönlich – rufen Sie an oder schreiben Sie uns."
        buttonText="Jetzt Kontakt aufnehmen"
      />
    </>
  );
}
