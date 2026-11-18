export type GalleryCategory =
  | "shop-exterior"
  | "shop-interior"
  | "sarees"
  | "product-highlights";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  /** Set on the first image of a listing so it is fetched eagerly (LCP). */
  eager?: boolean;
}
