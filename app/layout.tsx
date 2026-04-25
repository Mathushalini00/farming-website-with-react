import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";

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
                streetAddress: "Via Serrea 16",
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
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            {/* <Footer /> */}
          </LanguageProvider>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
