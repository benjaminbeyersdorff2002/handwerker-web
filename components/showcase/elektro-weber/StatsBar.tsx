import { Award, Star, Clock, CheckCircle2 } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Jahre Erfahrung" },
  { icon: CheckCircle2, value: "500+", label: "Projekte abgeschlossen" },
  { icon: Star, value: "4.9", label: "Google-Bewertung", showStars: true },
  { icon: Clock, value: "24/7", label: "Notdienst erreichbar" },
];

export default function StatsBar() {
  return (
    <section className="py-16 bg-blue-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-extrabold text-white">
                {stat.value}
              </div>
              {stat.showStars && (
                <div className="flex justify-center gap-0.5 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              )}
              <div className="text-sm text-blue-200/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
