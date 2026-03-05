import type { Metadata } from "next";
import SubpageHero from "@/components/showcase/haustechnik-mueller/SubpageHero";
import BadsanierungGallery from "@/components/showcase/haustechnik-mueller/BadsanierungGallery";
import CTASection from "@/components/showcase/haustechnik-mueller/CTASection";

const base = "/showcase/haustechnik-mueller";

export const metadata: Metadata = {
  title: "Badsanierung Galerie",
  description:
    "Vorher/Nachher-Bilder unserer Badsanierungen – gefiltert nach Badgröße und Stil. Lassen Sie sich inspirieren!",
};

export default function BadsanierungGaleriePage() {
  return (
    <>
      <SubpageHero
        title="Badsanierung Galerie"
        subtitle="Lassen Sie sich von unseren realisierten Bädern inspirieren – mit Vorher/Nachher-Vergleich."
        breadcrumbs={[
          { label: "Leistungen", href: `${base}/leistungen` },
          { label: "Badsanierung", href: `${base}/leistungen/badsanierung` },
          { label: "Galerie" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <BadsanierungGallery />
        </div>
      </section>

      <CTASection
        title="Ihr Traumbad wartet"
        subtitle="Wir planen und realisieren Ihre Badsanierung – von der Beratung bis zur letzten Fuge."
        buttonText="Badsanierung anfragen"
      />
    </>
  );
}
