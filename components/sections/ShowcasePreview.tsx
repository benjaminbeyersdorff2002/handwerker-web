"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Paintbrush, Flame } from "lucide-react";

const showcases = [
  {
    slug: "elektro-weber",
    name: "Elektro Weber",
    trade: "Elektrikerbetrieb",
    description:
      "Moderne Website mit 24h-Notdienst, Referenzprojekten, Kundenbewertungen und vollständigem Kontaktbereich.",
    icon: Zap,
    gradient: "from-blue-600 to-blue-800",
    accentColor: "bg-blue-500",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
  },
  {
    slug: "malerbetrieb-schneider",
    name: "Malerbetrieb Schneider",
    trade: "Maler & Lackierer",
    description:
      "Farbenfrohe Website mit Vorher/Nachher-Galerie, Referenzprojekten und professionellem Farbkonzept.",
    icon: Paintbrush,
    gradient: "from-emerald-600 to-emerald-800",
    accentColor: "bg-emerald-500",
    image:
      "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&q=80",
  },
  {
    slug: "haustechnik-mueller",
    name: "Haustechnik Müller",
    trade: "Sanitär, Heizung & Klima",
    description:
      "Professioneller SHK-Auftritt mit Notdienst-Integration, Leistungsübersicht und Kundenstimmen.",
    icon: Flame,
    gradient: "from-red-600 to-red-800",
    accentColor: "bg-red-500",
    image:
      "https://images.unsplash.com/photo-1585128792020-803d29415281?w=600&q=80",
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
              {/* Preview Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={showcase.image}
                  alt={`${showcase.name} Demo-Website`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${showcase.gradient} opacity-60`}
                />
                {/* Browser dots */}
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-white/40" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/40" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/40" />
                </div>
                {/* Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 text-white">
                    <showcase.icon className="h-5 w-5" />
                    <span className="font-bold text-lg">{showcase.name}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`h-2 w-2 rounded-full ${showcase.accentColor}`}
                  />
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
