import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Zap, Paintbrush, Flame, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showcase | Demo-Websites für Handwerksbetriebe",
  description:
    "Sehen Sie sich unsere Demo-Websites für Elektriker, Maler und SHK-Betriebe an. Individuell gestaltet und voll funktionsfähig.",
};

const showcases = [
  {
    slug: "elektro-weber",
    name: "Elektro Weber",
    trade: "Elektrikerbetrieb",
    description:
      "Moderne Website für einen Elektro-Meisterbetrieb mit Notdienst-Banner, Leistungsübersicht, Referenzprojekten und Kundenbewertungen. Farben: Blau & Gelb.",
    icon: Zap,
    gradient: "from-blue-600 to-blue-800",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    features: [
      "Vollbild-Hero mit Hintergrundfoto",
      "6 Leistungen mit echten Fotos",
      "3 Referenzprojekte mit Details",
      "Kundenbewertungen & Google-Rating",
      "Kontaktformular & Öffnungszeiten",
    ],
  },
  {
    slug: "malerbetrieb-schneider",
    name: "Malerbetrieb Schneider",
    trade: "Maler & Lackierer",
    description:
      "Farbenfrohe Website mit Vorher/Nachher-Galerie, Referenzprojekten und professionellem Farbkonzept. Farben: Grün & Weiß.",
    icon: Paintbrush,
    gradient: "from-emerald-600 to-emerald-800",
    image:
      "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80",
    features: [
      "Hero mit Bild-Collage",
      "Vorher/Nachher-Galerie",
      "6 Leistungen mit Fotos",
      "3 große Referenzprojekte",
      "Kontaktbereich mit Formular",
    ],
  },
  {
    slug: "haustechnik-mueller",
    name: "Haustechnik Müller",
    trade: "Sanitär, Heizung & Klima",
    description:
      "Professioneller Auftritt für einen SHK-Betrieb mit Notdienst-Integration, Leistungsübersicht und Kundenstimmen. Farben: Rot & Dunkelgrau.",
    icon: Flame,
    gradient: "from-red-600 to-red-800",
    image:
      "https://images.unsplash.com/photo-1585128792020-803d29415281?w=800&q=80",
    features: [
      "24/7 Notdienst-Banner",
      "6 SHK-Leistungen mit Fotos",
      "3 Referenzprojekte",
      "Statistik-Banner",
      "Kontakt mit Öffnungszeiten",
    ],
  },
];

export default function ShowcasePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-secondary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>

        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Showcase
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-secondary">
            Unsere Demo-Websites
          </h1>
          <p className="mt-4 text-muted max-w-2xl mx-auto text-lg">
            Sehen Sie, wie eine professionelle Handwerker-Website aussehen kann.
            Jede Demo wurde individuell für das jeweilige Gewerk gestaltet.
          </p>
        </div>

        <div className="space-y-8">
          {showcases.map((showcase, index) => (
            <Link
              key={showcase.slug}
              href={`/showcase/${showcase.slug}`}
              className="group block"
            >
              <div className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div
                    className={`relative h-64 md:h-auto min-h-[300px] overflow-hidden ${index % 2 === 1 ? "md:order-2" : ""}`}
                  >
                    <Image
                      src={showcase.image}
                      alt={`${showcase.name} Demo-Website`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${showcase.gradient} opacity-60`}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 text-white">
                        <showcase.icon className="h-6 w-6" />
                        <span className="font-bold text-2xl">
                          {showcase.name}
                        </span>
                      </div>
                      <p className="text-white/70 text-sm mt-1">
                        {showcase.trade}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`p-8 md:p-10 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}
                  >
                    <h2 className="text-2xl font-bold text-secondary mb-3">
                      {showcase.name}
                    </h2>
                    <p className="text-muted leading-relaxed mb-6">
                      {showcase.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {showcase.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-secondary"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all">
                      Demo ansehen
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
