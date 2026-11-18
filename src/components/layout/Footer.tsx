import Link from "next/link";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import { business, fullAddress, directionsUrl, telHref } from "@/config/business";
import { integrations } from "@/config/integrations";
import { navigation } from "@/config/navigation";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = navigation.filter((item) =>
    ["/about", "/collections", "/gallery", "/reviews", "/feedback", "/contact", "/visit-us"].includes(
      item.href,
    ),
  );

  return (
    <footer className="relative mt-20 overflow-hidden bg-[var(--color-dark)] text-[var(--color-ivory-100)]">
      <ScrollReveal>
        <div
          aria-hidden="true"
          className="footer-accent h-1 w-full"
        />
      </ScrollReveal>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-gradient-primary font-serif text-2xl text-[var(--color-dark)]">
                S
              </span>
              <span className="font-serif text-lg font-semibold tracking-wide text-[var(--color-cream)]">
                SRI SARAVANA&apos;S TEXTILES
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[var(--color-ivory-300)]">
              A textile and clothing store on Middle Street, Rameswaram, Tamil Nadu. Explore our
              clothing and textile collections at the shop.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-serif text-lg font-medium text-[var(--color-cream)]">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--color-ivory-300)] transition-colors hover:text-[var(--color-gold)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-serif text-lg font-medium text-[var(--color-cream)]">Visit Us</h3>
            <ul className="mt-5 space-y-4 text-sm text-[var(--color-ivory-300)]">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--color-gold)]" aria-hidden="true" />
                <span>{fullAddress}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-[var(--color-gold)]" aria-hidden="true" />
                <a href={telHref} className="transition-colors hover:text-[var(--color-gold)]">
                  {business.telephone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-[var(--color-gold)]" aria-hidden="true" />
                <span>6:00 AM – 10:00 PM, every day</span>
              </li>
            </ul>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-gold)] transition-colors hover:text-[var(--color-light-gold)]"
            >
              Get directions on Google Maps
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium text-[var(--color-cream)]">Reviews</h3>
            <p className="mt-5 text-sm leading-relaxed text-[var(--color-ivory-300)]">
              Our customer reviews are hosted on Google, so you always see the latest, most
              complete feedback.
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={integrations.googleMapsListingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--color-ivory-300)] transition-colors hover:text-[var(--color-gold)]"
                >
                  <Star size={15} aria-hidden="true" />
                  Read customer reviews on Google
                </a>
              </li>
              <li>
                <Link
                  href="/feedback"
                  className="text-[var(--color-ivory-300)] transition-colors hover:text-[var(--color-gold)]"
                >
                  Share private feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[var(--color-ivory-400)] md:flex-row">
          <p>
            &copy; {year} {business.businessName}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[var(--color-gold)]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="transition-colors hover:text-[var(--color-gold)]"
            >
              Terms &amp; Conditions
            </Link>
            <p>
              {business.address} &middot; {business.telephone}
            </p>
          </nav>
        </div>
      </div>
    </footer>
  );
}
