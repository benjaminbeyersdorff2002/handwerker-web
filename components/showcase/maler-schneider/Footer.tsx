import Link from "next/link";
import { Paintbrush, Phone, Mail, MapPin } from "lucide-react";
import { services, companyInfo } from "@/data/maler-schneider";

const base = "/showcase/malerbetrieb-schneider";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
                <Paintbrush className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold">{companyInfo.name}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Ihr Malermeisterbetrieb in Herborn und Umgebung. Seit{" "}
              {companyInfo.since} mit Farbe und Leidenschaft für Sie da.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`${base}/leistungen/${s.slug}`}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Entdecken</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href={`${base}/galerie`}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href={`${base}/farbwelt`}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Farbwelt & Farbberater
                </Link>
              </li>
              <li>
                <Link
                  href={`${base}/ueber-uns`}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href={`${base}/faq`}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Häufige Fragen
                </Link>
              </li>
              <li>
                <Link
                  href={`${base}/kontakt`}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                {companyInfo.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                {companyInfo.email}
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-emerald-400 mt-0.5" />
                <span>
                  {companyInfo.street}
                  <br />
                  {companyInfo.zip} {companyInfo.city}
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold text-sm mb-2">Einsatzgebiet</h4>
              <p className="text-xs text-gray-500">
                {companyInfo.serviceAreas.join(" · ")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <span>
            &copy; {new Date().getFullYear()} {companyInfo.name}. Alle Rechte
            vorbehalten.
          </span>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Impressum
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Datenschutz
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
