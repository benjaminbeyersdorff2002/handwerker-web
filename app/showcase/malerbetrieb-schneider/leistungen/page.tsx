import type { Metadata } from "next";
import { services } from "@/data/maler-schneider";
import SubpageHero from "@/components/showcase/maler-schneider/SubpageHero";
import MalerServiceCard from "@/components/showcase/maler-schneider/MalerServiceCard";
import CTASection from "@/components/showcase/maler-schneider/CTASection";

export const metadata: Metadata = { title: "Leistungen" };

const base = "/showcase/malerbetrieb-schneider";

export default function LeistungenPage() {
  return (
    <>
      <SubpageHero
        title="Unsere Leistungen"
        subtitle="Von der Innenmalerei bis zur Bodenbeschichtung – wir bieten das komplette Spektrum moderner Malerarbeit."
        backgroundImage="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&h=800&fit=crop"
        breadcrumbs={[{ label: "Leistungen" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <MalerServiceCard
                key={service.slug}
                service={service}
                href={`${base}/leistungen/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
