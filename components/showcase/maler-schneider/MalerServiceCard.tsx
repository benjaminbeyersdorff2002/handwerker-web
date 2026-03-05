import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Paintbrush, Home, Droplets, Palette, Building2, Sparkles } from "lucide-react";
import type { MalerService } from "@/data/maler-schneider";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Paintbrush,
  Home,
  Droplets,
  Palette,
  Building2,
  Sparkles,
};

type Props = {
  service: MalerService;
  href: string;
};

export default function MalerServiceCard({ service, href }: Props) {
  const IconComp = iconMap[service.icon] || Paintbrush;

  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-md text-emerald-600">
                <IconComp className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-white text-lg drop-shadow-md">
                {service.name}
              </h3>
            </div>
          </div>
        </div>
        <div className="p-5">
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
            {service.shortDesc}
          </p>
          <span className="mt-3 inline-flex items-center text-sm font-medium text-emerald-600">
            Mehr erfahren
            <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
