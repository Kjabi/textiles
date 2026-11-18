import { getVisibleCollections } from "@/config/collections";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CollectionCard } from "@/components/ui/CollectionCard";
import { PageHeader } from "@/components/ui/PageHeader";

export function CollectionsSection() {
  const categories = getVisibleCollections();

  return (
    <>
      <PageHeader
        eyebrow="Collections"
        title="Our Collections"
        description="Every collection below is shown with a genuine photograph of our display racks. Please visit our store in Rameswaram to view current stock and pricing."
      />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          {categories.length === 0 ? (
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-[var(--color-ivory-300)] bg-[var(--color-ivory-100)] p-12 text-center">
                <span className="text-4xl text-[var(--color-gold)]">&#128230;</span>
                <p className="text-base text-[var(--color-brown)]">
                  No collections are currently confirmed for public display.
                </p>
                <p className="text-sm text-[var(--color-muted)]">
                  Please contact the shop owner to enable collection categories.
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category, index) => (
                <CollectionCard key={category.id} collection={category} index={index} />
              ))}
            </div>
          )}

          <p className="mt-12 text-center text-sm text-[var(--color-muted)]">
            This site is a digital showroom. We do not sell or take orders online &mdash; please call
            the shop or visit us on Middle Street.
          </p>
        </div>
      </section>
    </>
  );
}
