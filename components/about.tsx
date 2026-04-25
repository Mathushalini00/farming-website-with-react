"use client";

import { FiCheck, FiAward, FiHeart, FiUsers } from "react-icons/fi";
import Image from "next/image";
import AboutUs from "../public/images/about.jpeg";
import { useLanguage } from "./language-provider";
import { aboutContent } from "./i18n";

export function About() {
  const { language } = useLanguage();
  const values = aboutContent.values[language];
  const icons = [FiAward, FiHeart, FiUsers, FiCheck];

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-background transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative group">
            <div className="aspect-square rounded-2xl bg-muted overflow-hidden shadow-2xl">
              <Image
                src={AboutUs}
                alt="La nostra eredità"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-xl border-4 border-background">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80">
                {aboutContent.badge[language]}
              </span>
              <span className="text-2xl font-serif font-bold">2024</span>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-primary font-semibold tracking-[0.2em] uppercase text-sm italic">
              {aboutContent.subtitle[language]}
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground leading-tight">
              {aboutContent.heading[language]}
            </h2>
            {aboutContent.paragraphs[language].map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            <div className="pt-4">
              <button className="relative group text-foreground font-semibold uppercase text-sm tracking-widest">
                <span className="relative z-10">
                  {aboutContent.actionLabel[language]}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-medium text-card-foreground mb-3 font-serif">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
