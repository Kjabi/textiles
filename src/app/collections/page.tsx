import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { business } from "@/config/business";
import { CollectionsSection } from "@/components/sections/CollectionsSection";

export const metadata: Metadata = createPageMetadata({
  title: `Collections — ${business.businessName}`,
  description:
    "Explore the clothing and textile collections available at Sri Saravana's Textiles in Rameswaram.",
  path: "/collections",
});

export default function CollectionsPage() {
  return <CollectionsSection />;
}
