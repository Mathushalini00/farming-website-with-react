import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

// Elegant fonts for a premium Italian brand
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // CRITICAL: Leading with the brand name for #1 search ranking
  title: {
    default: "Azienda Agricola Serrea | Official Website",
    template: "%s | Azienda Agricola Serrea",
  },
  description:
    "Official website of Azienda Agricola Serrea. Premium organic Italian farming in Basilio, specializing in traditional basil cultivation and sustainable products.",
  keywords: [
    "Azienda Agricola Serrea",
    "Serrea Basilico",
    "Agricola Serrea",
    "basilico italiano",
    "basilico genova",
    "Serrea Farm",
    "Organic Italian Farm",
    "Basilico Biologico",
    "Sustainable Agriculture Italy",
    "Italian Farm Fresh Produce",
  ],
  // Replace with your actual deployed domain for canonical SEO
  metadataBase: new URL("https://www.serreafarm.it"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/azserrea.png",
    apple: "/images/azserrea.png",
  },
  openGraph: {
    title: "Azienda Agricola Serrea | Official Website",
    description: "Premium Organic Italian Farming & Traditional Heritage.",
    url: "https://www.serreafarm.it",
    siteName: "Azienda Agricola Serrea",
    images: [
      {
        url: "/images/azserrea.png", // Your logo appears when shared
        width: 1200,
        height: 630,
        alt: "Azienda Agricola Serrea Logo",
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
        {/* JSON-LD Structured Data: Tells Google this is a verified business Entity */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AgricultureService",
              name: "Azienda Agricola Serrea",
              alternateName: "Serrea basilico",
              url: "https://www.serreafarm.it",
              logo: "https://www.serreafarm.it/images/azserrea.png",
              image: "https://www.serreafarm.it/images/azserrea.png",
              description:
                "Traditional Italian family farm specializing in organic basil and sustainable crops.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Via Agricola 16",
                addressLocality: "Basilico",
                addressRegion: "IT",
                postalCode: "12345",
                addressCountry: "IT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 44.4056, // Example: Update with your exact coordinates
                longitude: 8.9463,
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
                "https://www.instagram.com/aziendaagricolaserrea", // Replace with actual links
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
          {/* Universal Navbar */}
          <Navbar />

          <main className="flex-grow">{children}</main>

          {/* Footer with NAP (Name, Address, Phone) for Local SEO */}
          <footer className="bg-[#1f3400] text-white py-16 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
              <div className="md:col-span-2">
                <h3 className="font-serif text-2xl mb-6 text-serrea-gold">
                  Azienda Agricola Serrea
                </h3>
                <p className="text-sm opacity-70 leading-relaxed max-w-sm mx-auto md:mx-0">
                  Preserving the legacy of Italian agriculture through
                  sustainable organic farming and the world-renowned aroma of
                  Basilico basil.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-serrea-gold mb-6 uppercase tracking-widest text-xs">
                  Navigation
                </h4>
                <ul className="space-y-3 text-sm opacity-80">
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
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#products"
                      className="hover:text-serrea-gold transition-colors"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-serrea-gold transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-serrea-gold mb-6 uppercase tracking-widest text-xs">
                  Contact Us
                </h4>
                <address className="not-italic text-sm opacity-80 space-y-3">
                  <p>Via serrea 15, 16158 genova</p>
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
