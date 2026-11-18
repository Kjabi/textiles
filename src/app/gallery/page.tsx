import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { business } from "@/config/business";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = createPageMetadata({
  title: `Photo Gallery — ${business.businessName}`,
  description:
    "View photographs of Sri Saravana's Textiles shop and collections in Rameswaram, Tamil Nadu.",
  path: "/gallery",
});

export default function GalleryPage() {
  return <GalleryGrid />;
}
