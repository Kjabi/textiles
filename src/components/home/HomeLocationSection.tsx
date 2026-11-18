import { business } from "@/config/business";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function HomeLocationSection() {
  return (
    <ScrollReveal delay={250}>
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Visit Us"
            title="Find Our Store"
            description="Located on Middle Street, Rameswaram, Tamil Nadu 623526."
          />
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div>
              <div className="rounded-xl overflow-hidden shadow-xl border border-[var(--color-ivory-200)] aspect-[4/3] hover-lift">
                <iframe
                  title="Google Maps location of Sri Saravana's Textiles"
                  src={`https://www.google.com/maps?q=${business.latitude},${business.longitude}&output=embed`}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M19 11H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM7 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4-1c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm11-7v1h-1V7c0-2.21-1.79-4-4-4H4c-2.21 0-4 1.79-4 4v9H0v2h20v-2h-2z" />
                </svg>
                <p className="text-base leading-relaxed text-stone-600">
                  {`${business.address}, ${business.city}, ${business.state} ${business.postalCode}, ${business.country}`}
                </p>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M3.055 11.05a1 1 0 010-1.1l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 7.414 7.055 10.466a1 1 0 01-1.414-.414z" clipRule="evenodd" />
                </svg>
                <a
                  href={`tel:${business.telephone.replace(/\s/g, "")}`}
                  className="text-[var(--color-maroon-700)] hover:underline underline-offset-4 font-medium text-base"
                >
                  {business.telephone}
                </a>
              </div>
              <div className="grid gap-2 text-sm text-stone-600">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-[var(--color-maroon-800)]">Daily</span>
                  <span>{business.openingHours.monday}</span>
                </div>
                <p className="text-xs text-stone-500 mt-2">
                  Hours listed from Google Maps, subject to owner confirmation.
                </p>
              </div>
              <Link
                href="/visit-us"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-maroon-700)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-maroon-700)] hover:bg-[var(--color-maroon-700)] hover:text-[var(--color-ivory-50)] transition-colors"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

function SectionHeading({ eyebrow, title, description, align = "center" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-600)]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-serif text-3xl font-medium text-[var(--color-maroon-800)] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-stone-600">{description}</p>
      ) : null}
    </div>
  );
}
