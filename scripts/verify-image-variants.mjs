/**
 * Verifies that every image variant referenced by the generated manifest
 * actually exists on disk. Runs automatically before `npm run build` and
 * `npm run dev` so a missing file can never reach production.
 */
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const manifestPath = join(root, "src", "generated", "image-variants.json");

if (!existsSync(manifestPath)) {
  console.error(
    "\n  Missing src/generated/image-variants.json\n" +
      "  Run:  npm run images:optimize\n",
  );
  process.exit(1);
}

const manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
const missing = [];
let count = 0;

for (const [source, entry] of Object.entries(manifest.images ?? {})) {
  const sourcePath = join(root, "public", source.replace(/^\//, ""));
  if (!existsSync(sourcePath)) {
    missing.push(`source   ${source}`);
  }
  for (const variant of entry.variants ?? []) {
    count += 1;
    const variantPath = join(root, "public", variant.url.replace(/^\//, ""));
    if (!existsSync(variantPath)) {
      missing.push(`variant  ${variant.url}`);
    }
  }
}

if (missing.length > 0) {
  console.error(
    `\n  ${missing.length} image file(s) missing:\n` +
      missing.map((item) => `    - ${item}`).join("\n") +
      "\n\n  Run:  npm run images:optimize\n",
  );
  process.exit(1);
}

console.log(`✓ ${count} image variants verified (${Object.keys(manifest.images).length} photographs)`);
