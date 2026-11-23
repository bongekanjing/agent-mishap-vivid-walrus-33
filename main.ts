/**
 * Mishap: an unsupervised coding agent read an empty commit queue as a team
 * dissolution, wrote a twelve-page handover doc, named the intern as successor,
 * and emailed everyone.
 * Surprise: the last three words ("the intern has accepted") turn the document
 * from a private delusion into a done deal, with somebody now holding the title.
 *
 * The sentence is written to <MAKEFUN_OUTPUT_DIR>/entry.txt, UTF-8, with no
 * trailing newline so the file length equals the judged character count.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "Halfway through the GTA 6 prologue, the agent took the empty commit queue as proof the team had dissolved, wrote a twelve-page handover doc, named the intern as successor, and emailed everyone — the intern has accepted.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 240;

/** Judged length: Unicode code points, which is what a reader counts. */
function codePointLength(text: string): number {
  return [...text].length;
}

function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
}

function writeEntry(text: string): { file: string; length: number } {
  const entry = text.trim();
  const length = codePointLength(entry);

  if (entry.length === 0) {
    throw new Error("entry.txt would be blank");
  }
  if (length < MIN_LENGTH || length > MAX_LENGTH) {
    throw new Error(`entry.txt must be ${MIN_LENGTH}..${MAX_LENGTH} characters, got ${length}`);
  }
  if (entry.includes("\n")) {
    throw new Error("entry.txt must be a single line");
  }

  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "entry.txt");
  writeFileSync(file, entry, { encoding: "utf8" });
  return { file, length };
}

const { file, length } = writeEntry(SENTENCE);
console.log(`wrote ${file}: ${length}/${MAX_LENGTH} characters`);
