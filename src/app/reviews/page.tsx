import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { business } from "@/config/business";
import { ReviewsSection } from "@/components/sections/ReviewsSection";

export const metadata: Metadata = createPageMetadata({
  title: `Customer Reviews — ${business.businessName}`,
  description:
    "Read and write customer reviews for Sri Saravana's Textiles on Google. Reviews are hosted on our Google Business Profile.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return <ReviewsSection />;
}
