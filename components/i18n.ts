export type LocaleText = {
  it: string;
  en: string;
};

export type LocaleLink = {
  href: string;
  label: LocaleText;
};

export const navbarLinks: LocaleLink[] = [
  { href: "#home", label: { it: "Home", en: "Home" } },
  { href: "#about", label: { it: "Chi siamo", en: "About Us" } },
  { href: "#products", label: { it: "Prodotti", en: "Products" } },
  { href: "#services", label: { it: "Servizi", en: "Services" } },
  { href: "#gallery", label: { it: "Galleria", en: "Gallery" } },
  { href: "#contact", label: { it: "Contatti", en: "Contact" } },
];

export const heroContent = {
  imageAlt: {
    it: "Basilico Genovese DOP coltivato nelle colline di Voltri",
    en: "Basilico Genovese DOP grown in the hills of Voltri",
  },

  certificationBadge: {
    it: "Coltiviamo Basilico Genovese DOP nelle colline di Voltri",
    en: "We cultivate Basilico Genovese DOP in the hills of Voltri",
  },

  headline: {
    it: "Tradizione Agricola Italiana dal Cuore della Liguria",
    en: "Authentic Italian Farming from the Heart of Liguria",
  },

  subtitle: {
    it: "Basilico Genovese DOP coltivato con passione e metodi tradizionali.",
    en: "Premium Basilico Genovese DOP cultivated with passion and traditional methods.",
  },

  description: {
    it: "Nelle colline di Voltri coltiviamo Basilico Genovese DOP e prodotti agricoli selezionati, rispettando la natura e le tradizioni della nostra terra.",
    en: "In the hills of Voltri we cultivate Basilico Genovese DOP and carefully selected crops while respecting nature and Italian farming traditions.",
  },

  primaryButton: {
    it: "Scopri i Prodotti",
    en: "Explore Products",
  },

  secondaryButton: {
    it: "Chi Siamo",
    en: "About Us",
  },

  floatingCard: {
    title: {
      it: "Certificazione DOP",
      en: "DOP Certification",
    },

    location: {
      it: "Colline di Voltri, Genova",
      en: "Voltri Hills, Genoa",
    },

    quality: {
      it: "Qualità certificata e coltivazione sostenibile",
      en: "Certified quality and sustainable cultivation",
    },
  },
};
export const heroTrustIndicators = [
  {
    icon: "award",
    label: {
      it: "Certificato DOP",
      en: "DOP Certified",
    },
    description: {
      it: "Basilico Genovese DOP autentico",
      en: "Authentic Basilico Genovese DOP",
    },
  },

  {
    icon: "leaf",
    label: {
      it: "Agricoltura Sostenibile",
      en: "Sustainable Farming",
    },
    description: {
      it: "Rispetto per la natura e il territorio",
      en: "Respect for nature and local land",
    },
  },

  {
    icon: "map",
    label: {
      it: "Voltri, Genova",
      en: "Voltri, Genoa",
    },
    description: {
      it: "Territorio ideale per il basilico",
      en: "Ideal territory for basil cultivation",
    },
  },

  {
    icon: "flag",
    label: {
      it: "100% Italiano",
      en: "100% Italian",
    },
    description: {
      it: "Coltivato e raccolto in Italia",
      en: "Grown and harvested in Italy",
    },
  },
] as const;
export const aboutContent = {
  subtitle: { it: "La nostra essenza", en: "Our Essence" },
  heading: {
    it: "Basilico: Il cuore dell'eccellenza italiana.",
    en: "Basilico: The Heart of Italian Excellence.",
  },
  paragraphs: {
    it: [
      "Fondata nel 2024 in Italia, AZ AGR Serrea nasce dalla passione di una famiglia con profonde radici nell'agricoltura. Cresciuta in Sri Lanka, dove la coltivazione della terra è una tradizione tramandata da generazioni, la famiglia ha portato in Italia la propria esperienza, i propri valori e un'autentica dedizione all'agricoltura.",
      "Situata sulle colline di Voltri, Genova, AZ AGR Serrea si dedica a un'agricoltura sostenibile, alla qualità e al rispetto dei valori che da sempre guidano il suo percorso.",
    ],
    en: [
      "Founded in 2024 in Italy, AZ AGR Serrea is a family-owned agricultural company built on a lifelong passion for farming. With over 18 years of experience in basil cultivation, the company combines traditional farming knowledge with modern agricultural practices to produce premium-quality products.",
      "Based in the hills of Voltri, Italy, AZ AGR Serrea is dedicated to sustainable agriculture, exceptional quality, and preserving the values that have shaped its farming heritage.",
    ],
  },
  badge: { it: "Dal 2024", en: "Est. 2024" },
  actionLabel: { it: "Esplora la nostra eredità", en: "Explore Our Heritage" },
  values: {
    it: [
      {
        title: "Lo standard d'oro",
        description:
          "Le nostre pratiche rigenerative superano i requisiti standard, concentrandosi sulla vitalità del suolo e sul massimo contenuto nutrizionale.",
      },
      {
        title: "Gestione etica",
        description:
          "Ci consideriamo custodi temporanei di questa terra, usando tecniche idriche positive e colture che sequestrano carbonio.",
      },
      {
        title: "Una tradizione viva",
        description:
          "La famiglia Serrea nutre queste colline dal 2024, tramandando i segreti del terreno attraverso le generazioni.",
      },
      {
        title: "Freschezza selezionata",
        description:
          "La nostra promessa 'Dall'alba alla tavola': ogni prodotto è raccolto a piena maturazione e consegnato in poche ore.",
      },
    ],
    en: [
      {
        title: "The Gold Standard",
        description:
          "Our regenerative practices exceed USDA requirements, focusing on soil vitality and nutrient density.",
      },
      {
        title: "Ethical Stewardship",
        description:
          "We view ourselves as temporary guardians of this land, employing water-positive techniques and carbon-sequestering crops.",
      },
      {
        title: "A Living Legacy",
        description:
          "The Serrea family has nurtured these hills since 2024, passing down secrets of the soil through three generations.",
      },
      {
        title: "Curated Freshness",
        description:
          "Our 'Dawn-to-Door' promise: every item is hand-selected at its peak ripeness and delivered within hours.",
      },
    ],
  },
};

