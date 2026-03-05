"use client";

import { useReducer } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  RotateCcw,
  ArrowRight,
  Sofa,
  BedDouble,
  CookingPot,
  Bath,
  DoorOpen,
  Baby,
  Briefcase,
  Home,
} from "lucide-react";

const base = "/showcase/malerbetrieb-schneider";

// ---------- Types ----------

type FarbRecommendation = {
  hauptfarbe: { name: string; hex: string; code: string };
  akzentfarbe: { name: string; hex: string; code: string };
  deckenfarbe: { name: string; hex: string; code: string };
  referenceImage: string;
  tip: string;
};

type Answers = {
  room?: string;
  size?: string;
  light?: string;
  mood?: string;
  tone?: string;
};

type State = {
  step: number;
  answers: Answers;
  history: number[];
};

type Action =
  | { type: "ANSWER"; key: keyof Answers; value: string }
  | { type: "BACK" }
  | { type: "RESET" };

// ---------- Reducer ----------

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ANSWER":
      return {
        step: state.step + 1,
        answers: { ...state.answers, [action.key]: action.value },
        history: [...state.history, state.step],
      };
    case "BACK":
      if (state.history.length === 0) return state;
      return {
        step: state.history[state.history.length - 1],
        answers: state.answers,
        history: state.history.slice(0, -1),
      };
    case "RESET":
      return { step: 0, answers: {}, history: [] };
    default:
      return state;
  }
}

// ---------- Questions ----------

const roomOptions = [
  { label: "Wohnzimmer", value: "wohnzimmer", icon: Sofa },
  { label: "Schlafzimmer", value: "schlafzimmer", icon: BedDouble },
  { label: "Küche", value: "kueche", icon: CookingPot },
  { label: "Bad", value: "bad", icon: Bath },
  { label: "Flur", value: "flur", icon: DoorOpen },
  { label: "Kinderzimmer", value: "kinderzimmer", icon: Baby },
  { label: "Büro", value: "buero", icon: Briefcase },
  { label: "Fassade", value: "fassade", icon: Home },
];

const sizeOptions = [
  { label: "Klein (unter 15 m²)", value: "klein" },
  { label: "Mittel (15–25 m²)", value: "mittel" },
  { label: "Groß (über 25 m²)", value: "gross" },
];

const lightOptions = [
  { label: "Viel (große Fenster, Südseite)", value: "viel" },
  { label: "Mittel", value: "mittel" },
  { label: "Wenig (kleine Fenster, Nordseite)", value: "wenig" },
];

const moodOptions = [
  { label: "Ruhig & Entspannt", value: "ruhig" },
  { label: "Warm & Einladend", value: "warm" },
  { label: "Modern & Puristisch", value: "modern" },
  { label: "Mutig & Ausdrucksstark", value: "mutig" },
];

const toneOptions = [
  { label: "Neutrale Töne", value: "neutral" },
  { label: "Erdtöne", value: "erde" },
  { label: "Blau-Grün", value: "blaugruen" },
  { label: "Warme Töne (Rot/Orange)", value: "warm" },
  { label: "Kräftige Akzente", value: "kraeftig" },
];

// ---------- Recommendation Engine ----------

