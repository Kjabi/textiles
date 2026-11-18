export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Collections", href: "/collections" },
  { label: "Gallery", href: "/gallery" },
  { label: "Customer Reviews", href: "/reviews" },
  { label: "Feedback", href: "/feedback" },
  { label: "Contact Us", href: "/contact" },
  { label: "Visit Our Shop", href: "/visit-us" },
];
