"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send, ExternalLink } from "lucide-react";
import { business, directionsUrl, fullAddress, mapEmbedUrl, telHref } from "@/config/business";
import {
  buildMailtoLink,
  getWhatsAppUrl,
  integrations,
  isEmailConfigured,
  isWhatsAppConfigured,
} from "@/config/integrations";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { IntegrationPending } from "@/components/ui/IntegrationPending";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMPTY_FORM: FormState = { name: "", email: "", subject: "", message: "" };

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please tell us how we can help.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please add a little more detail (at least 10 characters).";
  }

  return errors;
}

export function ContactSection() {
  const [values, setValues] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const emailReady = isEmailConfigured();
  const whatsappReady = isWhatsAppConfigured();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name as keyof FormState]) return prev;
      const next = { ...prev };
      delete next[name as keyof FormState];
      return next;
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!emailReady) {
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    window.location.href = buildMailtoLink({
      name: values.name,
      email: values.email,
      subject: values.subject || `Enquiry for ${business.businessName}`,
      message: values.message,
    });
  };

  const contactActions = [
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
      value: whatsappReady ? "Message us on WhatsApp" : "Not yet available",
      href: whatsappReady ? getWhatsAppUrl() : undefined,
      icon: MessageCircle,
      ready: whatsappReady,
      external: whatsappReady,
    },
    {
      label: "Email Us",
      value: emailReady ? "Draft an email" : "Not yet available",
      href: emailReady ? `mailto:${integrations.ownerEmail}` : undefined,
      icon: Mail,
      ready: emailReady,
      external: false,
    },
    {
      label: "Get Directions",
      value: "Open Google Maps",
      href: directionsUrl,
      icon: MapPin,
      ready: true,
      external: true,
    },
  ];

  const fieldClass =
    "field w-full rounded-xl border border-[var(--color-ivory-300)] bg-[var(--color-cream)] px-4 py-3 text-base text-[var(--color-dark)] placeholder:text-[var(--color-muted)]/60";

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Contact Sri Saravana's Textiles"
        description="Call the shop, send us a message, or come in and see the collection on Middle Street, Rameswaram."
      />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactActions.map((action) => {
              const Icon = action.icon;

              const body = (
                <>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-primary text-[var(--color-dark)]">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <span className="mt-4 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    {action.label}
                  </span>
                  <span className="mt-1 block text-sm font-medium text-[var(--color-brown)]">
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
                    {body}
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
                  className="hover-lift rounded-2xl border border-[var(--color-ivory-200)] bg-[var(--color-cream)] p-6 shadow-[var(--shadow-soft)] transition-colors hover:border-[var(--color-gold)]"
                >
                  {body}
                </a>
              );
            })}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <ScrollReveal>
              <div className="rounded-[1.75rem] border border-[var(--color-ivory-200)] bg-[var(--color-cream)] p-7 shadow-[var(--shadow-soft)] md:p-9">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-brown)]">
                  <span aria-hidden="true" className="h-px w-8 bg-[var(--color-gold)]" />
                  Write to us
                </span>
                <h2 className="mt-4 font-serif text-2xl font-medium text-[var(--color-dark)]">
                  Draft an email
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  Fill this in and we will prepare a message in your own email app with everything
                  filled in for you. Nothing is sent automatically — you stay in control before
                  it goes.
                </p>

                {emailReady ? (
                  <form onSubmit={handleSubmit} noValidate className="mt-7 grid gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-sm font-medium text-[var(--color-brown)]"
                      >
                        Your name <span className="text-[var(--color-muted)]">(required)</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={values.name}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                        className={`${fieldClass} ${errors.name ? "border-red-400" : ""}`}
                        placeholder="Your name"
                      />
                      {errors.name ? (
                        <p id="contact-name-error" className="mt-2 text-xs text-red-600">
                          {errors.name}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-sm font-medium text-[var(--color-brown)]"
                      >
                        Your email <span className="text-[var(--color-muted)]">(required)</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                        className={`${fieldClass} ${errors.email ? "border-red-400" : ""}`}
                        placeholder="you@example.com"
                      />
                      {errors.email ? (
                        <p id="contact-email-error" className="mt-2 text-xs text-red-600">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="mb-2 block text-sm font-medium text-[var(--color-brown)]"
                      >
                        Subject <span className="text-[var(--color-muted)]">(optional)</span>
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        value={values.subject}
                        onChange={handleChange}
                        className={fieldClass}
                        placeholder={`Enquiry for ${business.businessName}`}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="mb-2 block text-sm font-medium text-[var(--color-brown)]"
                      >
                        Message <span className="text-[var(--color-muted)]">(required)</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        value={values.message}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "contact-message-error" : undefined}
                        className={`${fieldClass} resize-y ${errors.message ? "border-red-400" : ""}`}
                        placeholder="How can we help?"
                      />
                      {errors.message ? (
                        <p id="contact-message-error" className="mt-2 text-xs text-red-600">
                          {errors.message}
                        </p>
                      ) : null}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <button
                        type="submit"
                        className="btn-press inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-dark)] shadow-[0_10px_30px_-12px_rgba(248,181,0,0.85)]"
                      >
                        <Send size={15} aria-hidden="true" />
                        Draft Email
                      </button>
                      {submitted ? (
                        <p className="text-xs leading-relaxed text-[var(--color-muted)]">
                          Your email app should now be open with the message ready to review and
                          send.
                        </p>
                      ) : null}
                    </div>
                  </form>
                ) : (
                  <div className="mt-7">
                    <IntegrationPending
                      title="Email address not yet configured"
                      message="The shop owner's email address has not been added yet, so the email form is unavailable. Please call the shop or visit us on Middle Street in the meantime."
                    />
                  </div>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="overflow-hidden rounded-[1.75rem] border border-[var(--color-ivory-200)] bg-[var(--color-cream)] shadow-[var(--shadow-soft)]">
                <div className="aspect-[4/3] w-full">
                  <iframe
                    title="Google Maps location of Sri Saravana's Textiles"
                    src={mapEmbedUrl}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                <div className="p-7 md:p-9">
                  <h3 className="font-serif text-xl font-medium text-[var(--color-dark)]">
                    Opening Hours
                  </h3>
                  <dl className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
                    {(
                      [
                        ["Monday", business.openingHours.monday],
                        ["Tuesday", business.openingHours.tuesday],
                        ["Wednesday", business.openingHours.wednesday],
                        ["Thursday", business.openingHours.thursday],
                        ["Friday", business.openingHours.friday],
                        ["Saturday", business.openingHours.saturday],
                        ["Sunday", business.openingHours.sunday],
                      ] as const
                    ).map(([day, time]) => (
                      <div key={day} className="flex justify-between gap-4">
                        <dt className="font-medium text-[var(--color-brown)]">{day}</dt>
                        <dd className="text-right">{time}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 text-xs italic text-[var(--color-muted)]">
                    Hours listed from Google Maps and subject to owner confirmation.
                  </p>

                  <address className="mt-7 not-italic text-sm leading-relaxed text-[var(--color-muted)]">
                    {fullAddress}
                  </address>

                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brown)] transition-colors hover:bg-gradient-primary hover:text-[var(--color-dark)]"
                  >
                    Get Directions
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
