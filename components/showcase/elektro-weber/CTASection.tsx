import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

type Props = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  showPhone?: boolean;
};

export default function CTASection({
  title = "Bereit für Ihr Projekt?",
  subtitle = "Lassen Sie uns in einem kostenlosen Erstgespräch besprechen, was wir für Sie tun können.",
  buttonText = "Jetzt anfragen",
  buttonHref = "/showcase/elektro-weber/kontakt",
  showPhone = true,
}: Props) {
  return (
    <section className="py-20 bg-blue-600">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
        <p className="mt-4 text-lg text-blue-100">{subtitle}</p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors shadow-lg"
          >
            {buttonText}
            <ArrowRight className="h-5 w-5" />
          </Link>

          {showPhone && (
            <a
              href="tel:0800123456"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
            >
              <Phone className="h-5 w-5" />
              0800 123 456
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
