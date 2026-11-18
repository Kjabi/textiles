import { Info } from "lucide-react";

/**
 * Shown when an integration has not been configured by the owner yet.
 * It explains exactly what is missing instead of pretending the feature
 * works, so visitors are never sent to a broken or empty form.
 */
export function IntegrationPending({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-[var(--color-gold)] bg-[var(--color-ivory-100)] p-6">
      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brown)]">
        <Info size={14} aria-hidden="true" />
        {title}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{message}</p>
    </div>
  );
}
