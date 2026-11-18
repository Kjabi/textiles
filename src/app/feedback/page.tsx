import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { business } from "@/config/business";
import { FeedbackSection } from "@/components/sections/FeedbackSection";

export const metadata: Metadata = createPageMetadata({
  title: `Feedback — ${business.businessName}`,
  description:
    "Share private feedback about your visit to Sri Saravana's Textiles in Rameswaram. Your suggestions help us improve.",
  path: "/feedback",
});

export default function FeedbackPage() {
  return <FeedbackSection />;
}
