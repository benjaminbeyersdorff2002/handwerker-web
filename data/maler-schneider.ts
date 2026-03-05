// ============================================================
// Malerbetrieb Schneider – Zentrale Datenquelle für alle Seiten
// ============================================================

// ---------- Types ----------

export type MalerService = {
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

export type GalleryProject = {
  slug: string;
  title: string;
  leistung: string;
  raumtyp: string;
  stil: string;
  location: string;
  year: string;
  beforeImage: string;
  afterImage: string;
  description: string;
};

export type InspirationItem = {
  id: string;
  image: string;
  raumtyp: string;
  stimmung: string;
  colorPalette: { name: string; hex: string; code: string }[];
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

// ---------- Company Info ----------

export const companyInfo = {
  name: "Malerbetrieb Schneider",
  phone: "06471 / 123 456",
  phoneFull: "+4906471123456",
  email: "info@maler-schneider.de",
  street: "Farbweg 7",
  zip: "35745",
  city: "Herborn",
  googleRating: 4.8,
  googleReviews: 89,
  since: 2004,
  openingHours: [
    { day: "Montag \u2013 Freitag", time: "07:00 \u2013 17:00 Uhr" },
    { day: "Samstag", time: "Nach Vereinbarung" },
  ],
  serviceAreas: [
    "Herborn",
    "Dillenburg",
    "Haiger",
    "Wetzlar",
    "Driedorf",
    "Mittenaar",
  ],
};

// ---------- Services (6) ----------

export const services: MalerService[] = [
  {
    slug: "innenmalerei",
    name: "Innenmalerei",
    icon: "Paintbrush",
    shortDesc:
      "Professionelle Malerarbeiten f\u00fcr Wohnr\u00e4ume, B\u00fcros und Gesch\u00e4ftsr\u00e4ume \u2013 sauber und termingerecht.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&h=800&fit=crop",
    detailDesc:
      "Ob frischer Anstrich oder komplette Raumgestaltung \u2013 wir bringen Farbe in Ihr Zuhause. Von der Decke bis zur Sockelleiste arbeiten wir sauber, pr\u00e4zise und mit hochwertigen Markenfarben von Caparol. Dabei achten wir auf perfekte Vorbereitung: Spachteln, Schleifen und Grundieren geh\u00f6ren f\u00fcr uns selbstverst\u00e4ndlich dazu. Das Ergebnis: gleichm\u00e4\u00dfige Fl\u00e4chen, saubere Kanten und Farben, die lange halten.",
    workItems: [
      "Wand- und Deckenanstriche",
      "Farbberatung vor Ort",
      "Spachtel- und Schleifarbeiten",
      "Grundierungen und Voranstriche",
      "Stuckprofile und Zierleisten streichen",
      "Renovierungsanstriche bei Auszug",
      "Kinderzimmer kindgerecht gestalten",
      "Treppenhausgestaltung",
    ],
    process: [
      {
        step: 1,
        title: "Kostenlose Farbberatung",
        desc: "Wir kommen zu Ihnen, besprechen Ihre W\u00fcnsche und zeigen Ihnen Farbmuster direkt im Raum.",
      },
      {
        step: 2,
        title: "Transparentes Angebot",
        desc: "Sie erhalten ein detailliertes Angebot mit Festpreis \u2013 keine versteckten Kosten.",
      },
      {
        step: 3,
        title: "Saubere Ausf\u00fchrung",
        desc: "Wir sch\u00fctzen Ihre M\u00f6bel und B\u00f6den, arbeiten staubarm und hinterlassen alles besenrein.",
      },
      {
        step: 4,
        title: "Endabnahme",
        desc: "Gemeinsame Abnahme, Nachbesserung wenn n\u00f6tig \u2013 erst wenn Sie zufrieden sind, sind wir es auch.",
      },
    ],
    relatedReferenceSlug: "villa-komplettrenovierung",
  },
  {
    slug: "fassade",
    name: "Fassadengestaltung",
    icon: "Home",
    shortDesc:
      "Fassadenanstriche, Sanierungen und W\u00e4rmed\u00e4mmung mit hochwertigen Materialien.",
    image:
      "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=1920&h=800&fit=crop",
    detailDesc:
      "Die Fassade ist die Visitenkarte Ihres Hauses. Wir sorgen daf\u00fcr, dass sie nicht nur sch\u00f6n aussieht, sondern auch gesch\u00fctzt ist. Von der Reinigung \u00fcber die Ausbesserung bis zum neuen Anstrich \u2013 wir verwenden nur witterungsbest\u00e4ndige Premium-Fassadenfarben. Auf Wunsch beraten wir Sie auch zu W\u00e4rmed\u00e4mmverbundsystemen (WDVS) und f\u00fchren diese fachgerecht aus.",
    workItems: [
      "Fassadenanstriche und -renovierungen",
      "W\u00e4rmed\u00e4mmverbundsystem (WDVS)",
      "Sockelanstriche und -abdichtungen",
      "Balkonanstriche",
      "Holzfassaden streichen und sch\u00fctzen",
      "Putzausbesserung und Risssanierung",
      "Algen- und Pilzbehandlung",
      "Farbkonzepte f\u00fcr Au\u00dfen",
    ],
    process: [
      {
        step: 1,
        title: "Fassadencheck",
        desc: "Wir pr\u00fcfen den Zustand Ihrer Fassade und dokumentieren Sch\u00e4den und Handlungsbedarf.",
      },
      {
        step: 2,
        title: "Farbkonzept & Angebot",
        desc: "Wir erstellen eine Farbvisualisierung und ein transparentes Festpreisangebot.",
      },
      {
        step: 3,
        title: "Professionelle Ausf\u00fchrung",
        desc: "Ger\u00fcstbau, Reinigung, Grundierung und Anstrich \u2013 alles aus einer Hand.",
      },
      {
        step: 4,
        title: "Langzeitschutz",
        desc: "Premium-Fassadenfarben f\u00fcr Haltbarkeit von 15+ Jahren. Mit Gew\u00e4hrleistung.",
      },
    ],
    relatedReferenceSlug: "mehrfamilienhaus-fassade",
  },
  {
    slug: "kreativtechniken",
    name: "Kreativtechniken",
    icon: "Palette",
    shortDesc:
      "Spachteltechnik, Wischtechnik, Betonoptik und dekorative Wandgestaltung f\u00fcr besondere Akzente.",
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1920&h=800&fit=crop",
    detailDesc:
      "Wenn gew\u00f6hnliche Wandfarbe nicht reicht, kommen unsere Kreativtechniken ins Spiel. Ob elegante Spachteltechnik, warme Wischtechnik, moderne Betonoptik oder edle Marmorierung \u2013 wir verwandeln Ihre W\u00e4nde in Kunstwerke. Jede Technik wird von Hand aufgetragen und ist ein Unikat. Besonders beliebt als Akzentwand im Wohnzimmer, im Flur oder im Badezimmer.",
    workItems: [
      "Spachteltechnik (Veneziano, Marmorino)",
      "Wischtechnik und Lasurtechnik",
      "Betonoptik / Industrial Look",
      "Rostoptik und Patina-Effekte",
      "Marmorierung",
      "Metallic-Effekte und Glimmer",
      "Schablonentechnik und Ornamente",
      "Akzentw\u00e4nde und Feature Walls",
    ],
    process: [
      {
        step: 1,
        title: "Inspiration & Beratung",
        desc: "Wir zeigen Ihnen Musterplatten und besprechen, welche Technik zu Ihrem Raum passt.",
      },
      {
        step: 2,
        title: "Musterfl\u00e4che",
        desc: "Auf Wunsch erstellen wir eine Probef\u00fcl\u00e4che direkt an Ihrer Wand \u2013 so k\u00f6nnen Sie die Wirkung live sehen.",
      },
      {
        step: 3,
        title: "Handwerkliche Umsetzung",
        desc: "Jede Fl\u00e4che wird von Hand aufgetragen \u2013 mit Geduld und K\u00f6nnen f\u00fcr ein perfektes Ergebnis.",
      },
      {
        step: 4,
        title: "Versiegelung",
        desc: "Eine Schutzschicht sorgt f\u00fcr Langlebigkeit und erleichtert die Reinigung.",
      },
    ],
    relatedReferenceSlug: "treppenhaus-kreativtechnik",
  },
  {
    slug: "lackierarbeiten",
    name: "Lackierarbeiten",
    icon: "Droplets",
    shortDesc:
      "Lackierung von T\u00fcren, Fenstern, Heizk\u00f6rpern und Metalloberfl\u00e4chen \u2013 vom Streichen bis zur Spr\u00fchlackierung.",
    image:
      "https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?w=1920&h=800&fit=crop",
    detailDesc:
      "Ob T\u00fcren, Fensterrahmen, Heizk\u00f6rper oder Gel\u00e4nder \u2013 mit unseren Lackierarbeiten sehen Ihre Einbauten aus wie neu. Wir arbeiten mit hochwertigen, schadstoffarmen Lacken und beherrschen sowohl die klassische Pinsellackierung als auch die Spr\u00fchlackierung f\u00fcr besonders glatte Oberfl\u00e4chen. Sorgf\u00e4ltige Vorarbeit (Schleifen, Grundieren) garantiert ein langlebiges Ergebnis.",
    workItems: [
      "T\u00fcren und T\u00fcrrahmen lackieren",
      "Fenster und Fensterb\u00e4nke",
      "Heizk\u00f6rper und Rohrleitungen",
      "Treppen und Gel\u00e4nder",
      "Spr\u00fchlackierung f\u00fcr glatte Fl\u00e4chen",
      "Holzschutzlasuren (innen & au\u00dfen)",
      "Metallschutzlackierung",
      "Altlackentfernung und Abbeizen",
    ],
    process: [
      {
        step: 1,
        title: "Bestandsaufnahme",
        desc: "Wir pr\u00fcfen den Untergrund und beraten Sie zu Lacktyp, Farbe und Oberfl\u00e4che.",
      },
      {
        step: 2,
        title: "Vorbereitung",
        desc: "Schleifen, Grundieren, Abkleben \u2013 die Vorarbeit macht 70% des Ergebnisses aus.",
      },
      {
        step: 3,
        title: "Lackierung",
        desc: "Mindestens zwei Anstriche f\u00fcr perfekte Deckkraft und Oberfl\u00e4chenqualit\u00e4t.",
      },
      {
        step: 4,
        title: "\u00dcbergabe",
        desc: "Saubere \u00dcbergabe mit Pflegehinweisen f\u00fcr langanhaltende Freude am Ergebnis.",
      },
    ],
  },
  {
    slug: "tapezierarbeiten",
    name: "Tapezierarbeiten",
    icon: "Building2",
    shortDesc:
      "Tapeten aller Art \u2013 von klassischer Raufaser bis zur edlen Designtapete, perfekt verarbeitet.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1920&h=800&fit=crop",
    detailDesc:
      "Tapeten erleben ein echtes Comeback \u2013 und wir sind die Experten daf\u00fcr. Ob klassische Raufaser, elegante Vliestapete, auff\u00e4llige Mustertapete oder luxuri\u00f6se Textiltapete: Wir tapezieren sauber, blasenfrei und mit perfekten \u00dcberg\u00e4ngen. Besonders spannend: Kombination aus Tapete und Farbe f\u00fcr individuelle Raumkonzepte.",
    workItems: [
      "Raufaser tapezieren und streichen",
      "Vliestapeten professionell verarbeiten",
      "Designtapeten und Mustertapeten",
      "Fototapeten und Wandbilder",
      "Textil- und Naturtapeten",
      "Alte Tapeten entfernen",
      "Untergrundvorbereitung und Makulatur",
      "Kombination Tapete + Akzentwand",
    ],
    process: [
      {
        step: 1,
        title: "Tapetenberatung",
        desc: "Wir helfen bei der Auswahl: Muster, Material, Farbwirkung \u2013 abgestimmt auf Ihren Raum.",
      },
      {
        step: 2,
        title: "Untergrundvorbereitung",
        desc: "Alte Tapeten entfernen, Wand gl\u00e4tten, grundieren \u2013 f\u00fcr perfekten Halt.",
      },
      {
        step: 3,
        title: "Fachgerechtes Tapezieren",
        desc: "Blasenfrei, nahtlos, mit pr\u00e4ziser Musterpassung \u2013 auch an schwierigen Ecken.",
      },
      {
        step: 4,
        title: "Finish",
        desc: "Saubere Kanten, \u00dcberstreichen wenn gew\u00fcnscht, und Reinigung des Arbeitsbereichs.",
      },
    ],
  },
  {
    slug: "bodenbeschichtung",
    name: "Bodenbeschichtung",
    icon: "Sparkles",
    shortDesc:
      "Epoxidharz- und Polyurethanbeschichtungen f\u00fcr Garagen, Keller, Werkst\u00e4tten und Gewerbefl\u00e4chen.",
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1920&h=800&fit=crop",
    detailDesc:
      "Industrieb\u00f6den, Garagenb\u00f6den und Gewerbefl\u00e4chen brauchen mehr als nur Farbe \u2013 sie brauchen Schutz. Unsere Bodenbeschichtungen aus Epoxidharz oder Polyurethan sind extrem belastbar, pflegeleicht und optisch ansprechend. Ob im Hochglanz-Look f\u00fcr den Showroom oder rutschfest f\u00fcr die Werkstatt: Wir finden die richtige L\u00f6sung.",
    workItems: [
      "Epoxidharzbeschichtung",
      "Polyurethan-Versiegelung",
      "Garagenbodenbeschichtung",
      "Industriebodensanierung",
      "Antirutsch-Beschichtungen",
      "Markierungen und Zonierung",
      "Kellerbodenbeschichtung",
      "Hochglanz-Designb\u00f6den",
    ],
    process: [
      {
        step: 1,
        title: "Bodenanalyse",
        desc: "Wir pr\u00fcfen Untergrund, Feuchtigkeit und Belastungsanforderungen.",
      },
      {
        step: 2,
        title: "Vorbereitung",
        desc: "Kugelstrahlen oder Schleifen des Untergrunds f\u00fcr optimale Haftung.",
      },
      {
        step: 3,
        title: "Beschichtung",
        desc: "Mehrschichtiger Aufbau: Grundierung, Hauptbeschichtung, Versiegelung.",
      },
      {
        step: 4,
        title: "Aush\u00e4rtung & Freigabe",
        desc: "Nach 24-48 Stunden begehbar, nach 7 Tagen voll belastbar.",
      },
    ],
    relatedReferenceSlug: "buero-etage-umbau",
  },
];

// ---------- Gallery Projects (12) ----------

export const galleryProjects: GalleryProject[] = [
  {
    slug: "wohnzimmer-komplettrenovierung",
    title: "Wohnzimmer Komplettrenovierung",
    leistung: "Innenmalerei",
    raumtyp: "Wohnzimmer",
    stil: "modern",
    location: "Herborn",
    year: "2024",
    beforeImage:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
    description:
      "Komplette Neugestaltung mit warmem Greige-Ton und wei\u00dfer Decke. Akzentwand in Salbei.",
  },
  {
    slug: "altbau-fassade-neuanstrich",
    title: "Altbau-Fassade Neuanstrich",
    leistung: "Fassade",
    raumtyp: "Fassade",
    stil: "klassisch",
    location: "Dillenburg",
    year: "2024",
    beforeImage:
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    description:
      "Fassadensanierung eines Altbaus mit neuem WDVS und klassischem Wei\u00df-Grau-Farbkonzept.",
  },
  {
    slug: "treppenhaus-kreativtechnik",
    title: "Treppenhaus Kreativtechnik",
    leistung: "Kreativtechniken",
    raumtyp: "Flur",
    stil: "kreativ",
    location: "Wetzlar",
    year: "2024",
    beforeImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop",
    description:
      "Spachteltechnik in Bronze-Gold mit Betonoptik-Akzenten im Erdgeschoss.",
  },
  {
    slug: "badezimmer-neugestaltung",
    title: "Badezimmer Neugestaltung",
    leistung: "Innenmalerei",
    raumtyp: "Bad",
    stil: "modern",
    location: "Herborn",
    year: "2024",
    beforeImage:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop",
    description:
      "Feuchtraumfarbe in zartem Blaugrau mit wei\u00dfen Akzenten. Schimmelresistent und elegant.",
  },
  {
    slug: "villa-fassadensanierung",
    title: "Villa Fassadensanierung",
    leistung: "Fassade",
    raumtyp: "Fassade",
    stil: "klassisch",
    location: "Haiger",
    year: "2023",
    beforeImage:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    description:
      "Komplettsanierung einer Gr\u00fcnderzeit-Villa mit denkmalgerechter Farbgebung.",
  },
  {
    slug: "spachteltechnik-wohnzimmer",
    title: "Spachteltechnik Wohnzimmer",
    leistung: "Kreativtechniken",
    raumtyp: "Wohnzimmer",
    stil: "kreativ",
    location: "Wetzlar",
    year: "2024",
    beforeImage:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
    description:
      "Venezianische Spachteltechnik in warmem Champagner-Ton als Akzentwand hinter dem Sofa.",
  },
  {
    slug: "tueren-lackierung-altbau",
    title: "T\u00fcren-Lackierung Altbau",
    leistung: "Lackierarbeiten",
    raumtyp: "Flur",
    stil: "klassisch",
    location: "Herborn",
    year: "2023",
    beforeImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&h=600&fit=crop",
    description:
      "12 Altbaut\u00fcren in klassischem Wei\u00df lackiert. Spr\u00fchlackierung f\u00fcr perfekte Oberfl\u00e4che.",
  },
  {
    slug: "designtapete-schlafzimmer",
    title: "Designtapete Schlafzimmer",
    leistung: "Tapezierarbeiten",
    raumtyp: "Wohnzimmer",
    stil: "modern",
    location: "Dillenburg",
    year: "2024",
    beforeImage:
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop",
    description:
      "Botanische Vliestapete als Kopfteilwand kombiniert mit sanftem Eukalyptus-Gr\u00fcn.",
  },
  {
    slug: "garagenboden-epoxid",
    title: "Garagenboden Epoxid",
    leistung: "Bodenbeschichtung",
    raumtyp: "Gewerbe",
    stil: "modern",
    location: "Herborn",
    year: "2024",
    beforeImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop",
    description:
      "Doppelgarage mit hellgrauer Epoxidharzbeschichtung und Antirutsch-Chips.",
  },
  {
    slug: "bueroflur-betonoptik",
    title: "B\u00fcroflur Betonoptik",
    leistung: "Kreativtechniken",
    raumtyp: "Gewerbe",
    stil: "modern",
    location: "Wetzlar",
    year: "2023",
    beforeImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=600&fit=crop",
    description:
      "Industrial-Betonoptik im Empfangsbereich einer Werbeagentur. Modern und markant.",
  },
  {
    slug: "kinderzimmer-gestaltung",
    title: "Kinderzimmer Gestaltung",
    leistung: "Innenmalerei",
    raumtyp: "Wohnzimmer",
    stil: "kreativ",
    location: "Herborn",
    year: "2024",
    beforeImage:
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1617104678098-de229db51175?w=800&h=600&fit=crop",
    description:
      "Farbenfrohe Gestaltung mit pastelligen Akzentw\u00e4nden und Wolkendecke.",
  },
  {
    slug: "mehrfamilienhaus-fassade",
    title: "Mehrfamilienhaus Fassade",
    leistung: "Fassade",
    raumtyp: "Fassade",
    stil: "modern",
    location: "Haiger",
    year: "2023",
    beforeImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    description:
      "6-Parteien-Haus mit WDVS, neuem Farb\u00adkonzept in Anthrazit-Wei\u00df und Balkon\u00adanstrich.",
  },
];

// ---------- Inspiration Items (16) ----------

export const inspirationItems: InspirationItem[] = [
  {
    id: "insp-1",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
    raumtyp: "Wohnzimmer",
    stimmung: "Warm & Gem\u00fctlich",
    colorPalette: [
      { name: "Warmes Greige", hex: "#B8A99A", code: "RAL 1019" },
      { name: "Salbei", hex: "#9CAF88", code: "NCS S 3020-G30Y" },
      { name: "Cremeweiß", hex: "#F5F0E8", code: "RAL 9001" },
    ],
  },
  {
    id: "insp-2",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
    raumtyp: "Wohnzimmer",
    stimmung: "Modern & Minimalistisch",
    colorPalette: [
      { name: "Beton", hex: "#A0998F", code: "RAL 7032" },
      { name: "Anthrazit", hex: "#3E3E3E", code: "RAL 7016" },
      { name: "Reinwei\u00df", hex: "#FFFFFF", code: "RAL 9010" },
    ],
  },
  {
    id: "insp-3",
    image:
      "https://images.unsplash.com/photo-1617104678098-de229db51175?w=800&h=600&fit=crop",
    raumtyp: "Kinderzimmer",
    stimmung: "Mutig & Kreativ",
    colorPalette: [
      { name: "Pastellrosa", hex: "#F4C2C2", code: "NCS S 1020-R" },
      { name: "Mintgr\u00fcn", hex: "#98D8C8", code: "NCS S 1030-B90G" },
      { name: "Sonnengelb", hex: "#F9E076", code: "RAL 1018" },
    ],
  },
  {
    id: "insp-4",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop",
    raumtyp: "Bad",
    stimmung: "Modern & Minimalistisch",
    colorPalette: [
      { name: "Taubenblau", hex: "#7B9DAF", code: "NCS S 3020-B" },
      { name: "Wei\u00df", hex: "#FAFAFA", code: "RAL 9016" },
      { name: "Warmgrau", hex: "#C4BEB5", code: "RAL 7044" },
    ],
  },
  {
    id: "insp-5",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop",
    raumtyp: "Schlafzimmer",
    stimmung: "Warm & Gem\u00fctlich",
    colorPalette: [
      { name: "Eukalyptus", hex: "#84A98C", code: "NCS S 3020-G10Y" },
      { name: "Leinen", hex: "#E8DDD0", code: "NCS S 1010-Y30R" },
      { name: "Anthrazit", hex: "#2D3436", code: "RAL 7021" },
    ],
  },
  {
    id: "insp-6",
    image:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop",
    raumtyp: "Flur",
    stimmung: "Mutig & Kreativ",
    colorPalette: [
      { name: "Ozeanblau", hex: "#1A535C", code: "NCS S 5030-B50G" },
      { name: "Gold", hex: "#C9A959", code: "RAL 1024" },
      { name: "Sandstein", hex: "#D4C5A9", code: "RAL 1015" },
    ],
  },
  {
    id: "insp-7",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    raumtyp: "Fassade",
    stimmung: "Klassisch & Elegant",
    colorPalette: [
      { name: "Perlwei\u00df", hex: "#EDE8E2", code: "RAL 1013" },
      { name: "Anthrazit", hex: "#3E3E3E", code: "RAL 7016" },
      { name: "Weinrot", hex: "#722F37", code: "RAL 3004" },
    ],
  },
  {
    id: "insp-8",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    raumtyp: "Fassade",
    stimmung: "Modern & Minimalistisch",
    colorPalette: [
      { name: "Basaltgrau", hex: "#5B6B6E", code: "RAL 7012" },
      { name: "Signalwei\u00df", hex: "#F4F4F4", code: "RAL 9003" },
      { name: "Holzbraun", hex: "#8B6B4A", code: "RAL 8001" },
    ],
  },
  {
    id: "insp-9",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
    raumtyp: "Wohnzimmer",
    stimmung: "Klassisch & Elegant",
    colorPalette: [
      { name: "Champagner", hex: "#D4C9B0", code: "NCS S 1510-Y20R" },
      { name: "Bordeaux", hex: "#6B2737", code: "RAL 3005" },
      { name: "Elfenbein", hex: "#F0EBE0", code: "RAL 1014" },
    ],
  },
  {
    id: "insp-10",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=600&fit=crop",
    raumtyp: "B\u00fcro",
    stimmung: "Modern & Minimalistisch",
    colorPalette: [
      { name: "Kieselgrau", hex: "#BDB8AD", code: "RAL 7032" },
      { name: "Petrol", hex: "#1B6B6D", code: "NCS S 4040-B50G" },
      { name: "Wei\u00df", hex: "#FFFFFF", code: "RAL 9010" },
    ],
  },
  {
    id: "insp-11",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    raumtyp: "K\u00fcche",
    stimmung: "Warm & Gem\u00fctlich",
    colorPalette: [
      { name: "Terracotta", hex: "#C4784A", code: "NCS S 3040-Y50R" },
      { name: "Cremeweiß", hex: "#F5F0E8", code: "RAL 9001" },
      { name: "Olivgr\u00fcn", hex: "#6B705C", code: "NCS S 5010-G50Y" },
    ],
  },
  {
    id: "insp-12",
    image:
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=600&fit=crop",
    raumtyp: "Schlafzimmer",
    stimmung: "Klassisch & Elegant",
    colorPalette: [
      { name: "Nachtblau", hex: "#2C3E50", code: "NCS S 6020-B" },
      { name: "Gold", hex: "#C9A959", code: "RAL 1024" },
      { name: "Perlwei\u00df", hex: "#F5F0EB", code: "RAL 1013" },
    ],
  },
  {
    id: "insp-13",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop",
    raumtyp: "Bad",
    stimmung: "Warm & Gem\u00fctlich",
    colorPalette: [
      { name: "Sandstein", hex: "#D4C5A9", code: "RAL 1015" },
      { name: "Moosgrün", hex: "#6B705C", code: "NCS S 5010-G50Y" },
      { name: "Weiß", hex: "#FAFAFA", code: "RAL 9016" },
    ],
  },
  {
    id: "insp-14",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop",
    raumtyp: "Wohnzimmer",
    stimmung: "Mutig & Kreativ",
    colorPalette: [
      { name: "Smaragd", hex: "#2D6A4F", code: "NCS S 4040-G" },
      { name: "Kupfer", hex: "#B87333", code: "NCS S 3050-Y40R" },
      { name: "Creme", hex: "#F0EBE0", code: "RAL 1014" },
    ],
  },
  {
    id: "insp-15",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    raumtyp: "Fassade",
    stimmung: "Warm & Gem\u00fctlich",
    colorPalette: [
      { name: "Terracotta", hex: "#C4784A", code: "NCS S 3040-Y50R" },
      { name: "Cremeweiß", hex: "#F5F0E8", code: "RAL 9001" },
      { name: "Dunkelbraun", hex: "#5C4033", code: "RAL 8011" },
    ],
  },
  {
    id: "insp-16",
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&h=600&fit=crop",
    raumtyp: "Flur",
    stimmung: "Klassisch & Elegant",
    colorPalette: [
      { name: "Taupe", hex: "#8B7D6B", code: "NCS S 4010-Y30R" },
      { name: "Wei\u00df", hex: "#FFFFFF", code: "RAL 9010" },
      { name: "Altgold", hex: "#A0873C", code: "RAL 1027" },
    ],
  },
];

// ---------- References (5) ----------

export const references: Reference[] = [
  {
    slug: "villa-komplettrenovierung",
    title: "Villa Komplettrenovierung",
    location: "Herborn",
    year: "2024",
    shortDesc:
      "Innen- und Au\u00dfenanstrich einer 280 m\u00b2 Villa mit Farrow & Ball Farben, Stuckarbeiten und Deckengestaltung.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
    tags: ["Innenmalerei", "Fassade", "Premium"],
    highlights: [
      "280 m\u00b2 Wohnfl\u00e4che",
      "Premium-Farben (Farrow & Ball)",
      "Stuckrestaurierung",
      "Individuelle Farbberatung",
    ],
  },
  {
    slug: "buero-etage-umbau",
    title: "B\u00fcro-Etage Umbau",
    location: "Wetzlar",
    year: "2024",
    shortDesc:
      "Neugestaltung einer 450 m\u00b2 B\u00fcrofl\u00e4che mit Corporate-Design-Farbkonzept, Akzentw\u00e4nden und Bodenbeschichtung.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=500&fit=crop",
    tags: ["Gewerbe", "Bodenbeschichtung", "Design"],
    highlights: [
      "450 m\u00b2 B\u00fcrofl\u00e4che",
      "Corporate-Design Umsetzung",
      "Akzentw\u00e4nde in 4 Farben",
      "Epoxid-Bodenbeschichtung",
    ],
  },
  {
    slug: "mehrfamilienhaus-fassade",
    title: "Mehrfamilienhaus Fassade",
    location: "Haiger",
    year: "2023",
    shortDesc:
      "Fassadensanierung mit WDVS f\u00fcr ein 6-Parteien-Haus inklusive Balkon- und Sockelanstrich.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop",
    tags: ["Fassade", "WDVS", "Sanierung"],
    highlights: [
      "6-Parteien-Haus",
      "W\u00e4rmed\u00e4mmverbundsystem",
      "Balkon- & Sockelanstrich",
      "15 Jahre Gew\u00e4hrleistung",
    ],
  },
  {
    slug: "treppenhaus-kreativtechnik",
    title: "Treppenhaus Kreativtechnik",
    location: "Wetzlar",
    year: "2024",
    shortDesc:
      "Spachteltechnik in Bronze-Gold \u00fcber drei Etagen mit Betonoptik-Akzenten im Erdgeschoss.",
    image:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=500&fit=crop",
    tags: ["Kreativtechnik", "Spachteltechnik", "Exklusiv"],
    highlights: [
      "3 Etagen Treppenhaus",
      "Venezianische Spachteltechnik",
      "Betonoptik-Akzente",
      "Handarbeit \u2013 jede Wand ein Unikat",
    ],
  },
  {
    slug: "altbau-wohnung-premium",
    title: "Altbau-Wohnung Premium-Renovierung",
    location: "Dillenburg",
    year: "2024",
    shortDesc:
      "Komplettrenovierung einer 120 m\u00b2 Altbauwohnung mit Stuckdecken, Kassettent\u00fcren und edlen Farbt\u00f6nen.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=500&fit=crop",
    tags: ["Innenmalerei", "Lackierung", "Altbau"],
    highlights: [
      "120 m\u00b2 Altbauwohnung",
      "Stuckdecken restauriert",
      "12 Kassettent\u00fcren lackiert",
      "Caparol Premium-Farben",
    ],
  },
];

// ---------- Reviews (5) ----------

export const reviews: Review[] = [
  {
    name: "Andrea Fischer",
    date: "vor 1 Woche",
    stars: 5,
    text: "Unser Wohnzimmer sieht aus wie aus einem Magazin! Die Farbberatung von Frau Schneider war Gold wert. Super saubere Arbeit, man hat nach dem Streichen nichts mehr gemerkt.",
  },
  {
    name: "Klaus Hoffmann",
    date: "vor 3 Wochen",
    stars: 5,
    text: "Die Fassade unseres Hauses erstrahlt in neuem Glanz. P\u00fcnktlich, freundlich und das Ergebnis ist perfekt. Preis-Leistung stimmt absolut!",
  },
  {
    name: "Julia Meier",
    date: "vor 2 Monaten",
    stars: 5,
    text: "Tolle Spachteltechnik im Flur \u2013 genau so haben wir uns das vorgestellt. Das Team war super nett und hat alles sauber hinterlassen. Gerne wieder!",
  },
  {
    name: "Thomas Braun",
    date: "vor 3 Monaten",
    stars: 5,
    text: "Unsere komplette B\u00fcroetage wurde in nur 2 Wochen neu gestaltet \u2013 w\u00e4hrend des laufenden Betriebs! Absolut professionell und das Ergebnis \u00fcbertrifft unsere Erwartungen.",
  },
  {
    name: "Sabine Keller",
    date: "vor 4 Monaten",
    stars: 5,
    text: "Endlich eine sch\u00f6ne Fassade! Frau Schneider hat uns ein tolles Farbkonzept vorgeschlagen. Die Nachbarn fragen schon, wer das gemacht hat.",
  },
];

// ---------- Team (5) ----------

export const team: TeamMember[] = [
  {
    name: "Lisa Schneider",
    role: "Inhaberin & Malermeisterin",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    since: "2004",
    specialty: "Farbberatung & Kreativtechniken",
  },
  {
    name: "Michael Braun",
    role: "Geselle & Fassadenspezialist",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    since: "2008",
    specialty: "Fassade & WDVS",
  },
  {
    name: "Sarah Neumann",
    role: "Gesellin & Gestaltungstechnikerin",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    since: "2015",
    specialty: "Tapezierarbeiten & Designtapeten",
  },
  {
    name: "Jan Weber",
    role: "Geselle & Lackierer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    since: "2018",
    specialty: "Lackier- & Spr\u00fchlackierarbeiten",
  },
  {
    name: "Emma Schneider",
    role: "Auszubildende (2. Lehrjahr)",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    since: "2023",
  },
];

// ---------- Timeline (6) ----------

export const timeline: TimelineEvent[] = [
  {
    year: "2004",
    title: "Gr\u00fcndung",
    desc: "Lisa Schneider macht sich als Malermeisterin in Herborn selbstst\u00e4ndig. Erste Auftr\u00e4ge aus der Nachbarschaft.",
  },
  {
    year: "2008",
    title: "Erster Mitarbeiter",
    desc: "Michael Braun verst\u00e4rkt das Team. Schwerpunkt Fassade und WDVS wird ausgebaut.",
  },
  {
    year: "2012",
    title: "Caparol-Partnerschaft",
    desc: "Offizielle Partnerschaft mit Caparol. Zugang zu Premium-Farbsystemen und Schulungen.",
  },
  {
    year: "2017",
    title: "Kreativtechnik-Zertifizierung",
    desc: "Lisa Schneider absolviert die Zusatzqualifikation f\u00fcr dekorative Gestaltungstechniken.",
  },
  {
    year: "2021",
    title: "Neues B\u00fcro & Lager",
    desc: "Umzug in gr\u00f6\u00dfere R\u00e4umlichkeiten am Farbweg 7. Das Team w\u00e4chst auf 5 Mitarbeiter.",
  },
  {
    year: "2024",
    title: "20-j\u00e4hriges Jubil\u00e4um",
    desc: "\u00dcber 800 zufriedene Kunden, 4.8 Google-Bewertung. Ein Familienbetrieb mit Leidenschaft.",
  },
];

// ---------- FAQ Items (10) ----------

export const faqItems: FAQItem[] = [
  {
    question: "Was kostet es, ein Zimmer streichen zu lassen?",
    answer:
      "Die Kosten h\u00e4ngen von der Raumgr\u00f6\u00dfe, dem Zustand der W\u00e4nde und der gew\u00fcnschten Farbe ab. Als grobe Orientierung: Ein normales Wohnzimmer (20 m\u00b2) liegt bei ca. 400\u2013800 \u20ac inklusive Material und Farbe. Spachtelarbeiten oder Kreativtechniken kosten mehr. Wir erstellen Ihnen gerne ein kostenloses Angebot vor Ort.",
  },
  {
    question:
      "Wie lange muss Farbe trocknen, bevor wir M\u00f6bel zur\u00fcckstellen?",
    answer:
      "Moderne Dispersionsfarben sind nach 4\u20136 Stunden staubtrocken und nach 24 Stunden \u00fcberstreichbar. Wir empfehlen, M\u00f6bel fr\u00fchestens nach 24 Stunden zur\u00fcckzustellen und 2\u20133 Tage gut zu l\u00fcften. Bei Lacken und Kreativtechniken kann es l\u00e4nger dauern \u2013 wir informieren Sie im Vorfeld.",
  },
  {
    question: "Welche Farbe passt in ein kleines Wohnzimmer?",
    answer:
      "Kleine R\u00e4ume wirken gr\u00f6\u00dfer mit hellen, k\u00fchlen T\u00f6nen wie Hellgrau, zartem Blau oder Greige. Eine einzelne Akzentwand in einer kr\u00e4ftigeren Farbe gibt Tiefe, ohne zu erdr\u00fccken. Nutzen Sie unseren Farbberater oder lassen Sie sich vor Ort beraten \u2013 wir bringen Farbmuster mit und testen die Wirkung direkt in Ihrem Raum.",
  },
  {
    question: "Braucht meine Fassade eine Grundierung?",
    answer:
      "In den meisten F\u00e4llen ja. Eine Grundierung verbessert die Haftung, reguliert die Saugf\u00e4higkeit und sorgt f\u00fcr ein gleichm\u00e4\u00dfiges Ergebnis. Besonders bei Neuputz, stark saugenden oder sandenden Untergr\u00fcnden ist eine Grundierung unverzichtbar. Wir pr\u00fcfen den Untergrund und beraten Sie ehrlich.",
  },
  {
    question:
      "Was ist der Unterschied zwischen Dispersions- und Latexfarbe?",
    answer:
      "Dispersionsfarbe ist die Standardfarbe f\u00fcr Innenr\u00e4ume: atmungsaktiv, gut deckend und g\u00fcnstig. Latexfarbe ist widerstandsf\u00e4higer, abwaschbar und ideal f\u00fcr stark beanspruchte Bereiche wie K\u00fcche, Bad und Flur. Wir empfehlen Latexfarbe \u00fcberall dort, wo Spritzwasser oder h\u00e4ufige Ber\u00fchrung zu erwarten ist.",
  },
  {
    question: "Wie lange h\u00e4lt ein Fassadenanstrich?",
    answer:
      "Mit hochwertigen Fassadenfarben (z.B. Caparol Thermosan) h\u00e4lt ein Fassadenanstrich 15\u201320 Jahre. G\u00fcnstige Farben halten oft nur 5\u201310 Jahre. Faktoren wie Witterung, Himmelsrichtung und Untergrund spielen eine Rolle. Wir verwenden ausschlie\u00dflich langlebige Premiumprodukte und geben bis zu 10 Jahre Gew\u00e4hrleistung.",
  },
  {
    question: "Was kostet Spachteltechnik pro m\u00b2?",
    answer:
      "Kreativtechniken wie Spachtel, Wisch oder Betonoptik liegen bei 40\u2013120 \u20ac/m\u00b2 je nach Technik und Aufwand. Einfache Wischtechnik ist g\u00fcnstiger, venezianische Spachteltechnik aufwendiger. Eine einzelne Akzentwand (ca. 8 m\u00b2) ist ein guter Einstieg: optisch beeindruckend, aber budget\u00adfreundlich.",
  },
  {
    question: "Welche Farben empfehlen Sie f\u00fcr ein Kinderzimmer?",
    answer:
      "F\u00fcr Kinderzimmer empfehlen wir schadstoffarme Farben mit dem Blauen Engel Siegel. Pastellt\u00f6ne wie zartes Gr\u00fcn, Hellblau oder Rosa wirken beruhigend. Eine Akzentwand in einer kr\u00e4ftigeren Farbe setzt einen sch\u00f6nen Akzent. Wichtig: abwaschbare Latexfarbe im unteren Wandbereich, damit kleine K\u00fcnstler keinen bleibenden Schaden hinterlassen.",
  },
  {
    question: "Wie bereite ich meine Wohnung f\u00fcr den Maler vor?",
    answer:
      "Am besten r\u00e4umen Sie Bilder, Gardinen und Kleinm\u00f6bel aus dem Raum. Gr\u00f6\u00dfere M\u00f6bel k\u00f6nnen in die Raummitte ger\u00fcckt werden \u2013 das Abdecken \u00fcbernehmen wir. B\u00f6den werden von uns vollfl\u00e4chig mit Malervlies gesch\u00fctzt. Falls Sie unsicher sind: Wir erkl\u00e4ren Ihnen bei der Besichtigung genau, was n\u00f6tig ist.",
  },
  {
    question:
      "Bieten Sie auch Farbberatung ohne Malerarbeiten an?",
    answer:
      "Ja! Viele Kunden buchen zun\u00e4chst nur eine Farbberatung (ab 89 \u20ac). Wir kommen zu Ihnen, analysieren Lichtverh\u00e4ltnisse, vorhandene M\u00f6bel und Ihren pers\u00f6nlichen Stil. Sie erhalten ein individuelles Farbkonzept mit Farbmustern und Raumskizze. Beauftragen Sie uns sp\u00e4ter mit den Malerarbeiten, verrechnen wir die Beratungskosten.",
  },
];

// ---------- Certificates ----------

export const certificates: Certificate[] = [
  {
    name: "Meisterbetrieb",
    desc: "Handwerkskammer Wiesbaden",
  },
  {
    name: "Caparol Partner",
    desc: "Zertifizierter Premium-Farbpartner",
    prominent: true,
  },
  {
    name: "Innungsbetrieb",
    desc: "Maler- und Lackierer-Innung",
  },
  {
    name: "Gestaltungstechnik",
    desc: "Zusatzqualifikation Kreativtechniken",
  },
  {
    name: "Blauer Engel",
    desc: "Verwendung zertifizierter Produkte",
  },
  {
    name: "WDVS-Fachbetrieb",
    desc: "Zertifiziert f\u00fcr W\u00e4rmed\u00e4mmverbundsysteme",
  },
];
