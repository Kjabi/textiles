/**
 * A calm loading state. Soft golden placeholders pulse gently instead of
 * showing a spinner, so the page feels like it is settling rather than
 * spinning. Reduced-motion preferences are respected automatically.
 */
export default function Loading() {
  return (
    <div className="px-6 py-16 md:py-24" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading the page, please wait a moment.</span>

      <div className="mx-auto max-w-6xl">
        <div className="skeleton h-4 w-28 rounded-full" />
        <div className="skeleton mt-6 h-12 w-full max-w-xl rounded-lg" />
        <div className="skeleton mt-4 h-4 w-full max-w-lg rounded-full" />
        <div className="skeleton mt-3 h-4 w-full max-w-sm rounded-full" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((index) => (
            <div key={index}>
              <div className="skeleton aspect-[4/3] w-full rounded-2xl" />
              <div className="skeleton mt-4 h-5 w-2/3 rounded-full" />
              <div className="skeleton mt-3 h-3.5 w-full rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
