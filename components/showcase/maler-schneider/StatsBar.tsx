import { Calendar, Users, Star, Heart } from "lucide-react";

export default function StatsBar() {
  const stats = [
    { value: "20+", label: "Jahre Erfahrung", icon: Calendar },
    { value: "800+", label: "Zufriedene Kunden", icon: Users },
    { value: "4.8", label: "Google Bewertung", icon: Star, showStars: true },
    { value: "100%", label: "Familienbetrieb", icon: Heart },
  ];

  return (
    <section className="py-16 bg-emerald-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <stat.icon className="h-8 w-8 text-emerald-300 mx-auto mb-3" />
              <div className="text-4xl font-extrabold">{stat.value}</div>
              {stat.showStars && (
                <div className="flex justify-center gap-0.5 my-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              )}
              <div className="text-sm text-emerald-200 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
