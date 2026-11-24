// Every long-form page ships an English and a French content module with the same
// shape. This test is the contract: same keys, same array lengths, same non-text
// values, the same numbers in every text field, no empty text, French typography,
// and no raw invisible characters in the source files.
import fs from "fs";
import path from "path";
import callVerseCaseEn from "./callverse/caseStudy.en";
import callVerseCaseFr from "./callverse/caseStudy.fr";
import callVerseNewsEn from "./callverse/news.en";
import callVerseNewsFr from "./callverse/news.fr";

const pairs = {
  "callverse/caseStudy": [callVerseCaseEn, callVerseCaseFr],
  "callverse/news": [callVerseNewsEn, callVerseNewsFr],
};

const NBSP = String.fromCharCode(0xa0);
const NBHY = String.fromCharCode(0x2011);

// Digits only, in order: "0.31" and "0,31" -> "031"; "6,960" and "6 960" -> "6960".
const numbers = (text) =>
  (text.match(/\d+(?:[.,\s\u00a0\u2011]\d+)*/g) || [])
    .map((n) => n.replace(/\D/g, ""))
    .sort();

const compare = (en, fr, at, errors) => {
  if (typeof en !== typeof fr || Array.isArray(en) !== Array.isArray(fr)) {
    errors.push(`${at}: type ${typeof en} vs ${typeof fr}`);
    return;
  }
  if (Array.isArray(en)) {
    if (en.length !== fr.length) errors.push(`${at}: ${en.length} items vs ${fr.length}`);
    en.forEach((item, i) => compare(item, fr[i], `${at}[${i}]`, errors));
    return;
  }
  if (en && typeof en === "object") {
    const a = Object.keys(en).sort().join(",");
    const b = Object.keys(fr).sort().join(",");
    if (a !== b) errors.push(`${at}: keys {${a}} vs {${b}}`);
    Object.keys(en).forEach((k) => compare(en[k], fr[k], `${at}.${k}`, errors));
    return;
  }
  if (typeof en === "string") {
    if (!en.trim() || !fr.trim()) errors.push(`${at}: empty text`);
    if (numbers(en).join("|") !== numbers(fr).join("|"))
      errors.push(`${at}: numbers differ [${numbers(en)}] vs [${numbers(fr)}]`);
    return;
  }
  if (en !== fr) errors.push(`${at}: value ${en} vs ${fr}`);
};

const strings = (value) =>
  typeof value === "string"
    ? [value]
    : Array.isArray(value)
      ? value.flatMap(strings)
      : value && typeof value === "object"
        ? Object.values(value).flatMap(strings)
        : [];

describe.each(Object.entries(pairs))("%s", (name, [en, fr]) => {
  test("French has the same shape, values and numbers as English", () => {
    const errors = [];
    compare(en, fr, name, errors);
    expect(errors).toEqual([]);
  });

  test("French typography: no-break space before : ; ! ? % and inside « »", () => {
    // A plain space (not a no-break space) before high punctuation or inside guillemets.
    const bad = strings(fr).filter((s) => / [:;!?%]|« | »/.test(s));
    expect(bad).toEqual([]);
  });

  test("source files carry escapes, never raw invisible characters", () => {
    ["en", "fr"].forEach((lang) => {
      const file = path.join(__dirname, `${name}.${lang}.js`);
      const src = fs.readFileSync(file, "utf8");
      expect(src.includes(NBSP) || src.includes(NBHY)).toBe(false);
    });
  });
});
