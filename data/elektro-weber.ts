// ============================================================
// Elektro Weber – Zentrale Datenquelle für alle Seiten
// ============================================================

// ---------- Types ----------

export type Service = {
  slug: string;
  name: string;
  icon: string;
  shortDesc: string;
  image: string;
  heroImage: string;
  detailDesc: string;
  workItems: string[];
  process: { step: number; title: string; desc: string }[];
  relatedReferenceSlug?: string;
};

export type Reference = {
  slug: string;
  title: string;
  location: string;
  year: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
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

export type CheckerNode = {
  id: string;
  type: "question" | "result";
  text: string;
  subtext?: string;
  severity?: "info" | "warning" | "danger";
  options?: { label: string; nextId: string }[];
};

// ---------- Company Info ----------

export const companyInfo = {
  name: "Elektro Weber",
  phone: "0800 123 456",
  phoneFull: "+49800123456",
  email: "info@elektro-weber.de",
  address: "Industriestraße 12, 35683 Dillenburg",
  region: "Mittelhessen",
  hours: [
    { day: "Montag – Freitag", time: "07:30 – 17:00 Uhr" },
    { day: "Samstag", time: "09:00 – 13:00 Uhr" },
    { day: "Notdienst", time: "24/7 erreichbar" },
  ],
  areas: [
    "Dillenburg",
    "Herborn",
    "Wetzlar",
    "Haiger",
    "Eschenburg",
    "Breitscheid",
    "Driedorf",
    "Sinn",
  ],
};

// ---------- Services ----------

export const services: Service[] = [
  {
    slug: "elektroinstallation",
    name: "Elektroinstallationen",
    icon: "Zap",
    shortDesc:
      "Komplette Elektroinstallationen für Neubau, Altbausanierung und Renovierung – fachgerecht und nach aktuellen Normen.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&h=800&fit=crop",
    detailDesc:
      "Ob Neubau oder Komplettsanierung – wir planen und installieren Ihre gesamte Elektroanlage. Von der Verteilung über Schalter und Steckdosen bis zur Beleuchtung. Dabei achten wir auf zukunftssichere Lösungen: ausreichend Leerrohre, moderne Schalterprogramme und eine saubere Dokumentation, die auch in 20 Jahren noch nachvollziehbar ist.",
    workItems: [
      "Neuinstallation kompletter Elektroanlagen",
      "Altbausanierung und Nachrüstung",
      "Zählerschrank und Unterverteilungen",
      "Schalter, Steckdosen und Beleuchtung",
      "Stark- und Schwachstrominstallation",
      "E-Check und Prüfprotokoll nach DGUV V3",
      "Wallbox-Installation für E-Autos",
      "Außenbeleuchtung und Gartenelektrik",
    ],
    process: [
      {
        step: 1,
        title: "Aufmaß & Planung",
        desc: "Wir besichtigen Ihr Objekt, nehmen Maß und erstellen einen detaillierten Installationsplan.",
      },
      {
        step: 2,
        title: "Angebot & Beratung",
        desc: "Sie erhalten ein transparentes Festpreisangebot – inklusive Material, Arbeit und Entsorgung.",
      },
      {
        step: 3,
        title: "Fachgerechte Installation",
        desc: "Unser Team installiert sauber, termingerecht und mit Rücksicht auf bewohnte Räume.",
      },
      {
        step: 4,
        title: "Prüfung & Abnahme",
        desc: "Nach Abschluss prüfen und dokumentieren wir alles – Sie erhalten ein vollständiges Prüfprotokoll.",
      },
    ],
    relatedReferenceSlug: "komplettsanierung-altbau",
  },
  {
    slug: "smart-home",
    name: "Smart Home",
    icon: "Home",
    shortDesc:
      "Intelligente Haussteuerung für Licht, Rollläden, Heizung und Sicherheit – komfortabel per App oder Sprache.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&h=800&fit=crop",
    detailDesc:
      "Smart Home bedeutet nicht nur Spielerei – es spart Energie, erhöht den Komfort und steigert die Sicherheit Ihres Zuhauses. Wir setzen auf bewährte KNX-Technik und beraten Sie herstellerunabhängig. Ob nachträgliche Umrüstung oder Neubauplanung: Wir finden die Lösung, die zu Ihrem Alltag passt.",
    workItems: [
      "KNX-Planung und Programmierung",
      "Lichtsteuerung mit Szenen und Dimmer",
      "Rollladensteuerung (zeitgesteuert & sensorbasiert)",
      "Heizungssteuerung und Einzelraumregelung",
      "Türkommunikation und Video-Gegensprechanlage",
      "Sprachsteuerung (Alexa, Google, Siri)",
      "Energiemanagement und Verbrauchsmonitoring",
      "Nachrüstung per Funk (für Bestandsgebäude)",
    ],
    process: [
      {
        step: 1,
        title: "Bedarfsanalyse",
        desc: "Welche Funktionen nutzen Sie wirklich? Wir klären Ihre Wünsche in einem persönlichen Gespräch.",
      },
      {
        step: 2,
        title: "Systemplanung",
        desc: "Wir planen das passende System – KNX für Neubau, Funkbasiert für Nachrüstung.",
      },
      {
        step: 3,
        title: "Installation & Programmierung",
        desc: "Fachgerechte Installation und individuelle Programmierung aller Szenen und Automatiken.",
      },
      {
        step: 4,
        title: "Einweisung",
        desc: "Sie erhalten eine persönliche Einweisung – per App und vor Ort.",
      },
    ],
    relatedReferenceSlug: "smart-home-villa",
  },
  {
    slug: "sicherheitstechnik",
    name: "Sicherheitstechnik",
    icon: "Shield",
    shortDesc:
      "Alarmanlagen, Brandmeldetechnik, Videoüberwachung und Zutrittskontrolle – für Ihr sicheres Zuhause.",
    image:
      "https://images.unsplash.com/photo-1558002038-876be68e6e8c?w=800&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1558002038-876be68e6e8c?w=1920&h=800&fit=crop",
    detailDesc:
      "Sicherheit ist Vertrauenssache. Als zertifizierter Errichter planen und installieren wir maßgeschneiderte Sicherheitslösungen – von der einfachen Alarmanlage bis zum umfassenden Sicherheitskonzept für Gewerbe. Alle Systeme werden nach VDE und DIN-Normen errichtet und regelmäßig gewartet.",
    workItems: [
      "Einbruchmeldeanlage (EMA) nach DIN VDE 0833",
      "Brandmeldetechnik und Rauchmelder",
      "Videoüberwachung (IP-Kameras, NVR)",
      "Zutrittskontrollsysteme",
      "Notbeleuchtung und Fluchtwegsysteme",
      "Gefahrenmeldeanlage für Gewerbe",
      "Wartung und regelmäßige Inspektion",
      "Nachrüstung bestehender Anlagen",
    ],
    process: [
      {
        step: 1,
        title: "Schwachstellenanalyse",
        desc: "Wir begutachten Ihr Objekt und identifizieren Sicherheitslücken.",
      },
      {
        step: 2,
        title: "Sicherheitskonzept",
        desc: "Individuelles Konzept mit passender Technik – abgestimmt auf Ihr Budget.",
      },
      {
        step: 3,
        title: "Installation",
        desc: "Diskrete, fachgerechte Montage aller Komponenten.",
      },
      {
        step: 4,
        title: "Wartung & Service",
        desc: "Regelmäßige Inspektion und 24/7-Notfall-Support.",
      },
    ],
    relatedReferenceSlug: "sicherheit-arztpraxis",
  },
  {
    slug: "photovoltaik",
    name: "Photovoltaik",
    icon: "Lightbulb",
    shortDesc:
      "Solaranlagen mit Speicher und Wallbox – unabhängiger werden und Stromkosten senken.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=800&fit=crop",
    detailDesc:
      "Strom vom eigenen Dach – das lohnt sich mehr denn je. Wir planen, installieren und warten Ihre Photovoltaikanlage inklusive Batteriespeicher und Wallbox. Als SMA-Fachpartner setzen wir auf bewährte Technik mit langer Lebensdauer. Von der Wirtschaftlichkeitsberechnung bis zur Anmeldung beim Netzbetreiber: Alles aus einer Hand.",
    workItems: [
      "PV-Anlagen bis 30 kWp (Privat und Gewerbe)",
      "Batteriespeicher (Hausbatterie)",
      "Wallbox-Integration für E-Auto",
      "Eigenverbrauchsoptimierung",
      "Wirtschaftlichkeitsberechnung",
      "Anmeldung beim Netzbetreiber",
      "Wartung, Monitoring und Reinigung",
      "Erweiterung bestehender Anlagen",
    ],
    process: [
      {
        step: 1,
        title: "Dachcheck & Berechnung",
        desc: "Wir prüfen Dachfläche, Ausrichtung und Verschattung – und berechnen den erwarteten Ertrag.",
      },
      {
        step: 2,
        title: "Angebot mit Wirtschaftlichkeit",
        desc: "Transparentes Angebot inklusive Amortisationsrechnung und Fördermittelberatung.",
      },
      {
        step: 3,
        title: "Montage in 2–3 Tagen",
        desc: "Die meisten Anlagen sind in wenigen Tagen installiert und betriebsbereit.",
      },
      {
        step: 4,
        title: "Anmeldung & Monitoring",
        desc: "Wir übernehmen alle Formalitäten und richten Ihr Monitoring-System ein.",
      },
    ],
    relatedReferenceSlug: "pv-anlage-dillenburg",
  },
  {
    slug: "gewerbe-industrie",
    name: "Gewerbe & Industrie",
    icon: "Building2",
    shortDesc:
      "Gewerbliche Elektrotechnik: Bürogebäude, Produktionshallen, Ladenlokale – termingerecht und normkonform.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=800&fit=crop",
    detailDesc:
      "Gewerbe und Industrie stellen besondere Anforderungen an die Elektrotechnik: Terminkoordination mit anderen Gewerken, Einhaltung strenger Normen und hohe Ausfallsicherheit. Wir sind Ihr verlässlicher Partner für Projekte jeder Größe – vom Ladenbau bis zur Produktionshalle.",
    workItems: [
      "Büro- und Gewerbeinstallationen",
      "Beleuchtungsplanung (Arbeitsplatz, Halle, Verkaufsraum)",
      "Starkstrominstallation (Drehstrom)",
      "Netzwerkverkabelung (CAT7, Glasfaser)",
      "USV-Anlagen (unterbrechungsfreie Stromversorgung)",
      "Maschinenanschluss und Einrichtung",
      "DGUV-V3-Prüfung für Betriebsmittel",
      "Energiemanagement und Lastoptimierung",
    ],
    process: [
      {
        step: 1,
        title: "Projektbesprechung",
        desc: "Anforderungen, Zeitplan und Schnittstellen mit anderen Gewerken klären.",
      },
      {
        step: 2,
        title: "Planung & Koordination",
        desc: "Detaillierte Ausführungsplanung in Abstimmung mit Architekt und Bauleitung.",
      },
      {
        step: 3,
        title: "Termingerechte Ausführung",
        desc: "Zuverlässige Umsetzung – auch bei engen Zeitplänen und laufendem Betrieb.",
      },
      {
        step: 4,
        title: "Prüfung & Dokumentation",
        desc: "Lückenlose Dokumentation und Prüfprotokolle für Ihre Unterlagen.",
      },
    ],
    relatedReferenceSlug: "buerogebaeude-wetzlar",
  },
];

// ---------- References ----------

export const references: Reference[] = [
  {
    slug: "komplettsanierung-altbau",
    title: "Komplettsanierung Altbau",
    location: "Herborn",
    year: "2024",
    shortDesc:
      "Komplette Erneuerung der Elektroinstallation in einem denkmalgeschützten Fachwerkhaus.",
    longDesc:
      "Ein denkmalgeschütztes Fachwerkhaus aus dem 19. Jahrhundert wurde kernsaniert. Wir haben die gesamte Elektroinstallation erneuert – von der Zähleranlage bis zum letzten Lichtschalter. Besondere Herausforderung: die historische Bausubstanz erhalten und gleichzeitig modernste Technik einbauen. 142 Steckdosen, 38 Lichtkreise, Smart-Home-Vorbereitung und ein neuer Zählerschrank nach aktuellem TAB-Standard.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
    beforeImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    tags: ["Wohnbau", "Sanierung", "E-Check"],
    highlights: [
      "142 Steckdosen installiert",
      "38 Lichtkreise",
      "Denkmalschutz-konform",
      "KNX-Vorbereitung",
    ],
  },
  {
    slug: "pv-anlage-dillenburg",
    title: "PV-Anlage 15 kWp mit Speicher",
    location: "Dillenburg",
    year: "2024",
    shortDesc:
      "Solaranlage mit 15 kWp Leistung, 10 kWh Speicher und Wallbox-Integration.",
    longDesc:
      "Auf einem Einfamilienhaus in Dillenburg haben wir eine 15 kWp Photovoltaikanlage mit 10 kWh Batteriespeicher installiert. Dazu eine 11 kW Wallbox für das Elektroauto der Familie. Dank Eigenverbrauchsoptimierung deckt die Anlage über 70% des Strombedarfs. Die Amortisation ist in unter 9 Jahren erreicht.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop",
    tags: ["Photovoltaik", "Speicher", "Wallbox"],
    highlights: [
      "15 kWp Leistung",
      "10 kWh Speicher",
      "70% Autarkie",
      "11 kW Wallbox",
    ],
  },
  {
    slug: "buerogebaeude-wetzlar",
    title: "Bürogebäude Neubau",
    location: "Wetzlar",
    year: "2023",
    shortDesc:
      "Elektroplanung und -installation für ein 3-stöckiges Bürogebäude mit 1.200 m\u00B2.",
    longDesc:
      "Für einen Gewerbeneubau in Wetzlar haben wir die komplette Elektrotechnik geplant und ausgeführt: von der Starkstromversorgung über strukturierte Netzwerkverkabelung (CAT7) bis zur energieeffizienten LED-Beleuchtung. Das Projekt umfasste 3 Etagen, 24 Büros und einen Serverraum mit USV-Anlage.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    tags: ["Gewerbe", "Neubau", "Netzwerk"],
    highlights: [
      "1.200 m\u00B2 Nutzfläche",
      "24 Büroeinheiten",
      "Strukturierte Verkabelung",
      "USV-Anlage",
    ],
  },
  {
    slug: "smart-home-villa",
    title: "Smart Home Einfamilienhaus",
    location: "Herborn",
    year: "2024",
    shortDesc:
      "Komplette KNX-Steuerung für Licht, Beschattung, Heizung und Multimedia.",
    longDesc:
      "In einem Neubau-Einfamilienhaus haben wir ein umfassendes KNX-System installiert: 48 Lichtszenen, 16 Rollläden mit Sonnenstandsautomatik, Einzelraumregelung der Fußbodenheizung und ein Multiroom-Audio-System. Alles steuerbar per Wandtaster, App oder Sprachbefehl.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
    tags: ["Smart Home", "KNX", "Neubau"],
    highlights: [
      "48 Lichtszenen",
      "16 motorisierte Rollläden",
      "Sprachsteuerung",
      "Multiroom-Audio",
    ],
  },
  {
    slug: "sicherheit-arztpraxis",
    title: "Sicherheitstechnik Arztpraxis",
    location: "Wetzlar",
    year: "2023",
    shortDesc:
      "Zutrittskontrolle, Alarmanlage und Videoüberwachung für eine Gemeinschaftspraxis.",
    longDesc:
      "Für eine Gemeinschaftspraxis in Wetzlar haben wir ein umfassendes Sicherheitskonzept umgesetzt: Zutrittskontrolle mit Transponder, Einbruchmeldeanlage mit stiller Alarmierung, Videoüberwachung im Außenbereich und ein Brandmeldesystem. Alles normkonform nach DIN VDE 0833.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    tags: ["Sicherheit", "Gewerbe", "Alarmanlage"],
    highlights: [
      "Zutrittskontrolle",
      "Stille Alarmierung",
      "8 IP-Kameras",
      "DIN VDE 0833",
    ],
  },
  {
    slug: "ladestation-tiefgarage",
    title: "E-Ladesäulen Tiefgarage",
    location: "Dillenburg",
    year: "2024",
    shortDesc:
      "12 Ladepunkte mit Lastmanagement für eine Wohnanlage mit Tiefgarage.",
    longDesc:
      "In einer Wohnanlage mit 48 Stellplätzen haben wir 12 Ladepunkte mit dynamischem Lastmanagement installiert. Das System verteilt die verfügbare Leistung intelligent auf alle ladenden Fahrzeuge und vermeidet so teure Netzaufrüstungen. Vorbereitung für 36 weitere Ladepunkte inklusive.",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop",
    tags: ["E-Mobilität", "Wallbox", "Gewerbe"],
    highlights: [
      "12 Ladepunkte",
      "Dynamisches Lastmanagement",
      "Erweiterbar auf 48",
      "Abrechnungssystem",
    ],
  },
];

// ---------- Reviews ----------

export const reviews: Review[] = [
  {
    name: "Familie Schneider",
    date: "Dezember 2024",
    stars: 5,
    text: "Herr Weber und sein Team haben unsere komplette Elektrik im Altbau erneuert. Saubere Arbeit, immer pünktlich und das Ergebnis ist erstklassig. Absolute Empfehlung!",
  },
  {
    name: "Dr. Martina Keller",
    date: "November 2024",
    stars: 5,
    text: "Professionelle Umsetzung unserer Praxis-Sicherheitstechnik. Von der Beratung bis zur Wartung – alles aus einer Hand. Fühlen uns bestens aufgehoben.",
  },
  {
    name: "Thomas Brandt",
    date: "Oktober 2024",
    stars: 5,
    text: "Unsere PV-Anlage läuft seit 6 Monaten und die Erträge übertreffen die Prognose. Schnelle Installation, alles sauber erklärt. Top Service!",
  },
];

// ---------- Team ----------

export const team: TeamMember[] = [
  {
    name: "Michael Weber",
    role: "Geschäftsführer & Elektromeister",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    since: "2009",
  },
  {
    name: "Sarah Fischer",
    role: "Büroleiterin & Kundenbetreuung",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
    since: "2012",
  },
  {
    name: "Markus Hoffmann",
    role: "Geselle & Smart-Home-Spezialist",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    since: "2015",
  },
  {
    name: "Tim Schäfer",
    role: "Geselle & PV-Spezialist",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    since: "2018",
  },
  {
    name: "Lena Müller",
    role: "Auszubildende (3. Lehrjahr)",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    since: "2022",
  },
];

// ---------- Timeline ----------

export const timeline: TimelineEvent[] = [
  {
    year: "2009",
    title: "Gründung",
    desc: "Michael Weber gründet den Betrieb nach bestandener Meisterprüfung in Dillenburg.",
  },
  {
    year: "2012",
    title: "Erster Mitarbeiter",
    desc: "Sarah Fischer verstärkt das Team. Der erste Lehrling wird eingestellt.",
  },
  {
    year: "2015",
    title: "Smart-Home-Spezialisierung",
    desc: "Zertifizierung als KNX-Partner. Markus Hoffmann wird Smart-Home-Spezialist.",
  },
  {
    year: "2018",
    title: "Photovoltaik-Offensive",
    desc: "Partnerschaft mit SMA. Tim Schäfer erweitert das Team als PV-Spezialist.",
  },
  {
    year: "2021",
    title: "Betriebserweiterung",
    desc: "Umzug in größere Räumlichkeiten. Fuhrpark wächst auf 5 Fahrzeuge.",
  },
  {
    year: "2024",
    title: "15-jähriges Jubiläum",
    desc: "Über 500 abgeschlossene Projekte. 5 Mitarbeiter. Eine Vision: Handwerk mit Herz.",
  },
];

// ---------- FAQ ----------

export const faqItems: FAQItem[] = [
  {
    question: "Was kostet eine komplette Elektroinstallation?",
    answer:
      "Die Kosten hängen von der Größe des Objekts und dem Umfang ab. Für ein typisches Einfamilienhaus rechnen Sie mit 15.000–25.000 \u20AC (ohne Smart Home). Bei einer Altbausanierung können zusätzliche Kosten für Stemm- und Verputzarbeiten anfallen. Wir erstellen Ihnen gerne ein unverbindliches Festpreisangebot.",
  },
  {
    question: "Wie oft muss ein E-Check durchgeführt werden?",
    answer:
      "Für Privatwohnungen empfehlen wir alle 4 Jahre einen E-Check. Für Gewerbe ist die Prüfung nach DGUV Vorschrift 3 je nach Gefährdungsbeurteilung alle 1–4 Jahre Pflicht. Als Vermieter müssen Sie die Anlage vor jeder Neuvermietung prüfen lassen.",
  },
  {
    question: "Lohnt sich eine Photovoltaikanlage für mein Haus?",
    answer:
      "In den meisten Fällen: ja. Bei aktuellen Strompreisen von über 30 Cent/kWh und Anschaffungskosten von ca. 1.400 \u20AC/kWp amortisiert sich eine Anlage typischerweise in 8–10 Jahren. Mit Speicher und Wallbox steigt der Eigenverbrauch auf über 70%. Wir berechnen Ihnen die Wirtschaftlichkeit für Ihr konkretes Dach.",
  },
  {
    question: "Was ist ein FI-Schutzschalter und warum brauche ich einen?",
    answer:
      "Der FI-Schalter (Fehlerstromschutzschalter) schützt Sie vor lebensgefährlichen Stromschlägen. Er erkennt, wenn Strom über Ihren Körper statt über den Leiter zurückfließt, und schaltet in Millisekunden ab. Seit 2009 ist er für alle Steckdosenstromkreise Pflicht. In älteren Häusern fehlt er oft – wir rüsten ihn gerne nach.",
  },
  {
    question: "Kann ich mein Haus nachträglich zum Smart Home umrüsten?",
    answer:
      "Ja, auch ohne neue Kabel. Mit funkbasierten Systemen können Sie Licht, Rollläden und Heizung nachrüsten – ohne Wände aufstemmen. Für maximale Zuverlässigkeit empfehlen wir bei Renovierungen allerdings die kabelgebundene KNX-Lösung. Wir beraten Sie, welche Variante für Ihr Haus sinnvoll ist.",
  },
  {
    question: "Was tun bei Stromausfall?",
    answer:
      "Prüfen Sie zuerst, ob der FI-Schalter oder ein Sicherungsautomat im Sicherungskasten herausgesprungen ist. Falls ja: wieder einschalten. Springt er sofort wieder raus, liegt wahrscheinlich ein Defekt vor – rufen Sie uns an. Riecht es verbrannt, verlassen Sie sofort den Raum und rufen unseren Notdienst: 0800 123 456.",
  },
  {
    question: "Wie lange dauert die Installation einer PV-Anlage?",
    answer:
      "Die reine Montage dauert bei einem Einfamilienhaus typischerweise 2–3 Arbeitstage. Inklusive Planung, Genehmigung und Anmeldung beim Netzbetreiber vergehen von der Beauftragung bis zur Inbetriebnahme etwa 4–6 Wochen.",
  },
  {
    question: "Welche Fördermittel gibt es für Elektroarbeiten?",
    answer:
      "Für PV-Anlagen entfällt seit 2023 die Mehrwertsteuer (0% USt). Wallboxen werden regional gefördert (z.B. über die KfW). Für energetische Sanierung gibt es den BAFA-Zuschuss oder den Steuerbonus (20% über 3 Jahre). Wir beraten Sie, welche Förderung für Ihr Projekt in Frage kommt.",
  },
  {
    question: "Brauche ich eine Genehmigung für meine Solaranlage?",
    answer:
      "In den meisten Fällen nicht. PV-Anlagen auf Ein- und Zweifamilienhäusern sind in Hessen genehmigungsfrei. Ausnahmen: Denkmalschutz, Außenbereichsanlagen über 10 kWp und einige Sonderfälle. Die Anmeldung beim Netzbetreiber und im Marktstammdatenregister übernehmen wir für Sie.",
  },
  {
    question: "Was kostet der Notdienst?",
    answer:
      "Unser Notdienst ist 24/7 erreichbar unter 0800 123 456. Es fällt eine Anfahrtspauschale an (je nach Entfernung 49–89 \u20AC) plus Arbeitslohn. An Sonn- und Feiertagen gelten Zuschläge. Sie erhalten vor Arbeitsbeginn eine transparente Kostenschätzung – keine Überraschungen.",
  },
];

// ---------- Stromausfall-Checker ----------

export const checkerNodes: CheckerNode[] = [
  {
    id: "start",
    type: "question",
    text: "Ist bei Ihnen der gesamte Strom ausgefallen oder nur einzelne Räume bzw. Geräte?",
    options: [
      { label: "Gesamter Strom ausgefallen", nextId: "q2a" },
      { label: "Nur einzelne Räume/Geräte", nextId: "q2b" },
    ],
  },
  {
    id: "q2a",
    type: "question",
    text: "Haben Ihre Nachbarn auch keinen Strom?",
    subtext: "Schauen Sie aus dem Fenster: Brennt bei den Nachbarn Licht?",
    options: [
      { label: "Ja, Nachbarn auch betroffen", nextId: "result-netzbetreiber" },
      { label: "Nein, nur bei mir", nextId: "q3" },
    ],
  },
  {
    id: "q2b",
    type: "question",
    text: "Ist ein Sicherungsautomat oder der FI-Schutzschalter herausgesprungen?",
    subtext:
      "Schauen Sie in Ihren Sicherungskasten: Steht ein Schalter auf \u201EAUS\u201C oder in Mittelstellung?",
    options: [
      { label: "Ja, ein Sicherungsautomat", nextId: "result-automat" },
      { label: "Ja, der FI-Schutzschalter", nextId: "result-fi" },
      {
        label: "Nein / Wei\u00DF ich nicht",
        nextId: "result-call",
      },
    ],
  },
  {
    id: "q3",
    type: "question",
    text: "Riecht es verbrannt oder sehen Sie Verfärbungen an Steckdosen oder Schaltern?",
    subtext: "Bitte achten Sie auf ungewöhnliche Gerüche oder dunkle Stellen.",
    options: [
      {
        label: "Ja, es riecht verbrannt / Verfärbungen sichtbar",
        nextId: "result-alarm",
      },
      { label: "Nein, alles normal", nextId: "result-check-fi" },
    ],
  },
  // ---------- Results ----------
  {
    id: "result-netzbetreiber",
    type: "result",
    severity: "info",
    text: "Wahrscheinlich eine Netzstörung",
    subtext:
      "Wenn auch Ihre Nachbarn keinen Strom haben, liegt die Störung beim Netzbetreiber. Melden Sie den Ausfall bei Ihrem örtlichen Netzbetreiber. Falls es länger dauert oder Sie unsicher sind, sind wir jederzeit für Sie da.",
  },
  {
    id: "result-automat",
    type: "result",
    severity: "warning",
    text: "Sicherungsautomat wieder einschalten",
    subtext:
      "Schalten Sie den herausgesprungenen Automaten wieder ein. Springt er sofort wieder raus, liegt wahrscheinlich ein Kurzschluss vor. Stecken Sie dann alle Geräte im betroffenen Stromkreis aus und versuchen es erneut. Springt er weiterhin raus, rufen Sie uns an.",
  },
  {
    id: "result-fi",
    type: "result",
    severity: "warning",
    text: "FI-Schutzschalter zurücksetzen",
    subtext:
      "Stecken Sie alle Geräte im betroffenen Bereich aus und schalten Sie den FI-Schutzschalter wieder ein. Springt er erneut raus, liegt ein Isolationsfehler vor. Stecken Sie die Geräte einzeln wieder ein, um den Verursacher zu finden. Hilft das nicht, rufen Sie uns an.",
  },
  {
    id: "result-alarm",
    type: "result",
    severity: "danger",
    text: "Achtung – mögliche Brandgefahr!",
    subtext:
      "Verlassen Sie sofort den Raum und schließen Sie die Tür. Berühren Sie keine Steckdosen oder Schalter. Rufen Sie uns sofort an – wir sind schnellstmöglich bei Ihnen.",
  },
  {
    id: "result-check-fi",
    type: "result",
    severity: "warning",
    text: "Prüfen Sie den FI-Schalter im Sicherungskasten",
    subtext:
      "Öffnen Sie Ihren Sicherungskasten und prüfen Sie, ob der FI-Schutzschalter (der breite Schalter, oft ganz links oder rechts) herausgesprungen ist. Falls er sich nicht einschalten lässt oder sofort wieder rausspringt, rufen Sie uns an.",
  },
  {
    id: "result-call",
    type: "result",
    severity: "warning",
    text: "Rufen Sie uns an – wir helfen weiter",
    subtext:
      "Wenn Sie sich unsicher sind oder das Problem nicht zuordnen können, rufen Sie uns einfach an. Wir klären das telefonisch oder kommen vorbei.",
  },
];

// ---------- Certificates ----------

export const certificates = [
  { name: "Meisterbetrieb", issuer: "HWK Wiesbaden", icon: "Award" },
  { name: "E-Check Fachbetrieb", issuer: "ZVEH", icon: "CheckCircle2" },
  { name: "VDE-geprüft", issuer: "VDE Verband", icon: "Shield" },
  { name: "Innungsbetrieb", issuer: "Elektro-Innung", icon: "Users" },
  { name: "SMA Fachpartner", issuer: "SMA Solar Technology", icon: "Lightbulb" },
  { name: "KNX-Partner", issuer: "KNX Association", icon: "Home" },
];
