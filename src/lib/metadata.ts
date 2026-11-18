import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

export function createPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return buildMetadata({ title, description, path });
}
