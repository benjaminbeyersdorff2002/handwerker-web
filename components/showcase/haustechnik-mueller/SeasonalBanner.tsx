"use client";

import Link from "next/link";
import { Snowflake, Sun, ArrowRight } from "lucide-react";

const base = "/showcase/haustechnik-mueller";

type Season = "winter" | "summer";

function getSeason(): Season {
  const month = new Date().getMonth(); // 0-11
  // Nov–Feb = winter, else summer
  return month >= 10 || month <= 1 ? "winter" : "summer";
}

const seasonConfig: Record<
  Season,
  { icon: typeof Snowflake; title: string; text: string; href: string; bg: string; accent: string }
> = {
  winter: {
    icon: Snowflake,
    title: "Heizung ausgefallen?",
    text: "Unser Notdienst ist 24/7 für Sie da – auch an Feiertagen. Schnelle Hilfe bei Heizungsstörungen.",
    href: `${base}/notdienst`,
    bg: "bg-blue-900",
    accent: "text-blue-200",
  },
  summer: {
    icon: Sun,
    title: "Bereit für den Sommer?",
    text: "Klimaanlage nachrüsten – jetzt planen und kühle Räume genießen, bevor die Hitze kommt.",
    href: `${base}/leistungen/klimaanlagen`,
    bg: "bg-amber-600",
    accent: "text-amber-100",
  },
};

export default function SeasonalBanner() {
  const season = getSeason();
  const config = seasonConfig[season];
  const Icon = config.icon;

  return (
    <section className={`${config.bg} py-4`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href={config.href}
          className="flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <Icon className={`h-6 w-6 ${config.accent} shrink-0`} />
            <div>
              <span className="font-bold text-white">{config.title}</span>
              <span className={`hidden sm:inline ml-2 text-sm ${config.accent}`}>
                {config.text}
              </span>
            </div>
          </div>
          <ArrowRight className="h-5 w-5 text-white shrink-0" />
        </Link>
      </div>
    </section>
  );
}
