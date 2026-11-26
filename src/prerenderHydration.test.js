const { addHydrationMarkers } = require("../scripts/prerender/hydration");

const rootWith = (inner) => {
  document.body.innerHTML = `<div id="root"><div class="App">${inner}</div></div>`;
  return document;
};

test("wraps the Suspense boundary (the content of .App) in React's markers", () => {
  const doc = rootWith("<main><h1>Hi</h1></main>");
  addHydrationMarkers(doc);
  expect(doc.querySelector(".App").innerHTML).toBe("<!--$--><main><h1>Hi</h1></main><!--/$-->");
});

test("separates adjacent text nodes like React's server renderer does", () => {
  const doc = rootWith("<p></p>");
  const p = doc.querySelector("p");
  ["© ", "2026", " Fedi Hmida."].forEach((t) => p.appendChild(doc.createTextNode(t)));
  addHydrationMarkers(doc);
  expect(p.innerHTML).toBe("© <!-- -->2026<!-- --> Fedi Hmida.");
});

test("leaves a single text node alone", () => {
  const doc = rootWith("<p>one</p>");
  addHydrationMarkers(doc);
  expect(doc.querySelector("p").innerHTML).toBe("one");
});
