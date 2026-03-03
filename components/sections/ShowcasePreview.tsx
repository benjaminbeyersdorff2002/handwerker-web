"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Zap, Paintbrush, Flame } from "lucide-react";

const showcases = [
  {
    slug: "elektro-weber",
    name: "Elektro Weber",
    trade: "Elektrikerbetrieb",
    description: "Moderne Website für einen Elektro-Meisterbetrieb mit 24h-Notdienst und Online-Terminbuchung.",
    icon: Zap,
    gradient: "from-blue-500 to-blue-700",
    accentColor: "bg-blue-500",
  },
  {
    slug: "malerbetrieb-schneider",
    name: "Malerbetrieb Schneider",
    trade: "Maler & Lackierer",
    description: "Farbenfrohe Website mit Vorher/Nachher-Galerie und Referenzprojekten.",
    icon: Paintbrush,
    gradient: "from-emerald-500 to-emerald-700",
    accentColor: "bg-emerald-500",
  },
  {
    slug: "haustechnik-mueller",
    name: "Haustechnik Müller",
    trade: "Sanitär, Heizung & Klima",
    description: "Professioneller Auftritt für einen SHK-Betrieb mit Notdienst-Integration.",
    icon: Flame,
    gradient: "from-red-500 to-red-700",
    accentColor: "bg-red-500",
  },
];

export default function ShowcasePreview() {
  return (
    <SectionWrapper id="showcase">
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          Showcase
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-secondary">
          So könnte Ihre Website aussehen
        </h2>
        <p className="mt-4 text-muted max-w-2xl mx-auto text-lg">
          Sehen Sie sich unsere Demo-Websites für verschiedene Handwerks-Gewerke
          an – individuell gestaltet und voll funktionsfähig.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {showcases.map((showcase) => (
          <Link
            key={showcase.slug}
            href={`/showcase/${showcase.slug}`}
            className="group block"
          >
            <div className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Preview header */}
              <div
                className={`h-48 bg-gradient-to-br ${showcase.gradient} flex items-center justify-center relative`}
              >
                <div className="text-center text-white">
                  <showcase.icon className="h-12 w-12 mx-auto mb-3 opacity-90" />
                  <span className="font-bold text-xl">{showcase.name}</span>
                </div>
                {/* Browser dots */}
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-white/30" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/30" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/30" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`h-2 w-2 rounded-full ${showcase.accentColor}`} />
                  <span className="text-xs font-medium text-muted uppercase tracking-wide">
                    {showcase.trade}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {showcase.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Demo ansehen
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button href="/showcase" variant="outline">
          Alle Demos ansehen
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </SectionWrapper>
  );
}
