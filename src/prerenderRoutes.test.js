import fs from "fs";
import path from "path";
const { routesFromApp, pagesToRender } = require("../scripts/prerender/routes");

const appSource = fs.readFileSync(path.join(__dirname, "App.js"), "utf8");

test("every route declared in App.js is prerendered, except the catch-all", () => {
  const routes = routesFromApp(appSource);
  expect(routes).toEqual(expect.arrayContaining(["/", "/about", "/portfolio/callverse", "/news/23", "/contact"]));
  expect(routes).not.toContain("*");
  const declared = (appSource.match(/<Route\b/g) || []).length;
  expect(routes).toHaveLength(declared - 1);
});

test("each route is rendered in English and French, to its own index.html", () => {
  expect(pagesToRender(["/", "/about"])).toEqual([
    { locale: "en", url: "/", outFile: "index.html" },
    { locale: "fr", url: "/fr", outFile: "fr/index.html" },
    { locale: "en", url: "/about", outFile: "about/index.html" },
    { locale: "fr", url: "/fr/about", outFile: "fr/about/index.html" },
  ]);
});
