import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Clock,
  ArrowRight,
  ChevronRight,
  MapPin,
  Calendar,
  Award,
  Star,
} from "lucide-react";
import { services, references, reviews, companyInfo } from "@/data/elektro-weber";
import ServiceCard from "@/components/showcase/elektro-weber/ServiceCard";
import StatsBar from "@/components/showcase/elektro-weber/StatsBar";
import TestimonialCard from "@/components/showcase/elektro-weber/TestimonialCard";
import CTASection from "@/components/showcase/elektro-weber/CTASection";

const base = "/showcase/elektro-weber";

export default function ElektroWeberHome() {
  const heroRefs = references.slice(0, 3);
  const heroReviews = reviews.slice(0, 3);

  return (
    <>
      {/* ───── Hero ───── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&h=1080&fit=crop"
          alt="Elektro Weber – Ihr Meisterbetrieb"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-blue-950/40" />

        <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1.5 rounded-full">
                Meisterbetrieb
              </span>
              <span className="bg-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                Seit 2009
              </span>
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                24h Notdienst
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Ihr Elektriker in{" "}
              <span className="text-yellow-400">Mittelhessen</span>
            </h1>

            <p className="mt-6 text-lg text-blue-100/80 leading-relaxed max-w-xl">
              Elektroinstallationen, Smart Home, Photovoltaik und 24h Notdienst.
              Kompetent, schnell und fair – in Dillenburg, Herborn, Wetzlar und
              Umgebung.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href={`${base}/kontakt`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors shadow-lg"
              >
                Kostenlos anfragen
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={`tel:${companyInfo.phoneFull}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-500 transition-colors"
              >
                <Phone className="h-5 w-5" />
                {companyInfo.phone}
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { icon: Award, text: "Meisterbetrieb" },
                { icon: Calendar, text: "Seit 2009" },
                { icon: Clock, text: "24h Notdienst" },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white text-sm"
                >
                  <badge.icon className="h-4 w-4 text-yellow-400" />
                  {badge.text}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Notdienst Card */}
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 max-w-sm w-full">
            <div className="bg-red-600/90 backdrop-blur-sm rounded-2xl p-6 border border-red-400/30 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 animate-pulse">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-red-100 font-medium">24h Notdienst</p>
                  <p className="text-2xl font-extrabold text-white">{companyInfo.phone}</p>
                </div>
              </div>
              <p className="text-sm text-red-100">
                Stromausfall? Kurzschluss? Wir sind rund um die Uhr für Sie da.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="ml-2 font-bold text-white">4.9</span>
              </div>
              <p className="text-sm text-blue-200">
                Basierend auf <strong className="text-white">127 Google-Bewertungen</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Mobile Notdienst Banner ───── */}
      <div className="lg:hidden bg-red-600 py-3">
        <a
          href={`tel:${companyInfo.phoneFull}`}
          className="flex items-center justify-center gap-2 text-white font-bold"
        >
          <Phone className="h-5 w-5" />
          24h Notdienst: {companyInfo.phone}
        </a>
      </div>

      {/* ───── Leistungen Teaser ───── */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Unsere Leistungen
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Was wir für Sie tun
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                href={`${base}/leistungen/${service.slug}`}
              />
            ))}

            {/* Notdienst Card – special red style */}
            <Link href={`${base}/notdienst`} className="group block">
              <div className="bg-red-600 rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop"
                    alt="24h Notdienst"
                    fill
                    className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Clock className="h-16 w-16 text-white/80" />
                  </div>
                </div>
                <div className="p-5 text-white flex-1">
                  <h3 className="font-bold text-lg">24h Notdienst</h3>
                  <p className="mt-2 text-sm text-red-100 leading-relaxed">
                    Stromausfall? Kurzschluss? Wir sind rund um die Uhr für Sie
                    da – auch an Sonn- und Feiertagen.
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-yellow-300">
                    Notdienst-Seite
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-10">
            <Link
              href={`${base}/leistungen`}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Alle Leistungen im Detail
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───── Referenzen Teaser ───── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Referenzen
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Ausgewählte Projekte
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {heroRefs.map((ref) => (
              <div
                key={ref.slug}
                className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={ref.image}
                    alt={ref.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {ref.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900">{ref.title}</h3>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {ref.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {ref.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {ref.shortDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href={`${base}/referenzen`}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Alle Projekte ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───── Stats ───── */}
      <StatsBar />

      {/* ───── Kundenstimmen ───── */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Kundenstimmen
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Was unsere Kunden sagen
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {heroReviews.map((review) => (
              <TestimonialCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <CTASection />
    </>
  );
}
