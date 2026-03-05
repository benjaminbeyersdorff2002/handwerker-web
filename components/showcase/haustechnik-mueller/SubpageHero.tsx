import Link from "next/link";
import { ChevronRight } from "lucide-react";

const base = "/showcase/haustechnik-mueller";

type Breadcrumb = {
  label: string;
  href?: string;
};

type Props = {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
};

export default function SubpageHero({ title, subtitle, breadcrumbs }: Props) {
  return (
    <section className="relative bg-gray-900 pt-32 pb-16 md:pt-40 md:pb-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900/30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="mb-6 flex items-center gap-1.5 text-sm text-gray-400">
            <Link
              href={base}
              className="hover:text-red-400 transition-colors"
            >
              Startseite
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-red-400 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">{subtitle}</p>
        )}

        {/* Accent line */}
        <div className="mt-6 h-1 w-16 bg-red-600 rounded-full" />
      </div>
    </section>
  );
}
