import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import type { Reference } from "@/data/elektro-weber";

type Props = {
  reference: Reference;
  children?: React.ReactNode;
};

export default function ReferenceCard({ reference, children }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        {children || (
          <Image
            src={reference.image}
            alt={reference.title}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {reference.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900">{reference.title}</h3>
        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {reference.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {reference.year}
          </span>
        </div>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          {reference.shortDesc}
        </p>
        {reference.highlights && (
          <div className="mt-4 flex flex-wrap gap-2">
            {reference.highlights.map((h) => (
              <span
                key={h}
                className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full"
              >
                {h}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
