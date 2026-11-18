"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

interface LightboxImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  initialIndex: number;
  onClose: () => void;
}

export function ImageLightbox({ images, initialIndex, onClose }: ImageLightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [touchStartX, setTouchStartX] = useState(0);
  const [mounted, setMounted] = useState(false);

  const image = images[index];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (event.key === "ArrowRight") {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [images.length, onClose]);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const touchEndX = event.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else if (diff < -50) {
      setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  if (!image || !mounted) {
    return null;
  }

  const overlay = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer: ${image.caption}`}
      className="lightbox-backdrop fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(48,35,18,0.96)] p-4 sm:p-8"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="relative h-[68vh] w-full max-w-5xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <ResponsiveImage
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          imgClassName="object-contain"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-2 sm:px-6">
        <button
          type="button"
          onClick={() => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
          aria-label="Previous image"
          className="btn-press pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(255,250,240,0.16)] text-[var(--color-cream)] backdrop-blur transition-colors hover:bg-gradient-primary hover:text-[var(--color-dark)]"
        >
          <ChevronLeft size={24} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
          aria-label="Next image"
          className="btn-press pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(255,250,240,0.16)] text-[var(--color-cream)] backdrop-blur transition-colors hover:bg-gradient-primary hover:text-[var(--color-dark)]"
        >
          <ChevronRight size={24} aria-hidden="true" />
        </button>
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="btn-press absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(0,0,0,0.5)] text-[var(--color-cream)] transition-colors hover:bg-gradient-primary hover:text-[var(--color-dark)]"
      >
        <X size={24} aria-hidden="true" />
      </button>

      <div className="pointer-events-none absolute inset-x-0 bottom-4 flex flex-col items-center gap-1 text-center">
        <p className="px-4 font-serif text-base font-medium text-[var(--color-cream)] sm:text-lg">
          {image.caption}
        </p>
        <p className="text-sm text-[var(--color-light-gold)]">
          {index + 1} / {images.length}
        </p>
      </div>
    </div>
  );

  // Rendered in a portal so the viewer is never trapped behind page
  // stacking contexts or the sticky mobile contact bar.
  return createPortal(overlay, document.body);
}

export default ImageLightbox;
