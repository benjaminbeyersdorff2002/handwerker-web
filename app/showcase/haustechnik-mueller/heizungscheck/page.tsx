import type { Metadata } from "next";
import SubpageHero from "@/components/showcase/haustechnik-mueller/SubpageHero";
import HeizungsCheck from "@/components/showcase/haustechnik-mueller/HeizungsCheck";
import CTASection from "@/components/showcase/haustechnik-mueller/CTASection";

export const metadata: Metadata = {
  title: "HeizungsCheck & Förderrechner",
  description:
    "In 3 Schritten zur passenden Heizung: Kosten, Förderung und CO₂-Einsparung berechnen – kostenlos und unverbindlich.",
};

export default function HeizungsCheckPage() {
  return (
    <>
      <SubpageHero
        title="HeizungsCheck & Förderrechner"
        subtitle="Finden Sie in 3 Schritten heraus, welches Heizsystem zu Ihrem Haus passt – inklusive Kosten und Förderung."
        breadcrumbs={[{ label: "HeizungsCheck" }]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <HeizungsCheck />
        </div>
      </section>

      <CTASection
        title="Fragen zu Ihrem Ergebnis?"
        subtitle="Wir beraten Sie gerne persönlich und erstellen ein konkretes Festpreis-Angebot für Ihre neue Heizung."
      />
    </>
  );
}
