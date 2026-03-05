import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SHKService } from "@/data/haustechnik-mueller";

const base = "/showcase/haustechnik-mueller";

const categoryColors: Record<SHKService["category"], string> = {
  sanitaer: "bg-blue-100 text-blue-700 border-blue-200",
  heizung: "bg-red-100 text-red-700 border-red-200",
  klima: "bg-sky-100 text-sky-700 border-sky-200",
};

const categoryLabels: Record<SHKService["category"], string> = {
  sanitaer: "Sanitär",
  heizung: "Heizung",
  klima: "Klima",
};

type Props = {
  service: SHKService;
};

export default function ServiceCard({ service }: Props) {
  return (
    <Link
      href={`${base}/leistungen/${service.slug}`}
      className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-full border ${categoryColors[service.category]}`}
        >
          {categoryLabels[service.category]}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
          {service.name}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {service.shortDesc}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-red-600 group-hover:gap-2 transition-all">
          Mehr erfahren <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
