import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HaustechnikMuellerNavbar from "@/components/showcase/HaustechnikMuellerNavbar";
import Footer from "@/components/showcase/haustechnik-mueller/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Haustechnik Müller",
    default:
      "Haustechnik Müller | Ihr SHK-Meisterbetrieb in Mittelhessen",
  },
  description:
    "Sanitär, Heizung & Klimatechnik in Herborn, Dillenburg & Wetzlar. Meisterbetrieb in 2. Generation – Heizungsmodernisierung, Badsanierung & 24/7 Notdienst.",
};

export default function HaustechnikMuellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <HaustechnikMuellerNavbar />
      <main>{children}</main>
      <Footer />

      {/* Demo Back Link */}
      <div className="py-4 bg-amber-50 border-t border-amber-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/showcase"
            className="inline-flex items-center gap-2 text-sm text-amber-700 hover:text-amber-900 font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Showcase-Übersicht – Diese Demo wurde mit CraftBridge
            erstellt
          </Link>
        </div>
      </div>
    </div>
  );
}
