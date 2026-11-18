interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-brown)]">
          <span aria-hidden="true" className="h-px w-8 bg-[var(--color-gold)]" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-serif text-3xl font-medium leading-tight text-[var(--color-dark)] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-[var(--color-muted)]">{description}</p>
      ) : null}
    </div>
  );
}
