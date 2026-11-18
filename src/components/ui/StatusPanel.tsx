import Link from "next/link";

interface StatusPanelProps {
  eyebrow?: string;
  title: string;
  message: string;
  /** Primary action label and destination. */
  primaryLabel: string;
  primaryHref?: string;
  /** Called instead of navigating when the primary action is a retry. */
  onPrimary?: () => void;
  secondaryLabel: string;
  secondaryHref: string;
}

/**
 * A calm, reassuring status panel shared by the 404 page, route-level
 * error boundaries and the global error boundary. The tone is deliberately
 * warm and unalarming — a visitor should never feel something has gone
 * badly wrong on our side.
 */
export function StatusPanel({
  eyebrow = "Take a breath",
  title,
  message,
  primaryLabel,
  primaryHref,
  onPrimary,
  secondaryLabel,
  secondaryHref,
}: StatusPanelProps) {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <span
          aria-hidden="true"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary font-serif text-xl text-[var(--color-dark)]"
        >
          {eyebrow === "Take a breath" ? "S" : eyebrow}
        </span>

        <h1 className="mt-8 font-serif text-3xl font-medium leading-tight text-[var(--color-dark)] md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">{message}</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          {onPrimary ? (
            <button
              type="button"
              onClick={onPrimary}
              className="btn-press inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-dark)]"
            >
              {primaryLabel}
            </button>
          ) : (
            <Link
              href={primaryHref ?? "/"}
              className="btn-press inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-dark)]"
            >
              {primaryLabel}
            </Link>
          )}
          <Link
            href={secondaryHref}
            className="btn-press inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-gold)] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-brown)] transition-colors hover:bg-gradient-primary hover:text-[var(--color-dark)]"
          >
            {secondaryLabel}
          </Link>
        </div>

        <p className="mt-10 text-sm text-[var(--color-muted)]">
          Still need a hand?{" "}
          <Link
            href="/contact"
            className="text-[var(--color-brown)] underline underline-offset-4 hover:text-[var(--color-dark)]"
          >
            Call the shop
          </Link>{" "}
          or{" "}
          <Link
            href="/visit-us"
            className="text-[var(--color-brown)] underline underline-offset-4 hover:text-[var(--color-dark)]"
          >
            visit us on Middle Street
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