const palettes: Record<string, FarbRecommendation> = {
  "neutral-ruhig": {
    hauptfarbe: { name: "Warmgrau", hex: "#C4BEB5", code: "RAL 7044" },
    akzentfarbe: { name: "Nebelgrün", hex: "#9CAF88", code: "NCS S 3020-G30Y" },
    deckenfarbe: { name: "Reinweiß", hex: "#FAFAFA", code: "RAL 9010" },
    referenceImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop",
    tip: "Neutrale Töne schaffen eine zeitlose Basis. Der grüne Akzent bringt Leben, ohne zu dominieren.",
  },
  "neutral-warm": {
    hauptfarbe: { name: "Greige", hex: "#B8A99A", code: "RAL 1019" },
    akzentfarbe: { name: "Salbei", hex: "#9CAF88", code: "NCS S 3020-G30Y" },
    deckenfarbe: { name: "Cremeweiß", hex: "#F5F0E8", code: "RAL 9001" },
    referenceImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop",
    tip: "Greige verbindet Grau und Beige – universell kombinierbar und trotzdem warm.",
  },
  "neutral-modern": {
    hauptfarbe: { name: "Beton", hex: "#A0998F", code: "RAL 7032" },
    akzentfarbe: { name: "Anthrazit", hex: "#3E3E3E", code: "RAL 7016" },
    deckenfarbe: { name: "Reinweiß", hex: "#FFFFFF", code: "RAL 9010" },
    referenceImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop",
    tip: "Die Kombination aus Beton und Anthrazit erzeugt einen cleanen, urbanen Look.",
  },
  "neutral-mutig": {
    hauptfarbe: { name: "Taubenblau", hex: "#7B9DAF", code: "NCS S 3020-B" },
    akzentfarbe: { name: "Nachtblau", hex: "#2C3E50", code: "NCS S 6020-B" },
    deckenfarbe: { name: "Reinweiß", hex: "#FAFAFA", code: "RAL 9010" },
    referenceImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop",
    tip: "Taubenblau als Grundfarbe mit dunklem Akzent – elegant und mutig zugleich.",
  },
  "erde-ruhig": {
    hauptfarbe: { name: "Sandstein", hex: "#D4C5A9", code: "RAL 1015" },
    akzentfarbe: { name: "Olivgrün", hex: "#6B705C", code: "NCS S 5010-G50Y" },
    deckenfarbe: { name: "Cremeweiß", hex: "#F5F0E8", code: "RAL 9001" },
    referenceImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=400&fit=crop",
    tip: "Erdtöne bringen die Natur ins Haus. Perfekt kombiniert mit Naturmaterialien.",
  },
  "erde-warm": {
    hauptfarbe: { name: "Terracotta", hex: "#C4784A", code: "NCS S 3040-Y50R" },
    akzentfarbe: { name: "Cremeweiß", hex: "#F5F0E8", code: "RAL 9001" },
    deckenfarbe: { name: "Leinen", hex: "#E8DDD0", code: "NCS S 1010-Y30R" },
    referenceImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    tip: "Terracotta strahlt Wärme aus und funktioniert besonders in Räumen mit viel Tageslicht.",
  },
  "erde-modern": {
    hauptfarbe: { name: "Taupe", hex: "#8B7D6B", code: "NCS S 4010-Y30R" },
    akzentfarbe: { name: "Schwarz", hex: "#1A1A1A", code: "RAL 9005" },
    deckenfarbe: { name: "Reinweiß", hex: "#FFFFFF", code: "RAL 9010" },
    referenceImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop",
    tip: "Taupe trifft Schwarz – Erde meets Urbanität. Sehr zeitgemäß.",
  },
  "erde-mutig": {
    hauptfarbe: { name: "Kupfer", hex: "#B87333", code: "NCS S 3050-Y40R" },
    akzentfarbe: { name: "Smaragd", hex: "#2D6A4F", code: "NCS S 4040-G" },
    deckenfarbe: { name: "Cremeweiß", hex: "#F5F0E8", code: "RAL 9001" },
    referenceImage: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=400&fit=crop",
    tip: "Kupfer und Smaragd – ein edles Duo, das Luxus ausstrahlt.",
  },
  "blaugruen-ruhig": {
    hauptfarbe: { name: "Eukalyptus", hex: "#84A98C", code: "NCS S 3020-G10Y" },
    akzentfarbe: { name: "Leinen", hex: "#E8DDD0", code: "NCS S 1010-Y30R" },
    deckenfarbe: { name: "Reinweiß", hex: "#FAFAFA", code: "RAL 9010" },
    referenceImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop",
    tip: "Eukalyptus-Grün beruhigt und erfrischt gleichzeitig – ideal fürs Schlafzimmer.",
  },
  "blaugruen-warm": {
    hauptfarbe: { name: "Moosgrün", hex: "#6B705C", code: "NCS S 5010-G50Y" },
    akzentfarbe: { name: "Honig", hex: "#C9A959", code: "RAL 1024" },
    deckenfarbe: { name: "Cremeweiß", hex: "#F5F0E8", code: "RAL 9001" },
    referenceImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop",
    tip: "Moos trifft Honig – eine warme, naturnahe Kombination mit Gemütlichkeitsfaktor.",
  },
  "blaugruen-modern": {
    hauptfarbe: { name: "Petrol", hex: "#1B6B6D", code: "NCS S 4040-B50G" },
    akzentfarbe: { name: "Weiß", hex: "#FFFFFF", code: "RAL 9010" },
    deckenfarbe: { name: "Reinweiß", hex: "#FAFAFA", code: "RAL 9016" },
    referenceImage: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=400&fit=crop",
    tip: "Petrol ist ein starkes Statement. Am besten als einzelne Akzentwand einsetzen.",
  },
  "blaugruen-mutig": {
    hauptfarbe: { name: "Ozeanblau", hex: "#1A535C", code: "NCS S 5030-B50G" },
    akzentfarbe: { name: "Gold", hex: "#C9A959", code: "RAL 1024" },
    deckenfarbe: { name: "Perlweiß", hex: "#EDE8E2", code: "RAL 1013" },
    referenceImage: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&h=400&fit=crop",
    tip: "Ozeanblau und Gold: dramatisch und luxuriös. Perfekt für ein Esszimmer oder eine Bibliothek.",
  },
  "warm-ruhig": {
    hauptfarbe: { name: "Apricot", hex: "#EDC9AF", code: "NCS S 1020-Y50R" },
    akzentfarbe: { name: "Weiß", hex: "#FAFAFA", code: "RAL 9016" },
    deckenfarbe: { name: "Cremeweiß", hex: "#F5F0E8", code: "RAL 9001" },
    referenceImage: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=600&h=400&fit=crop",
    tip: "Apricot ist die sanfte Variante warmer Töne – einladend, aber nicht aufdringlich.",
  },
  "warm-warm": {
    hauptfarbe: { name: "Terracotta", hex: "#C4784A", code: "NCS S 3040-Y50R" },
    akzentfarbe: { name: "Elfenbein", hex: "#F0EBE0", code: "RAL 1014" },
    deckenfarbe: { name: "Leinen", hex: "#E8DDD0", code: "NCS S 1010-Y30R" },
    referenceImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    tip: "Volle Wärme: Terracotta pur. Am besten mit warmem Licht und Holzmöbeln kombinieren.",
  },
  "warm-modern": {
    hauptfarbe: { name: "Lachs", hex: "#E8998D", code: "NCS S 1030-Y80R" },
    akzentfarbe: { name: "Anthrazit", hex: "#3E3E3E", code: "RAL 7016" },
    deckenfarbe: { name: "Reinweiß", hex: "#FFFFFF", code: "RAL 9010" },
    referenceImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop",
    tip: "Lachs und Anthrazit: ein moderner Kontrast, der skandinavisches Flair verbreitet.",
  },
  "warm-mutig": {
    hauptfarbe: { name: "Bordeaux", hex: "#6B2737", code: "RAL 3005" },
    akzentfarbe: { name: "Gold", hex: "#C9A959", code: "RAL 1024" },
    deckenfarbe: { name: "Perlweiß", hex: "#EDE8E2", code: "RAL 1013" },
    referenceImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=400&fit=crop",
    tip: "Bordeaux und Gold – opulent und dramatisch. Ein Klassiker für repräsentative Räume.",
  },
  "kraeftig-ruhig": {
    hauptfarbe: { name: "Flaschengrün", hex: "#2D6A4F", code: "NCS S 4040-G" },
    akzentfarbe: { name: "Creme", hex: "#F0EBE0", code: "RAL 1014" },
    deckenfarbe: { name: "Reinweiß", hex: "#FAFAFA", code: "RAL 9010" },
    referenceImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
    tip: "Flaschengrün wirkt überraschend beruhigend – vor allem mit hellem Boden und Decke.",
  },
  "kraeftig-warm": {
    hauptfarbe: { name: "Curry", hex: "#C09035", code: "NCS S 2060-Y10R" },
    akzentfarbe: { name: "Dunkelbraun", hex: "#5C4033", code: "RAL 8011" },
    deckenfarbe: { name: "Cremeweiß", hex: "#F5F0E8", code: "RAL 9001" },
    referenceImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    tip: "Curry-Gelb bringt Sonnenschein ins Haus – besonders wirkungsvoll in Nordlagen.",
  },
  "kraeftig-modern": {
    hauptfarbe: { name: "Indigoblau", hex: "#2C3E6B", code: "NCS S 5030-R80B" },
    akzentfarbe: { name: "Signalweiß", hex: "#F4F4F4", code: "RAL 9003" },
    deckenfarbe: { name: "Reinweiß", hex: "#FFFFFF", code: "RAL 9010" },
    referenceImage: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=400&fit=crop",
    tip: "Indigoblau als Feature-Wall: ein starker Kontrast, der den Raum optisch strukturiert.",
  },
  "kraeftig-mutig": {
    hauptfarbe: { name: "Smaragd", hex: "#006D5B", code: "NCS S 4040-B80G" },
    akzentfarbe: { name: "Kupfer", hex: "#B87333", code: "NCS S 3050-Y40R" },
    deckenfarbe: { name: "Perlweiß", hex: "#EDE8E2", code: "RAL 1013" },
    referenceImage: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=400&fit=crop",
    tip: "Smaragd und Kupfer: maximale Ausdruckskraft. Ideal als Akzent in einem sonst ruhigen Raum.",
  },
};

