interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-ivory-200)] bg-[var(--color-ivory-100)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #f8b500 0%, rgba(248,181,0,0) 70%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-brown)]">
          <span aria-hidden="true" className="h-px w-8 bg-[var(--color-gold)]" />
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight text-[var(--color-dark)] md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
