import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { business } from "@/config/business";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = createPageMetadata({
  title: `Privacy Policy — ${business.businessName}`,
  description:
    "How Sri Saravana's Textiles handles information when you visit our website in Rameswaram. We do not collect or sell personal data.",
  path: "/privacy-policy",
});

const updated = "15 November 2026";

const sections = [
  {
    heading: "About this website",
    paragraphs: [
      `This website belongs to ${business.businessName}, a textile and clothing store at ${business.address}, ${business.city}, ${business.state} ${business.postalCode}. It is a digital showroom: it shows our shop, our textile collections and how to reach us. It is not an online shop, and there is no account, checkout or payment on this site.`,
    ],
  },
  {
    heading: "What we collect",
    paragraphs: [
      "This website is built as a set of static pages. It has no customer database, no login, no shopping cart and no order system. Visiting these pages does not ask you for your name, your address, your phone number or any other personal detail, and nothing you do here is stored on our servers.",
      "Our web hosting provider may keep standard technical logs (such as IP address, browser type and requested page) for security and reliability. That information is handled by the provider under their own policies and is not used by us to build a profile of you.",
    ],
  },
  {
    heading: "Cookies",
    paragraphs: [
      "We do not set tracking cookies, advertising cookies or analytics cookies on this site. We do not use cross-site advertising pixels.",
      "If you open the feedback form, Google may set its own cookies inside that embedded form. If you follow a link to WhatsApp, Google Maps or Google Reviews, those services may set their own cookies once you land on them. Those are governed by Google, WhatsApp and the relevant provider's own privacy policies, not by us.",
    ],
  },
  {
    heading: "The contact form",
    paragraphs: [
      "The 'Draft Email' form on our contact page does not send anything from our servers. When you use it, we build a normal email message and hand it to your own email application. You can read it, edit it, or close it without sending. If you do send it, your email reaches our mailbox exactly as if you had written to us yourself.",
    ],
  },
  {
    heading: "The feedback form",
    paragraphs: [
      "Customer feedback is collected through a form hosted on Google Forms. Responses are stored in the shop owner's Google account and are visible to the shop owner. We ask you to share only what you are comfortable sharing, and we never ask for payment or bank details.",
    ],
  },
  {
    heading: "Maps and reviews",
    paragraphs: [
      "Our pages embed a Google map and link to our Google Maps listing and Google Business Profile. Google may process information such as your IP address to serve the map and to show the listing. Review content on Google is published by Google and is subject to Google's own privacy policy and terms.",
    ],
  },
  {
    heading: "How we use information you choose to share",
    paragraphs: [
      "If you call the shop, message us on WhatsApp or send us an email, we use that information only to reply to you and to run the shop's business — for example, to tell you about a collection, to arrange a visit, or to keep track of an order you placed in the shop.",
      "We do not sell your details, rent them out, or share them with advertisers. We will only pass your details to someone else if the law requires it, or if it is necessary to deliver something you have asked for.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      "You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. You can also ask us to stop contacting you. You can leave a review on Google, or take it down, whenever you wish — those controls are on Google's review page.",
      "Because most of this website sets no cookies and keeps no personal data, there is usually nothing for us to delete. For anything you sent us by email or WhatsApp, we will keep it only for as long as we need it for the purpose it was given for.",
    ],
  },
  {
    heading: "Children",
    paragraphs: [
      "This website is not directed at children, and we do not knowingly collect personal information from anyone under 18. If you believe a child has sent us information through the feedback form or by email, please contact us and we will remove it.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "We may update this policy if our website or the law changes. The 'last updated' date at the top of this page always reflects the current version.",
    ],
  },
  {
    heading: "Contacting us",
    paragraphs: [
      `Questions about this policy are always welcome. Call ${business.telephone}, email ${"abirudhu@gmail.com"}, or write to us at ${business.address}, ${business.city}, ${business.state} ${business.postalCode}, India.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="We keep this short and readable, because a privacy notice nobody can understand is not much use. In plain terms: this is a showcase website, we do not collect personal data, and we never sell anything to anyone."
      updated={updated}
      sections={sections}
    />
  );
}
