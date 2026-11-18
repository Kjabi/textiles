#!/usr/bin/env python3
"""
Generates static, pre-optimised responsive image variants.

Why static instead of the Next.js runtime optimiser?
-----------------------------------------------------
Every route on this site is prerendered, so serving *static* assets keeps the
whole site free of serverless image functions. That removes cold starts and
lets a CDN (Vercel Edge) answer image requests in a few milliseconds, no
matter how many visitors arrive at once.

Filenames carry a short content hash, so each variant can be cached
immutably forever and still change the moment a photograph is replaced.

Usage:
    python3 scripts/generate-image-variants.py          # regenerate all
    npm run images:optimize                             # same thing

Requires: Pillow  (pip install Pillow)
"""

from __future__ import annotations

import hashlib
import json
import os
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:  # pragma: no cover
    sys.exit("Pillow is required. Install it with:  pip install Pillow")

ROOT = Path(__file__).resolve().parent.parent
IMAGES_DIR = ROOT / "public" / "images"
VARIANTS_DIR = IMAGES_DIR / "variants"
MANIFEST = ROOT / "src" / "generated" / "image-variants.json"

# Widths to generate. Each image only gets widths it can supply.
WIDTHS = [320, 480, 640, 768, 1024, 1280, 1600, 1920, 2400]

WEBP_QUALITY = 80
WEBP_METHOD = 6


def content_hash(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()[:8]


def source_images() -> list[Path]:
    """Every original image, excluding the generated variants folder."""
    found = []
    for path in sorted(IMAGES_DIR.rglob("*")):
        if not path.is_file():
            continue
        if path.suffix.lower() not in {".webp", ".jpg", ".jpeg", ".png"}:
            continue
        if VARIANTS_DIR in path.parents:
            continue
        found.append(path)
    return found


def build() -> dict:
    manifest: dict[str, dict] = {}
    total_bytes = 0
    total_files = 0

    for source in source_images():
        with Image.open(source) as img:
            img = img.convert("RGB")
            base_w, base_h = img.size

        relative = source.relative_to(IMAGES_DIR)
        key = f"/images/{relative.as_posix()}"

        # Only widths the source can actually fill.
        usable = [w for w in WIDTHS if w < base_w]
        usable.append(base_w)
        usable = sorted(set(usable))

        variants = []
        for width in usable:
            height = max(1, round(base_h * width / base_w))
            out_dir = VARIANTS_DIR / relative.parent
            out_dir.mkdir(parents=True, exist_ok=True)

            with Image.open(source) as img:
                img = img.convert("RGB")
                if img.width != width:
                    img = img.resize((width, height), Image.LANCZOS)
                stem = f"{relative.stem}-{width}"
                out_path = out_dir / f"{stem}.webp"
                img.save(out_path, "WEBP", quality=WEBP_QUALITY, method=WEBP_METHOD)

            data = out_path.read_bytes()
            digest = content_hash(data)
            final_name = f"{stem}-{digest}.webp"
            final_path = out_dir / final_name
            if final_path != out_path:
                out_path.replace(final_path)

            total_bytes += len(data)
            total_files += 1
            variants.append(
                {
                    "w": width,
                    "h": height,
                    "url": f"/images/variants/{relative.parent.as_posix()}/{final_name}"
                    if relative.parent != Path(".")
                    else f"/images/variants/{final_name}",
                }
            )

        manifest[key] = {
            "width": base_w,
            "height": base_h,
            "variants": variants,
        }
        print(f"  {key:60s} {len(variants):2d} variants")

    return {"_meta": {"totalFiles": total_files, "totalBytes": total_bytes}, "images": manifest}


def main() -> None:
    if not IMAGES_DIR.exists():
        sys.exit(f"No images folder at {IMAGES_DIR}")

    print("Generating responsive WebP variants...")
    data = build()

    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST.write_text(json.dumps(data, indent=2) + "\n")

    meta = data["_meta"]
    print(
        f"\nWrote {meta['totalFiles']} variants "
        f"({meta['totalBytes'] / 1024 / 1024:.2f} MB) -> {VARIANTS_DIR.relative_to(ROOT)}"
    )
    print(f"Manifest -> {MANIFEST.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
