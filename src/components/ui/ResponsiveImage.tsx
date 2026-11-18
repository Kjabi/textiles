import manifest from "@/generated/image-variants.json";

interface Variant {
  w: number;
  h: number;
  url: string;
}

interface ManifestEntry {
  width: number;
  height: number;
  variants: Variant[];
}

const images = manifest.images as Record<string, ManifestEntry>;

interface ResponsiveImageProps {
  /** Public path of the original image, e.g. "/images/hero/photo.webp". */
  src: string;
  alt: string;
  /** Fill the nearest positioned ancestor (mirrors next/image `fill`). */
  fill?: boolean;
  width?: number;
  height?: number;
  /** The `sizes` attribute describing the rendered width. */
  sizes?: string;
  className?: string;
  /** Classes applied to the <img> element itself. */
  imgClassName?: string;
  /** True for above-the-fold images: loads eagerly with high priority. */
  priority?: boolean;
  style?: React.CSSProperties;
}

/**
 * A statically optimised, responsive image.
 *
 * Every photograph is pre-rendered into content-hashed WebP variants by
 * `scripts/generate-image-variants.py`, so the browser downloads the
 * smallest file that fits the screen and the CDN can cache each file
 * forever. No runtime image optimiser is involved, which is what allows
 * the site to serve images in a couple of milliseconds under heavy load.
 *
 * Sizing is explicit on every image, so the layout never shifts.
 */
export function ResponsiveImage({
  src,
  alt,
  fill = false,
  width,
  height,
  sizes = "100vw",
  className,
  imgClassName,
  priority = false,
  style,
}: ResponsiveImageProps) {
  const entry = images[src];
  const variants = entry?.variants ?? [];

  const srcSet = variants.length > 0
    ? variants.map((variant) => `${variant.url} ${variant.w}w`).join(", ")
    : undefined;

  const intrinsicWidth = width ?? entry?.width ?? 1600;
  const intrinsicHeight = height ?? entry?.height ?? 1000;

  return (
    <picture className={className} style={displayContents}>
      <img
        src={srcSet ? variants[variants.length - 1].url : src}
        srcSet={srcSet}
        sizes={srcSet ? sizes : undefined}
        alt={alt}
        width={fill ? undefined : intrinsicWidth}
        height={fill ? undefined : intrinsicHeight}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={imgClassName}
        style={
          fill
            ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style }
            : style
        }
      />
    </picture>
  );
}

/**
 * `display: contents` lets the absolutely positioned <img> resolve against
 * the nearest positioned ancestor, exactly like next/image's `fill` mode.
 */
const displayContents: React.CSSProperties = { display: "contents" };
