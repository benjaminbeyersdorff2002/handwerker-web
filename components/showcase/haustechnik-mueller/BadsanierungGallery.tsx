"use client";

import { useState, useMemo } from "react";
import { badsanierungProjects, type BadsanierungProject } from "@/data/haustechnik-mueller";
import BeforeAfterSlider from "@/components/showcase/elektro-weber/BeforeAfterSlider";

type SizeFilter = "all" | "klein" | "mittel" | "gross";
type StilFilter = "all" | "modern" | "klassisch" | "barrierefrei";

const sizeLabels: Record<SizeFilter, string> = {
  all: "Alle Größen",
  klein: "Klein (<6 m²)",
  mittel: "Mittel (6–10 m²)",
  gross: "Groß (>10 m²)",
};

const stilLabels: Record<StilFilter, string> = {
  all: "Alle Stile",
  modern: "Modern",
  klassisch: "Klassisch",
  barrierefrei: "Barrierefrei",
};

export default function BadsanierungGallery() {
  const [sizeFilter, setSizeFilter] = useState<SizeFilter>("all");
  const [stilFilter, setStilFilter] = useState<StilFilter>("all");

  const filtered = useMemo(() => {
    return badsanierungProjects.filter((p) => {
      if (sizeFilter !== "all" && p.badgroesse !== sizeFilter) return false;
      if (stilFilter !== "all" && p.stil !== stilFilter) return false;
      return true;
    });
  }, [sizeFilter, stilFilter]);

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Badgröße
          </label>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(sizeLabels) as SizeFilter[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setSizeFilter(key)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  sizeFilter === key
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {sizeLabels[key]}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Stil
          </label>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(stilLabels) as StilFilter[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setStilFilter(key)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  stilFilter === key
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {stilLabels[key]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Count */}
      <p className="text-sm text-gray-500">
        {filtered.length} Projekt{filtered.length !== 1 ? "e" : ""} gefunden
      </p>

      {/* Gallery */}
      {filtered.length === 0 ? (
        <div className="py-16 text-center text-gray-400">
          Keine Projekte für diese Filter-Kombination gefunden.
        </div>
      ) : (
        <div className="space-y-12">
          {filtered.map((project) => (
            <div
              key={project.slug}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
            >
              {/* Before/After Slider */}
              <div className="aspect-[16/9] max-h-[500px]">
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  alt={project.title}
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-medium bg-red-50 text-red-700 px-2.5 py-1 rounded-full">
                    {sizeLabels[project.badgroesse]}
                  </span>
                  <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full capitalize">
                    {project.stil}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {project.location} · {project.year}
                </p>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {project.description}
                </p>
                {project.highlights.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-md border border-gray-100"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
