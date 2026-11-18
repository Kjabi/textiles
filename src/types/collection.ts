export type CollectionStatus = "confirmed" | "pending" | "unavailable";

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  status: CollectionStatus;
  /** Only categories with status "confirmed" and visible true are displayed. */
  visible: boolean;
}
