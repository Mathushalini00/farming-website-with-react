import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Azienda Agricola Serrea - Fresh & Organic Italian Farming",
  description:
    "Azienda Agricola Serrea - Italian family farm delivering premium organic crops and agricultural products. Sustainable farming practices with traditional Italian methods.",
  keywords: [
    "italian farming",
    "organic farming",
    "fresh crops",
    "agricultural products",
    "sustainable farming",
    "italian agriculture",
    "farm fresh produce",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Azienda Agricola Serrea",
              description: "Italian family farm with sustainable organic farming practices and traditional methods",
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
              image: "https://serreafarm.it/logo.png",
              priceRange: "$$",
              openingHours: "Mo-Sa 08:00-18:00",
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
