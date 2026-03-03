import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | HandwerkWeb",
};

export default function DatenschutzPage() {
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

        <h1 className="text-3xl font-bold text-secondary mb-8">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-gray max-w-none space-y-6 text-muted">
          <div>
            <h2 className="text-lg font-semibold text-secondary mt-0">
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was
              mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
              besuchen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary">
              2. Verantwortliche Stelle
            </h2>
            <p>
              [Dein Firmenname]<br />
              [Dein vollständiger Name]<br />
              [Straße und Hausnummer]<br />
              [PLZ Ort]<br />
              E-Mail: [Deine E-Mail-Adresse]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary">
              3. Hosting
            </h2>
            <p>
              Diese Website wird bei [Hosting-Anbieter, z.B. Vercel Inc.]
              gehostet. Details entnehmen Sie der Datenschutzerklärung des
              Hosting-Anbieters.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary">
              4. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary">
              5. Datenerfassung auf dieser Website
            </h2>
            <p>
              <strong>Kontaktformular:</strong> Wenn Sie uns per Kontaktformular
              Anfragen zukommen lassen, werden Ihre Angaben zur Bearbeitung der
              Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary">
              6. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
              und den Zweck der Datenverarbeitung sowie ein Recht auf
              Berichtigung oder Löschung dieser Daten.
            </p>
          </div>

          <div className="bg-primary-light rounded-xl p-6 border border-primary/20">
            <p className="text-sm text-primary-dark">
              <strong>Hinweis:</strong> Dies ist ein Platzhalter für die
              Datenschutzerklärung. Bitte lassen Sie diese von einem Anwalt oder
              über einen Datenschutz-Generator erstellen und ersetzen Sie diesen
              Text vollständig.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
