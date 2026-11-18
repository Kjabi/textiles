import type { Collection } from "@/types/collection";

/**
 * Collection catalogue driven by the shop owner's own photographs.
 *
 * A category is displayed publicly only when its status is "confirmed"
 * AND its visibility flag is switched on. A confirmed category always
 * points at a genuine photograph of that category.
 *
 * Categories left on "pending" have no photograph yet — the shop owner
 * needs to confirm that the category is sold and supply a photograph
 * before it can be published.
 */
export const collections: Collection[] = [
  {
    id: "sarees",
    name: "Sarees",
    description:
      "Sarees displayed across our store racks in printed, woven and gold-bordered designs.",
    image: "/images/collections/saree-collection-hanging-row.webp",
    status: "confirmed",
    visible: true,
  },
  {
    id: "other-textile-collections",
    name: "Blouse Pieces & Textiles",
    description:
      "Unstitched blouse pieces and folded textiles displayed alongside our saree collection.",
    image: "/images/gallery/textile-display-rack.webp",
    status: "confirmed",
    visible: true,
  },
  {
    id: "mens-wear",
    name: "Men's Wear",
    description: "Readymade men's shirts and garments displayed at our shop front.",
    image: "/images/shop-exterior/sri-saravana-shop-exterior.webp",
    status: "confirmed",
    visible: true,
  },
  {
    id: "womens-kurtis",
    name: "Women's Kurtis",
    description: "Kurtis for everyday and occasion wear.",
    image: "",
    status: "pending",
    visible: false,
  },
  {
    id: "readymade-garments",
    name: "Readymade Garments",
    description: "Complete readymade outfits for men and women.",
    image: "",
    status: "pending",
    visible: false,
  },
  {
    id: "boys-tshirts",
    name: "Boys' T-shirts",
    description: "T-shirts for boys.",
    image: "",
    status: "pending",
    visible: false,
  },
  {
    id: "undergarments",
    name: "Undergarments",
    description: "Everyday undergarments for men and women.",
    image: "",
    status: "pending",
    visible: false,
  },
];

export function getVisibleCollections(): Collection[] {
  return collections.filter(
    (collection) => collection.visible && collection.status === "confirmed",
  );
}
