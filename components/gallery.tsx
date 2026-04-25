"use client";

import { useLanguage } from "./language-provider";
import { galleryContent } from "./i18n";

export function Gallery() {
  const { language } = useLanguage();
  const images = [
    { url: "/images/im13.jpeg", alt: "Campi coltivati" },
    { url: "/images/im4.jpg", alt: "Contadino che raccoglie verdure fresche" },
    { url: "/images/im5.jpg", alt: "Serra con piante rigogliose" },
    { url: "/images/im6.jpg", alt: "Cesto di prodotti freschi" },
    { url: "/images/im14.jpeg", alt: "Trattore nei campi" },
    { url: "/images/im8.jpg", alt: "Banco del mercato agricolo" },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {galleryContent.heading[language]}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            {galleryContent.description[language]}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={image.url || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
