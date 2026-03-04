"use client";

import { useState, useMemo } from "react";
import type { Reference } from "@/data/elektro-weber";
import ReferenceCard from "./ReferenceCard";
import BeforeAfterSlider from "./BeforeAfterSlider";

type Props = {
  references: Reference[];
};

export default function ReferenzenFilter({ references }: Props) {
  const [activeTag, setActiveTag] = useState("Alle");

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    references.forEach((r) => r.tags.forEach((t) => tagSet.add(t)));
    return ["Alle", ...Array.from(tagSet).sort()];
  }, [references]);

  const filtered =
    activeTag === "Alle"
      ? references
      : references.filter((r) => r.tags.includes(activeTag));

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer ${
              activeTag === tag
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filtered.map((ref) => (
          <ReferenceCard key={ref.slug} reference={ref}>
            {ref.beforeImage && ref.afterImage ? (
              <BeforeAfterSlider
                beforeImage={ref.beforeImage}
                afterImage={ref.afterImage}
                alt={ref.title}
              />
            ) : undefined}
          </ReferenceCard>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 py-12">
          Keine Referenzen für diese Kategorie gefunden.
        </p>
      )}
    </div>
  );
}
