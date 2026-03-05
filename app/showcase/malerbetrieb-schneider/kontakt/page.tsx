import type { Metadata } from "next";
import { Suspense } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Palette,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { companyInfo } from "@/data/maler-schneider";
import SubpageHero from "@/components/showcase/maler-schneider/SubpageHero";
import ContactFormMaler from "@/components/showcase/maler-schneider/ContactFormMaler";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontaktieren Sie ${companyInfo.name} für ein kostenloses Angebot. Telefon: ${companyInfo.phone} – Herborn und Umgebung.`,
};

const base = "/showcase/malerbetrieb-schneider";

export default function KontaktPage() {
  return (
    <>
      <SubpageHero
        title="Kontakt"
        subtitle="Wir freuen uns auf Ihr Projekt – rufen Sie an oder schreiben Sie uns. Die Erstberatung ist immer kostenlos."
        backgroundImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=800&fit=crop&q=80"
        breadcrumbs={[{ label: "Kontakt" }]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* ─── Left Column: Info ─── */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  So erreichen Sie uns
                </h2>
                <div className="space-y-4">
                  <a
                    href={`tel:${companyInfo.phoneFull}`}
                    className="flex items-center gap-3 text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Telefon</p>
                      <p className="font-semibold">{companyInfo.phone}</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center gap-3 text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">E-Mail</p>
                      <p className="font-semibold">{companyInfo.email}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Adresse</p>
                      <p className="font-semibold">
                        {companyInfo.street}, {companyInfo.zip}{" "}
                        {companyInfo.city}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-3">
                  <Clock className="h-5 w-5 text-emerald-600" />
                  Öffnungszeiten
                </h3>
                <div className="space-y-2">
                  {companyInfo.openingHours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between text-sm text-gray-600"
                    >
                      <span>{h.day}</span>
                      <span className="font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 h-48 bg-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">Kartenansicht</p>
                  <p className="text-xs">
                    {companyInfo.street}, {companyInfo.zip} {companyInfo.city}
                  </p>
                </div>
              </div>

              {/* Farbberatung vor Ort Card */}
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white shrink-0">
                    <Palette className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-gray-900">
                    Farbberatung vor Ort
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Unser Profi-Service: Wir kommen mit echten Farbmustern zu
                  Ihnen und beraten Sie direkt im Raum. So sehen Sie die
                  Farben im richtigen Licht – bevor gestrichen wird.
                </p>
                <Link
                  href={`${base}/farbwelt#farbberater`}
                  className="mt-3 inline-flex items-center gap-1 text-sm text-emerald-700 font-semibold hover:text-emerald-600 transition-colors"
                >
                  Farbberater ausprobieren
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* ─── Right Column: Form (2 cols wide) ─── */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Anfrage senden
                </h2>
                <Suspense
                  fallback={
                    <div className="text-center py-12 text-gray-400">
                      Formular wird geladen...
                    </div>
                  }
                >
                  <ContactFormMaler />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
