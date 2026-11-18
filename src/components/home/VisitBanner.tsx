import { business, directionsUrl } from "@/config/business";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function VisitBanner() {
  return (
    <ScrollReveal>
      <section className="px-6 pb-20 pt-4 md:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-primary">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-24 h-72 w-72 rounded-full bg-[var(--color-cream)]/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-[var(--color-dark)]/10 blur-3xl"
          />

          <div className="relative flex flex-col items-center gap-7 px-6 py-14 text-center md:py-20">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-brown)]">
              Visit Our Shop
            </span>
            <h2 className="max-w-3xl font-serif text-3xl font-medium leading-tight text-[var(--color-dark)] md:text-4xl lg:text-5xl">
              Visit Sri Saravana&apos;s Textiles, Rameswaram
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-[var(--color-brown)] md:text-base">
              {business.address}, {business.city}, {business.state} {business.postalCode} &mdash; open
              every day from 6:00 AM to 10:00 PM.
            </p>
            <Button
              href={directionsUrl}
              variant="dark"
              target="_blank"
              rel="noopener noreferrer"
              size="md"
            >
              Get Directions
              <span aria-hidden="true">&rarr;</span>
            </Button>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
