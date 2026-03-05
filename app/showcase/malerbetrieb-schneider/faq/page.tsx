import type { Metadata } from "next";
import { faqItems } from "@/data/maler-schneider";
import SubpageHero from "@/components/showcase/maler-schneider/SubpageHero";
import FAQAccordion from "@/components/showcase/maler-schneider/FAQAccordion";
import CTASection from "@/components/showcase/maler-schneider/CTASection";

export const metadata: Metadata = {
  title: "Häufige Fragen",
  description:
    "Antworten auf häufig gestellte Fragen zu Malerarbeiten, Farbberatung, Kosten und Ablauf – Malerbetrieb Schneider in Herborn.",
};

export default function FAQPage() {
  return (
    <>
      <SubpageHero
        title="Häufige Fragen"
        subtitle="Hier finden Sie Antworten auf die wichtigsten Fragen rund um Malerarbeiten, Farben und Kosten."
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
