import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  points?: string[];
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}

/**
 * Shared layout for the policy pages, so Privacy and Terms read as one
 * calm, consistent document rather than two different styles.
 */
export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: LegalPageProps) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--color-ivory-200)] bg-[var(--color-ivory-100)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full opacity-35 blur-3xl"
          style={{ background: "radial-gradient(circle, #f8b500 0%, rgba(248,181,0,0) 70%)" }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-16 md:py-20">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-brown)]">
            <span aria-hidden="true" className="h-px w-8 bg-[var(--color-gold)]" />
            {eyebrow}
          </span>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-[var(--color-dark)] md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">{intro}</p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Last updated: {updated}
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-12">
            {sections.map((section, index) => (
              <ScrollReveal key={section.heading} delay={Math.min(index * 60, 240)}>
                <article>
                  <h2 className="font-serif text-2xl font-medium text-[var(--color-dark)]">
                    {section.heading}
                  </h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="mt-4 text-base leading-relaxed text-[var(--color-muted)]"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.points?.length ? (
                    <ul className="mt-4 flex flex-col gap-3">
                      {section.points.map((point) => (
                        <li
                          key={point.slice(0, 40)}
                          className="flex items-start gap-3 text-base leading-relaxed text-[var(--color-muted)]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={120}>
            <div className="mt-16 rounded-2xl border border-[var(--color-ivory-200)] bg-[var(--color-ivory-100)] p-8">
              <h2 className="font-serif text-xl font-medium text-[var(--color-dark)]">
                Any questions?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                If anything here is unclear, please call the shop or write to us. We would rather
                answer a question than have you wonder.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-press inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-dark)]"
                >
                  Contact Us
                </Link>
                <Link
                  href="/"
                  className="btn-press inline-flex items-center justify-center rounded-full border border-[var(--color-gold)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-brown)] transition-colors hover:bg-gradient-primary hover:text-[var(--color-dark)]"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
