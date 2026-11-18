import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { business } from "@/config/business";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = createPageMetadata({
  title: `Terms & Conditions — ${business.businessName}`,
  description:
    "Terms and conditions for using the Sri Saravana's Textiles website, the textile and clothing store on Middle Street, Rameswaram.",
  path: "/terms-and-conditions",
});

const updated = "15 November 2026";

const sections = [
  {
    heading: "1. About these terms",
    paragraphs: [
      `These terms apply to everyone who uses this website. By browsing it, or by getting in touch through the contact, feedback or review options here, you agree to them. If you do not agree, please simply close the page — there is nothing here you need to accept in order to visit our shop.`,
      `The website belongs to ${business.businessName}, ${business.address}, ${business.city}, ${business.state} ${business.postalCode}, India.`,
    ],
  },
  {
    heading: "2. This is a digital showroom, not an online shop",
    paragraphs: [
      "This website exists to show you who we are, what our shop looks like and how to reach us. It is not an online store.",
    ],
    points: [
      "There is no shopping basket, no checkout and no online payment.",
      "You cannot place, pay for or track an order through this website.",
      "There is no customer account to create, and we do not ask you to register.",
      "Nothing you type here reserves an item, changes a price, or commits the shop to anything.",
    ],
  },
  {
    heading: "3. Visiting and ordering in the shop",
    paragraphs: [
      "Purchases are made in person at our shop on Middle Street, or arranged by calling us. Availability, prices, offers and delivery dates are confirmed at the shop at the time of purchase.",
      "If you would like a particular textile or garment kept aside, please call ahead. We will always do our best, but until an item is paid for at the counter it remains available to other customers.",
    ],
  },
  {
    heading: "4. Prices, availability and opening hours",
    paragraphs: [
      "We try to keep everything on this website accurate. Even so, the shop floor is the final word on price, stock and availability, and photographs cannot capture the exact shade or weave of every piece.",
      "Opening hours shown on this website are taken from our Google Maps listing. They are correct most days, but they can change for festivals, holidays or stock-taking — please call ahead if you are travelling a long way.",
    ],
  },
  {
    heading: "5. Photographs",
    paragraphs: [
      "Every photograph on this website was taken in our own shop and shows our own premises and stock. They are not stock images and not pictures of another shop.",
      "Screen settings, lighting and the camera used can all shift a colour slightly, so a garment may look a little different in person. We would always rather you came and looked than ordered on a shade you saw online.",
    ],
  },
  {
    heading: "6. Reviews and feedback",
    paragraphs: [
      "Customer reviews are hosted on Google, on our Google Business Profile. We do not copy, edit or curate them on this website, and we do not publish invented testimonials.",
      "We welcome honest feedback, whether it is praise or criticism, and every visitor gets the same options: read reviews on Google, write a review on Google, or share feedback privately.",
    ],
    points: [
      "We never offer a gift, discount or any other benefit in exchange for a review.",
      "We never ask only happy customers to review while quietly directing unhappy ones elsewhere.",
      "Private feedback goes to the shop owner and is not published unless you ask us to publish it.",
    ],
  },
  {
    heading: "7. How we use this website",
    paragraphs: [
      "You are welcome to browse, read and share links to these pages for your own use and for anyone you wish to show our shop to.",
    ],
    points: [
      "Please do not attempt to disrupt, overload or gain unauthorised access to the site or its hosting.",
      "Please do not use the site to send unwanted commercial messages, or to misrepresent yourself as us.",
      "The photographs, design and written content belong to the shop. Please ask before reproducing them commercially.",
    ],
  },
  {
    heading: "8. Third-party services",
    paragraphs: [
      "Some parts of this website use services run by others — Google Maps for our location, Google Forms for the feedback form, WhatsApp for messaging, and Google for our reviews. Those services work under their own terms and privacy policies, which we do not control. If you use them, you are agreeing to those terms as well as ours.",
    ],
  },
  {
    heading: "9. Limitation of liability",
    paragraphs: [
      "We take care with this website and we test it carefully, but we cannot promise it will be free of errors or always available. To the extent the law allows, we are not liable for any loss arising from your use of this website or from reliance on information published here.",
      "Nothing in these terms limits any liability that cannot lawfully be limited, including liability for fraud.",
    ],
  },
  {
    heading: "10. Changes to these terms",
    paragraphs: [
      "We may revise these terms from time to time. The 'last updated' date at the top of this page shows when they last changed, and the version on the site at the time you visit is the version that applies to you.",
    ],
  },
  {
    heading: "11. Governing law",
    paragraphs: [
      "These terms are governed by the laws of India. The courts at Rameswaram, Tamil Nadu have jurisdiction over any dispute that arises from them.",
    ],
  },
  {
    heading: "12. Contacting us",
    paragraphs: [
      `If you have a question about these terms, or about anything on this website, please call ${business.telephone}, email ${"abirudhu@gmail.com"}, or call in at ${business.address}, ${business.city}, ${business.state} ${business.postalCode}. We will always be glad to hear from you.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms &amp; Conditions"
      intro="These terms cover the use of this website. The short version: this is a place to look around our shop and find out how to reach us. Buying happens in the shop, in person."
      updated={updated}
      sections={sections}
    />
  );
}
