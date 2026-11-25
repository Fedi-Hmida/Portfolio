// Prerender: after `react-scripts build`, render every route (English and French) with the
// real production bundle inside jsdom and save the finished HTML as <route>/index.html.
// Visitors then see the page before JavaScript runs; React hydrates it (src/mountApp.js).
//
// Runs on Vercel's build machine (no browser needed). Fails the build if any page is
// empty, has no <h1>, the wrong language, or no hreflang alternates.
//
// Env: BUILD_PATH (default "build"), SITE_URL (default https://fedihmida.vercel.app).
const fs = require("fs");
const path = require("path");
const { JSDOM, ResourceLoader, VirtualConsole } = require("jsdom");
const { routesFromApp, pagesToRender } = require("./routes");
const { checkRenderedHtml } = require("./validate");
const { addHydrationMarkers } = require("./hydration");

const ROOT = path.resolve(__dirname, "..", "..");
const BUILD = path.resolve(ROOT, process.env.BUILD_PATH || "build");
const SITE = (process.env.SITE_URL || "https://fedihmida.vercel.app").replace(/\/$/, "");
const TIMEOUT_MS = 10000;

// Serves our own JavaScript and CSS from the build folder (webpack waits for a lazy page's
// CSS chunk before running it); skips images, fonts and third parties.
class BuildLoader extends ResourceLoader {
  constructor() {
    super();
    this.requested = []; // every JS/CSS path this page loaded, in order
  }

  fetch(url) {
    const { origin, pathname } = new URL(url);
    if (origin !== SITE || !/\.(js|css)$/.test(pathname)) return null;
    this.requested.push(pathname);
    return Promise.resolve(fs.readFileSync(path.join(BUILD, decodeURIComponent(pathname))));
  }
}

// Browser APIs jsdom does not implement, as no-ops.
const stubBrowserApis = (window) => {
  window.matchMedia = (media) => ({
    matches: false, media, onchange: null,
    addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {},
    dispatchEvent: () => false,
  });
  window.IntersectionObserver = class {
    observe() {} unobserve() {} disconnect() {}
    takeRecords() { return []; }
  };
  window.scrollTo = () => {};
};

const waitFor = (predicate, ms) =>
  new Promise((resolve, reject) => {
    const started = Date.now();
    const tick = () => {
      if (predicate()) return resolve();
      if (Date.now() - started > ms) return reject(new Error(`timed out after ${ms} ms`));
      setTimeout(tick, 50);
    };
    tick();
  });

const renderPage = async (shell, page) => {
  const errors = [];
  const loader = new BuildLoader();
  const virtualConsole = new VirtualConsole();
  // jsdom cannot parse some modern CSS; that does not affect the HTML we save.
  virtualConsole.on("jsdomError", (e) => {
    if (!/Could not parse CSS stylesheet/.test(e.message)) errors.push(e.message);
  });
  const dom = new JSDOM(shell, {
    url: SITE + page.url,
    runScripts: "dangerously",
    resources: loader,
    pretendToBeVisual: true,
    virtualConsole,
    beforeParse: stubBrowserApis,
  });
  const { document } = dom.window;
  try {
    await waitFor(() => errors.length > 0 || document.querySelector("#root h1"), TIMEOUT_MS);
    if (errors.length) throw new Error(errors.join(" | "));
    // Let effects finish (LocaleHead sets lang, title and hreflang after the first commit).
    await waitFor(() => document.documentElement.lang === page.locale && document.title, TIMEOUT_MS);
    await new Promise((r) => setTimeout(r, 100));

    // The page's own lazy chunks (not in the shell): add preload hints so the browser
    // fetches them alongside main.js and hydration does not wait for an extra round trip.
    // Webpack still inserts and runs them itself, so the execution order is unchanged.
    const inShell = new Set([...shell.matchAll(/(?:src|href)="([^"]+)"/g)].map((m) => m[1]));
    [...new Set(loader.requested)]
      .filter((href) => !inShell.has(href))
      .forEach((href) => {
        // setAttribute: jsdom does not reflect the `as` property to the attribute.
        const link = document.createElement("link");
        link.setAttribute("rel", "preload");
        link.setAttribute("as", href.endsWith(".css") ? "style" : "script");
        link.setAttribute("href", href);
        document.head.appendChild(link);
      });
    addHydrationMarkers(document);
    return dom.serialize();
  } finally {
    dom.window.close();
  }
};

const main = async () => {
  const indexFile = path.join(BUILD, "index.html");
  const shellFile = path.join(BUILD, "app-shell.html");
  // The untouched SPA shell serves unknown routes (see vercel.json). Idempotent on re-runs.
  if (!fs.existsSync(shellFile)) fs.copyFileSync(indexFile, shellFile);
  const shell = fs.readFileSync(shellFile, "utf8");

  const routes = routesFromApp(fs.readFileSync(path.join(ROOT, "src", "App.js"), "utf8"));
  const pages = pagesToRender(routes);
  const failures = [];
  const started = Date.now();

  for (const page of pages) {
    try {
      const html = await renderPage(shell, page);
      const problems = checkRenderedHtml(html, page.locale);
      if (problems.length) throw new Error(problems.join("; "));
      const out = path.join(BUILD, page.outFile);
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.writeFileSync(out, html);
    } catch (err) {
      failures.push(`${page.url}: ${err.message}`);
    }
  }

  const seconds = ((Date.now() - started) / 1000).toFixed(1);
  if (failures.length) {
    console.error(`Prerender failed for ${failures.length} of ${pages.length} pages:\n  ${failures.join("\n  ")}`);
    process.exit(1);
  }
  console.log(`Prerendered ${pages.length} pages (${routes.length} routes x EN/FR) in ${seconds} s into ${BUILD}`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
