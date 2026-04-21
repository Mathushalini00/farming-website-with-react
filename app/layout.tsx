import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

// Fonts: Playfair for a premium Italian feel, Inter for clean UI
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Azienda Agricola Serrea | Fresh & Organic Italian Farming",
  description:
    "Azienda Agricola Serrea - Italian family farm delivering premium organic crops and agricultural products using sustainable methods in Basilio.",
  keywords: [
    "italian farming",
    "organic farming",
    "basilico biologico",
    "azienda agricola Basilio",
    "sustainable agriculture",
  ],
  metadataBase: new URL("https://serreafarm.it"), // Replace with your actual domain
  // LOGO & FAVICON CONFIGURATION
  icons: {
    icon: "/images/azserrea.png",
    shortcut: "/images/azserrea.png",
    apple: "/images/azserrea.png",
  },
  // SOCIAL MEDIA PREVIEW (OpenGraph)
  openGraph: {
    title: "Azienda Agricola Serrea - Tradizione e Qualità",
    description:
      "Experience authentic Italian farming and premium organic products.",
    url: "https://serreafarm.it",
    siteName: "Azienda Agricola Serrea",
    images: [
      {
        url: "/images/azserrea.png",
        width: 1200,
        height: 630,
        alt: "Azienda Agricola Serrea Logo",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* SEO: JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AgricultureService",
              name: "Azienda Agricola Serrea",
              description:
                "Premium organic Italian farm specializing in traditional agricultural methods.",
              image: "https://serreafarm.it/images/azserrea.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Via Agricola 123",
                addressLocality: "Basilio",
                addressRegion: "IT",
                postalCode: "12345",
                addressCountry: "IT",
              },
              telephone: "+39-123-456-7890",
              url: "https://serreafarm.it",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-serrea-cream text-serrea-green min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* The Navbar now sits at the top of every page */}
          <Navbar />

          <main className="flex-grow">{children}</main>

          {/* Simple Footer for SEO & Navigation */}
          <footer className="bg-[#1f3400] text-white py-12 px-4 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="font-serif text-xl mb-4 text-serrea-gold">
                  Serrea
                </h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  Coltiviamo passione e tradizione nel cuore di Basilio dal
                  1920.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Contatti</h4>
                <p className="text-sm opacity-80">
                  Via Agricola 123, Basilio (IT)
                </p>
                <p className="text-sm opacity-80">info@serreafarm.it</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Orari</h4>
                <p className="text-sm opacity-80">Lun - Sab: 08:00 - 18:00</p>
                <p className="text-sm opacity-80">Domenica: Chiuso</p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs opacity-50">
              © 2026 Azienda Agricola Serrea. All rights reserved.
            </div>
          </footer>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
