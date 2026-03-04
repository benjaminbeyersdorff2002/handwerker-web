import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
import { companyInfo } from "@/data/elektro-weber";
import SubpageHero from "@/components/showcase/elektro-weber/SubpageHero";
import ContactForm from "@/components/showcase/elektro-weber/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Elektro Weber in Dillenburg. Telefon, E-Mail oder Kontaktformular – wir sind für Sie da.",
};

const base = "/showcase/elektro-weber";

export default function KontaktPage() {
  return (
    <>
      <SubpageHero
        title="Kontakt"
        subtitle="Wir freuen uns auf Ihre Anfrage – rufen Sie an, schreiben Sie uns oder nutzen Sie das Kontaktformular."
        breadcrumbs={[{ label: "Kontakt" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Details */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Kontaktdaten
                </h2>
                <div className="space-y-5">
                  <a
                    href={`tel:${companyInfo.phoneFull}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Telefon</p>
                      <p className="text-gray-600">{companyInfo.phone}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">E-Mail</p>
                      <p className="text-gray-600">{companyInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Adresse</p>
                      <p className="text-gray-600">{companyInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Öffnungszeiten */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <h3 className="font-bold text-gray-900">Öffnungszeiten</h3>
                </div>
                <div className="space-y-3">
                  {companyInfo.hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-gray-600">{h.day}</span>
                      <span
                        className={`font-medium ${
                          h.day === "Notdienst"
                            ? "text-red-600"
                            : "text-gray-900"
                        }`}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notdienst Hinweis */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <h3 className="font-bold text-red-800">Notfall?</h3>
                </div>
                <p className="text-sm text-red-700 mb-3">
                  Bei akuten Notfällen rufen Sie direkt an oder nutzen Sie unsere
                  Notdienst-Seite.
                </p>
                <Link
                  href={`${base}/notdienst`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Zur Notdienst-Seite
                </Link>
              </div>

              {/* Map Placeholder */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl h-48 flex items-center justify-center">
                <div className="text-center text-blue-400">
                  <MapPin className="h-10 w-10 mx-auto mb-2 opacity-50" />
                  <p className="text-sm font-medium">Google Maps Kartenansicht</p>
                  <p className="text-xs mt-1">{companyInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Anfrage senden
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Beschreiben Sie Ihr Anliegen und wir melden uns innerhalb von
                  24 Stunden bei Ihnen.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
