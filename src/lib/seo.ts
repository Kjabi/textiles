import type { Metadata } from "next";
import { business } from "@/config/business";
import { integrations } from "@/config/integrations";

export const siteUrl = business.websiteUrl;
export const siteName = business.businessName;

interface BuildMetadataInput {
  title: string;
  description: string;
  path?: string;
}

export function buildMetadata({ title, description, path = "/" }: BuildMetadataInput): Metadata {
  const canonicalUrl = new URL(path, siteUrl).toString();

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: [
      "Sri Saravana's Textiles",
      "Sri Saravana Textiles Rameswaram",
      "Textile shop in Rameswaram",
      "Clothing shop in Rameswaram",
      "Dress shop in Rameswaram",
      "Readymade garments in Rameswaram",
      "Textile shopping in Rameswaram",
    ],
    authors: [{ name: business.businessName }],
    creator: business.businessName,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function pageMetadata({ title, description, path = "/" }: BuildMetadataInput): Metadata {
  return buildMetadata({ title, description, path });
}

export function localBusinessJsonLd() {
  const openingHours = Object.entries(business.openingHours).map(
    ([day, time]) => `${day}: ${time}`,
  );

  const socialLinks = Object.values(business.socialLinks).filter(
    (link): link is string => Boolean(link),
  );

  return {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: business.businessName,
    description: business.businessDescription,
    telephone: business.telephone,
    url: siteUrl,
    ...(integrations.ownerEmail ? { email: integrations.ownerEmail } : {}),
    ...(socialLinks.length > 0 ? { sameAs: socialLinks } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.postalCode,
      addressCountry: business.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.latitude,
      longitude: business.longitude,
    },
    // Hours are only published as structured data once the owner has
    // confirmed them, so search engines never receive unverified times.
    ...(business.openingHoursConfirmed ? { openingHours } : {}),
  };
}
