"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { inspirationItems } from "@/data/maler-schneider";
import type { InspirationItem } from "@/data/maler-schneider";

const base = "/showcase/malerbetrieb-schneider";

const raumtypOptions = [
  "Alle",
  "Wohnzimmer",
  "Schlafzimmer",
  "Küche",
  "Bad",
  "Flur",
  "Kinderzimmer",
  "Büro",
  "Fassade",
];

const stimmungOptions = [
  "Alle",
  "Warm & Gemütlich",
  "Modern & Minimalistisch",
  "Mutig & Kreativ",
  "Klassisch & Elegant",
];

const STORAGE_KEY = "maler-schneider-favorites";

export default function InspirationGallery() {
  const [activeRaumtyp, setActiveRaumtyp] = useState("Alle");
  const [activeStimmung, setActiveStimmung] = useState("Alle");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setFavorites(JSON.parse(stored));
    } catch {
      // ignore
    }
  }, []);

  // Persist favorites
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const filtered = useMemo(() => {
    return inspirationItems.filter((item: InspirationItem) => {
      if (showFavoritesOnly && !favorites.includes(item.id)) return false;
      if (activeRaumtyp !== "Alle" && item.raumtyp !== activeRaumtyp)
        return false;
      if (activeStimmung !== "Alle" && item.stimmung !== activeStimmung)
        return false;
      return true;
    });
  }, [activeRaumtyp, activeStimmung, favorites, showFavoritesOnly]);

  return (
    <div>
      {/* Filter Controls */}
      <div className="space-y-4 mb-8">
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
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
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

        {/* Stimmung */}
        <div>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
            Stimmung
          </span>
          <div className="flex flex-wrap gap-2">
            {stimmungOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveStimmung(opt)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeStimmung === opt
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-emerald-300"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Favorites Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              showFavoritesOnly
                ? "bg-red-50 text-red-600 border border-red-200"
                : "bg-white text-gray-600 border border-gray-200 hover:border-red-200"
            }`}
          >
            <Heart
              className={`h-4 w-4 ${showFavoritesOnly ? "fill-red-500 text-red-500" : ""}`}
            />
            Favoriten ({favorites.length})
          </button>
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg">Keine Inspirationen für diese Filter gefunden.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.raumtyp} - ${item.stimmung}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors"
                >
                  <Heart
                    className={`h-5 w-5 transition-colors ${
                      favorites.includes(item.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>
                {/* Labels */}
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <span className="text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-700 px-2.5 py-1 rounded-full">
                    {item.raumtyp}
                  </span>
                  <span className="text-xs font-medium bg-emerald-600/90 text-white px-2.5 py-1 rounded-full">
                    {item.stimmung}
                  </span>
                </div>
              </div>

              {/* Color Palette */}
              <div className="p-4">
                <div className="flex gap-3">
                  {item.colorPalette.map((color) => (
                    <div key={color.name} className="flex-1 text-center">
                      <div
                        className="w-full h-10 rounded-lg border border-gray-200 mb-1.5"
                        style={{ backgroundColor: color.hex }}
                      />
                      <p className="text-xs font-medium text-gray-700 truncate">
                        {color.name}
                      </p>
                      <p className="text-[10px] text-gray-400">{color.code}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Favorites CTA */}
      {favorites.length > 0 && (
        <div className="mt-10 bg-emerald-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-gray-900">
              {favorites.length} Favorit{favorites.length !== 1 ? "en" : ""}{" "}
              gespeichert
            </p>
            <p className="text-sm text-gray-500">
              Senden Sie uns Ihre Lieblingsbilder mit einer Anfrage.
            </p>
          </div>
          <Link
            href={`${base}/kontakt?favorites=${favorites.join(",")}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 transition-colors shrink-0"
          >
            Mit Favoriten anfragen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
