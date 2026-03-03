import Link from "next/link";
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
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haustechnik Müller | Demo-Website SHK-Betrieb",
  description: "Demo-Website für einen SHK-Betrieb – erstellt als Showcase.",
};

const services = [
  { icon: Droplets, name: "Sanitärinstallation", desc: "Badsanierung, Rohrleitungsbau und Sanitärmontage für Privat und Gewerbe." },
  { icon: Flame, name: "Heizungsbau", desc: "Installation und Wartung von Gas-, Öl-, Pellet- und Wärmepumpenheizungen." },
  { icon: Wind, name: "Klimatechnik", desc: "Klimaanlagen und Lüftungssysteme für ein angenehmes Raumklima." },
  { icon: Thermometer, name: "Wärmepumpen", desc: "Energieeffiziente Wärmepumpen – Beratung, Planung und Einbau." },
  { icon: Wrench, name: "Wartung & Reparatur", desc: "Regelmäßige Wartung und schnelle Reparaturen Ihrer Haustechnik." },
  { icon: Clock, name: "24h Notdienst", desc: "Rohrbruch? Heizungsausfall? Wir sind Tag und Nacht für Sie erreichbar." },
];

const references = [
  { title: "Badsanierung Komplett", location: "Haiger", desc: "Komplette Badsanierung inkl. bodengleicher Dusche und Fußbodenheizung.", category: "Sanitär" },
  { title: "Wärmepumpe EFH", location: "Dillenburg", desc: "Austausch der alten Ölheizung gegen eine moderne Luft-Wasser-Wärmepumpe.", category: "Heizung" },
  { title: "Klimaanlage Büro", location: "Wetzlar", desc: "Installation einer Multi-Split-Klimaanlage für ein Büro mit 8 Räumen.", category: "Klima" },
];

export default function HaustechnikMuellerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Demo Banner */}
      <div className="bg-amber-50 border-b border-amber-200 py-2 text-center text-sm mt-16 md:mt-20">
        <span className="text-amber-800">
          Dies ist eine <strong>Demo-Website</strong> – erstellt in 10 Tagen als Showcase.{" "}
          <Link href="/showcase" className="underline hover:no-underline">
            Alle Demos ansehen
          </Link>
        </span>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pipes" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 0 40 L 30 40 L 30 0 M 50 80 L 50 40 L 80 40" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="30" cy="40" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="40" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pipes)" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500 text-white">
                  <Flame className="h-6 w-6" />
                </div>
                <span className="text-xl font-bold">Haustechnik Müller</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Sanitär. Heizung.
                <br />
                <span className="text-red-300">Klima.</span>
              </h1>
              <p className="mt-6 text-lg text-red-100 max-w-lg">
                Ihr SHK-Meisterbetrieb in Mittelhessen. Von der Badsanierung bis zur
                Wärmepumpe – zuverlässig, kompetent und fair.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-400 transition-colors"
                >
                  Jetzt Termin vereinbaren
                </a>
                <a
                  href="tel:+4906461123456"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Notdienst anrufen
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-red-300" />
                  Warum Haustechnik Müller?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Meisterbetrieb mit 25 Jahren Erfahrung",
                    "Faire Festpreise ohne Überraschungen",
                    "24h Notdienst – 365 Tage im Jahr",
                    "Energieberatung inklusive",
                    "Förderberatung für Wärmepumpen & Co.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-red-100">
                      <CheckCircle2 className="h-4 w-4 text-red-300 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-500 text-white py-4">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <Clock className="h-5 w-5 shrink-0" />
          <span className="font-bold">24h Notdienst: Rohrbruch, Heizungsausfall, Gasgeruch?</span>
          <a href="tel:+4906461123456" className="font-bold underline hover:no-underline">
            06461 / 123 456
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="leistungen" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              Unsere Leistungen
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Alles rund um Ihre Haustechnik
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:border-red-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{service.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-20 bg-gray-50">
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
            {references.map((ref) => (
              <div key={ref.title} className="bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="h-40 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                  <CheckCircle2 className="h-12 w-12 text-red-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium bg-red-50 text-red-600 px-2 py-0.5 rounded-full">
                      {ref.category}
                    </span>
                    <span className="text-xs text-gray-400">{ref.location}</span>
                  </div>
                  <h3 className="font-bold text-gray-900">{ref.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">{ref.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "25+", label: "Jahre Erfahrung" },
              { value: "1.200+", label: "Projekte" },
              { value: "4.8", label: "Google Bewertung", showStars: true },
              { value: "< 2h", label: "Notdienst Reaktionszeit" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-red-600">{stat.value}</div>
                {stat.showStars && (
                  <div className="flex justify-center gap-0.5 my-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                )}
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-20 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Kontakt aufnehmen</h2>
              <p className="text-gray-400 mb-8">
                Ob Badsanierung, neue Heizung oder Notfall – wir sind Ihr Partner für
                alle Fragen rund um Sanitär, Heizung und Klima.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-red-400" />
                  <span>06461 / 123 456</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-red-400" />
                  <span>info@haustechnik-mueller.de</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-red-400" />
                  <span>Rohrstraße 15, 35708 Haiger</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Name</label>
                  <div className="h-10 bg-white/5 rounded-lg border border-white/10" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">E-Mail</label>
                  <div className="h-10 bg-white/5 rounded-lg border border-white/10" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Was benötigen Sie?</label>
                  <div className="h-24 bg-white/5 rounded-lg border border-white/10" />
                </div>
                <div className="h-12 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                  Anfrage senden
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="py-8 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/showcase"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Showcase-Übersicht
          </Link>
        </div>
      </div>
    </div>
  );
}
