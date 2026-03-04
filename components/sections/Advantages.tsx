"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { Calculator, TrendingDown, ArrowRight } from "lucide-react";

const presets = [
  { label: "Kleiner Auftrag", value: 500 },
  { label: "Mittlerer Auftrag", value: 1500 },
  { label: "Großer Auftrag", value: 3000 },
];

export default function Advantages() {
  const [avgOrderValue, setAvgOrderValue] = useState(1500);
  const [missedPerMonth, setMissedPerMonth] = useState(2);

  const monthlyLoss = avgOrderValue * missedPerMonth;
  const yearlyLoss = monthlyLoss * 12;

  return (
    <SectionWrapper id="rechner" gray>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Rechenbeispiel
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-secondary">
            Was kostet Sie ein verlorener Auftrag?
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto text-lg">
            Kunden, die Sie nicht online finden, rufen bei der Konkurrenz an.
            Rechnen Sie selbst:
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left: Inputs */}
            <div className="space-y-8">
              {/* Average order value */}
              <div>
                <label className="block text-sm font-semibold text-secondary mb-3">
                  Durchschnittlicher Auftragswert
                </label>
                <div className="flex gap-2 mb-3">
                  {presets.map((preset) => (
                    <button
                      key={preset.value}
                      onClick={() => setAvgOrderValue(preset.value)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                        avgOrderValue === preset.value
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-muted hover:bg-gray-200"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min={200}
                    max={5000}
                    step={100}
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-muted">200 €</span>
                    <span className="text-sm font-bold text-secondary">
                      {avgOrderValue.toLocaleString("de-DE")} €
                    </span>
                    <span className="text-xs text-muted">5.000 €</span>
                  </div>
                </div>
              </div>

              {/* Missed orders per month */}
              <div>
                <label className="block text-sm font-semibold text-secondary mb-3">
                  Verlorene Aufträge pro Monat (ohne Website)
                </label>
                <div className="flex gap-3">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => setMissedPerMonth(num)}
                      className={`flex-1 py-3 text-sm font-bold rounded-xl transition-colors cursor-pointer ${
                        missedPerMonth === num
                          ? "bg-primary text-white shadow-md"
                          : "bg-gray-100 text-muted hover:bg-gray-200"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted mt-2">
                  Wie viele Kunden rufen wohl bei der Konkurrenz an, weil sie Sie
                  nicht online finden?
                </p>
              </div>
            </div>

            {/* Right: Results */}
            <div className="flex flex-col justify-center">
              <div className="bg-red-50 border border-red-100 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-2 text-red-600 mb-2">
                  <TrendingDown className="h-5 w-5" />
                  <span className="text-sm font-semibold">
                    Entgangener Umsatz
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-muted">Pro Monat:</span>
                    <span className="text-2xl font-extrabold text-red-600">
                      {monthlyLoss.toLocaleString("de-DE")} €
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline pt-2 border-t border-red-200">
                    <span className="text-sm text-muted">Pro Jahr:</span>
                    <span className="text-3xl font-extrabold text-red-700">
                      {yearlyLoss.toLocaleString("de-DE")} €
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                <div className="flex items-center gap-2 text-green-700 mb-2">
                  <Calculator className="h-5 w-5" />
                  <span className="text-sm font-semibold">Ihre Investition</span>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  Eine CraftBridge-Website kostet{" "}
                  <span className="font-bold text-green-700">einmalig 999 €</span>{" "}
                  – das entspricht{" "}
                  <span className="font-bold text-green-700">
                    {monthlyLoss > 0
                      ? `${(999 / monthlyLoss).toFixed(1).replace(".", ",")} Monaten`
                      : "wenigen Monaten"}
                  </span>{" "}
                  an entgangenem Umsatz.
                </p>
              </div>

              <div className="mt-6 text-center">
                <Button href="#kontakt" size="lg">
                  Kostenloses Erstgespräch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
