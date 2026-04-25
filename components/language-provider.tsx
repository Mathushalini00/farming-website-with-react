"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "it" | "en";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("it");

  useEffect(() => {
    const stored = window.localStorage.getItem("preferredLanguage");
    if (stored === "en" || stored === "it") {
      setLanguageState(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("preferredLanguage", language);
  }, [language]);

  const setLanguage = (language: Language) => {
    setLanguageState(language);
  };

  const toggleLanguage = () => {
    setLanguageState((current) => (current === "it" ? "en" : "it"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
