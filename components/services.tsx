"use client";

import { FiShoppingBag, FiTruck, FiLayers, FiCalendar } from "react-icons/fi";

export function Services() {
  const services = [
    {
      icon: FiLayers,
      title: "Artisanal Cultivation",
      description:
        "We specialize in the delicate 'Basilico Genovese', grown in mineral-rich soil using traditional Ligurian methods to ensure the highest essential oil content.",
    },
    {
      icon: FiShoppingBag,
      title: "Curated Farm Boxes",
      description:
        "A weekly selection of our finest seasonal harvests, hand-picked and paired with artisanal Mediterranean staples for the discerning palate.",
    },
    {
      icon: FiTruck,
      title: "The Dawn Delivery",
      description:
        "Exclusive local distribution within hours of harvest. We ensure that the fragrance of our fields reaches your kitchen before the morning dew fades.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-background transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4">
              Our Offerings
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground leading-tight">
              Beyond Farming. <br />
              <span className="italic text-muted-foreground/80 dark:text-muted-foreground">
                A Culinary Journey.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-lg leading-relaxed">
            From the roots of our heritage to the heart of your home, we provide
            services that celebrate the purity of Italian agriculture.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border overflow-hidden rounded-3xl border border-border">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-10 md:p-14 bg-card hover:bg-muted/50 transition-all duration-500"
              >
                {/* Decorative Number for a premium editorial look */}
                <span className="absolute top-10 right-10 text-5xl font-serif text-muted-foreground/10 group-hover:text-primary/20 transition-colors duration-500">
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-full h-full" />
                  </div>

                  <h3 className="text-2xl font-serif font-medium text-card-foreground mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-balance">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-foreground opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    Learn More
                    <span className="text-primary">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
