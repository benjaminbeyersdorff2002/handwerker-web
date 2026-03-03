import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Flame,
  Phone,
  Mail,
  MapPin,
  Droplets,
  Thermometer,
  Wind,
  Wrench,
  ShieldCheck,
  Clock,
  Star,
  CheckCircle2,
  Users,
  Award,
  Sun,
  CalendarDays,
} from "lucide-react";
import type { Metadata } from "next";
import HaustechnikMuellerNavbar from "@/components/showcase/HaustechnikMuellerNavbar";

export const metadata: Metadata = {
  title: "Haustechnik Müller | Sanitär, Heizung & Klima in Haiger",
  description:
    "Ihr SHK-Meisterbetrieb in Mittelhessen. Sanitärinstallation, Heizungsbau, Klimatechnik und 24h Notdienst. Seit 2001 zuverlässig für Sie da.",
};

export default function HaustechnikMuellerPage() {
  return (
    <div className="min-h-screen bg-white">
      <HaustechnikMuellerNavbar />

      {/* ===================== HERO ===================== */}
      <section className="relative min-h-[100vh] flex items-center pt-24 overflow-hidden">
        {/* Background Image */}
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
                  <span className="text-2xl font-bold text-white">Haustechnik Müller</span>
                  <span className="block text-xs text-red-300 font-medium tracking-wider uppercase">
                    SHK-Meisterbetrieb seit 2001
                  </span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Sanitär. Heizung.
                <br />
                <span className="text-red-400">Klima.</span>
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-lg leading-relaxed">
                Ihr zuverlässiger Partner für Haustechnik in Haiger und Umgebung.
                Von der Badsanierung bis zur Wärmepumpe – kompetent, fair und
                persönlich.
              </p>

              {/* Trust Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
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
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-red-600 text-white font-bold rounded-xl hover:bg-red-500 transition-colors shadow-lg shadow-red-600/30"
                >
                  Angebot anfordern
                </a>
                <a
                  href="tel:+4906461123456"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Notdienst: 06461 / 123 456
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
                <div className="text-white font-bold text-lg">4.9 / 5.0</div>
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
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
            <a
              href="tel:+4906461123456"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-red-600 font-bold rounded-xl hover:bg-red-50 transition-colors text-lg"
            >
              <Phone className="h-5 w-5" />
              06461 / 123 456
            </a>
          </div>
        </div>
      </section>

      {/* ===================== ÜBER UNS ===================== */}
      <section id="ueber-uns" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
                  alt="SHK-Team bei der Arbeit"
                  width={800}
                  height={600}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white rounded-2xl p-5 shadow-xl">
                <div className="text-3xl font-extrabold">25+</div>
                <div className="text-sm text-red-100">Jahre Erfahrung</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
                Über uns
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                Ihr SHK-Meisterbetrieb in Haiger
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Seit 2001 steht Haustechnik Müller für Qualität und Zuverlässigkeit.
                Als Familienmeisterbetrieb in zweiter Generation verbinden wir
                traditionelles Handwerk mit modernster Technik. Unser Team aus
                12 Fachkräften betreut Privat- und Gewerbekunden in der gesamten
                Region Mittelhessen.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Ob Badsanierung, Heizungsmodernisierung oder die Installation
                einer Wärmepumpe – wir beraten Sie ehrlich, planen sorgfältig
                und setzen sauber um. Immer zum fairen Festpreis.
              </p>

              {/* Certifications */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, label: "Meisterbetrieb" },
                  { icon: Award, label: "Buderus Partner" },
                  { icon: Thermometer, label: "Viessmann Fachpartner" },
                  { icon: CheckCircle2, label: "DVGW-zertifiziert" },
                ].map((cert) => (
                  <div
                    key={cert.label}
                    className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-2.5"
                  >
                    <cert.icon className="h-4 w-4 text-red-600 shrink-0" />
                    {cert.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== LEISTUNGEN ===================== */}
      <section id="leistungen" className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              Unsere Leistungen
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Alles rund um Ihre Haustechnik
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Von der Sanitärinstallation über den Heizungsbau bis zur Klimatechnik –
              wir bieten Ihnen das komplette Leistungsspektrum aus einer Hand.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Droplets,
                name: "Sanitärinstallation",
                desc: "Wasseranschlüsse, Rohrleitungsbau und Sanitärmontage für Neubau und Sanierung. Professionell und normgerecht.",
                img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
              },
              {
                icon: Flame,
                name: "Heizungsbau",
                desc: "Installation und Modernisierung von Heizungsanlagen. Gas, Öl, Pellet oder Wärmepumpe – wir beraten Sie neutral.",
                img: "https://images.unsplash.com/photo-1613063457061-eecde6f4b20d?w=600&q=80",
              },
              {
                icon: Droplets,
                name: "Badsanierung",
                desc: "Ihr Traumbad aus einer Hand. Von der Planung über die Fliesen bis zur bodengleichen Dusche – alles inklusive.",
                img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
              },
              {
                icon: Wind,
                name: "Klimaanlagen",
                desc: "Split- und Multi-Split-Klimaanlagen für Wohn- und Gewerberäume. Energieeffizient und leise.",
                img: "https://images.unsplash.com/photo-1624167473693-bb5ea202957f?w=600&q=80",
              },
              {
                icon: Wrench,
                name: "Wartung & Service",
                desc: "Regelmäßige Heizungswartung, Inspektionen und Entstörung. Damit Ihre Anlage zuverlässig läuft.",
                img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
              },
              {
                icon: Sun,
                name: "Erneuerbare Energien",
                desc: "Wärmepumpen, Solarthermie und Photovoltaik. Wir beraten Sie zu Fördermöglichkeiten und Amortisation.",
                img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
              },
            ].map((service) => (
              <div
                key={service.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-red-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-white shadow-lg">
                    <service.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== REFERENZPROJEKTE ===================== */}
      <section id="referenzen" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              Referenzen
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Ausgewählte Projekte
            </h2>
          </div>

          {/* Projekt 1 */}
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80"
                alt="Luxuriöses modernes Badezimmer"
                width={900}
                height={600}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-medium bg-red-50 text-red-600 px-3 py-1 rounded-full">
                  Sanitär
                </span>
                <span className="text-xs font-medium bg-red-50 text-red-600 px-3 py-1 rounded-full">
                  Badsanierung
                </span>
                <span className="text-xs font-medium bg-red-50 text-red-600 px-3 py-1 rounded-full">
                  Premium
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Komplette Badsanierung – Wellness-Oase
              </h3>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> Herborn
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="h-3.5 w-3.5" /> 2024
                </span>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Komplette Kernsanierung eines 18 m² Badezimmers. Bodengleiche
                Regendusche, freistehende Badewanne, Fußbodenheizung und
                Handtuchheizkörper. Inklusive aller Sanitär- und Fliesenarbeiten.
              </p>
              <div className="mt-4 flex items-center gap-2 text-green-600 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4" />
                Erfolgreich abgeschlossen
              </div>
            </div>
          </div>

          {/* Projekt 2 (reversed) */}
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-medium bg-red-50 text-red-600 px-3 py-1 rounded-full">
                  Heizung
                </span>
                <span className="text-xs font-medium bg-red-50 text-red-600 px-3 py-1 rounded-full">
                  Wärmepumpe
                </span>
                <span className="text-xs font-medium bg-red-50 text-red-600 px-3 py-1 rounded-full">
                  Neubau
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Wärmepumpe mit Fußbodenheizung
              </h3>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> Dillenburg
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="h-3.5 w-3.5" /> 2024
                </span>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Neubau-Einfamilienhaus mit Luft-Wasser-Wärmepumpe von Buderus,
                komplett mit Fußbodenheizung auf 180 m². Energieeffizienzklasse
                A++ erreicht. Inklusive Smart-Home-Anbindung und Fernwartung.
              </p>
              <div className="mt-4 flex items-center gap-2 text-green-600 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4" />
                Erfolgreich abgeschlossen
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&q=80"
                alt="Modernes Einfamilienhaus mit Wärmepumpe"
                width={900}
                height={600}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Projekt 3 */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
                alt="Bürogebäude mit Klimaanlage"
                width={900}
                height={600}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-medium bg-red-50 text-red-600 px-3 py-1 rounded-full">
                  Klima
                </span>
                <span className="text-xs font-medium bg-red-50 text-red-600 px-3 py-1 rounded-full">
                  Gewerbe
                </span>
                <span className="text-xs font-medium bg-red-50 text-red-600 px-3 py-1 rounded-full">
                  Multi-Split
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Gewerbliche Klimaanlage – Bürokomplex
              </h3>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> Wetzlar
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="h-3.5 w-3.5" /> 2023
                </span>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Installation einer Multi-Split-Klimaanlage für ein Bürogebäude
                mit 12 Räumen auf 350 m². Zentrale Steuerung über
                Gebäudeautomation. Energieeffizient mit Wärmerückgewinnung.
              </p>
              <div className="mt-4 flex items-center gap-2 text-green-600 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4" />
                Erfolgreich abgeschlossen
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATISTIK BANNER ===================== */}
      <section className="py-16 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {[
              { icon: CalendarDays, value: "25+", label: "Jahre Erfahrung" },
              { icon: Users, value: "1.200+", label: "Zufriedene Kunden" },
              {
                icon: Star,
                value: "4.9",
                label: "Google Bewertung",
                showStars: true,
              },
              { icon: Clock, value: "24/7", label: "Notdienst" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="flex justify-center mb-3">
                  <stat.icon className="h-7 w-7 text-red-400" />
                </div>
                <div className="text-4xl font-extrabold text-white">
                  {stat.value}
                </div>
                {stat.showStars && (
                  <div className="flex justify-center gap-0.5 my-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                )}
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            {[
              {
                text: "Unsere Badsanierung war ein Traum! Von der Beratung bis zur letzten Fuge alles perfekt. Herr Müller hat sogar an Details gedacht, die wir vergessen hatten. Absolute Empfehlung!",
                name: "Thomas Becker",
                time: "vor 2 Wochen",
                initial: "T",
                color: "bg-red-600",
              },
              {
                text: "Heizungsausfall an einem Sonntag im Januar – der Notdienst war innerhalb von einer Stunde da. Professionell, freundlich und die Reparatur war schnell erledigt. Danke!",
                name: "Sabine Kraft",
                time: "vor 1 Monat",
                initial: "S",
                color: "bg-gray-700",
              },
              {
                text: "Die Klimaanlage in unseren Büros läuft leise und effizient. Die Installation war sauber und das Team hat alles ordentlich hinterlassen. Gute Beratung zur Förderung gab es obendrauf.",
                name: "Michael Weber",
                time: "vor 2 Monaten",
                initial: "M",
                color: "bg-red-700",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  &quot;{review.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${review.color} text-white font-bold text-sm`}
                  >
                    {review.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {review.name}
                    </div>
                    <div className="text-xs text-gray-400">{review.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== KONTAKT ===================== */}
      <section id="kontakt" className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
              Kontakt
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
              Jetzt Beratungstermin vereinbaren
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6">Kontaktdaten</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/20 text-red-400 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Telefon</div>
                    <div className="font-medium">06461 / 123 456</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/20 text-red-400 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">E-Mail</div>
                    <div className="font-medium">info@haustechnik-mueller.de</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/20 text-red-400 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Adresse</div>
                    <div className="font-medium">Rohrstraße 15</div>
                    <div className="font-medium">35708 Haiger</div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">Öffnungszeiten</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Mo – Fr</span>
                    <span>07:30 – 17:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Samstag</span>
                    <span>nach Vereinbarung</span>
                  </div>
                  <div className="flex justify-between text-red-400 font-medium">
                    <span>Notdienst</span>
                    <span>24/7 erreichbar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-lg font-bold mb-6">Anfrage senden</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">
                      Vorname *
                    </label>
                    <div className="h-11 bg-white/5 rounded-lg border border-white/10" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">
                      Nachname *
                    </label>
                    <div className="h-11 bg-white/5 rounded-lg border border-white/10" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">
                      E-Mail *
                    </label>
                    <div className="h-11 bg-white/5 rounded-lg border border-white/10" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">
                      Telefon
                    </label>
                    <div className="h-11 bg-white/5 rounded-lg border border-white/10" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-1.5">
                    Gewünschte Leistung
                  </label>
                  <div className="h-11 bg-white/5 rounded-lg border border-white/10" />
                </div>
                <div className="mb-6">
                  <label className="block text-sm text-gray-400 mb-1.5">
                    Ihre Nachricht
                  </label>
                  <div className="h-28 bg-white/5 rounded-lg border border-white/10" />
                </div>

                {/* Map Placeholder */}
                <div className="mb-6 h-48 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-8 w-8 mx-auto mb-2 text-gray-600" />
                    <span className="text-sm">Google Maps Kartenansicht</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 mb-6">
                  <div className="h-5 w-5 rounded border border-white/20 bg-white/5 shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-400">
                    Ich stimme der Verarbeitung meiner Daten gemäß der
                    Datenschutzerklärung zu.
                  </span>
                </div>
                <div className="h-12 bg-red-600 hover:bg-red-500 rounded-xl flex items-center justify-center text-white font-bold cursor-pointer transition-colors">
                  Anfrage senden
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-gray-950 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-white">
                  <Flame className="h-5 w-5" />
                </div>
                <span className="font-bold text-lg">Haustechnik Müller</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ihr SHK-Meisterbetrieb in Haiger und Umgebung. Seit 2001 Ihr
                Partner für Sanitär, Heizung und Klima.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">
                Leistungen
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Sanitärinstallation</li>
                <li>Heizungsbau</li>
                <li>Badsanierung</li>
                <li>Klimaanlagen</li>
                <li>Wartung & Service</li>
                <li>Erneuerbare Energien</li>
              </ul>
            </div>

            {/* Service Area */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">
                Einsatzgebiet
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Haiger</li>
                <li>Dillenburg</li>
                <li>Herborn</li>
                <li>Wetzlar</li>
                <li>Eschenburg</li>
                <li>Breitscheid</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">
                Kontakt
              </h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-400" />
                  06461 / 123 456
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-red-400" />
                  info@haustechnik-mueller.de
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-red-400 mt-0.5" />
                  <span>
                    Rohrstraße 15
                    <br />
                    35708 Haiger
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 Haustechnik Müller. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <span className="hover:text-gray-300 cursor-pointer">
                Impressum
              </span>
              <span className="hover:text-gray-300 cursor-pointer">
                Datenschutz
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* ===================== DEMO BACK LINK ===================== */}
      <div className="bg-red-600 py-3 text-center">
        <Link
          href="/showcase"
          className="inline-flex items-center gap-2 text-sm text-white hover:text-red-100 transition-colors font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Showcase-Übersicht – Diese Demo wurde mit MeisterSeite
          erstellt
        </Link>
      </div>
    </div>
  );
}
