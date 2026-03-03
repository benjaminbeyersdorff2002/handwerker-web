import Image from "next/image";
import Link from "next/link";
import {
  Paintbrush,
  Phone,
  Mail,
  MapPin,
  Droplets,
  Home,
  Building2,
  Palette,
  Sparkles,
  Star,
  Award,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Users,
  Heart,
} from "lucide-react";
import type { Metadata } from "next";
import MalerSchneiderNavbar from "@/components/showcase/MalerSchneiderNavbar";

export const metadata: Metadata = {
  title: "Malerbetrieb Schneider | Maler & Lackierer in Herborn",
  description:
    "Innenmalerei, Fassadengestaltung, Lackierarbeiten und Kreativtechniken in Herborn und Umgebung. Familienbetrieb seit 2004.",
};

const services = [
  {
    icon: Paintbrush,
    name: "Innenmalerei",
    desc: "Professionelle Malerarbeiten für Wohnräume, Büros und Geschäftsräume. Sauber und termingerecht.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
  },
  {
    icon: Home,
    name: "Fassadengestaltung",
    desc: "Fassadenanstriche, -sanierungen und Wärmedämmung mit hochwertigen Materialien.",
    image: "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=600&h=400&fit=crop",
  },
  {
    icon: Droplets,
    name: "Lackierarbeiten",
    desc: "Lackierung von Türen, Fenstern, Heizkörpern und Metalloberflächen – vom Streichen bis zur Sprühlackierung.",
    image: "https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?w=600&h=400&fit=crop",
  },
  {
    icon: Palette,
    name: "Kreativtechniken",
    desc: "Spachteltechnik, Wischtechnik, Betonoptik und dekorative Wandgestaltung für besondere Akzente.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=400&fit=crop",
  },
  {
    icon: Building2,
    name: "Tapezierarbeiten",
    desc: "Tapeten aller Art – von klassischer Raufaser bis zur edlen Designtapete, perfekt verarbeitet.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
  },
  {
    icon: Sparkles,
    name: "Bodenbeschichtung",
    desc: "Epoxidharz- und Polyurethanbeschichtungen für Garagen, Keller, Werkstätten und Gewerbeflächen.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop",
  },
];

const beforeAfter = [
  {
    title: "Wohnzimmer Komplettrenovierung",
    type: "Innenmalerei",
    location: "Herborn",
    beforeImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop",
  },
  {
    title: "Altbau-Fassade Neuanstrich",
    type: "Fassade",
    location: "Dillenburg",
    beforeImage: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=600&h=400&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
  },
  {
    title: "Treppenhaus Kreativtechnik",
    type: "Kreativtechnik",
    location: "Wetzlar",
    beforeImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&h=400&fit=crop",
  },
];

const references = [
  {
    title: "Villa Komplettrenovierung",
    location: "Herborn",
    year: "2024",
    desc: "Innen- und Außenanstrich einer 280 m² Villa. Farbkonzept mit Farrow & Ball Farben, Stuckarbeiten und Deckengestaltung.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
    tags: ["Innenmalerei", "Fassade", "Premium"],
  },
  {
    title: "Büro-Etage Umbau",
    location: "Wetzlar",
    year: "2024",
    desc: "Komplette Neugestaltung einer 450 m² Bürofläche. Corporate Design Farbkonzept, Akzentwände und Bodenbeschichtung.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=500&fit=crop",
    tags: ["Gewerbe", "Bodenbeschichtung", "Design"],
  },
  {
    title: "Mehrfamilienhaus Fassade",
    location: "Haiger",
    year: "2023",
    desc: "Fassadensanierung mit Wärmedämmverbundsystem (WDVS) für ein 6-Parteien-Haus. Inklusive Balkon- und Sockelanstrich.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop",
    tags: ["Fassade", "WDVS", "Sanierung"],
  },
];

const reviews = [
  {
    name: "Andrea Fischer",
    date: "vor 1 Woche",
    stars: 5,
    text: "Unser Wohnzimmer sieht aus wie aus einem Magazin! Die Farbberatung von Frau Schneider war Gold wert. Super saubere Arbeit, man hat nach dem Streichen nichts mehr gemerkt.",
  },
  {
    name: "Klaus Hoffmann",
    date: "vor 3 Wochen",
    stars: 5,
    text: "Die Fassade unseres Hauses erstrahlt in neuem Glanz. Pünktlich, freundlich und das Ergebnis ist perfekt. Preis-Leistung stimmt absolut!",
  },
  {
    name: "Julia Meier",
    date: "vor 2 Monaten",
    stars: 5,
    text: "Tolle Spachteltechnik im Flur – genau so haben wir uns das vorgestellt. Das Team war super nett und hat alles sauber hinterlassen. Gerne wieder!",
  },
];

