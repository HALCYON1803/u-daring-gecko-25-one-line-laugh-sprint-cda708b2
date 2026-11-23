import { mkdirSync, writeFileSync } from "node:fs";

const line = "I water my plastic plants out of sheer guilt.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
