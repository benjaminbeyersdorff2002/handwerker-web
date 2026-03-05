"use client";

import { useReducer, useCallback } from "react";
import Link from "next/link";
import {
  Flame,
  Droplets,
  Thermometer,
  Sun,
  Wind,
  Fuel,
  Home,
  Building2,
  Warehouse,
  Castle,
  TreePine,
  Euro,
  Leaf,
  ShieldCheck,
  Wrench,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Star,
  CheckCircle2,
  Info,
} from "lucide-react";
import {
  getHeatingRecommendation,
  type HeizungsCheckAnswers,
  type HeatingRecommendation,
} from "@/data/haustechnik-mueller";

const base = "/showcase/haustechnik-mueller";

/* ── State Machine ── */
type State = {
  step: number; // 0-3 (0-2 = steps, 3 = result)
  answers: HeizungsCheckAnswers;
  results: HeatingRecommendation[] | null;
};

type Action =
  | { type: "SET_ANSWER"; field: keyof HeizungsCheckAnswers; value: string | number | string[] }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "RESTART" }
  | { type: "TOGGLE_PRIORITY"; value: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_ANSWER":
      return {
        ...state,
        answers: { ...state.answers, [action.field]: action.value },
      };
    case "TOGGLE_PRIORITY": {
      const current = state.answers.priorities ?? [];
      const next = current.includes(action.value)
        ? current.filter((p) => p !== action.value)
        : [...current, action.value];
      return {
        ...state,
        answers: { ...state.answers, priorities: next },
      };
    }
    case "NEXT_STEP": {
      if (state.step === 2) {
        // Calculate results
        const results = getHeatingRecommendation(state.answers);
        return { ...state, step: 3, results };
      }
      return { ...state, step: state.step + 1 };
    }
    case "PREV_STEP":
      return { ...state, step: Math.max(0, state.step - 1) };
    case "RESTART":
      return { step: 0, answers: { livingArea: 120, priorities: [] }, results: null };
    default:
      return state;
  }
}

/* ── Option Button Component ── */
function OptionButton({
  selected,
  onClick,
  icon: Icon,
  label,
  sub,
}: {
  selected: boolean;
  onClick: () => void;
  icon?: typeof Flame;
  label: string;
  sub?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
        selected
          ? "border-red-500 bg-red-50 shadow-sm"
          : "border-gray-200 bg-white hover:border-red-300 hover:bg-red-50/30"
      }`}
    >
      {Icon && (
        <Icon
          className={`h-6 w-6 shrink-0 ${
            selected ? "text-red-600" : "text-gray-400"
          }`}
        />
      )}
      <div>
        <span
          className={`text-sm font-semibold ${
            selected ? "text-red-700" : "text-gray-900"
          }`}
        >
          {label}
        </span>
        {sub && <span className="block text-xs text-gray-500">{sub}</span>}
      </div>
    </button>
  );
}

/* ── Priority Toggle ── */
function PriorityToggle({
  selected,
  onClick,
  icon: Icon,
  label,
}: {
  selected: boolean;
  onClick: () => void;
  icon: typeof Flame;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
        selected
          ? "border-red-500 bg-red-50"
          : "border-gray-200 bg-white hover:border-red-300"
      }`}
    >
      <Icon
        className={`h-5 w-5 shrink-0 ${
          selected ? "text-red-600" : "text-gray-400"
        }`}
      />
      <span
        className={`text-sm font-semibold ${
          selected ? "text-red-700" : "text-gray-700"
        }`}
      >
        {label}
      </span>
      {selected && (
        <CheckCircle2 className="h-4 w-4 text-red-600 ml-auto" />
      )}
    </button>
  );
}

