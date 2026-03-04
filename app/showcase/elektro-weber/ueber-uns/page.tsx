import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  CheckCircle2,
  Shield,
  Users,
  Lightbulb,
  Home,
  Heart,
  ThumbsUp,
  Sparkles,
  Wrench,
} from "lucide-react";
import {
  team,
  timeline,
  certificates,
  companyInfo,
} from "@/data/elektro-weber";
import SubpageHero from "@/components/showcase/elektro-weber/SubpageHero";
import CTASection from "@/components/showcase/elektro-weber/CTASection";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie das Team von Elektro Weber kennen. Meisterbetrieb seit 2009 in Dillenburg.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  CheckCircle2,
  Shield,
  Users,
  Lightbulb,
  Home,
};

const values = [
  {
    icon: ThumbsUp,
    title: "Zuverlässigkeit",
    desc: "Wir kommen, wenn wir es sagen – pünktlich, termingerecht und verbindlich.",
  },
  {
    icon: Sparkles,
    title: "Qualität",
    desc: "Saubere Arbeit nach aktuellen Normen, mit hochwertigen Materialien.",
  },
  {
    icon: Heart,
    title: "Fairness",
    desc: "Transparente Festpreise ohne versteckte Kosten. Ehrliche Beratung.",
  },
  {
    icon: Wrench,
    title: "Innovation",
    desc: "Immer auf dem neuesten Stand – von KNX bis Photovoltaik.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <SubpageHero
        title="Über uns"
        subtitle="Familiärer Meisterbetrieb aus Dillenburg – seit 2009 zuverlässig für Sie da."
        backgroundImage="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&h=800&fit=crop"
        breadcrumbs={[{ label: "Über uns" }]}
      />

      {/* ───── Story ───── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop"
                  alt="Elektro Weber Team"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:right-4 bg-yellow-400 text-blue-900 px-6 py-4 rounded-2xl shadow-xl">
                <div className="text-3xl font-extrabold">15+</div>
                <div className="text-sm font-semibold">Jahre Erfahrung</div>
              </div>
            </div>

            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Unsere Geschichte
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                Handwerk mit Herz und Verstand
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Als Michael Weber 2009 seinen Meisterbrief in der Hand hielt,
                war sein Ziel klar: ein Elektrobetrieb, bei dem der Kunde an
                erster Stelle steht. Was als Ein-Mann-Betrieb in der heimischen
                Garage begann, ist heute ein Team aus fünf Fachkräften mit fünf
                Servicefahrzeugen.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Unser Antrieb: Handwerk, das hält. Beratung, die ehrlich ist.
                Und Preise, die fair sind. Dafür stehen wir – jeden Tag aufs
                Neue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Werte ───── */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Wofür wir stehen
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center"
              >
                <v.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Team ───── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Unser Team
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Die Menschen hinter Elektro Weber
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
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
                  <p className="text-sm text-gray-500">{member.role}</p>
                  <p className="text-xs text-blue-600 mt-1">
                    Seit {member.since}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Timeline ───── */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Firmengeschichte
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Meilensteine
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((event, i) => (
                <div
                  key={event.year}
                  className={`relative flex items-start gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow -translate-x-1/2 mt-1 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-14 md:ml-0 ${
                      i % 2 === 0 ? "md:w-[45%]" : "md:w-[45%]"
                    } ${
                      i % 2 === 0
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                      {event.year}
                    </span>
                    <h3 className="font-bold text-gray-900">{event.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── Zertifikate ───── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Qualifikationen
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Zertifikate & Partnerschaften
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certificates.map((cert) => {
              const IconComp = iconMap[cert.icon] || Award;
              return (
                <div
                  key={cert.name}
                  className="bg-blue-50 rounded-xl p-5 border border-blue-100 text-center"
                >
                  <IconComp className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="font-bold text-sm text-gray-900">
                    {cert.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {cert.issuer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Lernen Sie uns kennen"
        subtitle="Vereinbaren Sie ein unverbindliches Erstgespräch – wir freuen uns auf Sie."
      />
    </>
  );
}
