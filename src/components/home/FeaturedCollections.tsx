import { getVisibleCollections } from "@/config/collections";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CollectionCard } from "@/components/ui/CollectionCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function FeaturedCollections() {
  const categories = getVisibleCollections();

  if (categories.length === 0) {
    return null;
  }

  return (
    <ScrollReveal>
      <section className="border-y border-[var(--color-ivory-200)] bg-[var(--color-ivory-100)] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Collections"
            title="Our Available Collections"
            description="Photographed in our store on Middle Street, Rameswaram. Please visit us to view current availability."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <CollectionCard key={category.id} collection={category} index={index} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button href="/collections" variant="outline">
              View All Collections
            </Button>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
