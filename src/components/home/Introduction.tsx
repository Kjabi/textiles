import { business, fullAddress, telHref } from "@/config/business";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

export function Introduction() {
  return (
    <ScrollReveal>
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] shadow-[0_30px_70px_-40px_rgba(48,35,18,0.7)]">
                <ResponsiveImage
                  src="/images/shop-interior/sri-saravana-shop-interior.webp"
                  alt="Inside Sri Saravana's Textiles, with sarees hanging on rails beneath the ceiling lights"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  imgClassName="object-cover"
                          />
              </div>
              <div className="absolute -bottom-5 left-5 hidden items-center gap-3 rounded-full border border-[var(--color-ivory-200)] bg-[var(--color-cream)] py-2 pl-2 pr-5 shadow-[0_18px_40px_-24px_rgba(48,35,18,0.7)] sm:flex">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-primary font-serif text-sm font-semibold text-[var(--color-dark)]">
                  S
                </span>
                <span className="font-serif text-sm font-semibold text-[var(--color-dark)]">
                  {business.businessName}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-brown)]">
                <span aria-hidden="true" className="h-px w-8 bg-[var(--color-gold)]" />
                About the Shop
              </span>
              <h2 className="font-serif text-3xl font-medium leading-tight text-[var(--color-dark)] md:text-4xl">
                A textile destination in the heart of Rameswaram
              </h2>
              <p className="text-base leading-relaxed text-[var(--color-muted)]">
                {business.businessDescription}
              </p>

              <dl className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[var(--color-ivory-200)] bg-[var(--color-ivory-100)] p-5">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    Address
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-[var(--color-brown)]">{fullAddress}</dd>
                </div>
                <div className="rounded-2xl border border-[var(--color-ivory-200)] bg-[var(--color-ivory-100)] p-5">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    Telephone
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={telHref}
                      className="text-sm font-medium text-[var(--color-brown)] underline-offset-4 hover:text-[var(--color-dark)] hover:underline"
                    >
                      {business.telephone}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/about" variant="dark">
                  About Us
                </Button>
                <Button href="/contact" variant="outline">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
