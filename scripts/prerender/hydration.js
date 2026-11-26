// The prerendered HTML comes from a client render in jsdom, not from React's server renderer,
// so it lacks two markers React 18 relies on when hydrating:
//   1. <!--$--> … <!--/$--> around a resolved <Suspense> boundary's content. The app has one
//      boundary, in App.js, and everything inside div.App is its content.
//   2. <!-- --> between adjacent text nodes (e.g. "© {year} Fedi Hmida. {rights}"), which would
//      otherwise be merged into one text node when the HTML is parsed again.
// Without them React reports hydration errors #418/#423 and re-renders the whole page.

const addHydrationMarkers = (document) => {
  const app = document.querySelector("#root .App");
  if (app) {
    app.insertBefore(document.createComment("$"), app.firstChild);
    app.appendChild(document.createComment("/$"));
  }

  const root = document.getElementById("root");
  if (!root) return;
  const TEXT_NODE = 3;
  const walker = document.createTreeWalker(root, 4 /* NodeFilter.SHOW_TEXT */);
  const texts = [];
  while (walker.nextNode()) texts.push(walker.currentNode);
  texts.forEach((text) => {
    if (text.nextSibling && text.nextSibling.nodeType === TEXT_NODE) {
      text.parentNode.insertBefore(document.createComment(" "), text.nextSibling);
    }
  });
};

module.exports = { addHydrationMarkers };
