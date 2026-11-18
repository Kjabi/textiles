"use client";

import { Phone, MessageCircle, MapPin } from "lucide-react";
import { business, telHref } from "@/config/business";
import { getWhatsAppUrl, isWhatsAppConfigured } from "@/config/integrations";

export function MobileContactBar() {
  const whatsappReady = isWhatsAppConfigured();

  const items = [
    {
      label: "Call",
      href: telHref,
      icon: Phone,
      external: false,
      enabled: true,
    },
    {
      label: "WhatsApp",
      href: whatsappReady ? getWhatsAppUrl() : undefined,
      icon: MessageCircle,
      external: whatsappReady,
      enabled: whatsappReady,
    },
    {
      label: "Directions",
      href: business.googleMapsUrl,
      icon: MapPin,
      external: true,
      enabled: true,
    },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-ivory-200)] bg-[var(--color-cream)]/95 backdrop-blur-md md:hidden">
      <nav aria-label="Quick contact" className="flex items-stretch justify-around py-1.5">
        {items.map((item) => {
          const Icon = item.icon;

          if (!item.enabled || !item.href) {
            return (
              <span
                key={item.label}
                aria-disabled="true"
                className="flex flex-1 flex-col items-center gap-0.5 px-2 py-2 text-[11px] font-medium text-[var(--color-muted)] opacity-45"
              >
                <Icon size={17} aria-hidden="true" />
                {item.label}
              </span>
            );
          }

          return (
            <a
              key={item.label}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex flex-1 flex-col items-center gap-0.5 px-2 py-2 text-[11px] font-medium text-[var(--color-brown)] transition-colors active:text-[var(--color-dark)]"
            >
              <Icon size={17} aria-hidden="true" />
              {item.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
