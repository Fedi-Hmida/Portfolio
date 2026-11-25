import { createRoot, hydrateRoot } from "react-dom/client";

/**
 * Prerendered pages arrive with their HTML already inside #root: React hydrates it
 * (keeps the DOM, attaches events) instead of throwing it away and painting again.
 * The dev server and the app shell (unknown routes) arrive empty: React renders.
 */
export const mountApp = (container, element) => {
  if (container.hasChildNodes()) return hydrateRoot(container, element);
  const root = createRoot(container);
  root.render(element);
  return root;
};
