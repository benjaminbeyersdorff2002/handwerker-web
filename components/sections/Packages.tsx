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
  ShieldCheck,
  BarChart3,
  Package,
  Plus,
  type LucideIcon,
} from "lucide-react";

/* ── Base package – everything a craftsman needs out of the box ── */
const baseFeatures = [
  { icon: Globe, text: "Responsive Website (alle Geräte)" },
  { icon: PhoneCall, text: "Click-to-Call & WhatsApp-Button" },
  { icon: MapPin, text: "Google Maps Einbindung" },
  { icon: FileText, text: "Kontaktformular" },
  { icon: Briefcase, text: "Leistungsübersicht" },
  { icon: Search, text: "SEO-Grundoptimierung" },
  { icon: Lock, text: "SSL-Zertifikat & Hosting-Setup" },
  { icon: AlertCircle, text: "Notdienst-Banner & Badge" },
  { icon: Star, text: "Google-Bewertungen Integration" },
  { icon: HelpCircle, text: "FAQ-Bereich (SEO-Boost)" },
  { icon: Users, text: "Mitarbeiter-/Team-Seite" },
  { icon: BarChart3, text: "Leistungsgebiet-Darstellung" },
];

/* ── 4 real add-on modules with justifiable effort ── */
const modules = [
  {
    icon: ImageIcon,
    name: "Vorher/Nachher-Galerie & Referenzprojekte",
    price: 199,
    description:
      "Überzeugende Bildergalerie mit Vorher/Nachher-Slider und ausführlichen Projektseiten mit Fotos, Beschreibungen und Details.",
    effort: "Individuelle Komponente mit Bildlogik & Filterung",
  },
  {
    icon: ShieldCheck,
    name: "Google My Business Komplettsetup",
    price: 149,
    description:
      "Wir erstellen und optimieren Ihren Google-Eintrag: Kategorien, Fotos, Beschreibung, Öffnungszeiten – für maximale lokale Sichtbarkeit.",
    effort: "Externe Dienstleistung außerhalb der Website",
  },
  {
    icon: CalendarCheck,
    name: "Online-Terminbuchung",
    price: 199,
    description:
      "Kunden buchen Termine direkt auf Ihrer Website – nahtlos integriert mit Cal.com oder Calendly, inkl. Einrichtung und Einweisung.",
    effort: "Drittanbieter-Integration & Konfiguration",
  },
  {
    icon: Newspaper,
    name: "Blog/News-Bereich mit CMS",
    price: 249,
    description:
      "Eigener Blog-Bereich mit Content-Management-System. Veröffentlichen Sie News, Tipps und Projekte selbst – stärkt Ihr Google-Ranking nachhaltig.",
    effort: "CMS-Einrichtung & Einweisung",
  },
];

/* ── Module Card ── */
function ModuleCard({
  icon: Icon,
  name,
  price,
  description,
  effort,
}: {
  icon: LucideIcon;
  name: string;
  price: number;
  description: string;
  effort: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 hover:border-primary/40 hover:shadow-md transition-all duration-200 flex flex-col">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-secondary leading-tight">{name}</h4>
          <span className="text-xs text-muted mt-1 block">{effort}</span>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted leading-relaxed flex-1">
        {description}
      </p>
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-2xl font-extrabold text-secondary">
          +{price} <span className="text-base font-semibold text-muted">€</span>
        </span>
        <span className="text-xs text-muted">einmalig</span>
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function Packages() {
  return (
    <SectionWrapper id="pakete">
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          Pakete & Preise
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-secondary">
          Eine vollständige Website. Ein fairer Preis.
        </h2>
        <p className="mt-4 text-muted max-w-2xl mx-auto text-lg">
          Unser Basispaket enthält alles, was Ihr Handwerksbetrieb online
          braucht. Kein Feature-Striptease – Sie bekommen die komplette Website
          zum Festpreis.
        </p>
      </div>

      {/* ── BASE PACKAGE ── */}
      <div className="max-w-3xl mx-auto mb-20">
        <Card highlighted className="relative overflow-hidden">
          <div className="text-center mb-2">
            <span className="bg-primary text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
              Komplette Handwerker-Website
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 mt-4">
            <Package className="h-8 w-8 text-primary" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-secondary">
              Alles drin. Sofort online.
            </h3>
          </div>

          <div className="text-center mt-5">
            <span className="text-5xl font-extrabold text-secondary">999</span>
            <span className="text-muted ml-1 text-lg">€</span>
            <p className="text-sm text-muted mt-2">
              Einmaliger Festpreis · Lieferzeit 5–7 Werktage
            </p>
          </div>

          <p className="text-center text-muted mt-4 max-w-lg mx-auto">
            Kein Baukasten, kein Kleingedrucktes. Eine professionelle Website
            mit allem, was Handwerker brauchen – fertig in einer Woche.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {baseFeatures.map((feature) => (
              <div
                key={feature.text}
                className="flex items-center gap-2.5 text-sm text-secondary"
              >
                <Check className="h-4 w-4 text-primary shrink-0" />
                {feature.text}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button href="#kontakt" size="lg">
              Jetzt anfragen
            </Button>
          </div>
        </Card>
      </div>

      {/* ── ADD-ON MODULES ── */}
      <div>
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
            <Plus className="h-4 w-4" />
            Optionale Erweiterungen
          </div>
          <h3 className="mt-4 text-xl sm:text-2xl font-bold text-secondary">
            Brauchen Sie mehr? Vier echte Erweiterungen.
          </h3>
          <p className="mt-3 text-muted max-w-xl mx-auto">
            Diese Module bedeuten echten Mehraufwand – und bringen Ihnen
            messbaren Mehrwert. Jederzeit dazubuchbar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {modules.map((mod) => (
            <ModuleCard key={mod.name} {...mod} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