function getRecommendation(answers: Answers): FarbRecommendation {
  const toneKey =
    answers.tone === "neutral"
      ? "neutral"
      : answers.tone === "erde"
        ? "erde"
        : answers.tone === "blaugruen"
          ? "blaugruen"
          : answers.tone === "warm"
            ? "warm"
            : "kraeftig";

  const moodKey =
    answers.mood === "ruhig"
      ? "ruhig"
      : answers.mood === "warm"
        ? "warm"
        : answers.mood === "modern"
          ? "modern"
          : "mutig";

  const key = `${toneKey}-${moodKey}`;
  const palette = palettes[key] || palettes["neutral-ruhig"];

  // Modify tip based on room/size/light
  let extraTip = "";
  if (answers.size === "klein" && answers.light === "wenig") {
    extraTip =
      " Bei kleinen, dunklen Räumen empfehlen wir, die Hauptfarbe 1–2 Stufen heller zu wählen.";
  } else if (answers.room === "bad") {
    extraTip = " Fürs Bad empfehlen wir feuchtigkeitsbeständige Latexfarbe.";
  } else if (answers.room === "fassade") {
    extraTip =
      " Für Fassaden verwenden wir witterungsbeständige Silikonharzfarben.";
  } else if (answers.room === "kinderzimmer") {
    extraTip =
      " Fürs Kinderzimmer setzen wir auf schadstoffarme Farben mit Blauem Engel.";
  }

  return { ...palette, tip: palette.tip + extraTip };
}

