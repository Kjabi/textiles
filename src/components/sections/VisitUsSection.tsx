import { business, directionsUrl, fullAddress, mapEmbedUrl, telHref } from "@/config/business";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

export function VisitUsSection() {
  return (
    <>
      <PageHeader
        eyebrow="Visit Our Shop"
        title="Find Our Store"
        description="Located on Middle Street, Rameswaram, Tamil Nadu 623526, India. Open every day from 6:00 AM to 10:00 PM."
      />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <ScrollReveal>
              <div className="flex flex-col gap-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-lift)]">
                  <iframe
                    title="Google Maps location of Sri Saravana's Textiles"
                    src={mapEmbedUrl}
                    className="h-full w-full"
                                referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-soft)]">
                  <ResponsiveImage
                    src="/images/shop-exterior/sri-saravana-shop-exterior.webp"
                    alt="Sri Saravana's Textiles shop front at night, showing the illuminated signboard on Middle Street, Rameswaram"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    imgClassName="object-cover"
                              />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="flex flex-col gap-8">
                <div className="grid gap-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-[var(--color-dark)]">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M19 11H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM7 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4-1c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm11-7v1h-1V7c0-2.21-1.79-4-4-4H4c-2.21 0-4 1.79-4 4v9H0v2h20v-2h-2z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                        Business address
                      </p>
                      <p className="mt-1 text-base text-[var(--color-brown)]">{fullAddress}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-[var(--color-dark)]">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M3.055 11.05a1 1 0 010-1.1l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 7.414 7.055 10.466a1 1 0 01-1.414-.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                        Listed telephone
                      </p>
                      <a
                        href={telHref}
                        className="mt-1 inline-block text-base font-medium text-[var(--color-brown)] underline-offset-4 hover:text-[var(--color-dark)] hover:underline"
                      >
                        {business.telephone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-[var(--color-dark)]">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414 1.414l7-7a1 1 0 000-1.414z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                        Coordinates
                      </p>
                      <p className="mt-1 text-base text-[var(--color-brown)]">
                        {business.latitude}, {business.longitude}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[var(--color-ivory-200)] bg-[var(--color-ivory-100)] p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    Opening hours
                  </p>
                  <dl className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
                    {(
                      [
                        ["Monday", business.openingHours.monday],
                        ["Tuesday", business.openingHours.tuesday],
                        ["Wednesday", business.openingHours.wednesday],
                        ["Thursday", business.openingHours.thursday],
                        ["Friday", business.openingHours.friday],
                        ["Saturday", business.openingHours.saturday],
                        ["Sunday", business.openingHours.sunday],
                      ] as const
                    ).map(([day, time]) => (
                      <div key={day} className="flex justify-between gap-4">
                        <dt className="font-medium text-[var(--color-brown)]">{day}</dt>
                        <dd className="text-right">{time}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 text-xs italic text-[var(--color-muted)]">
                    Hours listed from Google Maps and subject to owner confirmation.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={directionsUrl}
                    variant="gradient"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    Get Directions
                  </Button>
                  <Button href={telHref} variant="outline">
                    Click to Call
                  </Button>
                </div>

                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  Tourists and local residents are welcome to visit Sri Saravana&apos;s Textiles on
                  Middle Street, Rameswaram. Use the Get Directions button above to open Google
                  Maps navigation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