export const productsContent = {
  heading: { it: "Le nostre coltivazioni fresche", en: "Our Fresh Crops" },
  description: {
    it: "Scopri la nostra selezione di prodotti d'eccellenza, raccolti ogni giorno con metodi agricoli italiani tradizionali per garantire freschezza e valore nutrizionale.",
    en: "Discover our selection of premium produce, harvested daily using traditional Italian farming methods to ensure maximum freshness and nutritional value.",
  },
  items: {
    it: [
      {
        name: "Limoni",
        description:
          "Coltivati nel clima mediterraneo della Liguria, i nostri limoni si distinguono per il loro profumo intenso, la freschezza naturale e l'eccellente qualità.",
        image: "/images/im1.jpg",
      },
      {
        name: "Basilico Genovese DOP",
        description:
          "Coltivato nelle colline di Voltri secondo il disciplinare ufficiale DOP, il nostro basilico offre un aroma delicato, foglie tenere e l'autentico sapore della tradizione ligure.",
        image: "/images/im2.jpg",
      },
      {
        name: "Finocchio Fresco",
        description:
          "Finocchio fresco, aromatico e croccante, dal gusto delicato e leggermente dolce, ideale per insalate, contorni e ricette mediterranee.",
        image: "/images/im6.jpg",
      },
      {
        name: "Radicchio Rosso",
        description:
          "Radicchio fresco e croccante dal caratteristico sapore leggermente amaro, perfetto per insalate e piatti gourmet.",
        image: "/images/im5.jpg",
      },
      {
        name: "Zucchine",
        description:
          "Zucchine fresche e tenere, dal sapore delicato e versatile, perfette per grigliate, contorni, zuppe e ricette mediterranee.",
        image: "/images/im15.jpeg",
      },
      {
        name: "Broccoli Freschi",
        description:
          "Broccoli nutrienti e saporiti, ricchi di vitamine e coltivati con cura per garantire la massima qualità.",
        image: "/images/im8.jpg",
      },
    ],

    en: [
      {
        name: "Lemons",
        description:
          "Grown in the Mediterranean climate of Liguria, our lemons are known for their vibrant aroma, natural freshness, and exceptional quality.",
        image: "/images/im1.jpg",
      },
      {
        name: "Genovese DOP Basil",
        description:
          "Grown in the hills of Voltri following official DOP regulations, our basil offers a delicate aroma, tender leaves, and the authentic taste of Ligurian tradition.",
        image: "/images/im2.jpg",
      },
      {
        name: "Fresh Fennel",
        description:
          "Fresh, aromatic, and crunchy fennel with a delicate, slightly sweet flavor, ideal for salads, side dishes, and Mediterranean recipes.",
        image: "/images/im6.jpg",
      },
      {
        name: "Red Radicchio",
        description:
          "Fresh and crisp radicchio with a distinctive slightly bitter flavor, perfect for salads and gourmet dishes.",
        image: "/images/im5.jpg",
      },
      {
        name: "Zucchini",
        description:
          "Fresh and tender zucchini with a delicate flavor and versatile use, perfect for grilling, side dishes, soups, and Mediterranean recipes.",
        image: "/images/im15.jpeg",
      },
      {
        name: "Fresh Broccoli",
        description:
          "Nutritious and flavorful broccoli, rich in vitamins and carefully grown to ensure the highest quality.",
        image: "/images/im8.jpg",
      },
    ],
  },
};

