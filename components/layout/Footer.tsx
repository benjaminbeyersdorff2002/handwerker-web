import Link from "next/link";
import { Hammer, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                <Hammer className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold">HandwerkWeb</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Professionelle Websites für Handwerksbetriebe. Modern,
              SEO-optimiert und zum fairen Festpreis.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#leistungen" className="hover:text-primary transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#pakete" className="hover:text-primary transition-colors">
                  Pakete & Preise
                </a>
              </li>
              <li>
                <a href="#ablauf" className="hover:text-primary transition-colors">
                  Ablauf
                </a>
              </li>
              <li>
                <Link href="/showcase" className="hover:text-primary transition-colors">
                  Showcase
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@handwerkweb.de</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+49 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Mittelhessen, Deutschland</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/impressum" className="hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-primary transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} HandwerkWeb. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
