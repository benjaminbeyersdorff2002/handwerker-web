import type { Metadata } from "next";
import { services } from "@/data/haustechnik-mueller";
import SubpageHero from "@/components/showcase/haustechnik-mueller/SubpageHero";
import ServiceCard from "@/components/showcase/haustechnik-mueller/ServiceCard";
import CTASection from "@/components/showcase/haustechnik-mueller/CTASection";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Sanitärinstallation, Heizungsbau, Badsanierung, Klimaanlagen, Wartung & Erneuerbare Energien – alle SHK-Leistungen von Haustechnik Müller.",
};

export default function LeistungenPage() {
  return (
    <>
      <SubpageHero
        title="Unsere Leistungen"
        subtitle="Von der Sanitärinstallation über den Heizungsbau bis zur Klimatechnik – das komplette Leistungsspektrum aus einer Hand."
        breadcrumbs={[{ label: "Leistungen" }]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category headings with cards */}
          {(
            [
              { key: "sanitaer", label: "Sanitär" },
              { key: "heizung", label: "Heizung" },
              { key: "klima", label: "Klima & Wartung" },
            ] as const
          ).map((cat) => {
            const catServices = services.filter(
              (s) => s.category === cat.key
            );
            if (catServices.length === 0) return null;

            return (
              <div key={cat.key} className="mb-16 last:mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {cat.label}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catServices.map((s) => (
                    <ServiceCard key={s.slug} service={s} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
