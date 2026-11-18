import { ExternalLink, Lock, Sparkles } from "lucide-react";
import {
  getFeedbackEmbedUrl,
  getFeedbackFormPageUrl,
  isFeedbackFormConfigured,
} from "@/config/integrations";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { IntegrationPending } from "@/components/ui/IntegrationPending";

export function FeedbackSection() {
  const configured = isFeedbackFormConfigured();
  const embedUrl = getFeedbackEmbedUrl();

  return (
    <>
      <PageHeader
        eyebrow="Feedback"
        title="We Value Your Feedback"
        description="Your suggestions help us improve the shopping experience for everyone who walks into our store on Middle Street."
      />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="overflow-hidden rounded-[1.75rem] border border-[var(--color-ivory-200)] bg-[var(--color-cream)] shadow-[var(--shadow-soft)]">
              <div className="grid gap-8 border-b border-[var(--color-ivory-200)] bg-gradient-primary p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
                <div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-cream)] text-[var(--color-brown)] shadow-[var(--shadow-soft)]">
                    <Sparkles size={22} aria-hidden="true" />
                  </span>
                  <h2 className="mt-6 font-serif text-2xl font-medium text-[var(--color-dark)] md:text-3xl">
                    Tell us about your visit
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--color-brown)]">
                    Whether you found what you came for, liked the collection, or noticed
                    something we could do better — we would like to hear it. Your feedback is
                    shared only with the shop, and it shapes what we stock and how we serve.
                  </p>
                </div>

                <ul className="grid content-start gap-3 text-sm text-[var(--color-brown)]">
                  {[
                    "A rating and a short message is all we need.",
                    "Only share what you are comfortable sharing.",
                    "Your response reaches the shop owner directly.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-dark)]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 md:p-10">
                {configured ? (
                  <>
                    <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-[var(--color-gold)] bg-[var(--color-ivory-100)] p-5 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-serif text-lg font-medium text-[var(--color-dark)]">
                          Open the feedback form
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">
                          The form below is hosted by Google. If it asks you to sign in, or does not
                          load, open it directly in a new tab — it works best that way.
                        </p>
                      </div>
                      <Button
                        href={getFeedbackFormPageUrl()}
                        variant="gradient"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="sm"
                        className="shrink-0"
                      >
                        Open in a new tab
                        <ExternalLink size={13} aria-hidden="true" />
                      </Button>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-[var(--color-ivory-200)] bg-[var(--color-ivory-100)]">
                      <iframe
                        src={embedUrl}
                        title="Private customer feedback form"
                        className="h-[760px] w-full border-0"
                        loading="lazy"
                        referrerPolicy="origin-when-cross-origin"
                      />
                    </div>

                    <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-[var(--color-muted)]">
                      <Lock size={13} className="mt-0.5 shrink-0" aria-hidden="true" />
                      Your response goes straight to the shop owner through Google Forms. We never
                      ask for payment or bank details. If Google asks you to allow cookies, choose
                      &ldquo;Allow&rdquo;.
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-[var(--color-muted)]">
                      After you submit, Google shows its own confirmation message. We never display a
                      thank-you on this website unless Google confirms the submission. Prefer to talk
                      to us instead? Call the shop or message us on WhatsApp — every visitor
                      gets the same options.
                    </p>                  </>
                ) : (
                  <IntegrationPending
                    title="Feedback form not yet connected"
                    message="The private feedback form is being created by the shop owner. Once it is linked here, you will be able to share feedback directly on this page. In the meantime, please call the shop or visit us on Middle Street."
                  />
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
