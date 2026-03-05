import type { Metadata } from "next";
import Image from "next/image";
import {
  Sparkles,
  Shield,
  Clock,
  Heart,
  Award,
  CheckCircle2,
} from "lucide-react";
import {
  companyInfo,
  team,
  timeline,
  certificates,
} from "@/data/maler-schneider";
import SubpageHero from "@/components/showcase/maler-schneider/SubpageHero";
import CTASection from "@/components/showcase/maler-schneider/CTASection";

export const metadata: Metadata = {
  title: "Über Uns",
  description: `Lernen Sie das Team von ${companyInfo.name} kennen – Familienbetrieb seit ${companyInfo.since} in Herborn. Caparol-Partner, Meisterbetrieb, Kreativtechnik-Spezialisten.`,
};

const values = [
  {
    icon: Sparkles,
    title: "Sauberkeit",
    desc: "Wir schützen Ihre Möbel und Böden, arbeiten staubarm und hinterlassen alles besenrein. Sauberkeit ist für uns keine Kür, sondern Pflicht.",
  },
  {
    icon: Heart,
    title: "Farbkompetenz",
    desc: "Farbe ist unsere Leidenschaft. Wir beraten Sie individuell, kennen die neuesten Trends und finden den perfekten Ton für jeden Raum.",
  },
  {
    icon: Shield,
    title: "Fairness",
    desc: "Transparente Festpreise ohne versteckte Kosten. Was wir anbieten, halten wir ein – ehrlich und verbindlich.",
  },
  {
    icon: Clock,
    title: "Pünktlichkeit",
    desc: "Terminzusagen werden eingehalten. Wir kommunizieren proaktiv und halten Sie immer auf dem Laufenden.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <SubpageHero
        title="Über Uns"
        subtitle="Familienbetrieb mit Leidenschaft für Farbe – seit 2004 in Herborn und Umgebung."
        backgroundImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=800&fit=crop&q=80"
        breadcrumbs={[{ label: "Über Uns" }]}
      />

      {/* ─── Geschichte / Inhaberin ─── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
                  alt="Lisa Schneider – Inhaberin & Malermeisterin"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg">
                <span className="text-2xl font-bold">20+</span>
                <span className="ml-1 text-sm">Jahre Erfahrung</span>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Unsere Geschichte
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                Lisa Schneider – Farbexpertin aus Leidenschaft
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Als Lisa Schneider 2004 ihren eigenen Malerbetrieb gründete,
                  hatte sie eine klare Vision: Malerarbeiten auf Meisterniveau
                  mit persönlicher Farbberatung verbinden. Was als
                  Ein-Frau-Betrieb begann, ist heute ein eingespieltes Team
                  von 5 Mitarbeitern – aber noch immer ein echter
                  Familienbetrieb.
                </p>
                <p>
                  Ihre Leidenschaft? Farben, die Räume verändern. Nach ihrer
                  Meisterprüfung hat sich Lisa auf dekorative
                  Gestaltungstechniken spezialisiert – von venezianischer
                  Spachteltechnik bis zur modernen Betonoptik. Als
                  zertifizierte Caparol-Partnerin hat sie Zugang zu den
                  besten Farbsystemen am Markt.
                </p>
                <p>
                  Heute berät Lisa ihre Kunden nicht nur bei der
                  Farbauswahl, sondern entwickelt ganzheitliche Raumkonzepte
                  – von der ersten Idee bis zum letzten Pinselstrich.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Werte ─── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Unsere Werte
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Wofür wir stehen
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Unser Team
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Die Menschen hinter der Farbe
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100"
              >
                <div className="relative h-56">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-emerald-600 font-medium">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Seit {member.since}
                  </p>
                  {member.specialty && (
                    <p className="text-xs text-gray-500 mt-1">
                      {member.specialty}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Meilensteine
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Unsere Geschichte
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-emerald-200 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((event, idx) => (
                <div
                  key={event.year}
                  className="relative grid md:grid-cols-2 gap-8 items-center"
                >
                  {/* Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-emerald-100 hidden md:block z-10" />

                  {idx % 2 === 0 ? (
                    <>
                      <div className="md:text-right md:pr-12">
                        <span className="text-emerald-600 font-bold text-2xl">
                          {event.year}
                        </span>
                        <h3 className="mt-1 text-xl font-bold text-gray-900">
                          {event.title}
                        </h3>
                        <p className="mt-2 text-gray-500 leading-relaxed">
                          {event.desc}
                        </p>
                      </div>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <div className="md:pl-12">
                        <span className="text-emerald-600 font-bold text-2xl">
                          {event.year}
                        </span>
                        <h3 className="mt-1 text-xl font-bold text-gray-900">
                          {event.title}
                        </h3>
                        <p className="mt-2 text-gray-500 leading-relaxed">
                          {event.desc}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Zertifikate & Partner ─── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Qualität & Partner
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Zertifizierungen & Partnerschaften
            </h2>
          </div>

          {/* Caparol Partner – Prominent */}
          {certificates
            .filter((c) => c.prominent)
            .map((cert) => (
              <div
                key={cert.name}
                className="mb-12 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                  <Award className="h-10 w-10" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">{cert.name}</h3>
                <p className="mt-2 text-emerald-100 text-lg">{cert.desc}</p>
                <p className="mt-4 text-sm text-emerald-200 max-w-xl mx-auto leading-relaxed">
                  Als zertifizierter Caparol-Partner haben wir Zugang zu
                  Premium-Farbsystemen, regelmäßigen Schulungen und dem
                  umfassenden Caparol-Farbfächer mit über 1.350 Farbtönen.
                </p>
              </div>
            ))}

          {/* Other certificates */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates
              .filter((c) => !c.prominent)
              .map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{cert.name}</h3>
                    <p className="text-sm text-gray-500">{cert.desc}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
