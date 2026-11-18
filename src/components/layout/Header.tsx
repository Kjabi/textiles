"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { navigation } from "@/config/navigation";
import { business, telHref } from "@/config/business";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--color-ivory-200)] bg-[var(--color-cream)]/92 shadow-[0_1px_20px_-12px_rgba(48,35,18,0.5)] backdrop-blur-md"
          : "border-b border-transparent bg-[var(--color-cream)]/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label={`${business.businessName} — Home`}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-gradient-primary font-serif text-2xl text-[var(--color-dark)] shadow-[0_8px_20px_-10px_rgba(248,181,0,0.9)]">
            S
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base font-semibold tracking-wide text-[var(--color-dark)] sm:text-lg">
              SRI SARAVANA&apos;S TEXTILES
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-brown)]">
              Textile &amp; Clothing
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-5">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  data-active={isActive(item.href)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="nav-link text-[13px] font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-brown)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={telHref}
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-[var(--color-gold)] text-[var(--color-brown)] transition-all duration-300 hover:bg-gradient-primary hover:text-[var(--color-dark)] md:inline-flex"
            aria-label={`Call ${business.businessName} at ${business.telephone}`}
          >
            <Phone size={18} aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--color-dark)] transition-colors hover:bg-[var(--color-ivory-100)] xl:hidden"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile"
        className={`mobile-menu border-t border-[var(--color-ivory-200)] bg-[var(--color-cream)] px-6 xl:hidden ${
          open ? "mobile-menu--open" : ""
        }`}
      >
        <ul className="flex flex-col gap-1 py-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-gradient-primary text-[var(--color-dark)]"
                    : "text-[var(--color-brown)] hover:bg-[var(--color-ivory-100)]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 border-t border-[var(--color-ivory-200)] pt-3">
            <a
              href={telHref}
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-[var(--color-brown)] hover:bg-[var(--color-ivory-100)]"
            >
              <Phone size={16} aria-hidden="true" />
              {business.telephone}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
