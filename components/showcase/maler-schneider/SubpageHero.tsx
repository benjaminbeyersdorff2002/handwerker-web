import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const base = "/showcase/malerbetrieb-schneider";

type Crumb = { label: string; href?: string };

type Props = {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  breadcrumbs?: Crumb[];
};

export default function SubpageHero({
  title,
  subtitle,
  backgroundImage,
  breadcrumbs,
}: Props) {
  return (
    <section className="relative min-h-[40vh] flex items-end pb-12 pt-32 overflow-hidden">
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-900/80 to-emerald-800/50" />
        </>
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-emerald-700" />
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex items-center gap-1.5 text-sm text-emerald-200/70 mb-4">
            <Link href={base} className="hover:text-white transition-colors">
              Startseite
            </Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-white transition-colors"
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

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-emerald-100 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