export default function MalerbetriebSchneiderPage() {
  return (
    <div className="min-h-screen bg-white">
      <MalerSchneiderNavbar />

      {/* ─── HERO ─── */}
      <section className="relative text-white overflow-hidden min-h-[100vh] flex items-center pt-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920&h=1080&fit=crop&q=80"
            alt="Maler bei der Arbeit mit Farbrolle"
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
                  <span className="text-2xl font-bold tracking-tight">Malerbetrieb Schneider</span>
                  <p className="text-sm text-emerald-200">Maler- & Lackierermeister</p>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
                Farbe bekennen.
                <br />
                <span className="text-emerald-300">Qualität erleben.</span>
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
                  { icon: Calendar, text: "Seit 2004" },
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
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
                >
                  Kostenloses Angebot
                  <ChevronRight className="ml-1 h-5 w-5" />
                </a>
                <a
                  href="#galerie"
                  className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  Unsere Arbeiten ansehen
                </a>
              </div>
            </div>

            {/* Right side - Image collage */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop"
                      alt="Malerarbeiten innen"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1615529182904-14819c35db37?w=400&h=200&fit=crop"
                      alt="Kreativtechnik Wand"
                      width={400}
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?w=400&h=200&fit=crop"
                      alt="Farbauswahl"
                      width={400}
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                      <span className="ml-2 font-bold">4.8</span>
                    </div>
                    <p className="text-sm text-emerald-200">
                      <strong className="text-white">89 Google-Bewertungen</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ÜBER UNS ─── */}
      <section id="ueber-uns" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
                  alt="Maler-Team bei der Arbeit"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:right-4 bg-emerald-600 text-white px-6 py-4 rounded-2xl shadow-xl">
                <div className="text-3xl font-extrabold">20+</div>
                <div className="text-sm font-semibold">Jahre Erfahrung</div>
              </div>
            </div>

            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Über uns
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                Familienbetrieb mit Herz und Farbe
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Seit 2004 verschönern wir Häuser, Wohnungen und Gewerbeflächen in
                Mittelhessen. Als inhabergeführter Familienbetrieb legen wir besonderen
                Wert auf persönlichen Kontakt, saubere Arbeit und faire Preise.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Unser 6-köpfiges Team arbeitet mit hochwertigen Markenprodukten und
                beherrscht sowohl klassische Maltechniken als auch moderne
                Kreativtechniken. Wir nehmen uns Zeit für eine individuelle
                Farbberatung – damit das Ergebnis genau Ihren Vorstellungen entspricht.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { label: "Meisterbetrieb", sub: "HWK Wiesbaden" },
                  { label: "Caparol Partner", sub: "Premium-Farben" },
                  { label: "Farbberatung", sub: "Inkl. im Angebot" },
                ].map((cert) => (
                  <div
                    key={cert.label}
                    className="text-center bg-emerald-50 rounded-xl p-4 border border-emerald-100"
                  >
                    <Award className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                    <div className="font-bold text-sm text-gray-900">{cert.label}</div>
                    <div className="text-xs text-gray-500">{cert.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEISTUNGEN ─── */}
      <section id="leistungen" className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Unsere Leistungen
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Alles aus einer Hand
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Von der kleinen Renovierung bis zum Großprojekt – wir bringen Farbe
              in Ihr Leben. Professionell und mit Liebe zum Detail.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-md text-emerald-600">
                    <service.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{service.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VORHER / NACHHER ─── */}
      <section id="galerie" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Vorher / Nachher
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Unsere Arbeiten sprechen für sich
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Sehen Sie selbst, welchen Unterschied professionelle Malerarbeit macht.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {beforeAfter.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
                <div className="grid grid-cols-2">
                  <div className="relative h-48">
                    <Image src={item.beforeImage} alt={`${item.title} vorher`} fill className="object-cover" />
                    <div className="absolute bottom-2 left-2 bg-gray-900/80 text-white text-xs font-bold px-2.5 py-1 rounded-md">
                      Vorher
                    </div>
                  </div>
                  <div className="relative h-48">
                    <Image src={item.afterImage} alt={`${item.title} nachher`} fill className="object-cover" />
                    <div className="absolute bottom-2 right-2 bg-emerald-600/90 text-white text-xs font-bold px-2.5 py-1 rounded-md">
                      Nachher
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                    <span className="text-emerald-600 font-medium">{item.type}</span>
                    <span>·</span>
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REFERENZPROJEKTE ─── */}
      <section id="referenzen" className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Referenzen
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Ausgewählte Projekte
            </h2>
          </div>

          <div className="space-y-12">
            {references.map((ref, index) => (
              <div
                key={ref.title}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                <div className={`relative rounded-2xl overflow-hidden shadow-lg ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={ref.image} alt={ref.title} width={800} height={500} className="w-full h-auto object-cover aspect-[16/10]" />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ref.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{ref.title}</h3>
                  <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                    <div className="flex items-center gap-1"><MapPin className="h-4 w-4" />{ref.location}</div>
                    <div className="flex items-center gap-1"><Calendar className="h-4 w-4" />{ref.year}</div>
                  </div>
                  <p className="mt-4 text-gray-600 leading-relaxed">{ref.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-emerald-600 font-semibold text-sm">
                    <CheckCircle2 className="h-4 w-4" />
                    Erfolgreich abgeschlossen
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ZAHLEN & FAKTEN ─── */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "20+", label: "Jahre Erfahrung", icon: Calendar },
              { value: "800+", label: "Zufriedene Kunden", icon: Users },
              { value: "4.8", label: "Google Bewertung", icon: Star, showStars: true },
              { value: "100%", label: "Familienbetrieb", icon: Heart },
            ].map((stat) => (
              <div key={stat.label}>
                <stat.icon className="h-8 w-8 text-emerald-300 mx-auto mb-3" />
                <div className="text-4xl font-extrabold">{stat.value}</div>
                {stat.showStars && (
                  <div className="flex justify-center gap-0.5 my-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                )}
                <div className="text-sm text-emerald-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  <Star key={s} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-gray-500 text-sm">4.8 von 5 · 89 Bewertungen auf Google</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                      <p className="text-xs text-gray-400">{review.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KONTAKT ─── */}
      <section id="kontakt" className="relative py-20 md:py-28 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&h=1080&fit=crop"
            alt="Malerarbeiten"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-emerald-950/92" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-300 font-semibold text-sm uppercase tracking-wider">
              Kontakt
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              Jetzt kostenloses Angebot anfordern
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Kontaktdaten</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-emerald-300 mt-0.5" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-emerald-200">06471 / 123 456</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-emerald-300 mt-0.5" />
                    <div>
                      <p className="font-medium">E-Mail</p>
                      <p className="text-emerald-200">info@maler-schneider.de</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-emerald-300 mt-0.5" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-emerald-200">Farbweg 7<br />35745 Herborn</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Öffnungszeiten</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-emerald-200">Mo – Fr</span><span>07:00 – 17:00 Uhr</span></div>
                  <div className="flex justify-between"><span className="text-emerald-200">Samstag</span><span>Nach Vereinbarung</span></div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 h-40 bg-emerald-900/50 flex items-center justify-center">
                <div className="text-center text-emerald-300 text-sm">
                  <MapPin className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  Google Maps Kartenansicht
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="font-semibold text-lg mb-6">Anfrage senden</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="block text-sm text-emerald-200 mb-1.5">Vorname *</label><div className="h-11 bg-white/10 rounded-lg border border-white/20" /></div>
                <div><label className="block text-sm text-emerald-200 mb-1.5">Nachname *</label><div className="h-11 bg-white/10 rounded-lg border border-white/20" /></div>
                <div><label className="block text-sm text-emerald-200 mb-1.5">E-Mail *</label><div className="h-11 bg-white/10 rounded-lg border border-white/20" /></div>
                <div><label className="block text-sm text-emerald-200 mb-1.5">Telefon</label><div className="h-11 bg-white/10 rounded-lg border border-white/20" /></div>
              </div>
              <div className="mt-4"><label className="block text-sm text-emerald-200 mb-1.5">Gewünschte Leistung</label><div className="h-11 bg-white/10 rounded-lg border border-white/20" /></div>
              <div className="mt-4"><label className="block text-sm text-emerald-200 mb-1.5">Ihre Nachricht *</label><div className="h-32 bg-white/10 rounded-lg border border-white/20" /></div>
              <div className="mt-4 flex items-start gap-2 text-xs text-emerald-300">
                <div className="h-4 w-4 rounded border border-white/20 bg-white/10 shrink-0 mt-0.5" />
                <span>Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.</span>
              </div>
              <div className="mt-6 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-700 font-bold cursor-pointer hover:bg-emerald-50 transition-colors">
                Angebot anfordern
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EIGENER FOOTER ─── */}
      <footer className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
                  <Paintbrush className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold">Malerbetrieb Schneider</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Ihr Malermeisterbetrieb in Herborn und Umgebung. Seit 2004 mit
                Farbe und Leidenschaft für Sie da.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Leistungen</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {["Innenmalerei", "Fassadengestaltung", "Lackierarbeiten", "Kreativtechniken", "Tapezierarbeiten", "Bodenbeschichtung"].map((s) => (
                  <li key={s}><span className="hover:text-emerald-400 transition-colors cursor-pointer">{s}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Einsatzgebiet</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {["Herborn", "Dillenburg", "Haiger", "Wetzlar", "Driedorf", "Mittenaar"].map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-400" />06471 / 123 456</li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-400" />info@maler-schneider.de</li>
                <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-emerald-400 mt-0.5" /><span>Farbweg 7<br />35745 Herborn</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <span>&copy; 2026 Malerbetrieb Schneider. Alle Rechte vorbehalten.</span>
            <div className="flex gap-6">
              <span className="hover:text-white transition-colors cursor-pointer">Impressum</span>
              <span className="hover:text-white transition-colors cursor-pointer">Datenschutz</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Demo Back Link */}
      <div className="py-6 bg-amber-50 border-t border-amber-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/showcase" className="inline-flex items-center gap-2 text-sm text-amber-700 hover:text-amber-900 font-medium transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Showcase-Übersicht – Diese Demo wurde mit MeisterSeite erstellt
          </Link>
        </div>
      </div>
    </div>
  );
}
