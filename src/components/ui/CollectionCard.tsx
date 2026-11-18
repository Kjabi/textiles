import Link from "next/link";
import type { Collection } from "@/types/collection";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

interface CollectionCardProps {
  collection: Collection;
  index?: number;
}

export function CollectionCard({ collection, index = 0 }: CollectionCardProps) {
  const hasImage = Boolean(collection.image);

  return (
    <article
      className="hover-lift group relative overflow-hidden rounded-2xl border border-[var(--color-ivory-200)] bg-[var(--color-cream)] shadow-[var(--shadow-soft)] transition-all duration-500 hover:border-[var(--color-gold)] hover:shadow-[var(--shadow-lift)]"
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {hasImage ? (
          <>
            <ResponsiveImage
              src={collection.image}
              alt={`${collection.name} displayed at Sri Saravana's Textiles in Rameswaram`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              imgClassName="img-zoom object-cover"
                  />
            <div className="img-overlay absolute inset-0 flex items-center justify-center bg-[rgba(48,35,18,0.55)]">
              <span className="px-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-cream)]">
                Explore {collection.name}
              </span>
            </div>
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-primary px-6 text-center">
            <span className="font-serif text-lg text-[var(--color-dark)]">{collection.name}</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-serif text-xl font-medium text-[var(--color-dark)]">{collection.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{collection.description}</p>
        <Link
          href="/gallery"
          className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-brown)] transition-colors hover:text-[var(--color-dark)]"
        >
          View photographs
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </article>
  );
}
