/**
 * Third-party integrations for SRI SARAVANA'S TEXTILES.
 *
 * Every value here must be filled in with a real, owner-supplied account.
 * Nothing in this file is invented. Each entry is left empty until the shop
 * owner provides it, and the UI degrades to a clearly disabled state rather
 * than showing a broken or misleading link.
 */

export const integrations = {
  /**
   * OWNER_EMAIL_ADDRESS — the full email address of the shop owner.
   * Used as the recipient for the "Draft Email" contact form.
   */
  ownerEmail: "abirudhu@gmail.com",

  /**
   * GOOGLE_FEEDBACK_FORM_URL — the URL of the owner's Google Form used to
   * collect private customer feedback.
   *
   * Verified: Google's `?embedded=true` endpoint returns 401 for this form
   * when it is framed, so the canonical `viewform` URL is used instead —
   * it renders the complete form inside the iframe and works standalone in
   * a new tab as well. A short link (forms.gle/...) is also accepted.
   *
   * To point this at a different form, replace the value below with that
   * form's canonical `viewform` URL.
   */
  googleFeedbackFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLScDQdIlMQvPUDtbx-IfdSgaVy5we7ttE9K9sAx9mMklobDgdQ/viewform",

  /**
   * GOOGLE_MAPS_LISTING_URL — the public Google Maps listing for the shop.
   */
  googleMapsListingUrl: "https://maps.app.goo.gl/XMeU39x8U2jmCiW28",

  /**
   * GOOGLE_REVIEW_URL — the official "write a review" link from the
   * Google Business Profile:
   * Business Profile > Read Reviews > Get more reviews > Copy link.
   * The general Maps listing URL is NOT a review-composer link.
   */
  googleReviewUrl: "",

  /**
   * WHATSAPP_NUMBER — the business number registered on WhatsApp,
   * digits only with country code (e.g. 919944687843).
   */
  whatsappNumber: "919944687843",
};

export const isEmailConfigured = () => integrations.ownerEmail.trim().length > 0;
export const isFeedbackFormConfigured = () =>
  integrations.googleFeedbackFormUrl.trim().length > 0;
export const isReviewComposerConfigured = () =>
  integrations.googleReviewUrl.trim().length > 0;
export const isWhatsAppConfigured = () => integrations.whatsappNumber.trim().length > 0;

/**
 * The URL used inside the feedback iframe.
 *
 * A short link (forms.gle/...) is resolved to the canonical document URL so
 * it can be framed. The URL configured by the owner is otherwise used
 * exactly as given — Google's `?embedded=true` endpoint is deliberately
 * not forced on, because it returns 401 for forms that are framed this way.
 */
export function getFeedbackEmbedUrl(): string {
  const url = integrations.googleFeedbackFormUrl.trim();
  if (!url) return "";

  const shortLink = url.match(/^https?:\/\/forms\.gle\/([A-Za-z0-9_-]+)/);
  if (shortLink) {
    return `https://docs.google.com/forms/d/e/${shortLink[1]}/viewform`;
  }

  return url;
}

/**
 * The standalone form URL, used for the "open in a new tab" fallback.
 * Opened as a first-party page it avoids any cookie prompt that Google
 * may show inside a third-party frame.
 */
export function getFeedbackFormPageUrl(): string {
  const url = integrations.googleFeedbackFormUrl.trim();
  if (!url) return "";
  const shortLink = url.match(/^https?:\/\/forms\.gle\/([A-Za-z0-9_-]+)/);
  if (shortLink) return url;
  return url.replace(/[?&]embedded=true(&?)/, (_m, tail) => (tail ? "?" : ""));
}

/**
 * Builds a correctly encoded `mailto:` link that opens the visitor's own
 * email client with everything pre-filled. It never sends anything itself.
 */
export function buildMailtoLink({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): string {
  const business = "SRI SARAVANA'S TEXTILES";
  const fullSubject = subject.trim() || `Enquiry for ${business}`;

  const body = [
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    "",
    message.trim(),
    "",
    "— Sent from srisaravanas-textiles.com",
  ].join("\n");

  return `mailto:${integrations.ownerEmail}?subject=${encodeURIComponent(
    fullSubject,
  )}&body=${encodeURIComponent(body)}`;
}

/** wa.me deep link that opens a WhatsApp conversation. */
export function getWhatsAppUrl(message?: string): string {
  const number = integrations.whatsappNumber.replace(/\D/g, "");
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
