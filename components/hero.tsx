"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiAward,
  FiFeather,
  FiFlag,
  FiMapPin,
} from "react-icons/fi";

import { useLanguage } from "./language-provider";
import { heroContent, heroTrustIndicators } from "./i18n";
import HeroImage from "../public/images/im2.jpg";

const trustIcons = {
  award: FiAward,
  leaf: FiFeather,
  map: FiMapPin,
  flag: FiFlag,
} as const;

type TrustIconKey = keyof typeof trustIcons;

export default function Hero() {
  const { language } = useLanguage();

  return (
    <>
      <section
        id="home"
        aria-labelledby="hero-heading"
        className="relative min-h-[min(100vh,900px)] flex items-center overflow-hidden pt-20 md:pt-24"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src={HeroImage}
            alt={heroContent.imageAlt[language]}
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105 motion-safe:transition-transform motion-safe:duration-[12s] ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-serrea-cream" />

          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            aria-hidden
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c8 12 8 22 0 35-8-13-8-23 0-35z' fill='%23ffffff'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <p className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm text-serrea-cream text-xs sm:text-sm font-medium tracking-wide mb-6">
                <span aria-hidden="true">🏅</span>
                {heroContent.certificationBadge[language]}
              </p>

              <h1
                id="hero-heading"
                className="animate-fade-in-delay font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15] mb-5 tracking-tight"
              >
                {heroContent.headline[language]}
              </h1>

              <p className="animate-fade-in-delay text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-4 font-medium">
                {heroContent.subtitle[language]}
              </p>

              <p className="animate-fade-in-delay-2 text-base md:text-lg text-white/75 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                {heroContent.description[language]}
              </p>

              <div className="animate-fade-in-delay-2 flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="#products"
                  className="group inline-flex items-center justify-center gap-3 bg-serrea-cream text-serrea-green px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {heroContent.primaryButton[language]}
                  <FiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white/80 text-white hover:bg-white/10 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {heroContent.secondaryButton[language]}
                </Link>
              </div>
            </div>

            <aside
              className="animate-fade-in-delay-3 lg:col-span-5 flex justify-center lg:justify-end"
              aria-label={
                language === "it"
                  ? "Certificazione Basilico Genovese DOP"
                  : "Basilico Genovese DOP Certification"
              }
            >
              <div className="w-full max-w-sm rounded-2xl border border-white/30 bg-white/95 backdrop-blur-md shadow-2xl p-6 md:p-8 text-serrea-green transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] hover:-translate-y-1">
                <p className="flex items-center gap-2 text-lg font-serif font-semibold mb-4 pb-4 border-b border-serrea-green/10">
                  <span aria-hidden="true">🏅</span>
                  {heroContent.floatingCard.title[language]}
                </p>

                <ul className="space-y-4 text-sm md:text-base">
                  <li className="flex items-center gap-3">
                    <span aria-hidden="true">📍</span>
                    <span className="font-medium">
                      {heroContent.floatingCard.location[language]}
                    </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <span aria-hidden="true">🌿</span>
                    <span className="font-medium">
                      {heroContent.floatingCard.quality[language]}
                    </span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        aria-label={
          language === "it" ? "Indicatori di qualità" : "Quality indicators"
        }
        className="relative z-20 bg-white/95 border-y border-serrea-green/10 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {heroTrustIndicators.map((item) => {
              const Icon = trustIcons[item.icon as TrustIconKey];

              return (
                <li
                  key={item.icon}
                  className="group flex flex-col items-center text-center p-4 md:p-5 rounded-xl bg-serrea-cream/50 border border-serrea-green/5 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-serrea-leaf/20"
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-serrea-green/10 text-serrea-green mb-3 transition-colors duration-300 group-hover:bg-serrea-green group-hover:text-serrea-cream">
                    <Icon className="w-5 h-5" aria-hidden />
                  </span>

                  <span className="font-serif font-semibold text-serrea-green text-sm md:text-base leading-snug mb-1">
                    {item.label[language]}
                  </span>

                  <span className="text-xs md:text-sm text-serrea-green/65 leading-relaxed">
                    {item.description[language]}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
