import Link from "next/link";
import {
  ArrowLeft,
  Zap,
  Phone,
  Shield,
  Lightbulb,
  Home,
  Building2,
  Clock,
  CheckCircle2,
  Mail,
  MapPin,
  Star,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elektro Weber | Demo-Website Elektrikerbetrieb",
  description: "Demo-Website für einen Elektro-Meisterbetrieb – erstellt als Showcase.",
};

const services = [
  { icon: Lightbulb, name: "Elektroinstallationen", desc: "Neuinstallationen und Modernisierungen für Privat und Gewerbe." },
  { icon: Home, name: "Smart Home", desc: "Intelligente Haussteuerung für mehr Komfort und Energieeffizienz." },
  { icon: Shield, name: "Sicherheitstechnik", desc: "Alarmanlagen, Videoüberwachung und Zutrittskontrolle." },
  { icon: Building2, name: "Gewerbe & Industrie", desc: "Elektrotechnik für Büros, Hallen und Produktionsstätten." },
  { icon: Zap, name: "Photovoltaik", desc: "Planung und Installation von Solaranlagen mit Speicher." },
  { icon: Clock, name: "24h Notdienst", desc: "Schnelle Hilfe bei Stromausfällen und elektrischen Notfällen." },
];

const references = [
  { title: "Komplettsanierung Altbau", location: "Herborn", desc: "Elektroinstallation inkl. Smart Home in einem denkmalgeschützten Wohnhaus." },
  { title: "PV-Anlage 15 kWp", location: "Dillenburg", desc: "Installation einer Photovoltaikanlage mit Batteriespeicher für ein Einfamilienhaus." },
  { title: "Bürogebäude Neubau", location: "Wetzlar", desc: "Komplette Elektroplanung und -installation für ein 3-stöckiges Bürogebäude." },
];

export default function ElektroWeberPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Demo Banner */}
      <div className="bg-amber-50 border-b border-amber-200 py-2 text-center text-sm mt-16 md:mt-20">
        <span className="text-amber-800">
          Dies ist eine <strong>Demo-Website</strong> – erstellt in 5 Tagen als Showcase.{" "}
          <Link href="/showcase" className="underline hover:no-underline">
            Alle Demos ansehen
          </Link>
        </span>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 30 20 M 30 40 L 30 60 M 0 30 L 20 30 M 40 30 L 60 30" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="30" cy="30" r="3" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400 text-blue-900">
                  <Zap className="h-6 w-6" />
                </div>
                <span className="text-xl font-bold">Elektro Weber</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Ihr Elektriker-
                <br />
                <span className="text-yellow-400">Meisterbetrieb</span>
                <br />
                in Mittelhessen
              </h1>
              <p className="mt-6 text-lg text-blue-100 max-w-lg">
                Von der Steckdose bis zur Solaranlage – wir sind Ihr zuverlässiger
                Partner für alle Elektroarbeiten. Seit über 15 Jahren.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors"
                >
                  Kostenlos anfragen
                </a>
                <a
                  href="#leistungen"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Unsere Leistungen
                </a>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="h-8 w-8 text-yellow-400" />
                  <div>
                    <p className="text-sm text-blue-200">24h Notdienst</p>
                    <p className="text-2xl font-bold text-yellow-400">0800 123 456</p>
                  </div>
                </div>
                <p className="text-sm text-blue-200">
                  Stromausfall? Elektrischer Notfall? Wir sind rund um die Uhr für Sie da!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notdienst Banner (Mobile) */}
      <section className="lg:hidden bg-yellow-400 text-blue-900 py-4">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-center gap-3">
          <Phone className="h-5 w-5" />
          <span className="font-bold">24h Notdienst: 0800 123 456</span>
        </div>
      </section>

      {/* Services */}
      <section id="leistungen" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Unsere Leistungen
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Elektrotechnik aus Meisterhand
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:border-blue-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">
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
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Referenzen
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Ausgewählte Projekte
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {references.map((ref) => (
              <div key={ref.title} className="bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <CheckCircle2 className="h-12 w-12 text-blue-400" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-1">{ref.title}</h3>
                  <p className="text-sm text-blue-600 mb-2">{ref.location}</p>
                  <p className="text-sm text-gray-500">{ref.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Jahre Erfahrung" },
              { value: "500+", label: "Projekte abgeschlossen" },
              { value: "4.9", label: "Google Bewertung", showStars: true },
              { value: "24/7", label: "Notdienst erreichbar" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-blue-600">{stat.value}</div>
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
      <section id="kontakt" className="py-20 bg-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Kontaktieren Sie uns</h2>
              <p className="text-blue-200 mb-8">
                Ob Neuinstallation, Sanierung oder Notfall – wir sind für Sie da.
                Senden Sie uns eine Anfrage oder rufen Sie direkt an.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-yellow-400" />
                  <span>0800 123 456</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-yellow-400" />
                  <span>info@elektro-weber.de</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <span>Musterstraße 12, 35683 Dillenburg</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Name</label>
                  <div className="h-10 bg-white/10 rounded-lg border border-white/20" />
                </div>
                <div>
                  <label className="block text-sm text-blue-200 mb-1">E-Mail</label>
                  <div className="h-10 bg-white/10 rounded-lg border border-white/20" />
                </div>
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Telefon</label>
                  <div className="h-10 bg-white/10 rounded-lg border border-white/20" />
                </div>
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Ihre Nachricht</label>
                  <div className="h-24 bg-white/10 rounded-lg border border-white/20" />
                </div>
                <div className="h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-blue-900 font-bold">
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
