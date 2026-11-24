// news-image-20261124 — evening edition
//
// This is the runtime that ships the finished front page.
// The picture itself (entry.png, 1024 x 1024) was composed earlier
// in this session; this little program just puts it where the
// make.fun harness expects it, so the submission can be graded.
//
// Nothing here touches the network. Node 22, standard library only.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The harness tells us where to drop the output. When run by hand
// we fall back to a plain /output directory, like the spec wants.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const pictureName = "entry.png";
const sourcePath = join(import.meta.dirname, pictureName);
const targetPath = join(outputDir, pictureName);

if (!existsSync(sourcePath)) {
  console.error(`Missing input: ${sourcePath}`);
  process.exit(1);
}

// Make sure the destination folder exists, nested or not.
mkdirSync(outputDir, { recursive: true });

// A straight byte-for-byte copy. Re-encoding would risk changing
// pixels, so we never open the image — we just move the bytes.
copyFileSync(sourcePath, targetPath);

console.log(
  `Done: World News front page for 24 November 2026 is now at ${targetPath}`,
);
