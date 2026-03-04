import { Star } from "lucide-react";
import type { Review } from "@/data/elektro-weber";

type Props = {
  review: Review;
};

export default function TestimonialCard({ review }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6">
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: review.stars }).map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed italic">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="font-semibold text-gray-900 text-sm">
          {review.name}
        </span>
        <span className="text-xs text-gray-400">{review.date}</span>
      </div>
    </div>
  );
}
