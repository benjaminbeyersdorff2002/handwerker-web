import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Breadcrumb = { label: string; href?: string };

type Props = {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  breadcrumbs?: Breadcrumb[];
};

const base = "/showcase/elektro-weber";

export default function SubpageHero({
  title,
  subtitle,
  backgroundImage,
  breadcrumbs,
}: Props) {
  return (
    <section className="relative min-h-[40vh] flex items-end overflow-hidden bg-blue-950">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/70 to-blue-950/40" />

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-12 pt-40">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-sm text-blue-200/70 mb-4">
            <Link href={base} className="hover:text-white transition-colors">
              Startseite
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
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

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-blue-100/80 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
