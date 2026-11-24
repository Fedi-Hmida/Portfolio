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
import campusFlowCaseEn from "./campusflow/caseStudy.en";
import campusFlowCaseFr from "./campusflow/caseStudy.fr";
import campusFlowNewsEn from "./campusflow/news.en";
import campusFlowNewsFr from "./campusflow/news.fr";
import bnsNewsEn from "./bns/news.en";
import bnsNewsFr from "./bns/news.fr";
import doubleDegreeNewsEn from "./doubleDegree/news.en";
import doubleDegreeNewsFr from "./doubleDegree/news.fr";
import smartHrmAiCaseEn from "./smartHrmAi/caseStudy.en";
import smartHrmAiCaseFr from "./smartHrmAi/caseStudy.fr";
import firmaaCaseEn from "./firmaa/caseStudy.en";
import firmaaCaseFr from "./firmaa/caseStudy.fr";
import sahitnaSafeCaseEn from "./sahitnaSafe/caseStudy.en";
import sahitnaSafeCaseFr from "./sahitnaSafe/caseStudy.fr";
import smartClaimCaseEn from "./smartClaim/caseStudy.en";
import smartClaimCaseFr from "./smartClaim/caseStudy.fr";
import solarFlowCaseEn from "./solarFlow/caseStudy.en";
import solarFlowCaseFr from "./solarFlow/caseStudy.fr";
import onboardifyCaseEn from "./onboardify/caseStudy.en";
import onboardifyCaseFr from "./onboardify/caseStudy.fr";
import proLinkCaseEn from "./proLink/caseStudy.en";
import proLinkCaseFr from "./proLink/caseStudy.fr";
import newsBiatMasterclassEn from "./news/biatMasterclass.en";
import newsBiatMasterclassFr from "./news/biatMasterclass.fr";
import newsFirmaaLaunchEn from "./news/firmaaLaunch.en";
import newsFirmaaLaunchFr from "./news/firmaaLaunch.fr";
import newsNvidiaAnomalyDetectionEn from "./news/nvidiaAnomalyDetection.en";
import newsNvidiaAnomalyDetectionFr from "./news/nvidiaAnomalyDetection.fr";

const pairs = {
  "callverse/caseStudy": [callVerseCaseEn, callVerseCaseFr],
  "callverse/news": [callVerseNewsEn, callVerseNewsFr],
  "campusflow/caseStudy": [campusFlowCaseEn, campusFlowCaseFr],
  "campusflow/news": [campusFlowNewsEn, campusFlowNewsFr],
  "bns/news": [bnsNewsEn, bnsNewsFr],
  "doubleDegree/news": [doubleDegreeNewsEn, doubleDegreeNewsFr],
  "smartHrmAi/caseStudy": [smartHrmAiCaseEn, smartHrmAiCaseFr],
  "firmaa/caseStudy": [firmaaCaseEn, firmaaCaseFr],
  "sahitnaSafe/caseStudy": [sahitnaSafeCaseEn, sahitnaSafeCaseFr],
  "smartClaim/caseStudy": [smartClaimCaseEn, smartClaimCaseFr],
  "solarFlow/caseStudy": [solarFlowCaseEn, solarFlowCaseFr],
  "onboardify/caseStudy": [onboardifyCaseEn, onboardifyCaseFr],
  "proLink/caseStudy": [proLinkCaseEn, proLinkCaseFr],
  "news/biatMasterclass": [newsBiatMasterclassEn, newsBiatMasterclassFr],
  "news/firmaaLaunch": [newsFirmaaLaunchEn, newsFirmaaLaunchFr],
  "news/nvidiaAnomalyDetection": [newsNvidiaAnomalyDetectionEn, newsNvidiaAnomalyDetectionFr],
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
