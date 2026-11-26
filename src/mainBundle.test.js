// Performance guard (action plan Step 4): what loads on the first paint must stay light.
// The test follows the static import graph from src/index.js (lazy routes are excluded,
// they ship in their own chunks) and checks the modules it reaches.
import fs from "fs";
import path from "path";

const SRC = __dirname;
const resolveLocal = (from, spec) => {
  const base = path.resolve(path.dirname(from), spec);
  for (const candidate of [base, `${base}.js`, `${base}.jsx`, path.join(base, "index.js")]) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate;
  }
  return null;
};

const firstPaintModules = () => {
  const seen = new Set();
  const visit = (file) => {
    if (seen.has(file) || !/\.(js|jsx)$/.test(file)) return;
    seen.add(file);
    const code = fs.readFileSync(file, "utf8");
    // Static imports only: `import x from "./y"` and `import "./y"`; `import("./y")` stays lazy.
    for (const m of code.matchAll(/^\s*import\s+(?:[^"'()]+\s+from\s+)?["'](\.[^"']+)["']/gm)) {
      const target = resolveLocal(file, m[1]);
      if (target) visit(target);
    }
  };
  visit(path.join(SRC, "index.js"));
  return [...seen];
};

const rel = (f) => path.relative(SRC, f);

test("the first-paint modules do not import react-icons (use lucide-react)", () => {
  const hits = firstPaintModules().filter((f) => /from\s+["']react-icons/.test(fs.readFileSync(f, "utf8")));
  expect(hits.map(rel)).toEqual([]);
});

test("the first-paint modules use the light `m` components, not the full `motion` bundle", () => {
  const hits = firstPaintModules().filter((f) => {
    const code = fs.readFileSync(f, "utf8");
    const imported = code.match(/import\s*\{([^}]*)\}\s*from\s*["']framer-motion["']/);
    return imported && /\bmotion\b/.test(imported[1]);
  });
  expect(hits.map(rel)).toEqual([]);
});

test("the graph walker sees the Home page and the navbar (sanity check)", () => {
  const files = firstPaintModules().map(rel).map((f) => f.replace(/\\/g, "/"));
  expect(files).toEqual(expect.arrayContaining(["App.js", "pages/Home.jsx", "components/Navbar.jsx"]));
});
