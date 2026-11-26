// Performance guards (action plan Step 2): the particle background cost a 49.6 kB gzip
// chunk and a full-screen 30 fps canvas on 39 pages. Keep it out.
import fs from "fs";
import path from "path";

const SRC = __dirname;
const pkg = JSON.parse(fs.readFileSync(path.join(SRC, "..", "package.json"), "utf8"));

const sourceFiles = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const full = path.join(dir, d.name);
    if (d.isDirectory()) return d.name === "assets" ? [] : sourceFiles(full);
    return /\.(js|jsx)$/.test(d.name) && !/\.test\./.test(d.name) ? [full] : [];
  });

test("no particle library in the dependencies", () => {
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };
  expect(Object.keys(deps).filter((name) => /particles/i.test(name))).toEqual([]);
});

test("no source file renders or imports a particle background", () => {
  const hits = sourceFiles(SRC).filter((file) => /ParticlesBackground|tsparticles/.test(fs.readFileSync(file, "utf8")));
  expect(hits.map((f) => path.relative(SRC, f))).toEqual([]);
});

// Step 3 guards: no decorative animation may run forever or rewrite the page on its own.
const read = (file) => fs.readFileSync(file, "utf8");
const rel = (file) => path.relative(SRC, file);

test("no animation repeats forever", () => {
  const hits = sourceFiles(SRC).filter((f) => /repeat:\s*Infinity/.test(read(f)));
  expect(hits.map(rel)).toEqual([]);
});

test("no typing-effect headings (react-typed)", () => {
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };
  expect(Object.keys(deps).filter((name) => name === "react-typed")).toEqual([]);
  const hits = sourceFiles(SRC).filter((f) => /react-typed|ReactTyped/.test(read(f)));
  expect(hits.map(rel)).toEqual([]);
});

test("no animated blur filter (non-composited, repainted every frame)", () => {
  const hits = sourceFiles(SRC).filter((f) => /(initial|animate)=\{\{[^}]*filter:\s*["'`]blur/.test(read(f)));
  expect(hits.map(rel)).toEqual([]);
});

// animate-spin is allowed: it is the loading indicator shown only while an action runs
// (e.g. the contact form while sending). Hover variants (group-hover:animate-bounce) are
// user-triggered and also allowed.
test("no always-on decorative CSS animation classes (bounce, ping, pulse)", () => {
  const hits = sourceFiles(SRC).filter((f) => /(?<![:\w-])animate-(bounce|ping|pulse)\b/.test(read(f)));
  expect(hits.map(rel)).toEqual([]);
});

test("the app honours the visitor's reduced-motion setting", () => {
  expect(read(path.join(SRC, "App.js"))).toMatch(/<MotionConfig reducedMotion="user">/);
});

// Step 5 guard: images ship as WebP sized for their use, never heavier than 200 KB.
test("every image the app imports is WebP and at most 200 KB", () => {
  const problems = [];
  sourceFiles(SRC).forEach((file) => {
    for (const m of read(file).matchAll(/import\s+\w+\s+from\s+["']([^"']+\.(png|jpe?g|webp|gif))["']/gi)) {
      const abs = path.resolve(path.dirname(file), m[1]);
      if (!/\.webp$/i.test(m[1])) problems.push(`${rel(file)}: ${m[1]} is not WebP`);
      else if (fs.statSync(abs).size > 200 * 1024) problems.push(`${rel(file)}: ${m[1]} is over 200 KB`);
    }
  });
  expect(problems).toEqual([]);
});
