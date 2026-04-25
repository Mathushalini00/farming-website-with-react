"use client";

import { FiShoppingBag, FiTruck, FiLayers } from "react-icons/fi";
import { useLanguage } from "./language-provider";
import { servicesContent } from "./i18n";

export function Services() {
  const { language } = useLanguage();
  const services = servicesContent.items[language];

  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-background transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4">
              {servicesContent.subtitle[language]}
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground leading-tight">
              {servicesContent.heading[language]}
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-lg leading-relaxed">
            {servicesContent.description[language]}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-border overflow-hidden rounded-3xl border border-border">
          {services.map((service, index) => {
            const Icon = [FiLayers, FiShoppingBag, FiTruck][index];
            return (
              <div
                key={index}
                className="group relative p-10 md:p-12 bg-card hover:bg-muted/50 transition-all duration-500 flex flex-col justify-between"
              >
                <span className="absolute top-8 right-8 text-5xl font-serif text-muted-foreground/10 group-hover:text-primary/20 transition-colors duration-500">
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-full h-full" />
                  </div>

                  <h3 className="text-2xl font-serif font-medium text-card-foreground mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {service.description}
                  </p>
                </div>

                <div className="mt-12 flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-foreground opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  {servicesContent.cta[language]}
                  <span className="text-primary">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
