// ============================================================
// Haustechnik Müller – Zentrale Datenquelle für alle Seiten
// ============================================================

// ---------- Types ----------

export type SHKService = {
  slug: string;
  name: string;
  icon: string;
  shortDesc: string;
  image: string;
  heroImage: string;
  detailDesc: string;
  workItems: string[];
  process: { step: number; title: string; desc: string }[];
  category: "sanitaer" | "heizung" | "klima";
  relatedReferenceSlug?: string;
};

export type BadsanierungProject = {
  slug: string;
  title: string;
  badgroesse: "klein" | "mittel" | "gross";
  stil: "modern" | "klassisch" | "barrierefrei";
  location: string;
  year: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  highlights: string[];
};

export type Reference = {
  slug: string;
  title: string;
  location: string;
  year: string;
  shortDesc: string;
  image: string;
  tags: string[];
  highlights?: string[];
};

export type Review = {
  name: string;
  date: string;
  stars: number;
  text: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  since: string;
  specialty?: string;
};

export type TimelineEvent = {
  year: string;
  title: string;
  desc: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Certificate = {
  name: string;
  desc: string;
  prominent?: boolean;
};

export type HeatingSystem = {
  id: string;
  name: string;
  investMin: number;
  investMax: number;
  subsidyPercent: number;
  annualCostMin: number;
  annualCostMax: number;
  co2Reduction: number;
  suitabilityFactors: {
    newBuilding: number;
    oldBuilding: number;
    underfloorHeating: number;
    radiators: number;
    lowInvest: number;
    eco: number;
    independence: number;
    minimalWork: number;
  };
};

export type HeizungsCheckAnswers = {
  currentSystem?: string;
  heatingAge?: string;
  livingArea?: number;
  propertyType?: string;
  buildingYear?: string;
  underfloorHeating?: string;
  priorities?: string[];
};

export type HeatingRecommendation = {
  system: HeatingSystem;
  suitabilityScore: number;
  investRange: string;
  subsidyPercent: number;
  subsidyAmount: string;
  costAfterSubsidy: string;
  annualCost: string;
  co2Savings: string;
  reasoning: string;
};

// ---------- Company Info ----------

export const companyInfo = {
  name: "Haustechnik Müller",
  phone: "06461 / 123 456",
  phoneFull: "+4906461123456",
  email: "info@haustechnik-mueller.de",
  street: "Rohrstraße 15",
  zip: "35708",
  city: "Haiger",
  region: "Mittelhessen",
  googleRating: 4.9,
  googleReviews: 87,
  since: 2001,
  generation: 2,
  openingHours: [
    { day: "Montag – Freitag", time: "07:30 – 17:00 Uhr" },
    { day: "Samstag", time: "nach Vereinbarung" },
    { day: "Notdienst", time: "24/7 erreichbar" },
  ],
  serviceAreas: [
    "Haiger",
    "Dillenburg",
    "Herborn",
    "Wetzlar",
    "Eschenburg",
    "Breitscheid",
  ],
  manufacturers: [
    { name: "Buderus", role: "Systempartner", prominent: true },
    { name: "Viessmann", role: "Fachpartner", prominent: true },
    { name: "Grohe", role: "Fachpartner", prominent: false },
    { name: "Daikin", role: "Klimapartner", prominent: false },
    { name: "DVGW", role: "Zertifiziert", prominent: false },
  ],
};

// ---------- Services (6) ----------

export const services: SHKService[] = [
  {
    slug: "sanitaer",
    name: "Sanitärinstallation",
    icon: "Droplets",
    shortDesc:
      "Wasseranschlüsse, Rohrleitungsbau und Sanitärmontage für Neubau und Sanierung – professionell und normgerecht.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&h=800&fit=crop",
    detailDesc:
      "Von der Trinkwasserleitung bis zum Abfluss – wir planen und installieren Ihre komplette Sanitäranlage. Ob Neubau, Sanierung oder Erweiterung: Wir arbeiten nach den aktuellen DIN-Normen und DVGW-Richtlinien. Unser Fokus liegt auf langlebigen Materialien, sauberer Verarbeitung und einer lückenlosen Dokumentation. Bei uns bekommen Sie alles aus einer Hand – von der Planung über die Installation bis zur Abnahme.",
    workItems: [
      "Trinkwasserleitungen (Kupfer, Edelstahl, Mehrschicht)",
      "Abwasserleitungen und Entwässerung",
      "Sanitärmontage (WC, Waschbecken, Dusche, Wanne)",
      "Wasserenthärtungsanlagen",
      "Rückstausicherung und Hebeanlagen",
      "Zirkulationsleitungen für Warmwasser",
      "Wasseraufbereitung und Filtration",
      "Leckortung und Rohrbruch-Reparatur",
    ],
    process: [
      {
        step: 1,
        title: "Bestandsaufnahme",
        desc: "Wir prüfen die vorhandene Installation und besprechen Ihre Anforderungen vor Ort.",
      },
      {
        step: 2,
        title: "Planung & Angebot",
        desc: "Sie erhalten einen detaillierten Installationsplan und ein transparentes Festpreisangebot.",
      },
      {
        step: 3,
        title: "Fachgerechte Installation",
        desc: "Unser Team installiert normgerecht und koordiniert sich mit anderen Gewerken.",
      },
      {
        step: 4,
        title: "Druckprobe & Abnahme",
        desc: "Wir führen eine Druckprüfung durch und übergeben Ihnen die komplette Dokumentation.",
      },
    ],
    category: "sanitaer",
    relatedReferenceSlug: "badsanierung-wellness",
  },
  {
    slug: "heizungsbau",
    name: "Heizungsbau",
    icon: "Flame",
    shortDesc:
      "Installation und Modernisierung von Heizungsanlagen – von Gas-Brennwert bis Wärmepumpe. Wir beraten Sie neutral.",
    image:
      "https://images.unsplash.com/photo-1613063457061-eecde6f4b20d?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1613063457061-eecde6f4b20d?w=1920&h=800&fit=crop",
    detailDesc:
      "Die Wahl der richtigen Heizung ist eine der wichtigsten Entscheidungen für Ihr Zuhause – finanziell und ökologisch. Wir beraten Sie herstellerunabhängig und ehrlich: Was ist für Ihr Gebäude sinnvoll? Was können Sie sich leisten? Welche Förderung gibt es? Als zertifizierte Buderus- und Viessmann-Partner installieren wir alle gängigen Systeme – vom modernen Gas-Brennwertkessel über Pelletöfen bis zur Luft-Wasser-Wärmepumpe. Und wir kümmern uns auch um den Förderantrag.",
    workItems: [
      "Gas-Brennwertheizungen",
      "Luft-Wasser-Wärmepumpen",
      "Sole-Wasser-Wärmepumpen (Erdwärme)",
      "Pellet- und Holzheizungen",
      "Hybridheizungen (WP + Gas)",
      "Fußbodenheizung (Nass- und Trockensystem)",
      "Heizkörperaustausch und hydraulischer Abgleich",
      "Förderanträge BAFA/KfW",
    ],
    process: [
      {
        step: 1,
        title: "Energieberatung",
        desc: "Wir analysieren Ihren Energieverbrauch, das Gebäude und Ihre Wünsche – kostenlos und unverbindlich.",
      },
      {
        step: 2,
        title: "Systemempfehlung & Fördercheck",
        desc: "Sie erhalten eine ehrliche Empfehlung mit Kostenvergleich und Förder-Übersicht (BAFA, KfW, BEG).",
      },
      {
        step: 3,
        title: "Professionelle Installation",
        desc: "Unser Montageteam installiert Ihre neue Heizung – termingerecht und sauber. Alte Anlage wird fachgerecht entsorgt.",
      },
      {
        step: 4,
        title: "Einweisung & Wartungsvertrag",
        desc: "Wir erklären Ihnen die Bedienung und bieten einen günstigen Wartungsvertrag für lange Lebensdauer.",
      },
    ],
    category: "heizung",
    relatedReferenceSlug: "waermepumpe-neubau",
  },
  {
    slug: "badsanierung",
    name: "Badsanierung",
    icon: "Bath",
    shortDesc:
      "Ihr Traumbad aus einer Hand – von der Planung über die Fliesen bis zur bodengleichen Dusche. Alles inklusive.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&h=800&fit=crop",
    detailDesc:
      "Eine Badsanierung ist mehr als nur neue Fliesen – es ist die Chance, Ihren persönlichen Wohlfühlort zu schaffen. Wir planen und realisieren Ihr Traumbad komplett aus einer Hand: Sanitär, Fliesen, Elektro, Lüftung und auf Wunsch auch Möbel. Ob kleines Gäste-WC, barrierefreies Familienbad oder luxuriöse Wellness-Oase – wir haben für jedes Budget und jeden Geschmack die passende Lösung. Mit 3D-Planung sehen Sie Ihr neues Bad schon vor dem ersten Hammerschlag.",
    workItems: [
      "3D-Badplanung und Visualisierung",
      "Komplette Sanitärmontage",
      "Bodengleiche Duschen und Duschrinnen",
      "Freistehende Badewannen",
      "Fußbodenheizung im Bad",
      "Handtuchheizkörper und Infrarotheizung",
      "Barrierefreie Lösungen (DIN 18040)",
      "Koordination aller Gewerke",
    ],
    process: [
      {
        step: 1,
        title: "Inspiration & Beratung",
        desc: "Wir besprechen Ihre Wünsche, zeigen Materialproben und erstellen eine 3D-Visualisierung Ihres neuen Bads.",
      },
      {
        step: 2,
        title: "Detailplanung & Festpreis",
        desc: "Exakte Ausführungsplanung mit Materialauswahl und verbindlichem Festpreisangebot – keine Überraschungen.",
      },
      {
        step: 3,
        title: "Umsetzung in 2–3 Wochen",
        desc: "Unser eingespieltes Team koordiniert alle Gewerke. Tägliche Fortschrittsfotos auf Wunsch.",
      },
      {
        step: 4,
        title: "Ihr neues Bad",
        desc: "Gemeinsame Abnahme, Einweisung in die Technik und 5 Jahre Gewährleistung auf unsere Arbeit.",
      },
    ],
    category: "sanitaer",
    relatedReferenceSlug: "badsanierung-wellness",
  },
  {
    slug: "klimaanlagen",
    name: "Klimaanlagen",
    icon: "Wind",
    shortDesc:
      "Split- und Multi-Split-Klimaanlagen für Wohn- und Gewerberäume – energieeffizient, leise und fachgerecht installiert.",
    image:
      "https://images.unsplash.com/photo-1624167473693-bb5ea202957f?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1624167473693-bb5ea202957f?w=1920&h=800&fit=crop",
    detailDesc:
      "Sommerliche Hitze muss nicht sein – moderne Klimaanlagen arbeiten flüsterleise, energieeffizient und können im Winter sogar heizen. Wir installieren Split- und Multi-Split-Systeme von Daikin für Privat- und Gewerbekunden. Von der Beratung über die Montage bis zur regelmäßigen Wartung bekommen Sie alles aus einer Hand. Und das Beste: Viele Klimasysteme werden als Wärmepumpe im Winter gefördert.",
    workItems: [
      "Single-Split-Klimaanlagen",
      "Multi-Split-Systeme (bis 5 Innengeräte)",
      "Kanalgeräte für verdeckte Montage",
      "Gewerbliche Klimatisierung",
      "Wärmepumpen-Klimasysteme (Heizen & Kühlen)",
      "Luftqualitätssysteme mit Filtration",
      "Klimaanlagen-Wartung und F-Gase-Prüfung",
      "Smart-Home-Anbindung (WLAN-Steuerung)",
    ],
    process: [
      {
        step: 1,
        title: "Kühllastberechnung",
        desc: "Wir berechnen den exakten Kühlbedarf für Ihre Räume – für optimale Leistung ohne Überdimensionierung.",
      },
      {
        step: 2,
        title: "Systemauswahl & Angebot",
        desc: "Wir empfehlen das passende System und erstellen ein Festpreisangebot inklusive Montage.",
      },
      {
        step: 3,
        title: "Saubere Installation",
        desc: "Fachgerechte Montage mit Kernbohrung, Verrohrung und Elektroanbindung – meist in einem Tag.",
      },
      {
        step: 4,
        title: "Inbetriebnahme & Wartung",
        desc: "Funktionstest, Einweisung und auf Wunsch ein Wartungsvertrag für langfristige Effizienz.",
      },
    ],
    category: "klima",
    relatedReferenceSlug: "klimaanlage-buero",
  },
  {
    slug: "wartung",
    name: "Wartung & Service",
    icon: "Wrench",
    shortDesc:
      "Regelmäßige Heizungswartung, Inspektionen und Entstörung – damit Ihre Anlage zuverlässig und effizient läuft.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&h=800&fit=crop",
    detailDesc:
      "Eine gut gewartete Heizung spart bis zu 15 % Energie und hält deutlich länger. Wir bieten Wartungsverträge für alle Heizungstypen – von der Gas-Therme bis zur Wärmepumpe. Unser Service umfasst die jährliche Inspektion, Brennerwartung, Abgasmessung und auf Wunsch auch den hydraulischen Abgleich. Im Störungsfall sind wir innerhalb von 24 Stunden bei Ihnen – für Vertragskunden sogar am selben Tag.",
    workItems: [
      "Jährliche Heizungswartung",
      "Brennerwartung und Düsentausch",
      "Abgasmessung nach BImSchV",
      "Trinkwasser-Probenahme (Legionellen)",
      "Hydraulischer Abgleich",
      "Klimaanlagen-Wartung (F-Gase-Verordnung)",
      "Entstörung und Reparatur",
      "24/7 Notdienst für Vertragskunden",
    ],
    process: [
      {
        step: 1,
        title: "Wartungsvertrag abschließen",
        desc: "Wählen Sie Ihren Wartungsvertrag – Basis oder Premium mit Notdienst-Priorität.",
      },
      {
        step: 2,
        title: "Terminerinnerung",
        desc: "Wir erinnern Sie rechtzeitig an den nächsten Wartungstermin – Sie müssen an nichts denken.",
      },
      {
        step: 3,
        title: "Professionelle Wartung",
        desc: "Unser Techniker prüft, reinigt und optimiert Ihre Anlage nach Herstellervorgaben.",
      },
      {
        step: 4,
        title: "Wartungsprotokoll",
        desc: "Sie erhalten ein detailliertes Protokoll und Empfehlungen für die weitere Nutzung.",
      },
    ],
    category: "heizung",
  },
  {
    slug: "erneuerbare-energien",
    name: "Erneuerbare Energien",
    icon: "Sun",
    shortDesc:
      "Wärmepumpen, Solarthermie und Photovoltaik – wir beraten Sie zu Technik, Förderung und Amortisation.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=800&fit=crop",
    detailDesc:
      "Die Energiewende beginnt im eigenen Keller. Ob Wärmepumpe, Solarthermie oder Photovoltaik – wir beraten Sie ehrlich, welche Technologie für Ihr Gebäude Sinn macht und welche Förderung Sie erhalten. Als zertifizierte Fachpartner von Buderus und Viessmann kennen wir die neuesten Systeme und begleiten Sie vom Förderantrag bis zur Inbetriebnahme. Unser Ziel: Ihre Heizkosten senken und das Klima schützen – ohne Kompromisse beim Komfort.",
    workItems: [
      "Luft-Wasser-Wärmepumpen (Monoblock & Split)",
      "Sole-Wasser-Wärmepumpen (Erdwärme)",
      "Solarthermie-Anlagen (Heizung & Warmwasser)",
      "Photovoltaik-Wärmepumpen-Kopplung",
      "Pufferspeicher und Kombispeicher",
      "Hybridheizungen (WP + Gaskessel)",
      "Förderanträge BAFA, KfW, BEG",
      "Energieberatung nach GEG",
    ],
    process: [
      {
        step: 1,
        title: "Energieberatung & Fördercheck",
        desc: "Wir analysieren Ihr Gebäude und prüfen, welche Förderungen Sie erhalten (bis zu 70 % bei Wärmepumpen).",
      },
      {
        step: 2,
        title: "Systemplanung",
        desc: "Individuelle Planung mit Heizlastberechnung, Systemauslegung und Wirtschaftlichkeitsvergleich.",
      },
      {
        step: 3,
        title: "Förderantrag & Installation",
        desc: "Wir stellen den Förderantrag und installieren nach Bewilligung – alles aus einer Hand.",
      },
      {
        step: 4,
        title: "Monitoring & Optimierung",
        desc: "Nach der Inbetriebnahme überwachen wir die Effizienz und optimieren die Einstellungen.",
      },
    ],
    category: "heizung",
    relatedReferenceSlug: "waermepumpe-neubau",
  },
];

// ---------- Badsanierung Projects (8) ----------

export const badsanierungProjects: BadsanierungProject[] = [
  {
    slug: "wellness-oase-herborn",
    title: "Wellness-Oase mit freistehender Wanne",
    badgroesse: "gross",
    stil: "modern",
    location: "Herborn",
    year: "2024",
    beforeImage:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    description:
      "Komplettsanierung eines 18 m² Bads zur luxuriösen Wellness-Oase mit freistehender Badewanne, Regendusche und Fußbodenheizung.",
    highlights: [
      "18 m² Badezimmer",
      "Freistehende Mineralguss-Wanne",
      "Bodengleiche Regendusche",
      "Fußbodenheizung",
    ],
  },
  {
    slug: "familienbad-dillenburg",
    title: "Familienbad mit Doppelwaschtisch",
    badgroesse: "mittel",
    stil: "modern",
    location: "Dillenburg",
    year: "2024",
    beforeImage:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop",
    description:
      "Modernisierung eines 9 m² Familienbads mit Doppelwaschtisch, bodentiefer Dusche und kinderfreundlichen Armaturen.",
    highlights: [
      "9 m² Familienbad",
      "Grohe-Armaturen",
      "Doppelwaschtisch",
      "Rutschfeste Fliesen",
    ],
  },
  {
    slug: "gaeste-wc-haiger",
    title: "Modernes Gäste-WC",
    badgroesse: "klein",
    stil: "modern",
    location: "Haiger",
    year: "2024",
    beforeImage:
      "https://images.unsplash.com/photo-1585128792020-803d29415281?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop",
    description:
      "Kompaktes 3 m² Gäste-WC mit wandhängendem WC, Handwaschbecken und großformatigen Fliesen für optische Größe.",
    highlights: [
      "3 m² Gäste-WC",
      "Wandhängendes WC",
      "Großformatige Fliesen",
      "LED-Spiegelschrank",
    ],
  },
  {
    slug: "barrierefreies-bad-wetzlar",
    title: "Barrierefreies Komfortbad",
    badgroesse: "gross",
    stil: "barrierefrei",
    location: "Wetzlar",
    year: "2023",
    beforeImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    description:
      "Barrierefreier Umbau nach DIN 18040 mit bodengleicher Dusche, Haltegriffen und unterfahrbarem Waschtisch. KfW-gefördert.",
    highlights: [
      "14 m² barrierefrei",
      "DIN 18040 konform",
      "KfW-Förderung erhalten",
      "Sitzmöglichkeit in Dusche",
    ],
  },
  {
    slug: "klassik-bad-eschenburg",
    title: "Klassisches Landhausbad",
    badgroesse: "mittel",
    stil: "klassisch",
    location: "Eschenburg",
    year: "2023",
    beforeImage:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop",
    description:
      "Stilvolles 8 m² Bad im Landhausstil mit freistehender Klauenfuß-Badewanne, Naturstein-Fliesen und Messingarmaturen.",
    highlights: [
      "8 m² Landhausstil",
      "Klauenfuß-Badewanne",
      "Naturstein-Optik",
      "Messing-Armaturen",
    ],
  },
  {
    slug: "duschbad-breitscheid",
    title: "Kompaktes Duschbad mit Stauraum",
    badgroesse: "klein",
    stil: "modern",
    location: "Breitscheid",
    year: "2024",
    beforeImage:
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1617104678098-de229db51175?w=800&h=600&fit=crop",
    description:
      "Clevere Raumlösung für ein 4 m² Duschbad: Walk-in-Dusche, Spiegelschrank mit viel Stauraum und helle Großformat-Fliesen.",
    highlights: [
      "4 m² optimiert",
      "Walk-in-Dusche",
      "Maßgeschrankwerk",
      "Helle Großformat-Fliesen",
    ],
  },
  {
    slug: "seniorenbad-herborn",
    title: "Seniorengerechtes Bad",
    badgroesse: "mittel",
    stil: "barrierefrei",
    location: "Herborn",
    year: "2024",
    beforeImage:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
    description:
      "Umbau eines 10 m² Altbaubads zum seniorengerechten Komfortbad mit ebenerdiger Dusche, Sitzbank und Notrufknopf.",
    highlights: [
      "10 m² seniorengerecht",
      "Ebenerdige Dusche mit Sitz",
      "Anti-Rutsch-Beschichtung",
      "Notruf-System integriert",
    ],
  },
  {
    slug: "designbad-dillenburg",
    title: "Designerbad mit Naturstein",
    badgroesse: "gross",
    stil: "klassisch",
    location: "Dillenburg",
    year: "2023",
    beforeImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&h=600&fit=crop",
    description:
      "Edles 15 m² Designerbad mit echtem Naturstein, freistehender Wanne und bodenebener Dusche hinter Glaswand.",
    highlights: [
      "15 m² Naturstein-Bad",
      "Echter Travertin-Stein",
      "Unterputz-Armaturen",
      "Glastrennwand",
    ],
  },
];

// ---------- References (6) ----------

export const references: Reference[] = [
  {
    slug: "badsanierung-wellness",
    title: "Komplette Badsanierung – Wellness-Oase",
    location: "Herborn",
    year: "2024",
    shortDesc:
      "Kernsanierung eines 18 m² Badezimmers mit freistehender Badewanne, Regendusche, Fußbodenheizung und Handtuchheizkörper.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop",
    tags: ["Badsanierung", "Sanitär", "Premium"],
    highlights: [
      "18 m² Komplettsanierung",
      "Freistehende Badewanne",
      "Bodengleiche Regendusche",
      "Fußbodenheizung im Bad",
    ],
  },
  {
    slug: "waermepumpe-neubau",
    title: "Wärmepumpe mit Fußbodenheizung",
    location: "Dillenburg",
    year: "2024",
    shortDesc:
      "Neubau-Einfamilienhaus mit Luft-Wasser-Wärmepumpe von Buderus, komplett mit Fußbodenheizung auf 180 m².",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=500&fit=crop",
    tags: ["Heizung", "Wärmepumpe", "Neubau"],
    highlights: [
      "180 m² Fußbodenheizung",
      "Buderus Logatherm WLW186i",
      "Energieeffizienzklasse A++",
      "Smart-Home-Anbindung",
    ],
  },
  {
    slug: "klimaanlage-buero",
    title: "Gewerbliche Klimaanlage – Bürokomplex",
    location: "Wetzlar",
    year: "2023",
    shortDesc:
      "Multi-Split-Klimaanlage für ein Bürogebäude mit 12 Räumen auf 350 m². Zentrale Steuerung mit Wärmerückgewinnung.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
    tags: ["Klima", "Gewerbe", "Multi-Split"],
    highlights: [
      "350 m² klimatisiert",
      "12 Innengeräte",
      "Zentrale Gebäudeautomation",
      "Wärmerückgewinnung",
    ],
  },
  {
    slug: "heizung-altbau-sanierung",
    title: "Heizungstausch im Altbau – Gas auf Hybrid",
    location: "Haiger",
    year: "2024",
    shortDesc:
      "Umstellung einer 28 Jahre alten Ölheizung auf ein Hybridsystem (Wärmepumpe + Gas-Brennwert) mit 40 % BAFA-Förderung.",
    image:
      "https://images.unsplash.com/photo-1585128792020-803d29415281?w=800&h=500&fit=crop",
    tags: ["Heizung", "Hybrid", "Förderung"],
    highlights: [
      "40 % BAFA-Förderung",
      "Hybrid-System WP + Gas",
      "60 % CO2-Reduktion",
      "Amortisation in 8 Jahren",
    ],
  },
  {
    slug: "mehrfamilienhaus-sanitaer",
    title: "Sanitärsanierung Mehrfamilienhaus",
    location: "Eschenburg",
    year: "2023",
    shortDesc:
      "Komplette Erneuerung der Trinkwasser- und Abwasserleitungen in einem 8-Parteien-Haus inklusive 4 Badsanierungen.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop",
    tags: ["Sanitär", "Mehrfamilienhaus", "Großprojekt"],
    highlights: [
      "8 Wohneinheiten",
      "Komplett neue Steigleitungen",
      "4 Bäder saniert",
      "Legionellen-konform",
    ],
  },
  {
    slug: "solarthermie-einfamilienhaus",
    title: "Solarthermie-Nachrüstung",
    location: "Breitscheid",
    year: "2024",
    shortDesc:
      "Nachrüstung einer Solarthermie-Anlage zur Warmwasserbereitung und Heizungsunterstützung auf einem Einfamilienhaus.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=500&fit=crop",
    tags: ["Erneuerbare", "Solarthermie", "Nachrüstung"],
    highlights: [
      "10 m² Kollektorfläche",
      "500 l Pufferspeicher",
      "30 % weniger Gasverbrauch",
      "BAFA-gefördert",
    ],
  },
];

// ---------- Reviews (5) ----------

export const reviews: Review[] = [
  {
    name: "Thomas Becker",
    date: "vor 2 Wochen",
    stars: 5,
    text: "Unsere Badsanierung war ein Traum! Von der Beratung bis zur letzten Fuge alles perfekt. Herr Müller hat sogar an Details gedacht, die wir vergessen hatten. Absolute Empfehlung!",
  },
  {
    name: "Sabine Kraft",
    date: "vor 1 Monat",
    stars: 5,
    text: "Heizungsausfall an einem Sonntag im Januar – der Notdienst war innerhalb von einer Stunde da. Professionell, freundlich und die Reparatur war schnell erledigt. Danke!",
  },
  {
    name: "Michael Weber",
    date: "vor 2 Monaten",
    stars: 5,
    text: "Die Klimaanlage in unseren Büros läuft leise und effizient. Die Installation war sauber und das Team hat alles ordentlich hinterlassen. Gute Beratung zur Förderung gab es obendrauf.",
  },
  {
    name: "Andrea Schneider",
    date: "vor 3 Monaten",
    stars: 5,
    text: "Unsere alte Ölheizung wurde durch eine Wärmepumpe ersetzt. Herr Müller hat uns beim BAFA-Antrag geholfen – 40 % Förderung! Und die Heizkosten sind um die Hälfte gesunken.",
  },
  {
    name: "Klaus Hoffmann",
    date: "vor 4 Monaten",
    stars: 5,
    text: "Komplette Sanitärsanierung in unserem Altbau. Das Team hat in 3 Wochen alle Leitungen erneuert – sauber, pünktlich und im Budget. Absolut professionell von Anfang bis Ende.",
  },
];

// ---------- Team (7) ----------

export const team: TeamMember[] = [
  {
    name: "Thomas Müller",
    role: "Inhaber & SHK-Meister",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    since: "2001",
    specialty: "Heizungstechnik & Energieberatung",
  },
  {
    name: "Klaus Müller",
    role: "Gründer & Seniorchef",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    since: "2001",
    specialty: "Sanitärtechnik",
  },
  {
    name: "Stefan Braun",
    role: "Obermonteur Heizung",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    since: "2005",
    specialty: "Wärmepumpen & Hybridtechnik",
  },
  {
    name: "Lisa Neumann",
    role: "Kundenberatung & Büro",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    since: "2010",
    specialty: "Förderanträge & Terminplanung",
  },
  {
    name: "Marco Wagner",
    role: "Geselle Sanitär",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    since: "2012",
    specialty: "Badsanierung & Rohrleitungsbau",
  },
  {
    name: "Fatih Yilmaz",
    role: "Geselle Klima",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
    since: "2018",
    specialty: "Klimatechnik & Lüftung",
  },
  {
    name: "Tim Müller",
    role: "Auszubildender (3. Lehrjahr)",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    since: "2022",
  },
];

// ---------- Timeline (7) ----------

export const timeline: TimelineEvent[] = [
  {
    year: "2001",
    title: "Gründung",
    desc: "Klaus Müller gründet den Betrieb als Ein-Mann-Unternehmen in Haiger. Fokus: Sanitärinstallation und Heizungswartung.",
  },
  {
    year: "2005",
    title: "Erster Geselle",
    desc: "Stefan Braun verstärkt das Team. Der Bereich Heizungsbau wird ausgebaut, erste Buderus-Partnerschaft.",
  },
  {
    year: "2010",
    title: "Meisterprüfung Thomas",
    desc: "Thomas Müller legt seine Meisterprüfung ab und steigt in den Betrieb ein. Beginn der Wärmepumpen-Spezialisierung.",
  },
  {
    year: "2014",
    title: "Viessmann-Partnerschaft",
    desc: "Offizielle Partnerschaft mit Viessmann. Das Team wächst auf 8 Mitarbeiter, Umzug in größere Räumlichkeiten.",
  },
  {
    year: "2018",
    title: "Klimatechnik-Erweiterung",
    desc: "Neuer Geschäftsbereich Klimaanlagen mit Daikin-Partnerschaft. Fatih Yilmaz wird Klimatechnik-Spezialist.",
  },
  {
    year: "2022",
    title: "Generationswechsel",
    desc: "Thomas Müller übernimmt die Geschäftsführung. Klaus bleibt als Seniorchef beratend tätig. Team: 12 Fachkräfte.",
  },
  {
    year: "2024",
    title: "Über 1.200 Kunden",
    desc: "4.9 Google-Bewertung, über 1.200 zufriedene Kunden. Schwerpunkt: Heizungsmodernisierung und GEG-Beratung.",
  },
];

// ---------- FAQ Items (10) ----------

export const faqItems: FAQItem[] = [
  {
    question: "Was kostet eine Badsanierung?",
    answer:
      "Die Kosten hängen stark von Größe, Ausstattung und Aufwand ab. Als grobe Orientierung: Ein kleines Gäste-WC ab ca. 5.000 €, ein mittleres Familienbad 10.000–18.000 €, ein großes Wellness-Bad 18.000–35.000 €. Wir erstellen Ihnen ein kostenloses Festpreisangebot nach der Besichtigung – ohne versteckte Kosten.",
  },
  {
    question: "Muss ich meine Gasheizung wegen dem GEG austauschen?",
    answer:
      "Nicht sofort. Das Gebäudeenergiegesetz (GEG) verlangt ab 2024 für neue Heizungen einen Anteil von 65 % erneuerbarer Energien. Bestehende Gasheizungen dürfen weiterlaufen und repariert werden. Erst bei einem Austausch greift die Regel. Allerdings gibt es aktuell hohe Förderungen (bis 70 %) für den freiwilligen Umstieg. Nutzen Sie unseren HeizungsCheck für eine persönliche Empfehlung.",
  },
  {
    question: "Was kostet eine Wärmepumpe mit Einbau?",
    answer:
      "Eine Luft-Wasser-Wärmepumpe kostet inkl. Installation ca. 18.000–28.000 € (Einfamilienhaus). Davon übernimmt die BAFA-Förderung 30–70 %, je nach Einzelfall. Nach Förderung landen Sie typischerweise bei 8.000–18.000 €. Die jährlichen Heizkosten sinken meist um 30–50 % gegenüber Gas. Nutzen Sie unseren HeizungsCheck für eine individuelle Kalkulation.",
  },
  {
    question: "Welche Förderung gibt es für eine neue Heizung?",
    answer:
      "Die wichtigsten Programme: BAFA-Förderung (BEG EM) mit 30 % Grundförderung für Wärmepumpen, +20 % Klimageschwindigkeitsbonus beim Tausch alter Heizungen, +5 % für natürliche Kältemittel. KfW-Kredit 358/359 mit bis zu 120.000 € zinsgünstigem Darlehen. Wir prüfen Ihre individuelle Fördersituation kostenlos im Rahmen unserer Beratung.",
  },
  {
    question: "Funktioniert eine Wärmepumpe im Altbau?",
    answer:
      "In vielen Fällen ja! Entscheidend sind die Vorlauftemperatur (ideal unter 55°C) und der Dämmstandard. Auch ohne Fußbodenheizung gibt es Lösungen: Niedertemperatur-Heizkörper, Hybridheizungen (WP + Gas) oder eine teilweise Nachrüstung der Fußbodenheizung. Wir prüfen die Machbarkeit bei Ihnen vor Ort – ehrlich und ohne Verkaufsdruck.",
  },
  {
    question: "Wie lange dauert eine Badsanierung?",
    answer:
      "Ein kleines Bad (Gäste-WC) dauert ca. 1–2 Wochen, ein mittleres Familienbad 2–3 Wochen, ein großes Wellness-Bad 3–4 Wochen. Wir koordinieren alle Gewerke so, dass die Bauzeit minimal ist. Auf Wunsch stellen wir ein mobiles WC während der Bauphase bereit.",
  },
  {
    question: "Was kostet der Notdienst?",
    answer:
      "Anfahrt und Diagnose kosten pauschal 89 € (inkl. MwSt.) im Umkreis von 20 km. Reparaturarbeiten werden nach Aufwand berechnet – Sie erhalten vor Beginn einen Kostenvoranschlag. Für Wartungsvertragskunden ist die Anfahrt kostenlos und sie haben Priorität.",
  },
  {
    question: "Wie oft muss ich meine Heizung warten lassen?",
    answer:
      "Einmal pro Jahr, idealerweise vor der Heizperiode (September/Oktober). Eine regelmäßige Wartung spart bis zu 15 % Energiekosten, verlängert die Lebensdauer der Anlage und ist bei vielen Herstellern Voraussetzung für die Garantie. Wir erinnern unsere Vertragskunden automatisch.",
  },
  {
    question: "Was tun bei Rohrbruch?",
    answer:
      "Sofort den Hauptwasserhahn zudrehen (meist im Keller). Falls Wasser in die Nähe von Steckdosen oder Elektrogeräten gelangt ist, Sicherung ausschalten. Dann rufen Sie uns an – wir sind im Notdienst 24/7 erreichbar und meist innerhalb von 60 Minuten bei Ihnen.",
  },
  {
    question: "Lohnt sich eine Klimaanlage in Deutschland?",
    answer:
      "Immer mehr, ja. Die Sommer werden heißer – 2024 hatten wir über 30 Hitzetage in Mittelhessen. Moderne Split-Klimaanlagen kosten ab ca. 2.500 € (inkl. Montage) für einen Raum und verbrauchen bei effizienter Nutzung ca. 100–200 €/Jahr Strom. Viele Geräte können im Winter auch heizen und werden dann als Wärmepumpe gefördert.",
  },
];

// ---------- Certificates ----------

export const certificates: Certificate[] = [
  {
    name: "Meisterbetrieb",
    desc: "Handwerkskammer Wiesbaden",
  },
  {
    name: "Buderus Systempartner",
    desc: "Zertifizierter Heizungs-Fachpartner",
    prominent: true,
  },
  {
    name: "Viessmann Fachpartner",
    desc: "Zertifizierter Wärmepumpen-Partner",
    prominent: true,
  },
  {
    name: "DVGW-zertifiziert",
    desc: "Gas- und Wasserinstallation",
  },
  {
    name: "Daikin D1 Partner",
    desc: "Zertifizierter Klimatechnik-Partner",
  },
  {
    name: "Innungsbetrieb",
    desc: "SHK-Innung Lahn-Dill",
  },
];

// ---------- Heating Systems (für HeizungsCheck) ----------

export const heatingSystems: HeatingSystem[] = [
  {
    id: "gas-brennwert",
    name: "Gas-Brennwert",
    investMin: 8000,
    investMax: 14000,
    subsidyPercent: 0,
    annualCostMin: 1800,
    annualCostMax: 2800,
    co2Reduction: 15,
    suitabilityFactors: {
      newBuilding: 2,
      oldBuilding: 4,
      underfloorHeating: 3,
      radiators: 5,
      lowInvest: 5,
      eco: 1,
      independence: 1,
      minimalWork: 5,
    },
  },
  {
    id: "luft-wasser-wp",
    name: "Luft-Wasser-Wärmepumpe",
    investMin: 18000,
    investMax: 28000,
    subsidyPercent: 40,
    annualCostMin: 800,
    annualCostMax: 1400,
    co2Reduction: 75,
    suitabilityFactors: {
      newBuilding: 5,
      oldBuilding: 3,
      underfloorHeating: 5,
      radiators: 2,
      lowInvest: 2,
      eco: 5,
      independence: 4,
      minimalWork: 3,
    },
  },
  {
    id: "erd-wp",
    name: "Sole-Wasser-Wärmepumpe (Erdwärme)",
    investMin: 25000,
    investMax: 38000,
    subsidyPercent: 45,
    annualCostMin: 600,
    annualCostMax: 1000,
    co2Reduction: 85,
    suitabilityFactors: {
      newBuilding: 5,
      oldBuilding: 2,
      underfloorHeating: 5,
      radiators: 2,
      lowInvest: 1,
      eco: 5,
      independence: 5,
      minimalWork: 1,
    },
  },
  {
    id: "pellet",
    name: "Pelletheizung",
    investMin: 20000,
    investMax: 30000,
    subsidyPercent: 30,
    annualCostMin: 1000,
    annualCostMax: 1600,
    co2Reduction: 90,
    suitabilityFactors: {
      newBuilding: 3,
      oldBuilding: 4,
      underfloorHeating: 4,
      radiators: 5,
      lowInvest: 2,
      eco: 5,
      independence: 4,
      minimalWork: 2,
    },
  },
  {
    id: "hybrid",
    name: "Hybrid (Wärmepumpe + Gas)",
    investMin: 22000,
    investMax: 32000,
    subsidyPercent: 35,
    annualCostMin: 1000,
    annualCostMax: 1800,
    co2Reduction: 55,
    suitabilityFactors: {
      newBuilding: 3,
      oldBuilding: 5,
      underfloorHeating: 4,
      radiators: 4,
      lowInvest: 2,
      eco: 3,
      independence: 3,
      minimalWork: 3,
    },
  },
];

// ---------- HeizungsCheck Recommendation Engine ----------

export function getHeatingRecommendation(
  answers: HeizungsCheckAnswers
): HeatingRecommendation[] {
  const area = answers.livingArea ?? 120;
  const areaFactor = area / 120; // normalize to 120m²

  // Calculate suitability scores for each system
  const scored = heatingSystems.map((system) => {
    let score = 0;
    let reasons: string[] = [];

    // Building year factor
    if (
      answers.buildingYear === "nach-2010" ||
      answers.buildingYear === "1995-2010"
    ) {
      score += system.suitabilityFactors.newBuilding;
      if (system.suitabilityFactors.newBuilding >= 4)
        reasons.push("Gut geeignet für neuere Gebäude");
    } else {
      score += system.suitabilityFactors.oldBuilding;
      if (system.suitabilityFactors.oldBuilding >= 4)
        reasons.push("Bewährt im Altbau");
    }

    // Underfloor heating factor
    if (answers.underfloorHeating === "ja") {
      score += system.suitabilityFactors.underfloorHeating;
      if (system.suitabilityFactors.underfloorHeating >= 4)
        reasons.push("Optimal mit Fußbodenheizung");
    } else if (answers.underfloorHeating === "nein") {
      score += system.suitabilityFactors.radiators;
      if (system.suitabilityFactors.radiators >= 4)
        reasons.push("Funktioniert gut mit Heizkörpern");
    } else {
      score +=
        (system.suitabilityFactors.underfloorHeating +
          system.suitabilityFactors.radiators) /
        2;
    }

    // Priority weighting
    const prios = answers.priorities ?? [];
    if (prios.includes("betriebskosten")) {
      score += system.annualCostMax < 1500 ? 3 : 1;
      if (system.annualCostMax < 1500)
        reasons.push("Niedrige Betriebskosten");
    }
    if (prios.includes("umwelt")) {
      score += system.suitabilityFactors.eco;
      if (system.co2Reduction >= 70)
        reasons.push(`${system.co2Reduction} % CO₂-Reduktion`);
    }
    if (prios.includes("investition")) {
      score += system.suitabilityFactors.lowInvest;
      if (system.investMax < 16000)
        reasons.push("Vergleichsweise günstige Anschaffung");
    }
    if (prios.includes("unabhaengigkeit")) {
      score += system.suitabilityFactors.independence;
      if (system.suitabilityFactors.independence >= 4)
        reasons.push("Unabhängig von fossilen Brennstoffen");
    }
    if (prios.includes("wenig-umbau")) {
      score += system.suitabilityFactors.minimalWork;
      if (system.suitabilityFactors.minimalWork >= 4)
        reasons.push("Einfacher Austausch möglich");
    }

    // Penalize gas in new buildings (GEG)
    if (
      system.id === "gas-brennwert" &&
      answers.buildingYear === "nach-2010"
    ) {
      score -= 3;
      reasons.push("Hinweis: Ab 2024 müssen neue Heizungen 65 % erneuerbar sein");
    }

    // Boost WP if underfloor heating exists
    if (
      (system.id === "luft-wasser-wp" || system.id === "erd-wp") &&
      answers.underfloorHeating === "ja"
    ) {
      score += 2;
    }

    // Calculate costs based on area
    const investMin = Math.round(system.investMin * areaFactor);
    const investMax = Math.round(system.investMax * areaFactor);
    const subsidyMin = Math.round(investMin * (system.subsidyPercent / 100));
    const subsidyMax = Math.round(investMax * (system.subsidyPercent / 100));
    const annualMin = Math.round(system.annualCostMin * areaFactor);
    const annualMax = Math.round(system.annualCostMax * areaFactor);

    const recommendation: HeatingRecommendation = {
      system,
      suitabilityScore: Math.min(5, Math.max(1, Math.round(score / 3))),
      investRange: `${(investMin / 1000).toFixed(0)}.000 – ${(investMax / 1000).toFixed(0)}.000 €`,
      subsidyPercent: system.subsidyPercent,
      subsidyAmount:
        system.subsidyPercent > 0
          ? `${(subsidyMin / 1000).toFixed(0)}.000 – ${(subsidyMax / 1000).toFixed(0)}.000 €`
          : "Keine Förderung",
      costAfterSubsidy:
        system.subsidyPercent > 0
          ? `${((investMin - subsidyMin) / 1000).toFixed(0)}.000 – ${((investMax - subsidyMax) / 1000).toFixed(0)}.000 €`
          : `${(investMin / 1000).toFixed(0)}.000 – ${(investMax / 1000).toFixed(0)}.000 €`,
      annualCost: `${annualMin.toLocaleString("de-DE")} – ${annualMax.toLocaleString("de-DE")} €/Jahr`,
      co2Savings: `bis zu ${system.co2Reduction} %`,
      reasoning: reasons.slice(0, 2).join(". ") + (reasons.length > 2 ? "." : "."),
    };

    return { rec: recommendation, rawScore: score };
  });

  // Sort by score descending, return top 3
  scored.sort((a, b) => b.rawScore - a.rawScore);
  return scored.slice(0, 3).map((s) => s.rec);
}
