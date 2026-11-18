import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { business } from "@/config/business";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = createPageMetadata({
  title: `Contact Us — ${business.businessName}`,
  description:
    "Contact Sri Saravana's Textiles on Middle Street, Rameswaram. Call the shop, draft an email, or get Google Maps directions.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactSection />;
}
