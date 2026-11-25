const { checkRenderedHtml } = require("../scripts/prerender/validate");

const page = ({ lang = "fr", root = "<main><h1>Fedi Hmida</h1></main>", title = "Fedi Hmida", hreflang = ["en", "fr", "x-default"] } = {}) => `<!doctype html>
<html lang="${lang}"><head><title>${title}</title>
${hreflang.map((h) => `<link rel="alternate" hreflang="${h}" href="https://fedihmida.vercel.app/x">`).join("\n")}
</head><body><div id="root">${root}</div></body></html>`;

test("a complete French page passes", () => {
  expect(checkRenderedHtml(page(), "fr")).toEqual([]);
});

test("an empty root is rejected (the lazy page never rendered)", () => {
  expect(checkRenderedHtml(page({ root: "" }), "fr")).toEqual(expect.arrayContaining([expect.stringMatching(/empty/i)]));
});

test("a page without an h1 is rejected", () => {
  expect(checkRenderedHtml(page({ root: "<main><p>x</p></main>" }), "fr")).toEqual(expect.arrayContaining([expect.stringMatching(/h1/i)]));
});

test("the language must match the page (lang=en on a French page is wrong)", () => {
  expect(checkRenderedHtml(page({ lang: "en" }), "fr")).toEqual(expect.arrayContaining([expect.stringMatching(/lang/i)]));
});

test("an empty title is rejected", () => {
  expect(checkRenderedHtml(page({ title: "" }), "fr")).toEqual(expect.arrayContaining([expect.stringMatching(/title/i)]));
});

test("all three hreflang alternates are required", () => {
  expect(checkRenderedHtml(page({ hreflang: ["en", "fr"] }), "fr")).toEqual(expect.arrayContaining([expect.stringMatching(/x-default/)]));
});
