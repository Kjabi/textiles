import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { business } from "@/config/business";
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { HomeGallery } from "@/components/home/HomeGallery";
import { HomeReviewsPreview } from "@/components/home/HomeReviewsPreview";
import { HomeContactPreview } from "@/components/home/HomeContactPreview";
import { VisitBanner } from "@/components/home/VisitBanner";

export const metadata: Metadata = createPageMetadata({
  title: `${business.businessName} — Discover the Beauty of Textiles in Rameswaram`,
  description:
    "Explore clothing and textile collections at Sri Saravana's Textiles, Middle Street, Rameswaram. Sarees, blouse pieces, readymade garments and a warm welcome.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <FeaturedCollections />
      <HomeGallery />
      <HomeReviewsPreview />
      <HomeContactPreview />
      <VisitBanner />
    </>
  );
}
