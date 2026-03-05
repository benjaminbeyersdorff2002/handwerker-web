import Link from "next/link";
import { ArrowRight } from "lucide-react";

const base = "/showcase/malerbetrieb-schneider";

type Props = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function CTASection({
  title = "Bereit für frische Farbe?",
  subtitle = "Lassen Sie sich kostenlos und unverbindlich beraten – wir kommen zu Ihnen und bringen Farbmuster mit.",
  buttonText = "Kostenloses Angebot anfordern",
  buttonHref = `${base}/kontakt`,
}: Props) {
  return (
    <section className="py-16 bg-emerald-600">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          {title}
        </h2>
        <p className="mt-4 text-emerald-100 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Link
          href={buttonHref}
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
        >
          {buttonText}
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
