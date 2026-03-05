import Image from "next/image";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import type { Reference } from "@/data/maler-schneider";

type Props = {
  reference: Reference;
  reversed?: boolean;
};

export default function ReferenceCard({ reference, reversed }: Props) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div
        className={`relative rounded-2xl overflow-hidden shadow-lg ${
          reversed ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={reference.image}
          alt={reference.title}
          width={800}
          height={500}
          className="w-full h-auto object-cover aspect-[16/10]"
        />
      </div>
      <div className={reversed ? "lg:order-1" : ""}>
        <div className="flex flex-wrap gap-2 mb-4">
          {reference.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">
          {reference.title}
        </h3>
        <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {reference.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {reference.year}
          </span>
        </div>
        <p className="mt-4 text-gray-600 leading-relaxed">
          {reference.shortDesc}
        </p>
        {reference.highlights && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            {reference.highlights.map((h) => (
              <div
                key={h}
                className="flex items-start gap-1.5 text-sm text-emerald-700"
              >
                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
