import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, MapPin, Calendar } from "lucide-react";
import { services, references } from "@/data/maler-schneider";
import SubpageHero from "@/components/showcase/maler-schneider/SubpageHero";
import CTASection from "@/components/showcase/maler-schneider/CTASection";

const base = "/showcase/malerbetrieb-schneider";

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

  return (
    <>
      <SubpageHero
        title={service.name}
        subtitle={service.shortDesc}
        backgroundImage={service.heroImage}
        breadcrumbs={[
          { label: "Leistungen", href: `${base}/leistungen` },
          { label: service.name },
        ]}
      />

      {/* Detail Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.detailDesc}
              </p>

              {/* Typische Arbeiten */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Typische Arbeiten
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.workItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 bg-emerald-50 rounded-xl p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ablauf */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Unser Ablauf
                </h2>
                <div className="space-y-6">
                  {service.process.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick CTA */}
              <div className="bg-emerald-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">
                  Interesse an {service.name}?
                </h3>
                <p className="text-sm text-emerald-100 mb-4">
                  Lassen Sie sich kostenlos und unverbindlich beraten.
                </p>
                <Link
                  href={`${base}/kontakt`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-colors"
                >
                  Jetzt anfragen
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Other Services */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Weitere Leistungen
                </h3>
                <ul className="space-y-2">
                  {services
                    .filter((s) => s.slug !== slug)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`${base}/leistungen/${s.slug}`}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600 transition-colors py-1.5"
                        >
                          <ArrowRight className="h-3.5 w-3.5" />
                          {s.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Related Reference */}
          {related && (
            <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Passendes Referenzprojekt
              </span>
              <div className="grid md:grid-cols-2 gap-8 mt-6 items-center">
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {related.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-emerald-600 text-white text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {related.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {related.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {related.year}
                    </span>
                  </div>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {related.shortDesc}
                  </p>
                  <Link
                    href={`${base}/galerie`}
                    className="mt-4 inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors"
                  >
                    Alle Projekte in der Galerie
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
