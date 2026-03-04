import type { Metadata } from "next";
import {
  Phone,
  Zap,
  Flame,
  AlertTriangle,
  ShieldOff,
  Droplets,
  Clock,
  Euro,
  Truck,
} from "lucide-react";
import { companyInfo } from "@/data/elektro-weber";
import StromausfallChecker from "@/components/showcase/elektro-weber/StromausfallChecker";

export const metadata: Metadata = {
  title: "24h Notdienst",
  description:
    "Elektrischer Notdienst rund um die Uhr in Mittelhessen. Stromausfall, Kurzschluss, Kabelbrand – wir sind schnell bei Ihnen. 0800 123 456.",
};

const emergencies = [
  { icon: Zap, label: "Stromausfall", desc: "Komplett oder teilweise" },
  { icon: AlertTriangle, label: "Kurzschluss", desc: "Funkenflug, Geruch" },
  { icon: Flame, label: "Kabelbrand-Geruch", desc: "Brandgefahr!" },
  { icon: ShieldOff, label: "FI/Sicherung fällt", desc: "Springt immer raus" },
  { icon: Droplets, label: "Wasser & Elektrik", desc: "Gefährliche Kombination" },
];

const prices = [
  { label: "Anfahrtspauschale", value: "ab 49 €", note: "je nach Entfernung" },
  { label: "Arbeitslohn / Stunde", value: "89 €", note: "netto" },
  { label: "Sonn-/Feiertagszuschlag", value: "+50%", note: "auf Arbeitslohn" },
];

export default function NotdienstPage() {
  return (
    <>
      {/* ───── Red Hero ───── */}
      <section className="relative bg-red-600 text-white pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.2),transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="h-4 w-4" />
            Rund um die Uhr erreichbar
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            24h Elektriker-Notdienst
          </h1>
          <p className="mt-4 text-lg text-red-100 max-w-2xl mx-auto">
            Stromausfall? Kurzschluss? Brandgeruch? Wir sind schnell und
            zuverlässig bei Ihnen – Tag und Nacht, auch am Wochenende.
          </p>

          {/* Giant Call Button */}
          <a
            href={`tel:${companyInfo.phoneFull}`}
            className="mt-8 inline-flex items-center gap-3 px-10 py-5 bg-white text-red-600 text-xl font-extrabold rounded-2xl hover:bg-red-50 transition-colors shadow-xl"
          >
            <Phone className="h-7 w-7" />
            {companyInfo.phone}
          </a>
          <p className="mt-3 text-sm text-red-200">
            Kostenlose Erstberatung am Telefon
          </p>
        </div>
      </section>

      {/* ───── Typische Notfälle ───── */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Typische Notfälle
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {emergencies.map((e) => (
              <div
                key={e.label}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center"
              >
                <e.icon className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-bold text-sm text-gray-900">{e.label}</div>
                <div className="text-xs text-gray-500 mt-1">{e.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Schnell bei Ihnen + Transparente Preise ───── */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Anfahrt */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Schnell bei Ihnen
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Unser Notdienst-Team ist im gesamten Lahn-Dill-Kreis unterwegs.
                In der Regel sind wir <strong>innerhalb von 45 Minuten</strong>{" "}
                bei Ihnen. Bei akuter Gefahr (Brandgeruch, Funkenflug)
                priorisieren wir Ihren Einsatz.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {companyInfo.areas.slice(0, 4).map((area) => (
                  <div
                    key={area}
                    className="bg-white rounded-lg px-3 py-2 text-sm text-gray-700 text-center border border-blue-100"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>

            {/* Preise */}
            <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="h-8 w-8 text-yellow-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Transparente Preise
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Keine Überraschungen – Sie erhalten vor Arbeitsbeginn eine
                Kostenschätzung.
              </p>
              <div className="space-y-4">
                {prices.map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center justify-between bg-white rounded-lg px-4 py-3 border border-yellow-100"
                  >
                    <div>
                      <div className="font-medium text-gray-900 text-sm">
                        {p.label}
                      </div>
                      <div className="text-xs text-gray-500">{p.note}</div>
                    </div>
                    <span className="font-bold text-gray-900">{p.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Stromausfall-Checker ───── */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Interaktiver Helfer
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Stromausfall? Schnellcheck.
            </h2>
            <p className="mt-2 text-gray-500">
              Finden Sie heraus, ob Sie uns brauchen oder das Problem selbst
              lösen können.
            </p>
          </div>
          <StromausfallChecker />
        </div>
      </section>

      {/* ───── Bottom CTA ───── */}
      <section className="py-16 bg-red-600 text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold">Noch unsicher? Rufen Sie an.</h2>
          <p className="mt-3 text-red-100">
            Unser Team berät Sie kostenlos am Telefon und schätzt die Lage ein.
          </p>
          <a
            href={`tel:${companyInfo.phoneFull}`}
            className="mt-8 inline-flex items-center gap-3 px-10 py-5 bg-white text-red-600 text-xl font-extrabold rounded-2xl hover:bg-red-50 transition-colors shadow-xl"
          >
            <Phone className="h-7 w-7" />
            {companyInfo.phone}
          </a>
        </div>
      </section>
    </>
  );
}
