"use client";

import { useEffect } from "react";

/**
 * Preloads the hero image so the browser starts downloading it
 * immediately on first visit instead of waiting for the component to render.
 */
export function PreloadHeroImage() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = "/images/hero/sri-saravana-textile-display.webp";
    link.imageSrcset =
      "/images/variants/hero/sri-saravana-textile-display-320-2b74a100.webp 320w, /images/variants/hero/sri-saravana-textile-display-480-99c4f018.webp 480w, /images/variants/hero/sri-saravana-textile-display-640-051135a3.webp 640w, /images/variants/hero/sri-saravana-textile-display-768-93405c77.webp 768w, /images/variants/hero/sri-saravana-textile-display-1024-821a6742.webp 1024w, /images/variants/hero/sri-saravana-textile-display-1280-6dd596ff.webp 1280w";
    link.imageSizes = "(max-width: 1024px) 90vw, 45vw";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return null;
}
