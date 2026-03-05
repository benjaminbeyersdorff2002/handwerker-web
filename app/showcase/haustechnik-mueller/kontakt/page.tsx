import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Thermometer,
  ArrowRight,
} from "lucide-react";
import { companyInfo } from "@/data/haustechnik-mueller";
import SubpageHero from "@/components/showcase/haustechnik-mueller/SubpageHero";
import ContactFormSHK from "@/components/showcase/haustechnik-mueller/ContactFormSHK";

const base = "/showcase/haustechnik-mueller";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Haustechnik Müller – Angebot anfordern, Beratungstermin vereinbaren oder Notdienst erreichen.",
};

export default function KontaktPage() {
  return (
    <>
      <SubpageHero
        title="Kontakt"
        subtitle="Schreiben Sie uns oder rufen Sie an – wir beraten Sie gerne persönlich und unverbindlich."
        breadcrumbs={[{ label: "Kontakt" }]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* ── Left Column: Contact Info ── */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Kontaktdaten
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600 shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Telefon</div>
                      <a
                        href={`tel:${companyInfo.phoneFull}`}
                        className="font-medium text-gray-900 hover:text-red-600"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600 shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">E-Mail</div>
                      <span className="font-medium text-gray-900">
                        {companyInfo.email}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600 shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Adresse</div>
                      <div className="font-medium text-gray-900">
                        {companyInfo.street}
                        <br />
                        {companyInfo.zip} {companyInfo.city}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-red-600" />
                  Öffnungszeiten
                </h3>
                <div className="space-y-2 text-sm">
                  {companyInfo.openingHours.map((h) => (
                    <div
                      key={h.day}
                      className={`flex justify-between ${
                        h.day === "Notdienst"
                          ? "text-red-600 font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-48 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin className="h-8 w-8 mx-auto mb-2" />
                  <span className="text-sm">Google Maps Kartenansicht</span>
                </div>
              </div>

              {/* HeizungsCheck Card */}
              <div className="bg-red-50 rounded-xl p-5 border border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <Thermometer className="h-5 w-5 text-red-600" />
                  <h4 className="font-bold text-gray-900">HeizungsCheck</h4>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Noch nicht sicher, welche Heizung zu Ihnen passt? Unser
                  Online-Tool hilft in 3 Schritten.
                </p>
                <Link
                  href={`${base}/heizungscheck`}
                  className="inline-flex items-center gap-1 text-sm text-red-600 font-semibold hover:text-red-700"
                >
                  HeizungsCheck starten
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* ── Right Column: Form ── */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  Anfrage senden
                </h3>
                <Suspense
                  fallback={
                    <div className="h-96 flex items-center justify-center text-gray-400">
                      Formular wird geladen…
                    </div>
                  }
                >
                  <ContactFormSHK />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
