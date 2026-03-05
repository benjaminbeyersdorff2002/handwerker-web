import type { Metadata } from "next";
import SubpageHero from "@/components/showcase/maler-schneider/SubpageHero";
import InspirationGallery from "@/components/showcase/maler-schneider/InspirationGallery";
import Farbberater from "@/components/showcase/maler-schneider/Farbberater";
import CTASection from "@/components/showcase/maler-schneider/CTASection";

export const metadata: Metadata = {
  title: "Farbwelt",
  description:
    "Farbinspiration und interaktiver Farbberater – finden Sie die perfekte Farbe für Ihren Raum. Malerbetrieb Schneider in Herborn.",
};

export default function FarbweltPage() {
  return (
    <>
      <SubpageHero
        title="Farbwelt"
        subtitle="Lassen Sie sich inspirieren und finden Sie die perfekte Farbkombination für Ihre Räume – mit unserer Inspirationsgalerie und dem interaktiven Farbberater."
        backgroundImage="https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1920&h=800&fit=crop&q=80"
        breadcrumbs={[{ label: "Farbwelt" }]}
      />

      {/* ─── Inspirationsgalerie ─── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Inspiration
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Farben, die begeistern
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Entdecken Sie unsere kuratierte Sammlung an Farbwelten – filtern
              Sie nach Raumtyp und Stimmung, und speichern Sie Ihre Favoriten
              für die Beratung.
            </p>
          </div>

          <InspirationGallery />
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <hr className="border-gray-200" />
      </div>

      {/* ─── Farbberater ─── */}
      <section id="farbberater" className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Interaktiver Farbberater
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              In 5 Fragen zur perfekten Farbe
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Beantworten Sie 5 kurze Fragen zu Ihrem Raum und Ihren
              Vorstellungen – unser Farbberater erstellt Ihnen eine
              individuelle Farbempfehlung mit RAL/NCS-Codes.
            </p>
          </div>

          <Farbberater />
        </div>
      </section>

      <CTASection
        title="Farbberatung vor Ort gewünscht?"
        subtitle="Unser Team kommt mit echten Farbmustern zu Ihnen und berät Sie direkt im Raum – kostenlos und unverbindlich."
        buttonText="Farbberatung vereinbaren"
      />
    </>
  );
}
