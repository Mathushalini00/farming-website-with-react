import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Azienda Agricola Serrea | Basilico Genovese e Prodotti Tipici",
    template: "%s | Azienda Agricola Serrea",
  },
  description:
    "Sito ufficiale dell'Azienda Agricola Serrea a Genova. Eccellenza nella produzione di basilico genovese biologico e agricoltura sostenibile in Liguria.",
  keywords: [
    "Azienda Agricola Serrea",
    "Serrea Basilico Genova",
    "Basilico Genovese",
    "Agricoltura Biologica Liguria",
    "Prodotti tipici liguri",
    "Organic Farm Genova",
    "Serrea Farm Italy",
  ],
  metadataBase: new URL("https://www.serreafarm.it"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/azserrea.png",
    apple: "/images/azserrea.png",
  },
  openGraph: {
    title: "Azienda Agricola Serrea | Eccellenza Ligure",
    description:
      "Produzione tradizionale di basilico e agricoltura biologica a Genova.",
    url: "https://www.serreafarm.it",
    siteName: "Azienda Agricola Serrea",
    images: [
      {
        url: "/images/azserrea.png",
        width: 1200,
        height: 630,
        alt: "Logo Azienda Agricola Serrea",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AgricultureService",
              "@id": "https://www.serreafarm.it/#organization",
              name: "Azienda Agricola Serrea",
              alternateName: "Serrea Basilico Genova",
              url: "https://www.serreafarm.it",
              logo: "https://www.serreafarm.it/images/azserrea.png",
              image: "https://www.serreafarm.it/images/azserrea.png",
              description:
                "Azienda agricola specializzata nella produzione di Basilico Genovese e colture sostenibili a Genova.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Via Serrea 15",
                addressLocality: "Genova",
                addressRegion: "GE",
                postalCode: "16158",
                addressCountry: "IT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 44.437,
                longitude: 8.765,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
              sameAs: [
                "https://www.instagram.com/aziendaagricolaserrea",
                "https://www.facebook.com/aziendaagricolaserrea",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-serrea-cream text-serrea-green min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <Navbar />

          <main className="flex-grow">{children}</main>

          <footer className="bg-[#1f3400] text-white py-16 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
              <div className="md:col-span-2">
                <h3 className="font-serif text-2xl mb-6 text-serrea-gold">
                  Azienda Agricola Serrea
                </h3>
                <p className="text-sm opacity-70 leading-relaxed max-w-sm mx-auto md:mx-0">
                  Preserviamo l'eredità dell'agricoltura ligure attraverso
                  metodi biologici sostenibili e l'aroma inconfondibile del
                  nostro Basilico Genovese.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-serrea-gold mb-6 uppercase tracking-widest text-xs">
                  Menu
                </h4>
                <ul className="space-y-3 text-sm opacity-80 font-medium">
                  <li>
                    <a
                      href="#home"
                      className="hover:text-serrea-gold transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="hover:text-serrea-gold transition-colors"
                    >
                      Chi Siamo
                    </a>
                  </li>
                  <li>
                    <a
                      href="#products"
                      className="hover:text-serrea-gold transition-colors"
                    >
                      Prodotti
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-serrea-gold transition-colors"
                    >
                      Contatti
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-serrea-gold mb-6 uppercase tracking-widest text-xs">
                  Contattaci
                </h4>
                <address className="not-italic text-sm opacity-80 space-y-3">
                  <p>Via Serrea 15, 16158 Genova (GE)</p>
                  <p>+39 123 456 7890</p>
                  <p>info@serreafarm.it</p>
                </address>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-white/5 text-center text-[10px] uppercase tracking-[0.2em] opacity-40">
              © 2026 Azienda Agricola Serrea | P.IVA 0123456789
            </div>
          </footer>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