// ---------- Component ----------

export default function Farbberater() {
  const [state, dispatch] = useReducer(reducer, {
    step: 0,
    answers: {},
    history: [],
  });

  const steps = [
    {
      key: "room" as const,
      question: "Welchen Raum möchten Sie gestalten?",
      options: roomOptions,
      hasIcons: true,
    },
    {
      key: "size" as const,
      question: "Wie groß ist der Raum?",
      subtext:
        "Kleine Räume brauchen andere Farben als große – wir berücksichtigen das.",
      options: sizeOptions,
    },
    {
      key: "light" as const,
      question: "Wie viel natürliches Licht hat der Raum?",
      subtext:
        "Schauen Sie sich um: Wie hell ist der Raum tagsüber ohne Kunstlicht?",
      options: lightOptions,
    },
    {
      key: "mood" as const,
      question: "Welche Stimmung soll der Raum haben?",
      options: moodOptions,
    },
    {
      key: "tone" as const,
      question: "Welche Farbtöne sprechen Sie an?",
      options: toneOptions,
    },
  ];

  const isResult = state.step >= steps.length;
  const currentStep = steps[state.step];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-emerald-800 px-6 py-4">
        <h3 className="text-white font-bold text-lg">Farbberater</h3>
        <p className="text-emerald-200 text-sm mt-1">
          5 kurze Fragen – Ihre persönliche Farbempfehlung.
        </p>
      </div>

      <div className="p-6 md:p-8">
        {/* Progress dots */}
        <div className="flex items-center gap-2 mb-6">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i <= state.step ? "w-8 bg-emerald-600" : "w-2 bg-gray-200"
              }`}
            />
          ))}
        </div>

        {isResult ? (
          /* ── Result Card ── */
          (() => {
            const rec = getRecommendation(state.answers);
            const paramStr = [
              state.answers.room,
              state.answers.size,
              state.answers.light,
              state.answers.mood,
              state.answers.tone,
            ].join(",");

            return (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Ihre persönliche Farbempfehlung
                </h3>

                {/* Color Cards */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Hauptfarbe", color: rec.hauptfarbe },
                    { label: "Akzentfarbe", color: rec.akzentfarbe },
                    { label: "Deckenfarbe", color: rec.deckenfarbe },
                  ].map(({ label, color }) => (
                    <div key={label} className="text-center">
                      <div
                        className="w-full aspect-square rounded-xl border-2 border-gray-200 shadow-md mb-3"
                        style={{ backgroundColor: color.hex }}
                      />
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {label}
                      </p>
                      <p className="font-bold text-gray-900 mt-1">
                        {color.name}
                      </p>
                      <p className="text-xs text-gray-400">{color.code}</p>
                    </div>
                  ))}
                </div>

                {/* Reference Image */}
                <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={rec.referenceImage}
                    alt="Referenz-Raumbeispiel"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    So könnte es aussehen
                  </div>
                </div>

                {/* Tip */}
                <div className="bg-emerald-50 rounded-xl p-4 mb-6">
                  <p className="text-sm text-emerald-800 font-medium">
                    💡 Profi-Tipp:
                  </p>
                  <p className="text-sm text-emerald-700 mt-1">{rec.tip}</p>
                </div>

                {/* CTA */}
                <Link
                  href={`${base}/kontakt?farbberater=${paramStr}`}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 transition-colors"
                >
                  Farbberatung vereinbaren
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            );
          })()
        ) : (
          /* ── Question Card ── */
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              {currentStep.question}
            </h3>
            {currentStep.subtext && (
              <p className="text-sm text-gray-500 mt-1">
                {currentStep.subtext}
              </p>
            )}

            <div
              className={`mt-6 ${
                currentStep.hasIcons
                  ? "grid grid-cols-2 sm:grid-cols-4 gap-3"
                  : "space-y-3"
              }`}
            >
              {currentStep.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() =>
                    dispatch({
                      type: "ANSWER",
                      key: currentStep.key,
                      value: opt.value,
                    })
                  }
                  className={`text-left transition-all ${
                    currentStep.hasIcons
                      ? "flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 hover:border-emerald-400 hover:bg-emerald-50"
                      : "w-full px-5 py-3.5 rounded-xl border border-gray-200 hover:border-emerald-400 hover:bg-emerald-50"
                  }`}
                >
                  {"icon" in opt && opt.icon && (
                    <opt.icon className="h-6 w-6 text-emerald-600" />
                  )}
                  <span
                    className={`font-medium text-gray-700 ${currentStep.hasIcons ? "text-sm text-center" : ""}`}
                  >
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
          <button
            onClick={() => dispatch({ type: "BACK" })}
            disabled={state.history.length === 0}
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück
          </button>
          <button
            onClick={() => dispatch({ type: "RESET" })}
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            Neu starten
          </button>
        </div>
      </div>
    </div>
  );
}
