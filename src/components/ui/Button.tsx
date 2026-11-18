import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "gradient" | "dark" | "outline" | "light";

interface ButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  variant?: ButtonVariant;
  size?: "sm" | "md";
  children: ReactNode;
}

export function Button({
  href,
  variant = "gradient",
  size = "md",
  children,
  className,
  ...rest
}: ButtonProps) {
  const baseClasses =
    "btn-press inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-[0.12em] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-brown)]";

  const sizeClasses =
    size === "sm" ? "px-5 py-2.5 text-[11px]" : "px-7 py-3.5 text-xs";

  const variantClasses =
    variant === "gradient"
      ? "bg-gradient-primary text-[var(--color-dark)] shadow-[0_10px_30px_-12px_rgba(248,181,0,0.85)] hover:shadow-[0_16px_38px_-12px_rgba(248,181,0,0.95)]"
      : variant === "dark"
        ? "bg-[var(--color-dark)] text-[var(--color-cream)] hover:bg-[var(--color-brown)]"
        : variant === "outline"
          ? "border border-[var(--color-gold)] bg-transparent text-[var(--color-brown)] hover:bg-gradient-primary hover:text-[var(--color-dark)]"
          : "border border-[var(--color-cream)] bg-transparent text-[var(--color-cream)] hover:bg-[var(--color-cream)] hover:text-[var(--color-dark)]";

  const classes = `${baseClasses} ${sizeClasses} ${variantClasses} ${className ?? ""}`;

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
