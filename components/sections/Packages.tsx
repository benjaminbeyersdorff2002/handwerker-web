"use client";

import { useState } from "react";
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
  Plus,
  Package,
  Wrench,
  Flame,
  Paintbrush,
  type LucideIcon,
} from "lucide-react";

/* ── Base package features ── */
const baseFeatures = [
  { icon: Globe, text: "Responsive Website (alle Geräte)" },
  { icon: PhoneCall, text: "Click-to-Call & WhatsApp-Button" },
  { icon: MapPin, text: "Google Maps Einbindung" },
  { icon: FileText, text: "Kontaktformular" },
  { icon: Briefcase, text: "Leistungsübersicht" },
  { icon: Search, text: "SEO-Grundoptimierung" },
  { icon: Lock, text: "SSL-Zertifikat & Hosting-Setup" },
];

/* ── Add-on modules ── */
const modules = [
  {
    icon: ImageIcon,
    name: "Vorher/Nachher-Galerie",
    price: 199,
    description:
      "Zeigen Sie Ihre Arbeit – überzeugende Bilder verkaufen besser als Worte.",
  },
  {
    icon: ShieldCheck,
    name: "Google My Business Setup",
    price: 149,
    description:
      "Professioneller Google-Eintrag für maximale lokale Sichtbarkeit.",
  },
  {
    icon: Star,
    name: "Google-Bewertungen Integration",
    price: 99,
    description:
      "Zeigen Sie echte Kundenstimmen direkt auf Ihrer Website.",
  },
  {
    icon: AlertCircle,
    name: "Notdienst-Feature",
    price: 149,
    description:
      "Auffälliges Banner & Badge für Ihren 24/7-Notdienst.",
  },
  {
    icon: CalendarCheck,
    name: "Online-Terminbuchung",
    price: 249,
    description:
      "Kunden buchen Termine direkt – ohne Telefon-Ping-Pong.",
  },
  {
    icon: Award,
    name: "Referenzprojekte-Bereich",
    price: 149,
    description:
      "Präsentieren Sie Ihre besten Projekte mit Fotos & Details.",
  },
  {
    icon: Newspaper,
    name: "Blog/News-Bereich",
    price: 199,
    description:
      "Regelmäßige Inhalte für besseres Google-Ranking.",
  },
  {
    icon: Users,
    name: "Mitarbeiter-/Team-Seite",
    price: 99,
    description:
      "Zeigen Sie, wer hinter Ihrem Betrieb steht – schafft Vertrauen.",
  },
  {
    icon: HelpCircle,
    name: "FAQ-Bereich",
    price: 99,
    description:
      "Beantworten Sie häufige Fragen vorab – spart Zeit & stärkt SEO.",
  },
  {
    icon: BarChart3,
    name: "Leistungsgebiet mit lokaler SEO",
    price: 149,
    description:
      "Werden Sie in Ihrer Region bei Google gefunden.",
  },
];

/* ── Example configurations ── */
const exampleConfigs = [
  {
    icon: Flame,
    trade: "SHK-Betriebe",
    label: "Beliebt bei",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-100",
    selectedModules: [
      "Notdienst-Feature",
      "Google My Business Setup",
      "Referenzprojekte-Bereich",
      "Google-Bewertungen Integration",
    ],
    totalExtra: 546,
  },
  {
    icon: Paintbrush,
    trade: "Malerbetriebe",
    label: "Beliebt bei",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
    selectedModules: [
      "Vorher/Nachher-Galerie",
      "Referenzprojekte-Bereich",
      "Google-Bewertungen Integration",
      "Leistungsgebiet mit lokaler SEO",
    ],
    totalExtra: 596,
  },
  {
    icon: Wrench,
    trade: "Elektrobetriebe",
    label: "Beliebt bei",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    selectedModules: [
      "Online-Terminbuchung",
      "Google My Business Setup",
      "FAQ-Bereich",
      "Notdienst-Feature",
    ],
    totalExtra: 646,
  },
];

