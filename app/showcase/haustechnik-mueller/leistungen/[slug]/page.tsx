import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Thermometer,
  Euro,
  Leaf,
  Info,
} from "lucide-react";
import {
  services,
  references,
  heatingSystems,
  badsanierungProjects,
} from "@/data/haustechnik-mueller";
import SubpageHero from "@/components/showcase/haustechnik-mueller/SubpageHero";
import CTASection from "@/components/showcase/haustechnik-mueller/CTASection";

const base = "/showcase/haustechnik-mueller";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Nicht gefunden" };
  return { title: service.name, description: service.shortDesc };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = service.relatedReferenceSlug
    ? references.find((r) => r.slug === service.relatedReferenceSlug)
    : null;

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      <SubpageHero
        title={service.name}
        subtitle={service.shortDesc}
        breadcrumbs={[
          { label: "Leistungen", href: `${base}/leistungen` },
          { label: service.name },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* ── Main Content ── */}
            <div className="lg:col-span-2 space-y-12">
              {/* Hero Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.heroImage}
                  alt={service.name}
                  className="w-full h-[350px] object-cover"
                />
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.name} vom Fachbetrieb
                </h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {service.detailDesc}
                </p>
              </div>

              {/* Work Items */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Unsere Leistungen im Detail
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.workItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <CheckCircle2 className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  So läuft Ihr Projekt ab
                </h3>
                <div className="space-y-4">
                  {service.process.map((step) => (
                    <div
                      key={step.step}
                      className="flex gap-4 items-start bg-gray-50 rounded-xl p-5 border border-gray-100"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white font-bold text-sm shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {step.title}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Slug-specific extras ── */}

              {/* Heizungsbau → System comparison */}
              {slug === "heizungsbau" && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Heizsystem-Vergleich
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">
                    Welches System passt zu Ihrem Haus? Hier ein Überblick der
                    wichtigsten Optionen.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left px-4 py-3 font-semibold text-gray-900">
                            System
                          </th>
                          <th className="text-left px-4 py-3 font-semibold text-gray-900">
                            Investition
                          </th>
                          <th className="text-left px-4 py-3 font-semibold text-gray-900">
                            Förderung
                          </th>
                          <th className="text-left px-4 py-3 font-semibold text-gray-900">
                            CO₂-Einsparung
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {heatingSystems.slice(0, 4).map((sys) => (
                          <tr
                            key={sys.id}
                            className="border-t border-gray-100"
                          >
                            <td className="px-4 py-3 font-medium text-gray-900">
                              {sys.name}
                            </td>
                            <td className="px-4 py-3 text-gray-600">
                              {sys.investMin.toLocaleString("de-DE")}–
                              {sys.investMax.toLocaleString("de-DE")} €
                            </td>
                            <td className="px-4 py-3 text-green-600 font-medium">
                              bis {sys.subsidyPercent}%
                            </td>
                            <td className="px-4 py-3 text-gray-600">
                              {sys.co2Reduction}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 bg-red-50 rounded-xl p-4 border border-red-100">
                    <Link
                      href={`${base}/heizungscheck`}
                      className="flex items-center gap-2 text-red-700 font-semibold hover:text-red-800"
                    >
                      <Thermometer className="h-5 w-5" />
                      HeizungsCheck starten – persönliche Empfehlung in 3
                      Schritten
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Badsanierung → Gallery teaser */}
              {slug === "badsanierung" && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Vorher/Nachher – Unsere Badsanierungen
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {badsanierungProjects.slice(0, 4).map((p) => (
                      <div
                        key={p.slug}
                        className="rounded-xl overflow-hidden border border-gray-200"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.afterImage}
                          alt={p.title}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-3">
                          <p className="font-semibold text-gray-900 text-sm">
                            {p.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            {p.location} · {p.year}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Link
                      href={`${base}/badsanierung/galerie`}
                      className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700"
                    >
                      Alle Badsanierungen ansehen
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Erneuerbare Energien → Förder-Infobox */}
              {slug === "erneuerbare-energien" && (
                <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                  <div className="flex items-start gap-3 mb-4">
                    <Euro className="h-6 w-6 text-green-700 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-green-900">
                        Förderung für Ihre neue Heizung
                      </h3>
                      <p className="text-sm text-green-700 mt-1">
                        Über BAFA und KfW erhalten Sie attraktive Zuschüsse und
                        günstige Kredite für den Umstieg auf erneuerbare
                        Energien.
                      </p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    {[
                      {
                        label: "Wärmepumpe",
                        value: "bis 40% BAFA-Zuschuss",
                      },
                      {
                        label: "Pelletheizung",
                        value: "bis 35% BAFA-Zuschuss",
                      },
                      {
                        label: "Solarthermie",
                        value: "bis 25% BAFA-Zuschuss",
                      },
                      {
                        label: "KfW-Kredit",
                        value: "bis 120.000 € zu 0,1%",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="bg-white rounded-lg p-3 border border-green-100"
                      >
                        <div className="font-semibold text-green-900 text-sm">
                          {item.label}
                        </div>
                        <div className="text-xs text-green-700">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-green-600">
                    <Info className="h-4 w-4 shrink-0" />
                    Förderhöhe abhängig von Maßnahme und Voraussetzungen. Wir
                    beraten Sie gerne individuell.
                  </div>
                  <Link
                    href={`${base}/heizungscheck`}
                    className="mt-4 inline-flex items-center gap-2 text-green-800 font-semibold hover:text-green-900"
                  >
                    <Thermometer className="h-4 w-4" />
                    HeizungsCheck starten
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}

              {/* Related Reference */}
              {related && (
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Referenzprojekt
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="sm:w-1/3 rounded-xl overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-40 object-cover"
                      />
                    </div>
                    <div className="sm:w-2/3">
                      <h4 className="font-bold text-gray-900">
                        {related.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {related.location} · {related.year}
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        {related.shortDesc}
                      </p>
                      {related.highlights && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {related.highlights.map((h) => (
                            <span
                              key={h}
                              className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded-full"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-6">
              {/* CTA Box */}
              <div className="bg-red-50 rounded-2xl p-6 border border-red-100 sticky top-32">
                <h3 className="font-bold text-gray-900 mb-2">
                  Kostenlose Beratung
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Wir beraten Sie gerne zu {service.name} – persönlich vor Ort
                  oder telefonisch.
                </p>
                <Link
                  href={`${base}/kontakt`}
                  className="block w-full py-3 bg-red-600 text-white font-bold rounded-xl text-center hover:bg-red-500 transition-colors"
                >
                  Angebot anfordern
                </Link>
                <a
                  href="tel:+4906441123456"
                  className="block w-full mt-3 py-3 bg-white text-red-600 font-bold rounded-xl text-center border border-red-200 hover:bg-red-50 transition-colors"
                >
                  06441 / 123 456
                </a>
              </div>

              {/* Other Services */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">
                  Weitere Leistungen
                </h3>
                <div className="space-y-2">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`${base}/leistungen/${s.slug}`}
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white transition-colors group"
                    >
                      <span className="text-sm text-gray-700 group-hover:text-red-600">
                        {s.name}
                      </span>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-red-600" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
