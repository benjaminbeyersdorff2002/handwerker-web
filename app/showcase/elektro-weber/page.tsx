import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Phone,
  Shield,
  Lightbulb,
  Home,
  Building2,
  Clock,
  Mail,
  MapPin,
  Star,
  Award,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  Users,
  Calendar,
} from "lucide-react";
import type { Metadata } from "next";
import ElektroWeberNavbar from "@/components/showcase/ElektroWeberNavbar";

export const metadata: Metadata = {
  title: "Elektro Weber | Ihr Elektriker-Meisterbetrieb in Mittelhessen",
  description:
    "Elektroinstallationen, Smart Home, Photovoltaik und 24h Notdienst in Dillenburg, Herborn & Wetzlar. Meisterbetrieb seit 2009.",
};

const services = [
  {
    icon: Lightbulb,
    name: "Elektroinstallationen",
    desc: "Neuinstallationen, Modernisierungen und Erweiterungen – für Privat und Gewerbe. Fachgerecht nach VDE-Normen.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
  },
  {
    icon: Home,
    name: "Smart Home",
    desc: "Intelligente Licht-, Heizungs- und Jalousiesteuerung. Wir planen und installieren Ihr vernetztes Zuhause.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",
  },
  {
    icon: Shield,
    name: "Sicherheitstechnik",
    desc: "Alarmanlagen, Videoüberwachung, Rauchmelder und Zutrittskontrolle – für Ihr sicheres Zuhause.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop",
  },
  {
    icon: Zap,
    name: "Photovoltaik",
    desc: "Planung, Installation und Wartung von Solaranlagen mit Batteriespeicher. Unabhängig Strom erzeugen.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
  },
  {
    icon: Building2,
    name: "Gewerbe & Industrie",
    desc: "Elektrotechnik für Bürogebäude, Produktionshallen und Geschäftsräume. Termingerecht und zuverlässig.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
  },
  {
    icon: Clock,
    name: "24h Notdienst",
    desc: "Stromausfall, Kurzschluss oder defekte Sicherung? Unser Notdienst-Team ist rund um die Uhr erreichbar.",
    image: "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?w=600&h=400&fit=crop",
  },
];

const references = [
  {
    title: "Komplettsanierung Altbau",
    location: "Herborn",
    year: "2024",
    desc: "Elektroinstallation inkl. Smart Home in einem denkmalgeschützten Wohnhaus. 14 Räume, KNX-Bussystem, LED-Beleuchtungskonzept.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=500&fit=crop",
    tags: ["Sanierung", "Smart Home", "KNX"],
  },
  {
    title: "PV-Anlage 15 kWp mit Speicher",
    location: "Dillenburg",
    year: "2024",
    desc: "Photovoltaikanlage mit 40 Modulen und 10 kWh Batteriespeicher. Eigenverbrauchsquote über 70%.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=500&fit=crop",
    tags: ["Photovoltaik", "Speicher", "Energiewende"],
  },
  {
    title: "Bürogebäude Neubau",
    location: "Wetzlar",
    year: "2023",
    desc: "Komplette Elektroplanung und -installation für ein 3-stöckiges Bürogebäude. 2.400 m², Netzwerk, USV-Anlage.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop",
    tags: ["Gewerbe", "Neubau", "Netzwerk"],
  },
];

const reviews = [
  {
    name: "Michael Hartmann",
    date: "vor 2 Wochen",
    stars: 5,
    text: "Herr Weber und sein Team haben unsere komplette Elektrik im Altbau erneuert. Saubere Arbeit, pünktlich fertig und der Preis war fair. Klare Empfehlung!",
  },
  {
    name: "Sabine Krämer",
    date: "vor 1 Monat",
    stars: 5,
    text: "Unsere PV-Anlage läuft seit 3 Monaten einwandfrei. Die Beratung war top, die Installation professionell. Wir sparen jetzt richtig Strom!",
  },
  {
    name: "Thorsten Becker",
    date: "vor 2 Monaten",
    stars: 5,
    text: "Nachts um 23 Uhr Stromausfall – Elektro Weber war innerhalb von 45 Minuten da. Das nenne ich Service! Vielen Dank.",
  },
];

