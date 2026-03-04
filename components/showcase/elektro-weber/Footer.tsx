import Link from "next/link";
import { Zap, Phone, Mail, MapPin } from "lucide-react";
import { companyInfo, services } from "@/data/elektro-weber";

const base = "/showcase/elektro-weber";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-400 text-blue-900">
                <Zap className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold">{companyInfo.name}</span>
            </div>
            <p className="text-sm text-blue-200/70 leading-relaxed">
              Ihr Elektriker-Meisterbetrieb in {companyInfo.region}. Seit 2009
              zuverlässig, kompetent und fair.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-sm text-blue-200/70">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`${base}/leistungen/${s.slug}`}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`${base}/notdienst`}
                  className="hover:text-yellow-400 transition-colors text-red-400"
                >
                  24h Notdienst
                </Link>
              </li>
            </ul>
          </div>

          {/* Einsatzgebiet */}
          <div>
            <h4 className="font-semibold mb-4">Einsatzgebiet</h4>
            <ul className="space-y-2 text-sm text-blue-200/70">
              {companyInfo.areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-blue-200/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-yellow-400 shrink-0" />
                <a
                  href={`tel:${companyInfo.phoneFull}`}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-yellow-400 shrink-0" />
                <span>{companyInfo.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-blue-800">
              <Link
                href={`${base}/kontakt`}
                className="text-sm text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
              >
                Alle Kontaktdaten &rarr;
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-blue-300/50">
          <span>
            &copy; {new Date().getFullYear()} {companyInfo.name}. Alle Rechte
            vorbehalten.
          </span>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-blue-200 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-blue-200 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
