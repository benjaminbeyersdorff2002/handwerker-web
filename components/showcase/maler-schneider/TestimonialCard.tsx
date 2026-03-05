import { Star } from "lucide-react";
import type { Review } from "@/data/maler-schneider";

export default function TestimonialCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: review.stars }).map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed text-sm">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-5 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">
            {review.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">
              {review.name}
            </p>
            <p className="text-xs text-gray-400">{review.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
