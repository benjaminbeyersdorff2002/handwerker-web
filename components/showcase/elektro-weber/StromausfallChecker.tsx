"use client";

import { useReducer } from "react";
import {
  Phone,
  ArrowLeft,
  RotateCcw,
  AlertTriangle,
  Info,
  ShieldAlert,
} from "lucide-react";
import { checkerNodes, companyInfo } from "@/data/elektro-weber";
import type { CheckerNode } from "@/data/elektro-weber";

type State = { currentId: string; history: string[] };
type Action =
  | { type: "ANSWER"; nextId: string }
  | { type: "BACK" }
  | { type: "RESET" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ANSWER":
      return {
        currentId: action.nextId,
        history: [...state.history, state.currentId],
      };
    case "BACK":
      if (state.history.length === 0) return state;
      return {
        currentId: state.history[state.history.length - 1],
        history: state.history.slice(0, -1),
      };
    case "RESET":
      return { currentId: "start", history: [] };
    default:
      return state;
  }
}

const severityConfig: Record<
  string,
  {
    bg: string;
    border: string;
    text: string;
    icon: typeof Info;
    iconColor: string;
    pulse?: boolean;
  }
> = {
  info: {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-800",
    icon: Info,
    iconColor: "text-green-600",
  },
  warning: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-800",
    icon: AlertTriangle,
    iconColor: "text-yellow-600",
  },
  danger: {
    bg: "bg-red-50",
    border: "border-red-300",
    text: "text-red-800",
    icon: ShieldAlert,
    iconColor: "text-red-600",
    pulse: true,
  },
};

export default function StromausfallChecker() {
  const [state, dispatch] = useReducer(reducer, {
    currentId: "start",
    history: [],
  });

  const node = checkerNodes.find(
    (n: CheckerNode) => n.id === state.currentId
  );
  if (!node) return null;

  const isResult = node.type === "result";
  const severity = node.severity
    ? severityConfig[node.severity]
    : severityConfig.info;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-blue-950 px-6 py-4">
        <h3 className="text-white font-bold text-lg">
          Stromausfall-Schnellcheck
        </h3>
        <p className="text-blue-200 text-sm mt-1">
          Beantworten Sie 2–3 kurze Fragen – wir sagen Ihnen, was zu tun ist.
        </p>
      </div>

      <div className="p-6 md:p-8">
        {/* Progress dots */}
        <div className="flex items-center gap-2 mb-6">
          {["start", "q2a", "q3"].map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i <= state.history.length
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-gray-200"
              }`}
            />
          ))}
        </div>

        {isResult ? (
          /* ── Result Card ── */
          <div
            className={`${severity.bg} ${severity.border} border-2 rounded-xl p-6 ${
              severity.pulse ? "animate-pulse" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <severity.icon
                className={`h-7 w-7 ${severity.iconColor} shrink-0 mt-0.5`}
              />
              <div>
                <h4 className={`text-xl font-bold ${severity.text}`}>
                  {node.text}
                </h4>
                {node.subtext && (
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    {node.subtext}
                  </p>
                )}
              </div>
            </div>

            {/* Always show call button */}
            <a
              href={`tel:${companyInfo.phoneFull}`}
              className="mt-6 flex items-center justify-center gap-3 w-full py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-500 transition-colors text-lg"
            >
              <Phone className="h-6 w-6" />
              Jetzt anrufen: {companyInfo.phone}
            </a>
          </div>
        ) : (
          /* ── Question Card ── */
          <div>
            <h4 className="text-xl font-bold text-gray-900">{node.text}</h4>
            {node.subtext && (
              <p className="mt-2 text-gray-500 text-sm">{node.subtext}</p>
            )}

            <div className="mt-6 space-y-3">
              {node.options?.map((option) => (
                <button
                  key={option.nextId}
                  onClick={() =>
                    dispatch({ type: "ANSWER", nextId: option.nextId })
                  }
                  className="w-full text-left px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer"
                >
                  <span className="font-medium text-gray-800">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between">
          {state.history.length > 0 ? (
            <button
              onClick={() => dispatch({ type: "BACK" })}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück
            </button>
          ) : (
            <div />
          )}

          {(state.history.length > 0 || isResult) && (
            <button
              onClick={() => dispatch({ type: "RESET" })}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              Neu starten
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
