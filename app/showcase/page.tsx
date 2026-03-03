import Link from "next/link";
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
      "Moderne Website für einen Elektro-Meisterbetrieb mit Notdienst-Banner, Leistungsübersicht und Kontaktformular. Farben: Blau & Gelb.",
    icon: Zap,
    gradient: "from-blue-500 to-blue-700",
    features: ["Hero mit Notdienst-Hinweis", "Leistungsübersicht", "Referenzen", "Kontaktformular"],
  },
  {
    slug: "malerbetrieb-schneider",
    name: "Malerbetrieb Schneider",
    trade: "Maler & Lackierer",
    description:
      "Farbenfrohe Website mit Vorher/Nachher-Galerie, Leistungsübersicht und persönlicher Vorstellung. Farben: Grün & Weiß.",
    icon: Paintbrush,
    gradient: "from-emerald-500 to-emerald-700",
    features: ["Vorher/Nachher-Galerie", "Leistungsübersicht", "Team-Vorstellung", "Kontaktbereich"],
  },
  {
    slug: "haustechnik-mueller",
    name: "Haustechnik Müller",
    trade: "Sanitär, Heizung & Klima",
    description:
      "Professioneller Auftritt für einen SHK-Betrieb mit Notdienst-Integration und Referenzprojekten. Farben: Rot & Dunkelgrau.",
    icon: Flame,
    gradient: "from-red-500 to-red-700",
    features: ["24h Notdienst-Banner", "Leistungsübersicht", "Referenzprojekte", "Online-Anfrage"],
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
            Sehen Sie, wie eine professionelle Handwerker-Website aussehen
            kann. Jede Demo wurde individuell für das jeweilige Gewerk gestaltet.
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
                <div className={`grid md:grid-cols-2 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div
                    className={`h-64 md:h-auto bg-gradient-to-br ${showcase.gradient} flex items-center justify-center ${index % 2 === 1 ? "md:order-2" : ""}`}
                  >
                    <div className="text-center text-white p-8">
                      <showcase.icon className="h-16 w-16 mx-auto mb-4 opacity-90" />
                      <span className="font-bold text-2xl">{showcase.name}</span>
                      <p className="text-white/70 text-sm mt-2">{showcase.trade}</p>
                    </div>
                  </div>

                  <div className={`p-8 md:p-10 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <h2 className="text-2xl font-bold text-secondary mb-3">
                      {showcase.name}
                    </h2>
                    <p className="text-muted leading-relaxed mb-6">
                      {showcase.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {showcase.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-secondary">
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
