import type { BusinessInfo } from "@/types/business";

/**
 * Central, single source of truth for all business information.
 * Update values here after confirming details with the shop owner.
 */
export const business: BusinessInfo = {
  businessName: "SRI SARAVANA'S TEXTILES",
  businessDescription:
    "Sri Saravana's Textiles is a textile and clothing store located on Middle Street, Rameswaram, Tamil Nadu. Explore clothing and textile collections at our shop, and visit us to see what is currently available.",
  telephone: "+91 99446 87843",
  telephoneConfirmed: false,
  address: "5, Middle St",
  city: "Rameswaram",
  state: "Tamil Nadu",
  postalCode: "623526",
  country: "India",
  latitude: 9.287858,
  longitude: 79.3155488,
  googleMapsUrl: "https://maps.app.goo.gl/XMeU39x8U2jmCiW28",
  openingHours: {
    monday: "6:00 AM – 10:00 PM",
    tuesday: "6:00 AM – 10:00 PM",
    wednesday: "6:00 AM – 10:00 PM",
    thursday: "6:00 AM – 10:00 PM",
    friday: "6:00 AM – 10:00 PM",
    saturday: "6:00 AM – 10:00 PM",
    sunday: "6:00 AM – 10:00 PM",
  },
  openingHoursConfirmed: false,
  websiteUrl: "https://srisaravanas-textiles.com",
  socialLinks: {},
};

/** Phone number normalised for `tel:` links. */
export const telHref = `tel:${business.telephone.replace(/\s/g, "")}`;

/** Full one-line postal address. */
export const fullAddress = `${business.address}, ${business.city}, ${business.state} ${business.postalCode}, ${business.country}`;

/** Google Maps directions link to the shop coordinates. */
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude},${business.longitude}`;

/** Keyless Google Maps embed. */
export const mapEmbedUrl = `https://www.google.com/maps?q=${business.latitude},${business.longitude}&output=embed`;
