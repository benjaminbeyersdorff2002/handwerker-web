import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/data/elektro-weber";
import SubpageHero from "@/components/showcase/elektro-weber/SubpageHero";
import ServiceCard from "@/components/showcase/elektro-weber/ServiceCard";
import CTASection from "@/components/showcase/elektro-weber/CTASection";
import { Clock, ChevronRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = { title: "Leistungen" };

const base = "/showcase/elektro-weber";

export default function LeistungenPage() {
  return (
    <>
      <SubpageHero
        title="Unsere Leistungen"
        subtitle="Von der Elektroinstallation bis zur Solaranlage – wir bieten das komplette Spektrum moderner Elektrotechnik."
        backgroundImage="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&h=800&fit=crop"
        breadcrumbs={[{ label: "Leistungen" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                href={`${base}/leistungen/${service.slug}`}
              />
            ))}

            {/* Notdienst Card */}
            <Link href={`${base}/notdienst`} className="group block">
              <div className="bg-red-600 rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop"
                    alt="24h Notdienst"
                    fill
                    className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Clock className="h-16 w-16 text-white/80" />
                  </div>
                </div>
                <div className="p-5 text-white flex-1">
                  <h3 className="font-bold text-lg">24h Notdienst</h3>
                  <p className="mt-2 text-sm text-red-100 leading-relaxed">
                    Stromausfall? Kurzschluss? Wir sind rund um die Uhr für Sie da.
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-yellow-300">
                    Notdienst-Seite
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
