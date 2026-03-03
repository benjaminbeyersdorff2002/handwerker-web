import Link from "next/link";
import {
  ArrowLeft,
  Paintbrush,
  Phone,
  Mail,
  MapPin,
  Droplets,
  Home,
  Building2,
  Palette,
  Sparkles,
  Users,
  Star,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malerbetrieb Schneider | Demo-Website Maler & Lackierer",
  description: "Demo-Website für einen Malerbetrieb – erstellt als Showcase.",
};

const services = [
  { icon: Paintbrush, name: "Innenmalerei", desc: "Professionelle Malerarbeiten für Wohnräume, Büros und Geschäftsräume." },
  { icon: Home, name: "Fassadengestaltung", desc: "Fassadenanstriche und -sanierungen mit hochwertigen Farben." },
  { icon: Droplets, name: "Lackierarbeiten", desc: "Lackierung von Türen, Fenstern, Möbeln und Metalloberflächen." },
  { icon: Palette, name: "Kreativtechniken", desc: "Spachteltechnik, Wischtechnik und dekorative Wandgestaltung." },
  { icon: Building2, name: "Tapezierarbeiten", desc: "Tapeten aller Art – von klassisch bis modern, perfekt verarbeitet." },
  { icon: Sparkles, name: "Bodenbeschichtung", desc: "Epoxidharz-Beschichtungen für Garagen, Keller und Gewerbeflächen." },
];

const gallery = [
  { title: "Wohnzimmer Modern", type: "Innenmalerei", colorBefore: "bg-gray-300", colorAfter: "bg-emerald-100" },
  { title: "Altbau-Fassade", type: "Fassade", colorBefore: "bg-gray-400", colorAfter: "bg-amber-50" },
  { title: "Treppenhaus Design", type: "Kreativtechnik", colorBefore: "bg-stone-300", colorAfter: "bg-teal-100" },
];

export default function MalerbetriebSchneiderPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Demo Banner */}
      <div className="bg-amber-50 border-b border-amber-200 py-2 text-center text-sm mt-16 md:mt-20">
        <span className="text-amber-800">
          Dies ist eine <strong>Demo-Website</strong> – erstellt in 7 Tagen als Showcase.{" "}
          <Link href="/showcase" className="underline hover:no-underline">
            Alle Demos ansehen
          </Link>
        </span>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/20" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-white/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/10" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-emerald-700">
                  <Paintbrush className="h-6 w-6" />
                </div>
                <span className="text-xl font-bold">Malerbetrieb Schneider</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Farbe bekennen.
                <br />
                <span className="text-emerald-200">Qualität erleben.</span>
              </h1>
              <p className="mt-6 text-lg text-emerald-100 max-w-lg">
                Ihr Malermeisterbetrieb in Mittelhessen – für Innenräume, Fassaden und
                kreative Wandgestaltung. Sauber, pünktlich und mit Liebe zum Detail.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  Kostenloses Angebot
                </a>
                <a
                  href="#galerie"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Unsere Arbeiten
                </a>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 rotate-3">
                <div className="space-y-4">
                  <div className="h-32 rounded-xl bg-emerald-200/30 backdrop-blur-sm border border-white/20" />
                  <div className="h-48 rounded-xl bg-emerald-300/20 backdrop-blur-sm border border-white/20" />
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-48 rounded-xl bg-emerald-200/20 backdrop-blur-sm border border-white/20" />
                  <div className="h-32 rounded-xl bg-emerald-300/30 backdrop-blur-sm border border-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="leistungen" className="py-20 md:py-28">
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
              in Ihr Leben.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:border-emerald-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{service.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Before-After */}
      <section id="galerie" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Vorher / Nachher
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Unsere Arbeiten sprechen für sich
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {gallery.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="grid grid-cols-2 h-48">
                  <div className={`${item.colorBefore} flex items-center justify-center`}>
                    <span className="text-xs font-medium text-gray-600 bg-white/80 px-2 py-1 rounded">Vorher</span>
                  </div>
                  <div className={`${item.colorAfter} flex items-center justify-center`}>
                    <span className="text-xs font-medium text-emerald-700 bg-white/80 px-2 py-1 rounded">Nachher</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-emerald-600 mt-1">{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Über uns
              </span>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                Familienbetrieb mit Herz
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Seit über 20 Jahren verschönern wir Häuser und Wohnungen in Mittelhessen.
                Als Familienbetrieb legen wir besonderen Wert auf persönlichen Kontakt,
                saubere Arbeit und faire Preise.
              </p>
              <div className="mt-6 flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">20+</div>
                  <div className="text-xs text-gray-500">Jahre Erfahrung</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">800+</div>
                  <div className="text-xs text-gray-500">Zufriedene Kunden</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Google Bewertung</div>
                </div>
              </div>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="h-24 w-24 rounded-full bg-emerald-200 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-emerald-600" />
                </div>
                <p className="font-bold text-gray-900">Familie Schneider</p>
                <p className="text-sm text-gray-500">Malermeisterbetrieb seit 2004</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-20 bg-emerald-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Jetzt Angebot anfordern</h2>
              <p className="text-emerald-200 mb-8">
                Sie planen eine Renovierung oder brauchen einen frischen Anstrich?
                Kontaktieren Sie uns für ein kostenloses und unverbindliches Angebot.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-300" />
                  <span>06471 / 123 456</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-emerald-300" />
                  <span>info@maler-schneider.de</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-emerald-300" />
                  <span>Farbweg 7, 35745 Herborn</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-emerald-200 mb-1">Name</label>
                  <div className="h-10 bg-white/10 rounded-lg border border-white/20" />
                </div>
                <div>
                  <label className="block text-sm text-emerald-200 mb-1">E-Mail</label>
                  <div className="h-10 bg-white/10 rounded-lg border border-white/20" />
                </div>
                <div>
                  <label className="block text-sm text-emerald-200 mb-1">Was können wir für Sie tun?</label>
                  <div className="h-24 bg-white/10 rounded-lg border border-white/20" />
                </div>
                <div className="h-12 bg-white rounded-lg flex items-center justify-center text-emerald-700 font-bold">
                  Angebot anfordern
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
