import { business } from "@/config/business";
import { Button } from "@/components/ui/Button";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

function PaisleyMotif({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 140"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M50 6c26 26 40 44 40 66 0 26-18 44-40 44S10 98 10 72C10 50 24 32 50 6Z" />
      <path d="M50 30c16 18 24 30 24 44 0 15-11 26-24 26s-24-11-24-26c0-14 8-26 24-44Z" />
      <path d="M50 62c7 8 10 14 10 19 0 8-5 13-10 13s-10-5-10-13c0-5 3-11 10-19Z" />
      <circle cx="50" cy="86" r="4" />
      <path d="M6 30h12M82 30h12M50 0v6" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden bg-gradient-primary">
      {/* Floating textile-inspired motifs */}
      <PaisleyMotif className="float-slow pointer-events-none absolute -left-10 top-16 h-40 w-28 text-[var(--color-dark)] opacity-[0.08] md:h-56 md:w-40" />
      <PaisleyMotif className="float-slower pointer-events-none absolute -right-6 bottom-10 h-32 w-24 rotate-12 text-[var(--color-dark)] opacity-[0.07] md:h-48 md:w-36" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-28">
        <div className="text-center lg:text-left">
          <span className="hero-enter hero-enter-1 inline-flex items-center gap-2 rounded-full border border-[var(--color-brown)]/25 bg-[var(--color-cream)]/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brown)] backdrop-blur-sm">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
            {business.businessName}
          </span>

          <h1 className="hero-enter hero-enter-2 mt-6 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-[var(--color-dark)] sm:text-5xl lg:text-6xl xl:text-7xl">
            Discover the Beauty of Textiles
          </h1>

          <p className="hero-enter hero-enter-3 mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-brown)] sm:text-lg lg:mx-0">
            Explore clothing and textile collections at Sri Saravana&apos;s Textiles, Rameswaram.
          </p>

          <div className="hero-enter hero-enter-4 mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button href="/collections" variant="dark">
              Explore Collections
            </Button>
            <Button href="/gallery" variant="outline">
              View Our Gallery
            </Button>
            <Button href="/visit-us" variant="outline">
              Visit Our Shop
            </Button>
          </div>

          <p className="hero-enter hero-enter-5 mt-8 text-xs uppercase tracking-[0.18em] text-[var(--color-brown)]/80">
            {business.address} &middot; {business.city} &middot; {business.postalCode}
          </p>
        </div>

        <div className="hero-enter hero-enter-3 relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-[var(--color-cream)]/70 shadow-[0_40px_80px_-40px_rgba(48,35,18,0.65)] lg:aspect-[4/4.4]">
            <ResponsiveImage
              src="/images/hero/sri-saravana-textile-display.webp"
              alt="Sarees, an unstitched blouse piece and folded textiles on the display rack inside Sri Saravana's Textiles, Rameswaram"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              imgClassName="hero-image-motion object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(48,35,18,0.45)] via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-[var(--color-cream)]/60 bg-[var(--color-cream)]/85 px-5 py-4 shadow-[0_20px_40px_-24px_rgba(48,35,18,0.7)] backdrop-blur-md sm:block">
            <p className="font-serif text-lg font-medium text-[var(--color-dark)]">Middle Street</p>
            <p className="mt-0.5 text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
              Rameswaram &middot; 623526
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
