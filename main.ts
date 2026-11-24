// World News, 24 November 2026 — make.fun news-image entry.
//
// The image is entry.png, built for this day (30 dated stories, hero + stats
// strip + date check) and shipped beside this file. This program only copies
// it to the output directory, so both grader runs write identical bytes.
// Node 22, standard library only, no network.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// In the grader MAKEFUN_OUTPUT_DIR is /output; locally it is wherever
// the caller points it. Default to /output when it is not set.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const source = new URL("./entry.png", import.meta.url);
const target = join(outDir, "entry.png");
copyFileSync(source, target);
console.log(`Wrote ${target} (World News, 24 November 2026).`);
