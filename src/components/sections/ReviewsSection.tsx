import { Star, MessageSquare, ExternalLink } from "lucide-react";
import {
  integrations,
  isFeedbackFormConfigured,
  isReviewComposerConfigured,
} from "@/config/integrations";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { IntegrationPending } from "@/components/ui/IntegrationPending";

export function ReviewsSection() {
  const reviewComposerReady = isReviewComposerConfigured();
  const feedbackReady = isFeedbackFormConfigured();

  return (
    <>
      <PageHeader
        eyebrow="Customer Reviews"
        title="Google Reviews"
        description="Our customer reviews are hosted on Google, so you always see the most recent and complete feedback about Sri Saravana's Textiles."
      />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="overflow-hidden rounded-[1.75rem] border border-[var(--color-ivory-200)] bg-[var(--color-cream)] shadow-[var(--shadow-soft)]">
              <div className="bg-gradient-primary px-8 py-10 text-center md:px-12">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-cream)] text-[var(--color-brown)] shadow-[var(--shadow-soft)]">
                  <Star size={26} aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-serif text-2xl font-medium text-[var(--color-dark)] md:text-3xl">
                  Reviews live on Google
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--color-brown)]">
                  We do not copy reviews onto this website. Reading them directly on Google means you
                  see the latest ratings, the newest comments, and the full context from other
                  customers.
                </p>
              </div>

              <div className="grid gap-4 p-8 md:grid-cols-3 md:p-12">
                <a
                  href={integrations.googleMapsListingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover-lift flex flex-col rounded-2xl border border-[var(--color-ivory-200)] bg-[var(--color-ivory-100)] p-6 transition-colors hover:border-[var(--color-gold)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-dark)] text-[var(--color-cream)]">
                    <Star size={19} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg font-medium text-[var(--color-dark)]">
                    Read Customer Reviews
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                    Open our Google Maps listing and read what customers say about the shop.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-brown)]">
                    Open Google <ExternalLink size={13} aria-hidden="true" />
                  </span>
                </a>

                <div className="group hover-lift flex flex-col rounded-2xl border border-[var(--color-ivory-200)] bg-[var(--color-ivory-100)] p-6 transition-colors hover:border-[var(--color-gold)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-primary text-[var(--color-dark)]">
                    <Star size={19} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg font-medium text-[var(--color-dark)]">
                    Write a Google Review
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                    Share your experience on our Google Business Profile. Positive or critical —
                    both help us improve.
                  </p>
                  {reviewComposerReady ? (
                    <a
                      href={integrations.googleReviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-brown)] hover:text-[var(--color-dark)]"
                    >
                      Write a review <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)] opacity-60">
                      Opening shortly
                    </span>
                  )}
                </div>

                <a
                  href="/feedback"
                  className="group hover-lift flex flex-col rounded-2xl border border-[var(--color-ivory-200)] bg-[var(--color-ivory-100)] p-6 transition-colors hover:border-[var(--color-gold)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-dark)] text-[var(--color-cream)]">
                    <MessageSquare size={19} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg font-medium text-[var(--color-dark)]">
                    Share Private Feedback
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                    Tell us privately, in your own words, how we did. Nothing is published.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-brown)]">
                    Share feedback <span aria-hidden="true">&rarr;</span>
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[var(--color-ivory-200)] bg-[var(--color-ivory-100)] p-6">
                <h3 className="font-serif text-lg font-medium text-[var(--color-dark)]">
                  Honest feedback, always welcome
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                  We would rather hear what you really think than what is flattering. Reviews help
                  us stock what people want and improve how we welcome every customer.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--color-ivory-200)] bg-[var(--color-ivory-100)] p-6">
                <h3 className="font-serif text-lg font-medium text-[var(--color-dark)]">
                  Fair for every visitor
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                  Every visitor gets the same options, and we never offer gifts, discounts or
                  benefits in exchange for a review. Private feedback is always available too.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {!reviewComposerReady ? (
            <div className="mt-8">
              <IntegrationPending
                title="Review link being added"
                message="The official 'write a review' link from the Google Business Profile is being added. Until then, please use 'Read Customer Reviews' to open our Google listing."
              />
            </div>
          ) : null}

          {!feedbackReady ? (
            <div className="mt-4">
              <IntegrationPending
                title="Feedback form being added"
                message="The private feedback form is being linked. In the meantime you can call the shop or send us a message."
              />
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
