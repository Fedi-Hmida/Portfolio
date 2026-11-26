// Which pages the prerender writes. Routes are read from src/App.js, so a page added
// there is prerendered automatically. English lives at "/", French at "/fr".

/** Every `path="…"` declared on a <Route> in App.js, in order, except the catch-all. */
const routesFromApp = (source) =>
  [...source.matchAll(/<Route\b[^>]*\bpath="([^"]+)"/g)].map((m) => m[1]).filter((p) => p !== "*");

/** One English and one French page per route, each written to its own index.html. */
const pagesToRender = (routes) =>
  routes.flatMap((route) => {
    const bare = route === "/" ? "" : route.replace(/^\//, "");
    return [
      { locale: "en", url: route, outFile: bare ? `${bare}/index.html` : "index.html" },
      { locale: "fr", url: bare ? `/fr/${bare}` : "/fr", outFile: bare ? `fr/${bare}/index.html` : "fr/index.html" },
    ];
  });

module.exports = { routesFromApp, pagesToRender };
