import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "When I was six, my father carried me across the flooded lane on his shoulders every monsoon, my shoes dangling by their laces, and I never asked to be put down — I only wish I could carry him now.";

// The gate allows 1-280 characters and the brief caps the memory at a single
// sentence. Fail loudly instead of submitting a line the gate would reject.
// One concrete scene (flooded lane, shoulders, shoes by their laces), one
// number (six), one named moment (every monsoon), and the ache lands last.
const sentences = LINE.split(".").filter((part) => part.trim().length > 0);
if (LINE.length < 1 || LINE.length > 280 || sentences.length !== 1) {
  throw new Error(
    `entry out of bounds: ${LINE.length} chars, ${sentences.length} sentences`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
