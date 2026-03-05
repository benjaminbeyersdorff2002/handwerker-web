"use client";

import { useState, useMemo } from "react";
import { X } from "lucide-react";
import { galleryProjects } from "@/data/maler-schneider";
import type { GalleryProject } from "@/data/maler-schneider";
import BeforeAfterSlider from "@/components/showcase/elektro-weber/BeforeAfterSlider";

const leistungOptions = [
  "Alle",
  "Innenmalerei",
  "Fassade",
  "Kreativtechniken",
  "Lackierarbeiten",
  "Tapezierarbeiten",
  "Bodenbeschichtung",
];

const raumtypOptions = [
  "Alle",
  "Wohnzimmer",
  "Bad",
  "Flur",
  "Fassade",
  "Gewerbe",
];

const stilOptions = ["Alle", "modern", "klassisch", "kreativ"];

const stilLabels: Record<string, string> = {
  modern: "Modern",
  klassisch: "Klassisch",
  kreativ: "Kreativ",
};

export default function GalleryFilter() {
  const [activeLeistung, setActiveLeistung] = useState("Alle");
  const [activeRaumtyp, setActiveRaumtyp] = useState("Alle");
  const [activeStil, setActiveStil] = useState("Alle");

  const filtered = useMemo(() => {
    return galleryProjects.filter((p: GalleryProject) => {
      if (activeLeistung !== "Alle" && p.leistung !== activeLeistung)
        return false;
      if (activeRaumtyp !== "Alle" && p.raumtyp !== activeRaumtyp) return false;
      if (activeStil !== "Alle" && p.stil !== activeStil) return false;
      return true;
    });
  }, [activeLeistung, activeRaumtyp, activeStil]);

  const hasFilters =
    activeLeistung !== "Alle" ||
    activeRaumtyp !== "Alle" ||
    activeStil !== "Alle";

  const resetFilters = () => {
    setActiveLeistung("Alle");
    setActiveRaumtyp("Alle");
    setActiveStil("Alle");
  };

  return (
    <div>
      {/* Filter Controls */}
      <div className="space-y-4 mb-10">
        {/* Leistung */}
        <div>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
            Leistung
          </span>
          <div className="flex flex-wrap gap-2">
            {leistungOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveLeistung(opt)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeLeistung === opt
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-emerald-300"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Raumtyp */}
        <div>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
            Raumtyp
          </span>
          <div className="flex flex-wrap gap-2">
            {raumtypOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveRaumtyp(opt)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeRaumtyp === opt
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-emerald-300"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Stil */}
        <div>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
            Stil
          </span>
          <div className="flex flex-wrap gap-2">
            {stilOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveStil(opt)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeStil === opt
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-emerald-300"
                }`}
              >
                {opt === "Alle" ? "Alle" : stilLabels[opt] || opt}
              </button>
            ))}
          </div>
        </div>

        {/* Reset */}
        {hasFilters && (
          <button
            onClick={resetFilters}
            className="inline-flex items-center gap-1.5 text-sm text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
          >
            <X className="h-4 w-4" />
            Filter zurücksetzen
          </button>
        )}
      </div>

      {/* Results */}
      <p className="text-sm text-gray-500 mb-6">
        {filtered.length} {filtered.length === 1 ? "Projekt" : "Projekte"}{" "}
        gefunden
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg">Keine Projekte für diese Filter gefunden.</p>
          <button
            onClick={resetFilters}
            className="mt-4 text-emerald-600 font-medium hover:underline"
          >
            Alle Projekte anzeigen
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project) => (
            <div
              key={project.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100"
            >
              <div className="relative h-72">
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  alt={project.title}
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs font-medium bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full">
                    {project.leistung}
                  </span>
                  <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full">
                    {project.raumtyp}
                  </span>
                  <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full">
                    {stilLabels[project.stil] || project.stil}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900">{project.title}</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {project.location} &middot; {project.year}
                </p>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
