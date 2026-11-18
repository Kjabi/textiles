import type { GalleryImage } from "@/types/gallery";

/**
 * Genuine photographs of Sri Saravana's Textiles supplied by the shop owner.
 * Every image below is a real photograph of the shop or of items on its
 * display racks. Keep captions descriptive of what is actually visible.
 *
 * Note: each photograph is referenced by exactly one URL so that the hero
 * (loaded eagerly) is never shared with a lazily-loaded instance of the
 * same file, which would trigger false LCP advisories.
 */
export const galleryImages: GalleryImage[] = [
  {
    id: "shop-exterior-night",
    src: "/images/shop-exterior/sri-saravana-shop-exterior.webp",
    alt: "Sri Saravana's Textiles shop front at night, with the illuminated signboard above the entrance on Middle Street, Rameswaram",
    caption: "Shop Exterior",
    category: "shop-exterior",
    eager: true,
  },
  {
    id: "shop-interior-hangers",
    src: "/images/shop-interior/sri-saravana-shop-interior.webp",
    alt: "Inside the shop, sarees hung on rails beneath the ceiling lights with framed pictures on the wall",
    caption: "Shop Interior",
    category: "shop-interior",
  },
  {
    id: "sarees-hanging-row",
    src: "/images/collections/saree-collection-hanging-row.webp",
    alt: "A row of sarees hanging on display in printed, paisley and gold-bordered designs",
    caption: "Sarees on Display",
    category: "sarees",
  },
  {
    id: "saree-peacock-gold",
    src: "/images/collections/saree-collection-peacock-gold.webp",
    alt: "Close-up of a white saree woven with gold peacock motifs and finished with a gold and purple border",
    caption: "Gold Peacock Design",
    category: "sarees",
  },
  {
    id: "sarees-printed-designs",
    src: "/images/gallery/saree-collection-printed-designs.webp",
    alt: "Close-up of printed sarees showing leaf, lattice, elephant and paisley motifs in silver, cream, navy and magenta",
    caption: "Printed Saree Designs",
    category: "sarees",
  },
  {
    id: "textile-display-rack",
    src: "/images/gallery/textile-display-rack.webp",
    alt: "A display rack inside the shop holding sarees, an unstitched blouse piece and folded textiles",
    caption: "In-Store Textile Display",
    category: "product-highlights",
  },
];

export const galleryCategories = [
  { id: "shop-exterior", label: "Shop Exterior" },
  { id: "shop-interior", label: "Shop Interior" },
  { id: "sarees", label: "Textile Collections" },
  { id: "product-highlights", label: "Product Highlights" },
] as const;
