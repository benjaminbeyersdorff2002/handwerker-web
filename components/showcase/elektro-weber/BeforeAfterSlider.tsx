"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

type Props = {
  beforeImage: string;
  afterImage: string;
  alt?: string;
};

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  alt = "Vorher/Nachher Vergleich",
}: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-xl cursor-col-resize select-none touch-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* After Image (full) */}
      <Image src={afterImage} alt={`${alt} – Nachher`} fill className="object-cover" />

      {/* Before Image (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={beforeImage} alt={`${alt} – Vorher`} fill className="object-cover" />
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        style={{ left: `${position}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L3 10L7 16" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 4L17 10L13 16" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 bg-black/60 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
        Vorher
      </div>
      <div className="absolute top-3 right-3 bg-black/60 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
        Nachher
      </div>
    </div>
  );
}
