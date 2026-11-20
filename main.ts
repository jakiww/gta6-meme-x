// Entry program for the gta6-meme-x-01 bounty.
// It hands the post address to the grader: POST.json from the repo root
// is copied, byte for byte, into the output directory. Nothing else is
// written, nothing is printed, and nothing leaves this repository.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const post = readFileSync(join(botDir, "POST.json"));
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "POST.json"), post);
