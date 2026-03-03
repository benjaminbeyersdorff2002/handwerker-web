"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { SearchX, Clock, ShieldAlert, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: SearchX,
    title: "Unsichtbar auf Google",
    description:
      "Ihre Kunden suchen online nach Handwerkern – ohne Website verlieren Sie täglich Aufträge an die Konkurrenz.",
  },
  {
    icon: Clock,
    title: "Keine Zeit für Technik",
    description:
      "Sie sind Handwerker, kein Webdesigner. Sie haben weder die Zeit noch das Know-how, sich um eine Website zu kümmern.",
  },
  {
    icon: TrendingDown,
    title: "Teure Agenturverträge",
    description:
      "Viele Agenturen verkaufen überteuertes Template-Designs für 5.000 €+ – ohne messbaren Mehrwert für Ihren Betrieb.",
  },
  {
    icon: ShieldAlert,
    title: "Veraltete Website",
    description:
      "Eine Website von 2015 schadet mehr als sie hilft. Nicht mobil-optimiert, langsam und unprofessionell.",
  },
];

export default function ProblemSolution() {
  return (
    <SectionWrapper id="leistungen" gray>
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          Das Problem
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-secondary">
          Warum Ihr Betrieb eine Website braucht
        </h2>
        <p className="mt-4 text-muted max-w-2xl mx-auto text-lg">
          Über 300.000 Handwerksbetriebe in Deutschland haben keine oder eine
          veraltete Website. Das kostet Aufträge – jeden Tag.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((problem) => (
          <div
            key={problem.title}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
              <problem.icon className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-secondary text-lg mb-2">
              {problem.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              {problem.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
