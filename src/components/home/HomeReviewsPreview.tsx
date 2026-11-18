import Link from "next/link";
import { Star, MessageSquare, ExternalLink } from "lucide-react";
import { integrations, isReviewComposerConfigured } from "@/config/integrations";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function HomeReviewsPreview() {
  const reviewComposerReady = isReviewComposerConfigured();

  return (
    <ScrollReveal delay={100}>
      <section className="border-y border-[var(--color-ivory-200)] bg-[var(--color-ivory-100)] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Customer Reviews"
                title="Honest feedback, hosted on Google"
                description="Our reviews live on our Google Business Profile, so what you read is always the latest and most complete. We welcome feedback whether it is positive or critical — it helps us improve the shopping experience for everyone."
                align="left"
              />

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href={integrations.googleMapsListingUrl}
                  variant="dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star size={15} aria-hidden="true" />
                  Read Reviews on Google
                </Button>

                {reviewComposerReady ? (
                  <Button
                    href={integrations.googleReviewUrl}
                    variant="gradient"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Write a Google Review
                  </Button>
                ) : (
                  <Button href="/reviews" variant="outline">
                    Write a Google Review
                  </Button>
                )}

                <Button href="/feedback" variant="outline">
                  <MessageSquare size={15} aria-hidden="true" />
                  Share Private Feedback
                </Button>
              </div>

              <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-[var(--color-muted)]">
                <ExternalLink size={13} className="mt-0.5 shrink-0" aria-hidden="true" />
                Reviews open on Google in a new tab. We never offer gifts or discounts in exchange
                for a review.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--color-ivory-200)] bg-[var(--color-cream)] p-8 shadow-[var(--shadow-soft)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 blur-3xl"
                style={{ background: "radial-gradient(circle, #f8b500 0%, rgba(248,181,0,0) 70%)" }}
              />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-[var(--color-dark)]">
                  <Star size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-medium text-[var(--color-dark)]">
                  Reviews on Google Maps
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  Read what customers say about Sri Saravana&apos;s Textiles on our Google Maps
                  listing, or add your own review. Both options are open to every visitor.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={integrations.googleMapsListingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press inline-flex items-center gap-2 rounded-full bg-[var(--color-dark)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-cream)] transition-colors hover:bg-[var(--color-brown)]"
                  >
                    Open Google listing
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                  <Link
                    href="/feedback"
                    className="btn-press inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brown)] transition-colors hover:bg-gradient-primary hover:text-[var(--color-dark)]"
                  >
                    Share private feedback
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
