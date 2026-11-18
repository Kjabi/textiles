import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { business } from "@/config/business";
import { VisitUsSection } from "@/components/sections/VisitUsSection";

export const metadata: Metadata = createPageMetadata({
  title: `Visit Us — ${business.businessName}`,
  description:
    "Visit Sri Saravana's Textiles on Middle Street, Rameswaram, Tamil Nadu 623526. Address, phone number, opening hours and Google Maps directions.",
  path: "/visit-us",
});

export default function VisitUsPage() {
  return <VisitUsSection />;
}
