"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  Check,
  PhoneCall,
  MapPin,
  FileText,
  Search,
  ShieldCheck,
  Lock,
  ImageIcon,
  Star,
  Briefcase,
  Globe,
  Award,
  CalendarCheck,
  AlertCircle,
  HelpCircle,
  Users,
  Newspaper,
  BarChart3,
} from "lucide-react";

const packages = [
  {
    name: "Visitenkarte",
    tagline: "Online sichtbar werden",
    price: "799",
    target: "Für Betriebe, die erstmals online gehen oder einen sauberen Auftritt brauchen.",
    delivery: "5–7 Werktage",
    highlighted: false,
    features: [
      { icon: Globe, text: "Responsive Website (alle Geräte)" },
      { icon: PhoneCall, text: "Click-to-Call & WhatsApp-Button" },
      { icon: MapPin, text: "Google Maps Einbindung" },
      { icon: FileText, text: "Kontaktformular" },
      { icon: Briefcase, text: "Leistungsübersicht" },
      { icon: Search, text: "SEO-Grundoptimierung" },
      { icon: Lock, text: "SSL-Zertifikat & Hosting-Setup" },
    ],
    previousTier: null,
  },
  {
    name: "Kundenmagnet",
    tagline: "Mehr Anfragen gewinnen",
    price: "1.499",
    target: "Für wachsende Betriebe, die online Kunden überzeugen wollen.",
    delivery: "7–10 Werktage",
    highlighted: true,
    features: [
      { icon: ImageIcon, text: "Vorher/Nachher-Galerie" },
      { icon: Star, text: "Google-Bewertungen Integration" },
      { icon: ShieldCheck, text: "Google My Business Setup" },
      { icon: Briefcase, text: "Referenzprojekte-Bereich" },
      { icon: MapPin, text: "Leistungsgebiet mit lokaler SEO" },
      { icon: Award, text: "Trust-Elemente (Meisterbrief, Innung)" },
    ],
    previousTier: "Visitenkarte",
  },
  {
    name: "Komplettpaket",
    tagline: "Ihr Gebiet dominieren",
    price: "2.499",
    target: "Für Betriebe, die aktiv wachsen und die Region anführen wollen.",
    delivery: "10–14 Werktage",
    highlighted: false,
    features: [
      { icon: CalendarCheck, text: "Online-Terminbuchung" },
      { icon: AlertCircle, text: "Notdienst-Feature (Banner/Badge)" },
      { icon: HelpCircle, text: "FAQ-Bereich (SEO-Boost)" },
      { icon: Users, text: "Mitarbeiter-/Team-Seite" },
      { icon: Newspaper, text: "Blog/News-Bereich" },
      { icon: BarChart3, text: "Google Ads Optimierung" },
    ],
    previousTier: "Kundenmagnet",
  },
];

export default function Packages() {
  return (
    <SectionWrapper id="pakete">
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          Pakete & Preise
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-secondary">
          Transparente Festpreise. Keine Überraschungen.
        </h2>
        <p className="mt-4 text-muted max-w-2xl mx-auto text-lg">
          Wählen Sie das Paket, das zu Ihrem Geschäftsziel passt. Alle Preise
          sind Festpreise – ohne versteckte Kosten.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {packages.map((pkg) => (
          <Card
            key={pkg.name}
            highlighted={pkg.highlighted}
            className="flex flex-col"
          >
            {pkg.highlighted && (
              <div className="text-center -mt-2 mb-4">
                <span className="bg-primary text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                  Beliebteste Wahl
                </span>
              </div>
            )}

            {/* Package Name & Tagline */}
            <h3 className="text-xl font-bold text-secondary">{pkg.name}</h3>
            <p className="text-sm text-primary font-medium mt-1">
              {pkg.tagline}
            </p>

            {/* Price */}
            <div className="mt-4">
              <span className="text-4xl font-extrabold text-secondary">
                {pkg.price}
              </span>
              <span className="text-muted ml-1">€</span>
            </div>

            {/* Target */}
            <p className="text-sm text-muted mt-3 leading-relaxed">
              {pkg.target}
            </p>
            <p className="text-xs text-primary font-medium mt-2">
              Lieferzeit: {pkg.delivery}
            </p>

            {/* Features */}
            <div className="mt-6 flex-1">
              {pkg.previousTier && (
                <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3 pb-3 border-b border-gray-100">
                  Alles aus {pkg.previousTier}, plus:
                </p>
              )}
              <ul className="space-y-3">
                {pkg.features.map((feature) => (
                  <li
                    key={feature.text}
                    className="flex items-start gap-2.5 text-sm text-secondary"
                  >
                    <feature.icon className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Button
                href="#kontakt"
                variant={pkg.highlighted ? "primary" : "outline"}
                className="w-full"
              >
                Jetzt anfragen
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
