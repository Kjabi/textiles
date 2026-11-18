import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { business, directionsUrl, fullAddress, telHref } from "@/config/business";
import { getWhatsAppUrl, isEmailConfigured, isWhatsAppConfigured, integrations } from "@/config/integrations";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HomeContactPreview() {
  const whatsappReady = isWhatsAppConfigured();
  const emailReady = isEmailConfigured();

  const actions = [
    {
      label: "Call Us",
      value: business.telephone,
      href: telHref,
      icon: Phone,
      ready: true,
      external: false,
    },
    {
      label: "WhatsApp",
      value: whatsappReady ? "Chat with us on WhatsApp" : "Not yet available",
      href: whatsappReady ? getWhatsAppUrl() : undefined,
      icon: MessageCircle,
      ready: whatsappReady,
      external: whatsappReady,
    },
    {
      label: "Email Us",
      value: emailReady ? "Send us an email" : "Not yet available",
      href: emailReady ? `mailto:${integrations.ownerEmail}` : undefined,
      icon: Mail,
      ready: emailReady,
      external: false,
    },
    {
      label: "Get Directions",
      value: "Middle Street, Rameswaram",
      href: directionsUrl,
      icon: MapPin,
      ready: true,
      external: true,
    },
  ];

  return (
    <ScrollReveal delay={100}>
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch with the shop"
            description="Call, message or visit us on Middle Street. We are open every day from 6:00 AM to 10:00 PM."
            align="center"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {actions.map((action) => {
              const Icon = action.icon;

              const card = (
                <>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-[var(--color-dark)] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="mt-5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    {action.label}
                  </span>
                  <span className="mt-1.5 block text-sm font-medium leading-relaxed text-[var(--color-brown)]">
                    {action.value}
                  </span>
                </>
              );

              if (!action.ready || !action.href) {
                return (
                  <div
                    key={action.label}
                    className="rounded-2xl border border-dashed border-[var(--color-ivory-300)] bg-[var(--color-ivory-100)] p-6 opacity-60"
                  >
                    {card}
                  </div>
                );
              }

              return (
                <a
                  key={action.label}
                  href={action.href}
                  {...(action.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group hover-lift rounded-2xl border border-[var(--color-ivory-200)] bg-[var(--color-cream)] p-6 shadow-[var(--shadow-soft)] transition-colors hover:border-[var(--color-gold)]"
                >
                  {card}
                </a>
              );
            })}
          </div>

          <p className="mt-10 text-center text-sm text-[var(--color-muted)]">
            {fullAddress}
          </p>
        </div>
      </section>
    </ScrollReveal>
  );
}
