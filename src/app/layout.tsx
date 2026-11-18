import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileContactBar } from "@/components/layout/MobileContactBar";
import { business } from "@/config/business";
import { localBusinessJsonLd } from "@/lib/seo";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.websiteUrl),
  title: {
    default: `${business.businessName} — Textile & Clothing Store in Rameswaram`,
    template: `%s | ${business.businessName}`,
  },
  description: business.businessDescription,
  keywords: [
    "Sri Saravana's Textiles",
    "Sri Saravana Textiles Rameswaram",
    "Textile shop in Rameswaram",
    "Clothing shop in Rameswaram",
    "Dress shop in Rameswaram",
    "Readymade garments in Rameswaram",
    "Saree shop Rameswaram",
    "Textile shopping in Rameswaram",
  ],
  authors: [{ name: business.businessName }],
  creator: business.businessName,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${business.businessName} — Textile & Clothing Store in Rameswaram`,
    description: business.businessDescription,
    url: business.websiteUrl,
    siteName: business.businessName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero/sri-saravana-textile-display.webp",
        width: 2000,
        height: 1125,
        alt: "Textiles on display inside Sri Saravana's Textiles, Rameswaram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.businessName} — Textile & Clothing Store in Rameswaram`,
    description: business.businessDescription,
    images: ["/images/hero/sri-saravana-textile-display.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8b500" },
    { media: "(prefers-color-scheme: dark)", color: "#302312" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable}`}
    >
      <head>
        <noscript>
          <style>{`.scroll-reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileContactBar />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
