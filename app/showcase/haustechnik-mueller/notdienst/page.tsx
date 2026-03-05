import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  AlertTriangle,
  Droplets,
  Flame,
  Wind,
  Snowflake,
  ShieldCheck,
  Clock,
  Euro,
  CheckCircle2,
} from "lucide-react";
import { companyInfo } from "@/data/haustechnik-mueller";

const base = "/showcase/haustechnik-mueller";

export const metadata: Metadata = {
  title: "24/7 Notdienst",
  description:
    "SHK-Notdienst rund um die Uhr – Rohrbruch, Heizungsausfall, Gasgeruch. Schnelle Hilfe in Herborn, Dillenburg & Wetzlar.",
};

const emergencies = [
  {
    icon: Droplets,
    title: "Rohrbruch",
    desc: "Wasserschaden begrenzen und Leckage abdichten – schnell vor Ort.",
  },
  {
    icon: Flame,
    title: "Heizungsausfall",
    desc: "Diagnose und Reparatur Ihrer Heizung – auch am Wochenende.",
  },
  {
    icon: Wind,
    title: "Gasgeruch",
    desc: "Sofortige Sicherheitsmaßnahmen und Leckortung.",
  },
  {
    icon: Snowflake,
    title: "Frostschutz",
    desc: "Eingefrorene Leitungen auftauen und Schäden verhindern.",
  },
  {
    icon: Droplets,
    title: "Verstopfung",
    desc: "Rohrreinigung und Kanalarbeiten – professionell und sauber.",
  },
];

export default function NotdienstPage() {
  return (
    <>
      {/* ── Red Hero ── */}
      <section className="relative bg-red-700 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-red-800 via-red-700 to-red-600" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 animate-pulse">
                  <AlertTriangle className="h-5 w-5 text-white" />
                </div>
                <span className="text-red-200 font-semibold text-sm uppercase tracking-wider">
                  24/7 Notdienst
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                SHK-Notdienst –<br />
                schnell & zuverlässig
              </h1>
              <p className="mt-4 text-lg text-red-100 max-w-lg">
                Rohrbruch, Heizungsausfall oder Gasgeruch? Unser Notdienst-Team
                ist 365 Tage im Jahr für Sie erreichbar – auch an Feiertagen.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${companyInfo.phoneFull}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-red-700 font-bold rounded-xl text-lg hover:bg-red-50 transition-colors shadow-lg"
                >
                  <Phone className="h-6 w-6" />
                  {companyInfo.phone}
                </a>
              </div>
            </div>

            {/* Emergency types */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {emergencies.map((e) => (
                <div
                  key={e.title}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center"
                >
                  <e.icon className="h-7 w-7 text-white mx-auto mb-2" />
                  <div className="font-bold text-white text-sm">{e.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GASGERUCH RED ALERT ── */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-red-700 border-2 border-red-400 rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 shrink-0 animate-pulse">
                <AlertTriangle className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-white mb-3">
                  ⚠️ Gasgeruch? Sofort handeln!
                </h2>
                <ol className="space-y-2 text-white">
                  <li className="flex items-start gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-red-700 font-bold text-xs shrink-0">
                      1
                    </span>
                    <span className="font-semibold">
                      Fenster und Türen weit öffnen – für Durchzug sorgen
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-red-700 font-bold text-xs shrink-0">
                      2
                    </span>
                    <span className="font-semibold">
                      Keine Schalter betätigen – kein Licht, keine Steckdosen
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-red-700 font-bold text-xs shrink-0">
                      3
                    </span>
                    <span className="font-semibold">
                      Gebäude sofort verlassen – alle Bewohner mitnehmen
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-red-700 font-bold text-xs shrink-0">
                      4
                    </span>
                    <span className="font-semibold">
                      Feuerwehr rufen: 112 – von draußen!
                    </span>
                  </li>
                </ol>
                <p className="mt-4 text-red-200 text-sm">
                  Nach der Entwarnung durch die Feuerwehr: Rufen Sie uns an für
                  die Leckortung und Reparatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Erste-Hilfe Checklisten ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Was tun im Notfall?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Rohrbruch */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Droplets className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Rohrbruch – Erste Hilfe
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Hauptwasserhahn sofort zudrehen",
                  "Strom in betroffenen Räumen abschalten",
                  "Stehendes Wasser aufwischen / absaugen",
                  "Möbel und Wertgegenstände in Sicherheit bringen",
                  "Fotos für Versicherung machen",
                  "Unseren Notdienst anrufen",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Heizungsausfall */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-700">
                  <Flame className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Heizungsausfall – Erste Hilfe
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Thermostat und Heizungsregler überprüfen",
                  "Sicherung der Heizung kontrollieren",
                  "Wasserdruck am Manometer prüfen (1,5–2 bar)",
                  "Heizung aus- und wieder einschalten (Reset)",
                  "Bei Störungsanzeige: Fehlercode notieren",
                  "Unseren Notdienst anrufen",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Schnell & Transparent ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-7 w-7 text-red-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Schnell bei Ihnen
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Erreichbar 24 Stunden, 365 Tage",
                  "Anfahrt im Einsatzgebiet: meist unter 45 Minuten",
                  "Eigener Bereitschaftsdienst – kein Call-Center",
                  "Vollausgestattete Servicefahrzeuge",
                  "Direkte Telefonleitung zum Techniker",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <ShieldCheck className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="h-7 w-7 text-red-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Transparente Preise
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Festpreis für Anfahrt und erste Stunde",
                  "Vorab-Information über anfallende Kosten",
                  "Keine versteckten Zuschläge",
                  "Rechnung mit detaillierter Aufstellung",
                  "Direkte Abrechnung mit Versicherung möglich",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-red-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Notfall? Jetzt anrufen!
          </h2>
          <p className="mt-4 text-red-100 text-lg">
            Unser Notdienst-Team ist rund um die Uhr für Sie da.
          </p>
          <a
            href={`tel:${companyInfo.phoneFull}`}
            className="mt-8 inline-flex items-center gap-2 px-10 py-5 bg-white text-red-700 font-bold rounded-xl text-xl hover:bg-red-50 transition-colors shadow-lg"
          >
            <Phone className="h-6 w-6" />
            {companyInfo.phone}
          </a>
          <p className="mt-4 text-red-200 text-sm">
            Oder{" "}
            <Link
              href={`${base}/kontakt`}
              className="underline hover:text-white"
            >
              schreiben Sie uns
            </Link>{" "}
            – für nicht dringende Anliegen.
          </p>
        </div>
      </section>
    </>
  );
}
