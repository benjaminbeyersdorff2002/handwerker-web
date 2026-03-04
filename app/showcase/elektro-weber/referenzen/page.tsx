import type { Metadata } from "next";
import { references } from "@/data/elektro-weber";
import SubpageHero from "@/components/showcase/elektro-weber/SubpageHero";
import ReferenzenFilter from "@/components/showcase/elektro-weber/ReferenzenFilter";
import CTASection from "@/components/showcase/elektro-weber/CTASection";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Über 500 abgeschlossene Projekte in Mittelhessen. Elektroinstallation, Smart Home, PV-Anlagen und mehr.",
};

export default function ReferenzenPage() {
  return (
    <>
      <SubpageHero
        title="Unsere Referenzen"
        subtitle="Ein Auszug aus über 500 abgeschlossenen Projekten in Mittelhessen."
        backgroundImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=800&fit=crop"
        breadcrumbs={[{ label: "Referenzen" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ReferenzenFilter references={references} />
        </div>
      </section>

      <CTASection
        title="Ihr Projekt ist das nächste?"
        subtitle="Lassen Sie uns besprechen, was wir für Sie tun können."
      />
    </>
  );
}