/* ── Module Card ── */
function ModuleCard({
  icon: Icon,
  name,
  price,
  description,
}: {
  icon: LucideIcon;
  name: string;
  price: number;
  description: string;
}) {
  return (
    <div className="group relative bg-white rounded-xl border border-gray-100 p-5 hover:border-primary/40 hover:shadow-md transition-all duration-200">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-semibold text-secondary text-sm leading-tight">
              {name}
            </h4>
            <span className="shrink-0 text-sm font-bold text-primary whitespace-nowrap">
              +{price} €
            </span>
          </div>
          <p className="mt-1.5 text-xs text-muted leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Example Config Card ── */
function ExampleConfigCard({
  config,
}: {
  config: (typeof exampleConfigs)[number];
}) {
  const Icon = config.icon;
  return (
    <div
      className={`rounded-xl border ${config.borderColor} ${config.bgColor} p-5`}
    >
      <div className="flex items-center gap-2 mb-3">
        <Icon className={`h-5 w-5 ${config.color}`} />
        <span className="text-xs font-semibold text-muted uppercase tracking-wider">
          {config.label}
        </span>
        <span className={`text-sm font-bold ${config.color}`}>
          {config.trade}
        </span>
      </div>
      <ul className="space-y-2 mb-4">
        {config.selectedModules.map((mod) => (
          <li key={mod} className="flex items-center gap-2 text-sm text-secondary">
            <Check className="h-3.5 w-3.5 text-primary shrink-0" />
            {mod}
          </li>
        ))}
      </ul>
      <div className="pt-3 border-t border-gray-200/60">
        <div className="flex items-baseline justify-between">
          <span className="text-xs text-muted">Gesamtpreis</span>
          <div>
            <span className="text-lg font-extrabold text-secondary">
              {(999 + config.totalExtra).toLocaleString("de-DE")}
            </span>
            <span className="text-muted ml-1 text-sm">€</span>
          </div>
        </div>
        <p className="text-xs text-muted mt-1">
          999 € Basis + {config.totalExtra} € Module
        </p>
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
          Ihr Preis. Ihre Wahl. Null Überflüssiges.
        </h2>
        <p className="mt-4 text-muted max-w-2xl mx-auto text-lg">
          Starten Sie mit dem Basispaket und wählen Sie nur die Module, die Ihr
          Betrieb wirklich braucht. Transparente Festpreise – ohne versteckte
          Kosten.
        </p>
      </div>

      {/* ── BASE PACKAGE ── */}
      <div className="max-w-3xl mx-auto mb-16">
        <Card highlighted className="relative overflow-hidden">
          <div className="text-center mb-2">
            <span className="bg-primary text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
              Basispaket
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 mt-4">
            <Package className="h-8 w-8 text-primary" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-secondary">
              Handwerker-Website
            </h3>
          </div>

          <div className="text-center mt-4">
            <span className="text-5xl font-extrabold text-secondary">
              999
            </span>
            <span className="text-muted ml-1 text-lg">€</span>
            <p className="text-sm text-muted mt-2">
              Einmaliger Festpreis · Lieferzeit 5–7 Werktage
            </p>
          </div>

          <p className="text-center text-muted mt-4 max-w-lg mx-auto">
            Alles, was ein Handwerksbetrieb für einen professionellen
            Online-Auftritt braucht – sofort einsatzbereit.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {baseFeatures.map((feature) => (
              <div
                key={feature.text}
                className="flex items-center gap-2.5 text-sm text-secondary"
              >
                <feature.icon className="h-4 w-4 text-primary shrink-0" />
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
      <div className="mb-16">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
            <Plus className="h-4 w-4" />
            Optionale Module
          </div>
          <p className="mt-3 text-muted max-w-xl mx-auto">
            Erweitern Sie Ihre Website gezielt – jedes Modul hat einen festen
            Preis und kann jederzeit dazugebucht werden.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((mod) => (
            <ModuleCard key={mod.name} {...mod} />
          ))}
        </div>
      </div>

      {/* ── EXAMPLE CONFIGURATIONS ── */}
      <div>
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-secondary">
            Beliebte Kombinationen
          </h3>
          <p className="mt-2 text-muted">
            So konfigurieren andere Betriebe ihre Website.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {exampleConfigs.map((config) => (
            <ExampleConfigCard key={config.trade} config={config} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
