import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Heart,
  Handshake,
  Leaf,
  Award,
  ArrowRight,
} from "lucide-react";
import {
  companyInfo,
  team,
  timeline,
  certificates,
} from "@/data/haustechnik-mueller";
import SubpageHero from "@/components/showcase/haustechnik-mueller/SubpageHero";
import CTASection from "@/components/showcase/haustechnik-mueller/CTASection";

const base = "/showcase/haustechnik-mueller";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Haustechnik Müller – Ihr SHK-Meisterbetrieb in 2. Generation. 12 Fachkräfte, Buderus & Viessmann Partner, seit 2001.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Zuverlässigkeit",
    desc: "Pünktlich, sauber und termintreu – darauf können Sie sich verlassen.",
  },
  {
    icon: Award,
    title: "Qualität",
    desc: "Meisterliche Arbeit mit hochwertigen Markenprodukten – für Langlebigkeit.",
  },
  {
    icon: Handshake,
    title: "Fairness",
    desc: "Transparente Festpreise, ehrliche Beratung – keine versteckten Kosten.",
  },
  {
    icon: Leaf,
    title: "Nachhaltigkeit",
    desc: "Zukunftssichere Lösungen, die Energie sparen und die Umwelt schonen.",
  },
];

export default function UeberUnsPage() {
  const prominentPartners = companyInfo.manufacturers.filter(
    (m) => m.prominent
  );
  const otherPartners = companyInfo.manufacturers.filter(
    (m) => !m.prominent
  );

  return (
    <>
      <SubpageHero
        title="Über uns"
        subtitle="Ihr SHK-Meisterbetrieb in 2. Generation – seit 2001 Ihr Partner für Sanitär, Heizung und Klima."
        breadcrumbs={[{ label: "Über uns" }]}
      />

      {/* ── Geschichte ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
                Unsere Geschichte
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                Meisterbetrieb in 2. Generation
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Was Klaus Müller 2001 als Ein-Mann-Betrieb in Haiger gründete,
                führt heute sein Sohn Thomas als Meisterbetrieb mit 12
                Fachkräften. Die Verbindung aus traditionellem Handwerk und
                modernster Technik ist unser Markenzeichen.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Von der ersten Rohrzange bis zur Wärmepumpe mit Smart-Home-
                Anbindung – wir sind mit der Zeit gegangen, ohne unsere Werte
                zu vergessen: Qualität, Fairness und persönlicher Service.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-red-50 rounded-xl p-4 text-center border border-red-100">
                  <div className="text-3xl font-extrabold text-red-600">
                    {new Date().getFullYear() - companyInfo.since}+
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Jahre Erfahrung
                  </div>
                </div>
                <div className="bg-red-50 rounded-xl p-4 text-center border border-red-100">
                  <div className="text-3xl font-extrabold text-red-600">12</div>
                  <div className="text-sm text-gray-600 mt-1">Fachkräfte</div>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
                alt="SHK-Team bei der Arbeit"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white rounded-2xl p-5 shadow-xl">
                <div className="text-2xl font-extrabold">2. Gen.</div>
                <div className="text-sm text-red-100">Familienmeisterbetrieb</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Werte ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Unsere Werte
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 border border-gray-200 text-center shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 mx-auto mb-4">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              Unser Team
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900">
              Die Menschen hinter Müller
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
              >
                <div className="h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-red-600 font-medium">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Seit {member.since}
                  </p>
                  {member.specialty && (
                    <p className="text-xs text-gray-400 mt-0.5">
                      {member.specialty}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Herstellerpartnerschaften ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              Unsere Partner
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900">
              Herstellerpartnerschaften
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Wir arbeiten nur mit führenden Herstellern zusammen – für beste
              Qualität und optimalen Service.
            </p>
          </div>

          {/* Prominent Partners */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {prominentPartners.map((p) => (
              <div
                key={p.name}
                className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border-2 border-red-200 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Award className="h-6 w-6 text-red-600" />
                  <h3 className="text-lg font-bold text-gray-900">
                    {p.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600">{p.role}</p>
                <span className="inline-block mt-3 text-xs font-semibold text-red-600 bg-red-100 px-2.5 py-1 rounded-full">
                  Zertifizierter Partner
                </span>
              </div>
            ))}
          </div>

          {/* Other Partners */}
          <div className="grid sm:grid-cols-3 gap-4">
            {otherPartners.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
              >
                <h4 className="font-semibold text-gray-900 mb-1">{p.name}</h4>
                <p className="text-xs text-gray-500">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Unsere Geschichte
            </h2>
          </div>
          <div className="space-y-6">
            {timeline.map((event, idx) => (
              <div
                key={event.year}
                className={`flex gap-6 ${
                  idx % 2 === 0 ? "" : "flex-row-reverse text-right"
                }`}
              >
                <div className="w-20 shrink-0">
                  <div className="bg-red-600 text-white font-bold text-sm rounded-lg px-3 py-2 text-center">
                    {event.year}
                  </div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h4 className="font-bold text-gray-900">{event.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Zertifikate ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Zertifikate & Qualifikationen
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.name}
                className={`rounded-xl p-5 border shadow-sm ${
                  cert.prominent
                    ? "bg-red-50 border-red-200"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck
                    className={`h-5 w-5 ${
                      cert.prominent ? "text-red-600" : "text-gray-400"
                    }`}
                  />
                  <h4
                    className={`font-bold text-sm ${
                      cert.prominent ? "text-red-700" : "text-gray-900"
                    }`}
                  >
                    {cert.name}
                  </h4>
                </div>
                <p className="text-xs text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Lernen Sie uns persönlich kennen"
        subtitle="Vereinbaren Sie einen Beratungstermin – wir kommen zu Ihnen."
      />
    </>
  );
}
