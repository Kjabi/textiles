"use client";

import { useState } from "react";
import { galleryImages, galleryCategories } from "@/config/gallery";
import ImageLightbox from "./ImageLightbox";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

export function GalleryGrid() {
  const [category, setCategory] = useState<GalleryCategoryType>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    category === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === category);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Photo Gallery"
        description="Genuine photographs of Sri Saravana's Textiles shop and its display racks in Rameswaram. Select any photograph to enlarge it."
      />

      <ScrollReveal>
        <section className="px-6 py-12 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setCategory("all")}
                className={`btn-press rounded-full px-4 py-2 text-xs font-medium ${
                  category === "all"
                    ? "bg-gradient-primary text-[var(--color-dark)] shadow-[0_8px_20px_-12px_rgba(248,181,0,0.9)]"
                    : "border border-[var(--color-ivory-300)] bg-[var(--color-cream)] text-[var(--color-brown)] hover:border-[var(--color-gold)]"
                }`}
              >
                All
              </button>
              {galleryCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategory(cat.id)}
                  className={`btn-press rounded-full px-4 py-2 text-xs font-medium ${
                    category === cat.id
                      ? "bg-gradient-primary text-[var(--color-dark)] shadow-[0_8px_20px_-12px_rgba(248,181,0,0.9)]"
                      : "border border-[var(--color-ivory-300)] bg-[var(--color-cream)] text-[var(--color-brown)] hover:border-[var(--color-gold)]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((image, index) => (
                <figure key={image.id} className="group relative">
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    aria-label={`Enlarge photograph: ${image.caption}`}
                    className="hover-lift relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[var(--color-ivory-200)] shadow-[var(--shadow-soft)] transition-colors hover:border-[var(--color-gold)]"
                  >
                    <ResponsiveImage
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      imgClassName="img-zoom object-cover"
                    />
                    <span className="img-overlay absolute inset-0 flex items-end justify-center p-5">
                      <span className="img-caption text-center text-xs font-medium text-[var(--color-cream)]">
                        {image.caption}
                      </span>
                    </span>
                  </button>
                  <figcaption className="mt-3 text-center text-sm text-[var(--color-muted)]">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>

            <p className="mt-12 text-center text-sm text-[var(--color-muted)]">
              Every photograph on this page is of our actual shop on Middle Street, Rameswaram.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={filtered}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

type GalleryCategoryType = "all" | (typeof galleryCategories)[number]["id"];
