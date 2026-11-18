import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { business } from "@/config/business";
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata: Metadata = createPageMetadata({
  title: `About Us — ${business.businessName}`,
  description:
    "Learn about Sri Saravana's Textiles, a textile and clothing store on Middle Street, Rameswaram, Tamil Nadu.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutSection />;
}
