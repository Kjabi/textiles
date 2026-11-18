import { business, fullAddress, telHref } from "@/config/business";
import { Button } from "@/components/ui/Button";
import { getVisibleCollections } from "@/config/collections";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

export function AboutSection() {
  const available = getVisibleCollections();

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="About Sri Saravana's Textiles"
        description="A textile and clothing store located on Middle Street, Rameswaram, Tamil Nadu."
      />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <ScrollReveal>
              <div className="grid gap-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-lift)]">
                  <ResponsiveImage
                    src="/images/shop-exterior/sri-saravana-shop-exterior.webp"
                    alt="Sri Saravana's Textiles shop front at night with the illuminated signboard above the entrance"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    imgClassName="object-cover"
                  />
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-soft)]">
                  <ResponsiveImage
                    src="/images/shop-interior/sri-saravana-shop-interior.webp"
                    alt="Inside the shop, with sarees hanging on rails beneath the ceiling lights"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    imgClassName="object-cover"
                              />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="flex flex-col gap-9">
                <div>
                  <h2 className="font-serif text-2xl font-medium text-[var(--color-dark)]">
                    Our shop
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
                    {business.businessDescription}
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-medium text-[var(--color-dark)]">
                    Shop location
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
                    {fullAddress}
                  </p>
                  <a
                    href={telHref}
                    className="mt-2 inline-block text-base font-medium text-[var(--color-brown)] underline-offset-4 hover:text-[var(--color-dark)] hover:underline"
                  >
                    {business.telephone}
                  </a>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-medium text-[var(--color-dark)]">
                    Business category
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
                    Textile and readymade clothing store (listed as Dress Shop on Google Maps).
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-medium text-[var(--color-dark)]">
                    Opening hours
                  </h2>
                  <dl className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
                    <div className="flex justify-between gap-4 border-b border-[var(--color-ivory-200)] pb-2">
                      <dt className="font-medium text-[var(--color-brown)]">Monday &ndash; Sunday</dt>
                      <dd className="text-right">6:00 AM &ndash; 10:00 PM</dd>
                    </div>
                  </dl>
                  <p className="mt-3 text-xs italic text-[var(--color-muted)]">
                    Listed hours are from Google Maps and subject to owner confirmation.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={100}>
            <div className="mt-14 rounded-[1.75rem] border border-[var(--color-ivory-200)] bg-[var(--color-ivory-100)] p-8 md:p-12">
              <h2 className="font-serif text-2xl font-medium text-[var(--color-dark)]">
                Available collections
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
                These are the categories confirmed by the shop owner, each shown with a genuine
                photograph of our display racks.
              </p>

              {available.length > 0 ? (
                <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {available.map((category) => (
                    <li
                      key={category.id}
                      className="flex items-center gap-3 rounded-xl bg-[var(--color-cream)] px-4 py-3 text-sm text-[var(--color-brown)]"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]"
                      />
                      {category.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-6 text-base italic text-[var(--color-muted)]">
                  No collections have been confirmed by the shop owner yet. Collections will appear
                  here after verification.
                </p>
              )}

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Button href="/collections" variant="gradient">
                  Explore All Collections
                </Button>
                <Button href="/visit-us" variant="outline">
                  Visit Our Shop
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
