import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { faqItems, companyInfo } from "@/data/elektro-weber";
import SubpageHero from "@/components/showcase/elektro-weber/SubpageHero";
import FAQAccordion from "@/components/showcase/elektro-weber/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Häufig gestellte Fragen zu Elektroinstallation, Photovoltaik, Smart Home, E-Check und Notdienst. Elektro Weber beantwortet Ihre Fragen.",
};

const base = "/showcase/elektro-weber";

export default function FAQPage() {
  return (
    <>
      <SubpageHero
        title="Häufig gestellte Fragen"
        subtitle="Antworten auf die wichtigsten Fragen rund um Elektrotechnik, Photovoltaik und unsere Leistungen."
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold">Noch Fragen?</h2>
          <p className="mt-3 text-blue-100">
            Rufen Sie uns an oder schreiben Sie uns – wir beraten Sie gerne
            persönlich.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${companyInfo.phoneFull}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5" />
              {companyInfo.phone}
            </a>
            <Link
              href={`${base}/kontakt`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors"
            >
              Kontaktformular
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
