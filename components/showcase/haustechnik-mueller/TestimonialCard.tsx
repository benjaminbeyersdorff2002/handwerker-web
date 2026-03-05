import { Star } from "lucide-react";
import type { Review } from "@/data/haustechnik-mueller";

type Props = { review: Review };

export default function TestimonialCard({ review }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < review.stars
                ? "text-amber-400 fill-amber-400"
                : "text-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>

      {/* Author */}
      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold text-sm">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{review.name}</p>
          <p className="text-xs text-gray-500">{review.date}</p>
        </div>
      </div>
    </div>
  );
}