export const servicesContent = {
  subtitle: { it: "Le nostre offerte", en: "Our Offerings" },
  heading: {
    it: "Oltre l'agricoltura.\nUn viaggio culinario.",
    en: "Beyond Farming.\nA Culinary Journey.",
  },
  description: {
    it: "Dalle radici della nostra tradizione al cuore della tua casa, offriamo servizi che celebrano la purezza dell'agricoltura italiana.",
    en: "From the roots of our heritage to the heart of your home, we provide services that celebrate the purity of Italian agriculture.",
  },
  items: {
    it: [
      {
        title: "Coltivazione artigianale",
        description:
          "Specializzati nel delicato Basilico Genovese, coltivato in terreni ricchi di minerali con metodi liguri tradizionali.",
      },
      {
        title: "Ceste di prodotti",
        description:
          "Una selezione settimanale dei nostri migliori raccolti stagionali, confezionata con prodotti mediterranei artigianali.",
      },
      {
        title: "Consegna all'alba",
        description:
          "Distribuzione locale esclusiva entro poche ore dalla raccolta, per portare il profumo dei campi direttamente in cucina.",
      },
    ],
    en: [
      {
        title: "Artisanal Cultivation",
        description:
          "We specialize in the delicate 'Basilico Genovese', grown in mineral-rich soil using traditional Ligurian methods to ensure the highest essential oil content.",
      },
      {
        title: "Curated Farm Boxes",
        description:
          "A weekly selection of our finest seasonal harvests, hand-picked and paired with artisanal Mediterranean staples for the discerning palate.",
      },
      {
        title: "The Dawn Delivery",
        description:
          "Exclusive local distribution within hours of harvest. We ensure that the fragrance of our fields reaches your kitchen before the morning dew fades.",
      },
    ],
  },
  cta: { it: "Scopri di più", en: "Learn More" },
};

export const galleryContent = {
  heading: { it: "Galleria della fattoria", en: "Farm Gallery" },
  description: {
    it: "Fai un viaggio visivo nella nostra azienda agricola e scopri la cura dietro ogni raccolto.",
    en: "Take a visual journey through our farm and see the care that goes into every harvest.",
  },
};

export const contactContent = {
  heading: { it: "Mettiti in contatto", en: "Get In Touch" },
  description: {
    it: "Hai domande sui nostri prodotti o servizi? Saremo felici di sentirti.",
    en: "Have questions about our products or services? We'd love to hear from you.",
  },
  visitTitle: { it: "Visita la nostra azienda", en: "Visit Our Farm" },
  callTitle: { it: "Chiamaci", en: "Call Us" },
  emailTitle: { it: "Scrivici", en: "Email Us" },
  form: {
    name: { it: "Nome completo", en: "Full Name" },
    email: { it: "Indirizzo email", en: "Email Address" },
    phone: { it: "Numero di telefono", en: "Phone Number" },
    message: { it: "Messaggio", en: "Message" },
    submit: { it: "Invia messaggio", en: "Send Message" },
    namePlaceholder: { it: "Mario Rossi", en: "John Doe" },
    emailPlaceholder: { it: "mario@esempio.it", en: "john@example.com" },
    phonePlaceholder: { it: "+39 379 112 6068", en: "+39 379 112 6068" },
    messagePlaceholder: {
      it: "Raccontaci della tua richiesta...",
      en: "Tell us about your inquiry...",
    },
    userAlert: {
      it: "Grazie per averci contattato! Ti risponderemo a breve.",
      en: "Thank you for contacting us! We'll get back to you soon.",
    },
  },
};

export const footerContent = {
  description: {
    it: "Azienda agricola italiana che consegna coltivazioni pregiate con pratiche sostenibili e metodi tradizionali nel cuore del Basilico.",
    en: "Italian family farm delivering premium crops using sustainable practices and traditional farming methods in the heart of Basilico.",
  },
  sections: {
    company: [
      { label: { it: "Chi siamo", en: "About Us" }, href: "#about" },
      { label: { it: "La nostra storia", en: "Our Story" }, href: "#about" },
    ],
    products: [
      {
        label: { it: "Prodotti freschi", en: "Fresh Produce" },
        href: "#products",
      },
      {
        label: { it: "Prodotti stagionali", en: "Seasonal Items" },
        href: "#products",
      },
      { label: { it: "Cesti regalo", en: "Gift Baskets" }, href: "#products" },
      { label: { it: "Ingrosso", en: "Wholesale" }, href: "#" },
    ],
    resources: [
      { label: { it: "Ricette", en: "Recipes" }, href: "#blog" },
      {
        label: { it: "Guida alla coltivazione", en: "Growing Guide" },
        href: "#blog",
      },
      { label: { it: "FAQ", en: "FAQ" }, href: "#" },
    ],
  },
  copyright: {
    it: "Tutti i diritti riservati.",
    en: "All rights reserved.",
  },
  craftedBy: {
    it: "Realizzato e sviluppato da",
    en: "Crafted & Developed by",
  },
  privacy: { it: "Privacy", en: "Privacy Policy" },
  terms: { it: "Termini", en: "Terms of Service" },
};

export const languageLabels = {
  switchToEnglish: { it: "English", en: "Italiano" },
  ariaToggle: { it: "Cambia lingua", en: "Toggle language" },
};
