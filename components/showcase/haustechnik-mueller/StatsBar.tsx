import { Award, Users, Star, Clock } from "lucide-react";

const stats = [
  { icon: Award, value: "25+", label: "Jahre Erfahrung" },
  { icon: Users, value: "1.200+", label: "Zufriedene Kunden" },
  { icon: Star, value: "4,9", label: "Google-Bewertung" },
  { icon: Clock, value: "24/7", label: "Notdienst" },
];

export default function StatsBar() {
  return (
    <section className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="h-7 w-7 text-red-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
