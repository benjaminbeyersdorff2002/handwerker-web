import type { Metadata } from "next";
import SubpageHero from "@/components/showcase/maler-schneider/SubpageHero";
import GalleryFilter from "@/components/showcase/maler-schneider/GalleryFilter";
import CTASection from "@/components/showcase/maler-schneider/CTASection";

export const metadata: Metadata = { title: "Galerie" };

export default function GaleriePage() {
  return (
    <>
      <SubpageHero
        title="Unsere Arbeiten"
        subtitle="Ein Auszug aus über 800 Projekten in Mittelhessen. Jedes Bild erzählt eine Geschichte."
        backgroundImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=800&fit=crop"
        breadcrumbs={[{ label: "Galerie" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryFilter />
        </div>
      </section>

      <CTASection
        title="Gefällt Ihnen, was Sie sehen?"
        subtitle="Wir machen das auch für Sie – lassen Sie sich kostenlos beraten."
      />
    </>
  );
}
