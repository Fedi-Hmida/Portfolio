// Shared components render on both /en and /fr, so their accessible names must
// come from the locale files. This scan fails on English written into the source.
import fs from "fs";
import path from "path";

const SRC = path.join(__dirname, "..");
const listFiles = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const full = path.join(dir, d.name);
    if (d.isDirectory()) return listFiles(full);
    return /\.(js|jsx)$/.test(d.name) && !/\.test\./.test(d.name) ? [full] : [];
  });

const scanned = [
  ...listFiles(path.join(SRC, "components")),
  path.join(SRC, "data", "socialLinks.js"),
];

const rules = [
  [/aria-label=["'][A-Za-z]/, "literal aria-label"],
  [/aria-label=\{`[^`]*[A-Za-z]{3,}[^`]*`\}/, "template aria-label with words"],
  [/`(Open|Copy|View|Show|Go to|Email) [^`]*`/, "English template string"],
  [/ariaLabel:\s*["'`]/, "literal ariaLabel in data"],
  [/alt=["'][^"']*\b(portfolio|home)\b/i, "English alt text"],
  [/alt\s*=\s*["']Image["']/, "English default alt"],
];

test("shared components take their accessible names from the locale files", () => {
  const hits = [];
  scanned.forEach((file) => {
    fs.readFileSync(file, "utf8").split("\n").forEach((line, i) => {
      rules.forEach(([re, why]) => {
        if (re.test(line)) hits.push(`${path.relative(SRC, file)}:${i + 1} ${why}`);
      });
    });
  });
  expect(hits).toEqual([]);
});
