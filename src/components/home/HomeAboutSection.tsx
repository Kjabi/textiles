import { business } from "@/config/business";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

export function HomeAboutSection() {
  return (
    <ScrollReveal delay={150}>
      <section className="bg-[var(--color-maroon-800)] px-6 py-20 text-[var(--color-ivory-50)] md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-500)]">
                About Us
              </span>
              <h2 className="mt-4 font-serif text-3xl font-medium text-[var(--color-ivory-100)] md:text-4xl">
                An honest textile store in Rameswaram
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[var(--color-ivory-300)]">
                {business.businessDescription}
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-gold-600)] text-xs font-bold text-[var(--color-maroon-700)]">
                    1
                  </span>
                  <span className="text-sm text-[var(--color-ivory-300)]">
                    Sarees, blouse pieces and folded textiles on our display racks
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-gold-600)] text-xs font-bold text-[var(--color-maroon-700)]">
                    2
                  </span>
                  <span className="text-sm text-[var(--color-ivory-300)]">
                    Welcoming local shoppers and tourists in Rameswaram
                  </span>
                </div>
              </div>
            </div>
            <div className="hover-lift relative h-[420px] w-full overflow-hidden rounded-xl border border-[var(--color-maroon-700)] shadow-xl">
              <ResponsiveImage
                src="/images/shop-exterior/sri-saravana-shop-exterior.webp"
                alt="Sri Saravana's Textiles shop front at night with its illuminated signboard on Middle Street, Rameswaram"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                imgClassName="object-cover"
                      />
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
