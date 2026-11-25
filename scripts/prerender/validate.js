// Checks a prerendered page before it is written. An empty list means the page is fine;
// any problem fails the build, so an empty or wrong-language page is never shipped.

const checkRenderedHtml = (html, locale) => {
  const problems = [];
  if (!/<div id="root">/.test(html)) problems.push("no #root element");
  else if (/<div id="root">\s*<\/div>/.test(html)) problems.push("#root is empty: the page never rendered");
  if (!/<h1[\s>]/.test(html)) problems.push("no <h1>: the page content is missing");
  const lang = (html.match(/<html[^>]*\blang="([^"]*)"/) || [])[1];
  if (lang !== locale) problems.push(`<html lang> is "${lang}", expected "${locale}"`);
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
  if (!title || !title.trim()) problems.push("empty <title>");
  ["en", "fr", "x-default"].forEach((code) => {
    if (!new RegExp(`hreflang="${code}"`).test(html)) problems.push(`missing hreflang="${code}" alternate`);
  });
  return problems;
};

module.exports = { checkRenderedHtml };
