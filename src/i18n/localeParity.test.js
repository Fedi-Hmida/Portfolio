// The UI-string files follow the same contract as the long-form content modules
// (see src/content/contentParity.test.js): same keys, same numbers, French typography.
import en from "./locales/en.json";
import fr from "./locales/fr.json";

// Digits only, in order: "0.31" and "0,31" -> "031"; "2,072" and "2 072" -> "2072".
const numbers = (text) =>
  (text.match(/\d+(?:[.,\s ‑]\d+)*/g) || [])
    .map((n) => n.replace(/\D/g, ""))
    .sort();

// Walks both trees in step and calls `visit` on every pair of leaf strings.
const walk = (a, b, at, problems, visit) => {
  if (typeof a !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    problems.push(`${at}: type ${typeof a} vs ${typeof b}`);
    return;
  }
  if (Array.isArray(a)) {
    if (a.length !== b.length) problems.push(`${at}: ${a.length} items vs ${b.length}`);
    a.forEach((item, i) => i < b.length && walk(item, b[i], `${at}[${i}]`, problems, visit));
    return;
  }
  if (a && typeof a === "object") {
    const keysA = Object.keys(a).sort().join(",");
    const keysB = Object.keys(b).sort().join(",");
    if (keysA !== keysB) problems.push(`${at}: keys {${keysA}} vs {${keysB}}`);
    Object.keys(a).filter((k) => k in b).forEach((k) => walk(a[k], b[k], `${at}.${k}`, problems, visit));
    return;
  }
  if (typeof a === "string") visit(a, b, at, problems);
};

test("en.json and fr.json have the same keys and array lengths", () => {
  const problems = [];
  walk(en, fr, "locale", problems, () => {});
  expect(problems).toEqual([]);
});

test("each fr.json string has the same numbers as its English twin", () => {
  const problems = [];
  walk(en, fr, "locale", problems, (a, b, at, out) => {
    if (numbers(a).join("|") !== numbers(b).join("|"))
      out.push(`${at}: [${numbers(a)}] vs [${numbers(b)}]`);
  });
  expect(problems).toEqual([]);
});

test("fr.json: no-break space before : ; ! ? % and inside « »", () => {
  const problems = [];
  walk(en, fr, "locale", problems, (a, b, at, out) => {
    if (/ [:;!?%]|« | »/.test(b)) out.push(`${at}: ${b.slice(0, 80)}`);
  });
  expect(problems).toEqual([]);
});
