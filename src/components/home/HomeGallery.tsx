import { galleryImages } from "@/config/gallery";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

export function HomeGallery() {
  const featured = galleryImages.slice(0, 4);

  return (
    <ScrollReveal delay={150}>
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Gallery"
            title="Inside Sri Saravana's Textiles"
            description="A glimpse of our shop and the textiles on our display racks in Rameswaram. Every photograph is of our actual store."
            align="center"
          />

          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {featured.map((image) => (
              <figure
                key={image.id}
                className="group relative overflow-hidden rounded-2xl border border-[var(--color-ivory-200)] shadow-[var(--shadow-soft)]"
              >
                <div className="relative aspect-[4/3] w-full">
                  <ResponsiveImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    imgClassName="img-zoom object-cover"
                              />
                </div>
                <div className="img-overlay absolute inset-0 flex items-end justify-center p-4">
                  <span className="img-caption text-center text-xs font-medium text-[var(--color-cream)]">
                    {image.caption}
                  </span>
                </div>
                <figcaption className="sr-only">{image.caption}</figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button href="/gallery" variant="outline">
              Open Full Gallery
            </Button>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
