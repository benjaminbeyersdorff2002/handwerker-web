import Link from "next/link";
import Image from "next/image";
import {
  Flame,
  Phone,
  ShieldCheck,
  Clock,
  Award,
  Star,
  ArrowRight,
  Thermometer,
  CheckCircle2,
  MapPin,
  CalendarDays,
} from "lucide-react";
import {
  services,
  references,
  reviews,
  companyInfo,
} from "@/data/haustechnik-mueller";
import ServiceCard from "@/components/showcase/haustechnik-mueller/ServiceCard";
import TestimonialCard from "@/components/showcase/haustechnik-mueller/TestimonialCard";
import StatsBar from "@/components/showcase/haustechnik-mueller/StatsBar";
import CTASection from "@/components/showcase/haustechnik-mueller/CTASection";
import SeasonalBanner from "@/components/showcase/haustechnik-mueller/SeasonalBanner";

const base = "/showcase/haustechnik-mueller";

export default function HaustechnikMuellerPage() {
  const featuredRefs = references.slice(0, 3);

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-[100vh] flex items-center pt-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1585128792020-803d29415281?w=1920&q=80"
          alt="Moderne Heizungsanlage"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white">
                  <Flame className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">
                    Haustechnik Müller
                  </span>
                  <span className="block text-xs text-red-300 font-medium tracking-wider uppercase">
                    SHK-Meisterbetrieb seit 2001
                  </span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Heizung modernisieren?
                <br />
                <span className="text-red-400">Wir beraten neutral.</span>
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-lg leading-relaxed">
                Von Gas-Brennwert bis Wärmepumpe – wir finden die Lösung, die zu
                Ihrem Haus und Budget passt. Inklusive Förderberatung und
                Festpreis-Angebot.
              </p>

              {/* Trust Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-sm text-white border border-white/20">
                  <ShieldCheck className="h-4 w-4 text-red-400" />
                  Meisterbetrieb
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-sm text-white border border-white/20">
                  <Clock className="h-4 w-4 text-red-400" />
                  24/7 Notdienst
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-sm text-white border border-white/20">
                  <Award className="h-4 w-4 text-red-400" />
                  Buderus Partner
                </div>
                <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-sm text-white border border-white/20">
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                  4,9 Google
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href={`${base}/kontakt`}
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-red-600 text-white font-bold rounded-xl hover:bg-red-500 transition-colors shadow-lg shadow-red-600/30"
                >
                  Angebot anfordern
                </Link>
                <a
                  href={`tel:${companyInfo.phoneFull}`}
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Notdienst: {companyInfo.phone}
                </a>
              </div>
            </div>

            {/* Google Reviews Badge */}
            <div className="hidden lg:flex justify-end">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-xs">
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <div className="text-white font-bold text-lg">4,9 / 5,0</div>
                <div className="text-gray-300 text-sm">
                  basierend auf 87 Google-Bewertungen
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 text-xs text-gray-400">
                  &quot;Top Service! Heizungsausfall am Wochenende und innerhalb
                  von 90 Minuten war der Techniker da.&quot;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== NOTDIENST BANNER ===================== */}
      <section className="bg-red-600 text-white py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`${base}/notdienst`}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 animate-pulse">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-lg">24/7 Notdienst</div>
                <div className="text-red-100 text-sm">
                  Rohrbruch, Heizungsausfall oder Gasgeruch? Sofort anrufen!
                </div>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-red-600 font-bold rounded-xl text-lg">
              <Phone className="h-5 w-5" />
              {companyInfo.phone}
            </span>
          </Link>
        </div>
      </section>

      {/* ===================== SEASONAL BANNER ===================== */}
      <SeasonalBanner />

      {/* ===================== LEISTUNGEN TEASER ===================== */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              Unsere Leistungen
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Alles rund um Ihre Haustechnik
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Von der Sanitärinstallation über den Heizungsbau bis zur
              Klimatechnik – das komplette Leistungsspektrum aus einer Hand.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href={`${base}/leistungen`}
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              Alle Leistungen ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== HEIZUNGSCHECK TEASER ===================== */}
      <section className="py-20 md:py-28 bg-red-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-red-200 font-semibold text-sm uppercase tracking-wider">
                Unser Online-Tool
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
                Welche Heizung passt zu Ihrem Haus?
              </h2>
              <p className="mt-4 text-red-100 text-lg leading-relaxed">
                In nur 3 Schritten erfahren Sie, welches Heizsystem zu Ihrem
                Gebäude passt, was es kostet und welche Förderung Sie erhalten
                können.
              </p>

              {/* Steps Preview */}
              <div className="mt-8 space-y-4">
                {[
                  {
                    step: 1,
                    title: "Aktuelle Situation",
                    desc: "Heizungsart, Alter und Wohnfläche",
                  },
                  {
                    step: 2,
                    title: "Ihr Gebäude",
                    desc: "Immobilienart, Baujahr und Ausstattung",
                  },
                  {
                    step: 3,
                    title: "Ihre Wünsche",
                    desc: "Prioritäten wie Kosten, Umwelt oder Unabhängigkeit",
                  },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-red-600 font-bold text-sm shrink-0">
                      {s.step}
                    </div>
                    <div>
                      <div className="font-bold text-white">{s.title}</div>
                      <div className="text-sm text-red-200">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={`${base}/heizungscheck`}
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white text-red-700 font-bold rounded-xl hover:bg-red-50 transition-colors shadow-lg"
              >
                <Thermometer className="h-5 w-5" />
                HeizungsCheck starten
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Preview card */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <Thermometer className="h-5 w-5 text-red-600" />
                  <span className="font-bold text-gray-900">
                    Ergebnis-Vorschau
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      name: "Luft-Wasser-Wärmepumpe",
                      cost: "18.000–26.000 €",
                      subsidy: "bis 40% Förderung",
                      stars: 5,
                    },
                    {
                      name: "Gas-Brennwert + Solar",
                      cost: "12.000–18.000 €",
                      subsidy: "bis 15% Förderung",
                      stars: 4,
                    },
                    {
                      name: "Pelletheizung",
                      cost: "20.000–30.000 €",
                      subsidy: "bis 35% Förderung",
                      stars: 3,
                    },
                  ].map((sys) => (
                    <div
                      key={sys.name}
                      className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-gray-900 text-sm">
                          {sys.name}
                        </span>
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < sys.stars
                                  ? "text-amber-400 fill-amber-400"
                                  : "text-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{sys.cost}</span>
                        <span className="text-green-600 font-medium">
                          {sys.subsidy}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-gray-400 text-center">
                  Beispielhafte Darstellung – echte Ergebnisse nach dem
                  HeizungsCheck
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== REFERENZEN TEASER ===================== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              Referenzen
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Ausgewählte Projekte
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredRefs.map((ref) => (
              <div
                key={ref.slug}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="relative h-52 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ref.image}
                    alt={ref.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {ref.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-red-600 text-white px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900">{ref.title}</h3>
                  <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {ref.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {ref.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {ref.shortDesc}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-sm text-green-600 font-medium">
                    <CheckCircle2 className="h-4 w-4" />
                    Erfolgreich abgeschlossen
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href={`${base}/badsanierung/galerie`}
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              Badsanierung-Galerie ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== STATS BAR ===================== */}
      <StatsBar />

      {/* ===================== KUNDENSTIMMEN ===================== */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              Kundenstimmen
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Das sagen unsere Kunden
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((review) => (
              <TestimonialCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <CTASection />
    </>
  );
}
