import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | CraftBridge",
};

export default function ImpressumPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-secondary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="text-3xl font-bold text-secondary mb-8">Impressum</h1>

        <div className="prose prose-gray max-w-none space-y-6 text-muted">
          <div>
            <h2 className="text-lg font-semibold text-secondary mt-0">Angaben gemäß § 5 TMG</h2>
            <p>
              [Dein Firmenname]<br />
              [Dein vollständiger Name]<br />
              [Straße und Hausnummer]<br />
              [PLZ Ort]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary">Kontakt</h2>
            <p>
              Telefon: [Deine Telefonnummer]<br />
              E-Mail: [Deine E-Mail-Adresse]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              [Wenn vorhanden, sonst entfernen]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit. Wir sind nicht bereit oder
              verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div className="bg-primary-light rounded-xl p-6 border border-primary/20">
            <p className="text-sm text-primary-dark">
              <strong>Hinweis:</strong> Dies ist ein Platzhalter-Impressum. Bitte
              ersetzen Sie alle Angaben in [eckigen Klammern] durch Ihre
              tatsächlichen Daten.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
