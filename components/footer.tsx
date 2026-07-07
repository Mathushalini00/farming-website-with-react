"use client";

import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaTiktok, FaThreads } from "react-icons/fa6";
import { useLanguage } from "./language-provider";
import { footerContent } from "./i18n";

export function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-4">
              <div className="relative w-28 h-20 md:w-36 md:h-24 transition-transform duration-500 hover:scale-105">
                <Image
                  src="/images/azserrea.png"
                  alt="Azienda Agricola Serrea Logo"
                  fill
                  priority
                  sizes="(max-width: 768px) 112px, 144px"
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-md">
              {footerContent.description[language]}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61577135920132"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/az.serrea/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.tiktok.com/@aziendaserrea.202"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="w-5 h-5" />
              </a>

              <a
                href="https://www.threads.com/@az.serrea"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                aria-label="Threads"
              >
                <FaThreads className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {language === "it" ? "Azienda" : "Company"}
            </h3>
            <ul className="space-y-2">
              {footerContent.sections.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {language === "it" ? "Prodotti" : "Products"}
            </h3>
            <ul className="space-y-2">
              {footerContent.sections.products.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {language === "it" ? "Risorse" : "Resources"}
            </h3>
            <ul className="space-y-2">
              {footerContent.sections.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2 text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Azienda Agricola Serrea.{" "}
              {footerContent.copyright[language]}
            </p>

            <p className="text-sm text-muted-foreground">
              {footerContent.craftedBy[language]}{" "}
              <span className="font-medium text-foreground">
                MathuS <span className="text-green-500">💚</span>
              </span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {footerContent.privacy[language]}
            </Link>

            <Link
              href="/terms-and-conditions"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {footerContent.terms[language]}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