/* ── Main Component ── */
export default function HeizungsCheck() {
  const [state, dispatch] = useReducer(reducer, {
    step: 0,
    answers: { livingArea: 120, priorities: [] },
    results: null,
  });

  const { step, answers, results } = state;

  const setAnswer = useCallback(
    (field: keyof HeizungsCheckAnswers, value: string | number | string[]) =>
      dispatch({ type: "SET_ANSWER", field, value }),
    []
  );

  const canProceed = (() => {
    if (step === 0) return !!answers.currentSystem && !!answers.heatingAge;
    if (step === 1) return !!answers.propertyType && !!answers.buildingYear;
    if (step === 2) return (answers.priorities?.length ?? 0) >= 1;
    return true;
  })();

  const stepLabels = ["Aktuelle Situation", "Ihr Gebäude", "Ihre Wünsche"];

  /* ── Result view ── */
  if (step === 3 && results) {
    const paramString = [
      answers.currentSystem,
      answers.heatingAge,
      answers.livingArea,
      answers.propertyType,
      answers.buildingYear,
      answers.underfloorHeating,
      (answers.priorities ?? []).join("-"),
    ].join(",");

    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Ihre persönliche Empfehlung
          </h2>
          <p className="mt-2 text-gray-500">
            Basierend auf Ihren Angaben empfehlen wir folgende Heizsysteme:
          </p>
        </div>

        {/* Results */}
        <div className="space-y-4">
          {results.map((rec, idx) => (
            <div
              key={rec.system.id}
              className={`bg-white rounded-2xl border-2 p-6 shadow-sm ${
                idx === 0
                  ? "border-red-300 ring-2 ring-red-100"
                  : "border-gray-200"
              }`}
            >
              {idx === 0 && (
                <span className="inline-block text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full mb-3">
                  Beste Empfehlung
                </span>
              )}

              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-lg font-bold text-gray-900">
                  {rec.system.name}
                </h3>
                <div className="flex gap-0.5 shrink-0">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < rec.suitabilityScore
                          ? "text-amber-400 fill-amber-400"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-gray-500 text-xs mb-1">Investition</div>
                  <div className="font-bold text-gray-900">
                    {rec.investRange}
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-gray-500 text-xs mb-1">
                    Förderung ({rec.subsidyPercent}%)
                  </div>
                  <div className="font-bold text-green-700">
                    {rec.subsidyAmount}
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-gray-500 text-xs mb-1">
                    Nach Förderung
                  </div>
                  <div className="font-bold text-blue-700">
                    {rec.costAfterSubsidy}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-gray-500 text-xs mb-1">
                    Betriebskosten
                  </div>
                  <div className="font-bold text-gray-900">
                    {rec.annualCost}
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1 text-green-600">
                  <Leaf className="h-4 w-4" />
                  CO₂-Einsparung: {rec.co2Savings}
                </span>
              </div>
              {rec.reasoning && (
                <p className="mt-2 text-sm text-gray-600">{rec.reasoning}</p>
              )}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 flex items-start gap-3">
          <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            Dies ist eine unverbindliche Orientierungshilfe. Die tatsächlichen
            Kosten und Fördermöglichkeiten hängen von vielen Faktoren ab. Wir
            beraten Sie gerne persönlich und erstellen ein konkretes Angebot.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={`${base}/kontakt?heizungscheck=${encodeURIComponent(paramString)}`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-500 transition-colors shadow-lg"
          >
            Persönliche Beratung anfordern
            <ArrowRight className="h-5 w-5" />
          </Link>
          <button
            type="button"
            onClick={() => dispatch({ type: "RESTART" })}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <RotateCcw className="h-4 w-4" />
            Neu starten
          </button>
        </div>
      </div>
    );
  }

  /* ── Step views ── */
  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div>
        <div className="flex items-center justify-between mb-2">
          {stepLabels.map((label, idx) => (
            <div
              key={label}
              className={`flex items-center gap-2 text-sm font-medium ${
                idx <= step ? "text-red-600" : "text-gray-400"
              }`}
            >
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                  idx < step
                    ? "bg-red-600 text-white"
                    : idx === step
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 text-gray-500"
                }`}
              >
                {idx < step ? "✓" : idx + 1}
              </div>
              <span className="hidden sm:inline">{label}</span>
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-600 rounded-full transition-all duration-500"
            style={{ width: `${((step + 1) / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* ── Step 1: Aktuelle Situation ── */}
      {step === 0 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Ihre aktuelle Heizung
            </h2>
            <p className="text-sm text-gray-500">
              Welches System nutzen Sie aktuell?
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { id: "gas", icon: Flame, label: "Gas" },
              { id: "oel", icon: Fuel, label: "Öl" },
              { id: "waermepumpe", icon: Wind, label: "Wärmepumpe" },
              { id: "pellet", icon: TreePine, label: "Pellet/Holz" },
              { id: "fernwaerme", icon: Thermometer, label: "Fernwärme" },
              { id: "elektro", icon: Sun, label: "Elektro/Nachtspeicher" },
              { id: "keine", icon: Home, label: "Keine / Neubau" },
            ].map((opt) => (
              <OptionButton
                key={opt.id}
                selected={answers.currentSystem === opt.id}
                onClick={() => setAnswer("currentSystem", opt.id)}
                icon={opt.icon}
                label={opt.label}
              />
            ))}
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Alter der Heizung
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: "unter-5", label: "Unter 5 Jahre" },
                { id: "5-15", label: "5–15 Jahre" },
                { id: "15-25", label: "15–25 Jahre" },
                { id: "ueber-25", label: "Über 25 Jahre" },
              ].map((opt) => (
                <OptionButton
                  key={opt.id}
                  selected={answers.heatingAge === opt.id}
                  onClick={() => setAnswer("heatingAge", opt.id)}
                  label={opt.label}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Wohnfläche: {answers.livingArea ?? 120} m²
            </h3>
            <input
              type="range"
              min={50}
              max={300}
              step={10}
              value={answers.livingArea ?? 120}
              onChange={(e) =>
                setAnswer("livingArea", parseInt(e.target.value))
              }
              className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-red-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>50 m²</span>
              <span>300 m²</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Step 2: Gebäude ── */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Ihr Gebäude
            </h2>
            <p className="text-sm text-gray-500">
              Angaben zu Ihrem Haus helfen uns, die beste Option zu finden.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Art der Immobilie
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { id: "efh", icon: Home, label: "Einfamilienhaus" },
                { id: "dhh", icon: Home, label: "Doppelhaushälfte" },
                { id: "rh", icon: Building2, label: "Reihenhaus" },
                { id: "mfh", icon: Building2, label: "Mehrfamilienhaus" },
                { id: "altbau", icon: Castle, label: "Altbau / Denkmal" },
              ].map((opt) => (
                <OptionButton
                  key={opt.id}
                  selected={answers.propertyType === opt.id}
                  onClick={() => setAnswer("propertyType", opt.id)}
                  icon={opt.icon}
                  label={opt.label}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Baujahr des Gebäudes
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: "vor-1978", label: "Vor 1978", sub: "Oft schlecht gedämmt" },
                { id: "1978-1995", label: "1978–1995", sub: "Erste WSchV" },
                { id: "1995-2010", label: "1995–2010", sub: "EnEV-Standard" },
                { id: "nach-2010", label: "Nach 2010", sub: "Gut gedämmt" },
              ].map((opt) => (
                <OptionButton
                  key={opt.id}
                  selected={answers.buildingYear === opt.id}
                  onClick={() => setAnswer("buildingYear", opt.id)}
                  label={opt.label}
                  sub={opt.sub}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Fußbodenheizung vorhanden?
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "ja", label: "Ja" },
                { id: "nein", label: "Nein" },
                { id: "teilweise", label: "Teilweise" },
              ].map((opt) => (
                <OptionButton
                  key={opt.id}
                  selected={answers.underfloorHeating === opt.id}
                  onClick={() => setAnswer("underfloorHeating", opt.id)}
                  label={opt.label}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Step 3: Wünsche ── */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Was ist Ihnen wichtig?
            </h2>
            <p className="text-sm text-gray-500">
              Wählen Sie mindestens eine Priorität – sie beeinflusst die
              Empfehlung.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { id: "betriebskosten", icon: Euro, label: "Niedrige Betriebskosten" },
              { id: "umwelt", icon: Leaf, label: "Umwelt & Klimaschutz" },
              { id: "investition", icon: Droplets, label: "Geringe Investitionskosten" },
              { id: "unabhaengigkeit", icon: ShieldCheck, label: "Unabhängigkeit von fossilen Energien" },
              { id: "wenig-umbau", icon: Wrench, label: "Wenig Umbau nötig" },
            ].map((opt) => (
              <PriorityToggle
                key={opt.id}
                selected={(answers.priorities ?? []).includes(opt.id)}
                onClick={() =>
                  dispatch({ type: "TOGGLE_PRIORITY", value: opt.id })
                }
                icon={opt.icon}
                label={opt.label}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Navigation ── */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => dispatch({ type: "PREV_STEP" })}
            className="inline-flex items-center gap-2 px-5 py-3 text-gray-600 font-medium rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück
          </button>
        ) : (
          <div />
        )}
        <button
          type="button"
          onClick={() => dispatch({ type: "NEXT_STEP" })}
          disabled={!canProceed}
          className={`inline-flex items-center gap-2 px-6 py-3 font-bold rounded-xl transition-colors cursor-pointer ${
            canProceed
              ? "bg-red-600 text-white hover:bg-red-500 shadow-lg"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {step === 2 ? "Ergebnis berechnen" : "Weiter"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
