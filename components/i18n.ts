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
  description: {
    it: "Vivi l'autentica agricoltura italiana nel cuore del basilico. La nostra azienda a conduzione familiare unisce metodi tradizionali a pratiche sostenibili per offrirti i migliori prodotti della terra.",
    en: "Experience authentic Italian farming in the heart of Basilico. Our family-owned farm combines traditional methods with sustainable practices to bring you the finest farm products.",
  },
  primaryButton: { it: "Scopri di più", en: "Learn More" },
  secondaryButton: { it: "I nostri prodotti", en: "Our Products" },
};

export const aboutContent = {
  subtitle: { it: "La nostra essenza", en: "Our Essence" },
  heading: {
    it: "Basilico: Il cuore dell'eccellenza italiana.",
    en: "Basilico: The Heart of Italian Excellence.",
  },
  paragraphs: {
    it: [
      "Nelle colline di Genova, il basilico è più di un'erba: è simbolo di ospitalità, salute e patrimonio. Dal 2024, la famiglia Serrea coltiva questo 're delle erbe' insieme a una selezione curata.",
      "La nostra filosofia è semplice: la natura non ha bisogno di correzioni. Nutrendo il terreno del nostro podere ancestrale, produciamo ingredienti che portano il profumo della brezza mediterranea e il calore del sole italiano.",
    ],
    en: [
      "In the rolling hills of Genova, Basilico is more than a herb—it is a symbol of hospitality, health, and heritage. Since 2024, the Serrea family has cultivated this 'King of Herbs' alongside a curated selection.",
      "Our philosophy is simple: nature needs no correction. By nurturing the soil of our ancestral farm, we produce ingredients that carry the fragrance of the Mediterranean breeze and the warmth of the Italian sun.",
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
          "Limoni freschi e profumati, perfetti per succhi e ricette mediterranee.",
        image: "/images/im1.jpg",
      },
      {
        name: "Basilico",
        description:
          "Foglie aromatiche dal profumo intenso, ideali per piatti italiani e guarnizioni fresche.",
        image: "/images/im2.jpg",
      },
      {
        name: "Mais dolce",
        description:
          "Mais tenero e dolce, raccolto al punto giusto di maturazione.",
        image: "/images/im4.jpg",
      },
      {
        name: "Carote",
        description: "Carote croccanti e dolci, ricche di nutrienti.",
        image: "/images/im5.jpg",
      },
      {
        name: "Peperoni",
        description: "Peperoni colorati dal sapore dolce e croccante.",
        image: "/images/im6.jpg",
      },
      {
        name: "Mazzo di erbe fresche",
        description:
          "Un assortimento aromatico di basilico, prezzemolo e altre erbe fresche.",
        image: "/images/im7.jpg",
      },
    ],
    en: [
      {
        name: "Lemons",
        description:
          "Fresh, zesty lemons packed with vibrant citrus flavor, perfect for juices and cooking",
        image: "/images/im1.jpg",
      },
      {
        name: "Basilico",
        description:
          "Aromatic basil leaves with a rich, herbal fragrance, ideal for Italian dishes and fresh garnishes",
        image: "/images/im2.jpg",
      },
      {
        name: "Sweet Corn",
        description: "Sweet, tender corn picked at peak freshness",
        image: "/images/im4.jpg",
      },
      {
        name: "Carrots",
        description: "Crunchy, sweet carrots rich in nutrients",
        image: "/images/im5.jpg",
      },
      {
        name: "Bell Peppers",
        description: "Colorful peppers with a crisp, sweet taste",
        image: "/images/im6.jpg",
      },
      {
        name: "Fresh Herbs Bundle",
        description: "Aromatic herbs including basil, parsley, and cilantro",
        image: "/images/im7.jpg",
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