export default function ElektroWeberPage() {
  return (
    <div className="min-h-screen bg-white">
      <ElektroWeberNavbar />

      {/* ─── HERO ─── */}
      <section className="relative text-white overflow-hidden min-h-[100vh] flex items-center pt-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&h=1080&fit=crop&q=80"
            alt="Elektriker bei der Arbeit an einem Sicherungskasten"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-800/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-blue-900">
                  <Zap className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-2xl font-bold tracking-tight">Elektro Weber</span>
                  <p className="text-sm text-blue-200">Meisterbetrieb für Elektrotechnik</p>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
                Ihr Elektriker in
                <br />
                <span className="text-yellow-400">Mittelhessen</span>
              </h1>

              <p className="mt-6 text-lg text-blue-100 max-w-lg leading-relaxed">
                Von der Steckdose bis zur Solaranlage – wir sind Ihr zuverlässiger
                Partner für alle Elektroarbeiten. Kompetent, schnell und fair.
              </p>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { icon: Award, text: "Meisterbetrieb" },
                  { icon: Calendar, text: "Seit 2009" },
                  { icon: Clock, text: "24h Notdienst" },
                ].map((badge) => (
                  <div
                    key={badge.text}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-sm"
                  >
                    <badge.icon className="h-4 w-4 text-yellow-400" />
                    {badge.text}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-yellow-400 text-blue-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/25"
                >
                  Kostenlos anfragen
                  <ChevronRight className="ml-1 h-5 w-5" />
                </a>
                <a
                  href="tel:0800123456"
                  className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  0800 123 456
                </a>
              </div>
            </div>

            {/* Notdienst Card Desktop */}
            <div className="hidden lg:flex flex-col items-end gap-6">
              <div className="bg-red-600/90 backdrop-blur-sm rounded-2xl p-6 border border-red-400/30 w-full max-w-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 animate-pulse">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-red-100 font-medium">24h Notdienst</p>
                    <p className="text-2xl font-extrabold">0800 123 456</p>
                  </div>
                </div>
                <p className="text-sm text-red-100">
                  Stromausfall? Kurzschluss? Wir sind rund um die Uhr für Sie da –
                  auch an Sonn- und Feiertagen.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 w-full max-w-sm">
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="ml-2 font-bold">4.9</span>
                </div>
                <p className="text-sm text-blue-200">
                  Basierend auf <strong className="text-white">127 Google-Bewertungen</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notdienst Banner (Mobile) */}
      <section className="lg:hidden bg-red-600 text-white py-4">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-center gap-3">
          <Phone className="h-5 w-5 animate-pulse" />
          <span className="font-bold">24h Notdienst: </span>
          <a href="tel:0800123456" className="font-bold underline">0800 123 456</a>
        </div>
      </section>

      {/* ─── ÜBER UNS ─── */}
      <section id="ueber-uns" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop"
                  alt="Elektriker-Team bei der Arbeit"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 md:right-4 bg-yellow-400 text-blue-900 px-6 py-4 rounded-2xl shadow-xl">
                <div className="text-3xl font-extrabold">15+</div>
                <div className="text-sm font-semibold">Jahre Erfahrung</div>
              </div>
            </div>

            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Über uns
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                Familiärer Meisterbetrieb aus Dillenburg
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Seit 2009 sind wir Ihr zuverlässiger Partner für alle Elektroarbeiten in
                Mittelhessen. Als inhabergeführter Meisterbetrieb stehen wir für
                persönlichen Service, handwerkliche Qualität und faire Preise.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Unser Team aus 8 qualifizierten Fachkräften betreut Projekte von der
                einfachen Steckdosenmontage bis zur kompletten Elektroplanung für
                Neubauten. Dabei setzen wir auf modernste Technik und halten uns stets
                auf dem neuesten Stand der VDE-Normen.
              </p>

              {/* Certifications */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { label: "Meisterbetrieb", sub: "HWK Wiesbaden" },
                  { label: "E-Check Partner", sub: "Zertifiziert" },
                  { label: "VDE-geprüft", sub: "Normkonform" },
                ].map((cert) => (
                  <div
                    key={cert.label}
                    className="text-center bg-blue-50 rounded-xl p-4 border border-blue-100"
                  >
                    <Award className="h-6 w-6 text-blue-600 mx-auto mb-2" />
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
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Unsere Leistungen
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Elektrotechnik aus Meisterhand
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Von der Elektroinstallation bis zur Solaranlage – wir bieten das
              komplette Spektrum moderner Elektrotechnik.
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
                  <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-md text-blue-600">
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

      {/* ─── REFERENZPROJEKTE ─── */}
      <section id="referenzen" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Referenzen
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Ausgewählte Projekte
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Ein Auszug aus unseren über 500 abgeschlossenen Projekten in der Region.
            </p>
          </div>

          <div className="space-y-12">
            {references.map((ref, index) => (
              <div
                key={ref.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`relative rounded-2xl overflow-hidden shadow-lg ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={ref.image}
                    alt={ref.title}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover aspect-[16/10]"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ref.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{ref.title}</h3>
                  <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {ref.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {ref.year}
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 leading-relaxed">{ref.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-blue-600 font-semibold text-sm">
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
      <section className="py-16 bg-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Jahre Erfahrung", icon: Calendar },
              { value: "500+", label: "Projekte abgeschlossen", icon: CheckCircle2 },
              { value: "4.9", label: "Google Bewertung", icon: Star, showStars: true },
              { value: "24/7", label: "Notdienst erreichbar", icon: Clock },
            ].map((stat) => (
              <div key={stat.label}>
                <stat.icon className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-4xl font-extrabold">{stat.value}</div>
                {stat.showStars && (
                  <div className="flex justify-center gap-0.5 my-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                )}
                <div className="text-sm text-blue-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KUNDENSTIMMEN ─── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
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
              <span className="text-gray-500 text-sm">4.9 von 5 · 127 Bewertungen auf Google</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
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
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1920&h=1080&fit=crop"
            alt="Elektroarbeit"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-950/92" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
              Kontakt
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              Jetzt unverbindlich anfragen
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Kontaktdaten</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-yellow-400 mt-0.5" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-blue-200">0800 123 456</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-yellow-400 mt-0.5" />
                    <div>
                      <p className="font-medium">E-Mail</p>
                      <p className="text-blue-200">info@elektro-weber.de</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-yellow-400 mt-0.5" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-blue-200">Musterstraße 12<br />35683 Dillenburg</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Öffnungszeiten</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-200">Mo – Fr</span>
                    <span>07:30 – 17:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Samstag</span>
                    <span>08:00 – 12:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Notdienst</span>
                    <span className="text-yellow-400 font-semibold">24/7 erreichbar</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden border border-white/10 h-40 bg-blue-900/50 flex items-center justify-center">
                <div className="text-center text-blue-300 text-sm">
                  <MapPin className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  Google Maps Kartenansicht
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="font-semibold text-lg mb-6">Anfrage senden</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-blue-200 mb-1.5">Vorname *</label>
                  <div className="h-11 bg-white/10 rounded-lg border border-white/20" />
                </div>
                <div>
                  <label className="block text-sm text-blue-200 mb-1.5">Nachname *</label>
                  <div className="h-11 bg-white/10 rounded-lg border border-white/20" />
                </div>
                <div>
                  <label className="block text-sm text-blue-200 mb-1.5">E-Mail *</label>
                  <div className="h-11 bg-white/10 rounded-lg border border-white/20" />
                </div>
                <div>
                  <label className="block text-sm text-blue-200 mb-1.5">Telefon</label>
                  <div className="h-11 bg-white/10 rounded-lg border border-white/20" />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm text-blue-200 mb-1.5">Betreff</label>
                <div className="h-11 bg-white/10 rounded-lg border border-white/20" />
              </div>
              <div className="mt-4">
                <label className="block text-sm text-blue-200 mb-1.5">Ihre Nachricht *</label>
                <div className="h-32 bg-white/10 rounded-lg border border-white/20" />
              </div>
              <div className="mt-4 flex items-start gap-2 text-xs text-blue-300">
                <div className="h-4 w-4 rounded border border-white/20 bg-white/10 shrink-0 mt-0.5" />
                <span>Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.</span>
              </div>
              <div className="mt-6 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-blue-900 font-bold cursor-pointer hover:bg-yellow-300 transition-colors">
                Anfrage absenden
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
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-400 text-blue-900">
                  <Zap className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold">Elektro Weber</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Ihr Meisterbetrieb für Elektrotechnik in Dillenburg und
                Umgebung. Seit 2009 zuverlässig für Sie da.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Leistungen</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {["Elektroinstallationen", "Smart Home", "Sicherheitstechnik", "Photovoltaik", "Gewerbe & Industrie", "24h Notdienst"].map((s) => (
                  <li key={s}>
                    <span className="hover:text-yellow-400 transition-colors cursor-pointer">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Einsatzgebiet</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {["Dillenburg", "Herborn", "Haiger", "Wetzlar", "Eschenburg", "Breitscheid"].map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-yellow-400" />
                  0800 123 456
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-yellow-400" />
                  info@elektro-weber.de
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-yellow-400 mt-0.5" />
                  <span>Musterstraße 12<br />35683 Dillenburg</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <span>&copy; 2026 Elektro Weber. Alle Rechte vorbehalten.</span>
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
          <Link
            href="/showcase"
            className="inline-flex items-center gap-2 text-sm text-amber-700 hover:text-amber-900 font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Showcase-Übersicht – Diese Demo wurde mit HandwerkWeb erstellt
          </Link>
        </div>
      </div>
    </div>
  );
}
