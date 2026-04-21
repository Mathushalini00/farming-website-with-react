import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google"; // Changed for a more premium Italian feel
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

// Elegant Serif for Italian brand authority
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// Clean Sans for readability
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // SEO Tip: Put the brand name at the end for specific pages, but keep it first for the Home
  title: "Azienda Agricola Serrea | Eccellenza del Basilico e Agricoltura Bio",
  description:
    "Azienda Agricola Serrea: eccellenza agricola italiana nel cuore di Basilio. Produciamo basilico biologico e prodotti agricoli freschi con metodi tradizionali e sostenibili.",
  keywords: [
    "basilico biologico",
    "azienda agricola Basilio",
    "agricoltura sostenibile",
    "prodotti tipici liguri",
    "organic italian farm",
    "Serrea agricoltura",
  ],
  // Adding OpenGraph ensures your site looks premium when shared on WhatsApp/Social Media
  openGraph: {
    title: "Azienda Agricola Serrea - Tradizione e Qualità",
    description:
      "Dalla terra alla tavola: il miglior basilico biologico italiano.",
    url: "https://serreafarm.it",
    siteName: "Azienda Agricola Serrea",
    locale: "it_IT",
    type: "website",
  },
  alternates: {
    canonical: "https://serreafarm.it",
  },
  generator: "Next.js", // Replaced v0 for cleaner meta info
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Lang set to "it" for local SEO, or "en" if you are targeting international exports
    <html lang="it" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AgricultureService", // More specific than LocalBusiness
              name: "Azienda Agricola Serrea",
              description:
                "Produzione di basilico biologico e prodotti agricoli d'eccellenza con metodi tradizionali italiani.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Via Agricola 123",
                addressLocality: "Basilio",
                addressRegion: "IT",
                postalCode: "12345",
                addressCountry: "IT",
              },
              telephone: "+39-123-456-7890",
              email: "info@serreafarm.it",
              url: "https://serreafarm.it",
              image: "https://serreafarm.it/images/logo.png",
              priceRange: "$$",
              openingHours: "Mo-Sa 08:00-18:00",
              sameAs: [
                "https://www.facebook.com/serreafarm",
                "https://www.instagram.com/serreafarm",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-serrea-cream text-serrea-green min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          {/* Add a simple footer here or as a component */}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
