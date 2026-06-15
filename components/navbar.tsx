"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "./theme-provider";
import { useLanguage } from "./language-provider";
import { navbarLinks, languageLabels } from "./i18n";
import Logo from "../public/images/azserrea.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 dark:bg-background/95 border-b border-border/30 shadow-lg backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center h-full">
            <div className="relative w-24 h-18 md:w-32 md:h-20 transition-transform duration-500 group-hover:scale-105">
              <Image
                src={Logo}
                alt="Azienda Agricola Serrea Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            {navbarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-widest text-foreground hover:text-primary transition-colors relative group"
              >
                {link.label[language]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-serrea-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <button
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-full border border-border/30 bg-card/70 text-foreground text-sm font-semibold hover:bg-muted/60 transition-colors"
              aria-label={languageLabels.ariaToggle[language]}
            >
              {language === "it" ? "EN" : "IT"}
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 ml-2 rounded-full bg-card/70 hover:bg-muted/60 transition-colors border border-border/30"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <FiMoon className="w-5 h-5 text-foreground" />
              ) : (
                <FiSun className="w-5 h-5 text-primary" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLanguage}
              className="p-2 text-foreground"
              aria-label={languageLabels.ariaToggle[language]}
            >
              {language === "it" ? "EN" : "IT"}
            </button>
            <button onClick={toggleTheme} className="p-2 text-foreground">
              {theme === "light" ? (
                <FiMoon className="w-5 h-5 text-foreground" />
              ) : (
                <FiSun className="w-5 h-5 text-primary" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
            >
              {isOpen ? (
                <FiX className="w-7 h-7" />
              ) : (
                <FiMenu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border/30 bg-background/95">
          <div className="px-4 py-6 space-y-4">
            {navbarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-lg font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label[language]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
