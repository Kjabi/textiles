export interface OpeningHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
}

export interface BusinessInfo {
  businessName: string;
  businessDescription: string;
  telephone: string;
  /** Pending owner confirmation before publication. */
  telephoneConfirmed: boolean;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  latitude: number;
  longitude: number;
  googleMapsUrl: string;
  openingHours: OpeningHours;
  /** Pending owner confirmation before publication. */
  openingHoursConfirmed: boolean;
  websiteUrl: string;
  socialLinks: SocialLinks;
}
