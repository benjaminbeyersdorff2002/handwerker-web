import Link from "next/link";
import { ArrowRight } from "lucide-react";

const base = "/showcase/haustechnik-mueller";

type Props = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function CTASection({
  title = "Bereit für Ihre neue Heizung?",
  subtitle = "Lassen Sie sich kostenlos und unverbindlich beraten – wir finden die perfekte Lösung für Ihr Zuhause.",
  buttonText = "Kostenloses Angebot anfordern",
  buttonHref = `${base}/kontakt`,
}: Props) {
  return (
    <section className="py-16 bg-red-600">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
        <p className="mt-4 text-red-100 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Link
          href={buttonHref}
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white text-red-700 font-bold rounded-xl hover:bg-red-50 transition-colors shadow-lg"
        >
          {buttonText}
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
