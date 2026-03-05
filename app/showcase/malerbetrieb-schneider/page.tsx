import Image from "next/image";
import Link from "next/link";
import {
  Paintbrush,
  Award,
  Calendar,
  Heart,
  Star,
  ChevronRight,
  ArrowRight,
  Palette,
} from "lucide-react";
import {
  services,
  galleryProjects,
  reviews,
  companyInfo,
} from "@/data/maler-schneider";
import MalerServiceCard from "@/components/showcase/maler-schneider/MalerServiceCard";
import StatsBar from "@/components/showcase/maler-schneider/StatsBar";
import TestimonialCard from "@/components/showcase/maler-schneider/TestimonialCard";
import CTASection from "@/components/showcase/maler-schneider/CTASection";
import BeforeAfterSlider from "@/components/showcase/elektro-weber/BeforeAfterSlider";

const base = "/showcase/malerbetrieb-schneider";
const heroGallery = galleryProjects.slice(0, 3);
const heroReviews = reviews.slice(0, 3);

export default function MalerbetriebSchneiderPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative text-white overflow-hidden min-h-[100vh] flex items-center pt-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&h=1080&fit=crop&q=80"
            alt="Schön gestaltetes Wohnzimmer"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/85 to-emerald-800/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-700">
                  <Paintbrush className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-2xl font-bold tracking-tight">
                    {companyInfo.name}
                  </span>
                  <p className="text-sm text-emerald-200">
                    Maler- & Lackierermeister
                  </p>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
                So schön könnte es
                <br />
                <span className="text-emerald-300">bei Ihnen aussehen.</span>
              </h1>

              <p className="mt-6 text-lg text-emerald-100 max-w-lg leading-relaxed">
                Ihr Malermeisterbetrieb in Mittelhessen – für Innenräume,
                Fassaden und kreative Wandgestaltung. Sauber, pünktlich und
                mit Liebe zum Detail.
              </p>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { icon: Award, text: "Meisterbetrieb" },
                  { icon: Calendar, text: `Seit ${companyInfo.since}` },
                  { icon: Heart, text: "800+ Kunden" },
                ].map((badge) => (
                  <div
                    key={badge.text}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-sm"
                  >
                    <badge.icon className="h-4 w-4 text-emerald-300" />
                    {badge.text}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href={`${base}/kontakt`}
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
                >
                  Kostenloses Angebot
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
                <Link
                  href={`${base}/galerie`}
                  className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  Unsere Arbeiten ansehen
                </Link>
              </div>
            </div>

            {/* Right side - Image collage */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop"
                      alt="Spachteltechnik Wand"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1615529182904-14819c35db37?w=400&h=200&fit=crop"
                      alt="Kreativtechnik Detail"
                      width={400}
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=200&fit=crop"
                      alt="Renovierte Fassade"
                      width={400}
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="h-5 w-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                      <span className="ml-2 font-bold">
                        {companyInfo.googleRating}
                      </span>
                    </div>
                    <p className="text-sm text-emerald-200">
                      <strong className="text-white">
                        {companyInfo.googleReviews} Google-Bewertungen
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEISTUNGEN TEASER ─── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Unsere Leistungen
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Alles aus einer Hand
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Von der kleinen Renovierung bis zum Großprojekt – wir bringen
              Farbe in Ihr Leben.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <MalerServiceCard
                key={service.slug}
                service={service}
                href={`${base}/leistungen/${service.slug}`}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href={`${base}/leistungen`}
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
            >
              Alle Leistungen im Detail
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── VORHER / NACHHER TEASER ─── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Vorher / Nachher
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Unsere Arbeiten sprechen für sich
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Sehen Sie selbst, welchen Unterschied professionelle Malerarbeit
              macht.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {heroGallery.map((project) => (
              <div
                key={project.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100"
              >
                <div className="relative h-64">
                  <BeforeAfterSlider
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                    alt={project.title}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                    <span className="text-emerald-600 font-medium">
                      {project.leistung}
                    </span>
                    <span>&middot;</span>
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href={`${base}/galerie`}
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
            >
              Alle Projekte in der Galerie
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <StatsBar />

      {/* ─── KUNDENSTIMMEN ─── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Kundenstimmen
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Das sagen unsere Kunden
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="text-gray-500 text-sm">
                {companyInfo.googleRating} von 5 ·{" "}
                {companyInfo.googleReviews} Bewertungen auf Google
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {heroReviews.map((review) => (
              <TestimonialCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FARBWELT TEASER ─── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Inspiration Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop"
                  alt="Farbinspiration Wohnzimmer"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Color swatches overlay */}
              <div className="absolute -bottom-4 left-4 right-4 flex gap-2 justify-center">
                {[
                  { name: "Greige", hex: "#B8A99A" },
                  { name: "Salbei", hex: "#9CAF88" },
                  { name: "Creme", hex: "#F5F0E8" },
                ].map((c) => (
                  <div
                    key={c.name}
                    className="bg-white rounded-lg shadow-md px-3 py-2 flex items-center gap-2"
                  >
                    <div
                      className="w-6 h-6 rounded-full border border-gray-200"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="text-xs font-medium text-gray-700">
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Farbwelt Teaser */}
            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Farbwelt
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                Welche Farbe passt zu Ihnen?
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Lassen Sie sich von unserer Inspirationsgalerie begeistern oder
                nutzen Sie unseren interaktiven Farbberater – in nur 5 Fragen
                zur perfekten Farbempfehlung für Ihren Raum.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href={`${base}/farbwelt`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 transition-colors"
                >
                  <Palette className="h-5 w-5" />
                  Farben entdecken
                </Link>
                <Link
                  href={`${base}/farbwelt#farbberater`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-emerald-600 text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-colors"
                >
                  Farbberatung starten
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection />
    </>
  );
}
