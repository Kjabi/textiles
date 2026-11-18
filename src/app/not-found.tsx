import { StatusPanel } from "@/components/ui/StatusPanel";

export default function NotFound() {
  return (
    <StatusPanel
      eyebrow="S"
      title="We could not find that page"
      message="The link may be old or slightly mistyped. Nothing is lost — the shop, the collections and the gallery are all still here."
      primaryLabel="Go to the homepage"
      primaryHref="/"
      secondaryLabel="See our collections"
      secondaryHref="/collections"
    />
  );
}
