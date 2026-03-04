import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Zap, Home, Shield, Lightbulb, Building2, Clock } from "lucide-react";
import type { Service } from "@/data/elektro-weber";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Home,
  Shield,
  Lightbulb,
  Building2,
  Clock,
};

type Props = {
  service: Service;
  href: string;
};

export default function ServiceCard({ service, href }: Props) {
  const IconComp = iconMap[service.icon] || Zap;

  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
          <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400 text-blue-900">
            <IconComp className="h-5 w-5" />
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {service.name}
          </h3>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
            {service.shortDesc}
          </p>
          <span className="mt-3 inline-flex items-center text-sm font-medium text-blue-600">
            Mehr erfahren
            <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
