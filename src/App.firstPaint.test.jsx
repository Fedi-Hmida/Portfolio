// Performance guard (action plan Step 1): on the first load, the page content must be
// visible in the very first paint. Content that starts at opacity 0 and fades in with
// framer-motion is ignored by Chrome for LCP (the navbar logo became the LCP element,
// /news/23 had no LCP at all), so first-load entrance animations must be skipped.
import { render, screen } from "@testing-library/react";
import App from "./App";
import "./i18n";

const invisibleIn = (root) =>
  Array.from(root.querySelectorAll("[style]")).filter((el) => /opacity:\s*0(?![.\d])/.test(el.getAttribute("style")));

test("the Home hero is visible in the first paint: no element starts at opacity 0", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { level: 1 });
  const hero = heading.closest("section");
  expect(invisibleIn(hero)).toEqual([]);
});

test("the page wrapper does not start invisible on first load", () => {
  const { container } = render(<App />);
  const app = container.querySelector(".App");
  // The route wrapper is the first element inside .App.
  const wrapper = app.firstElementChild;
  expect(wrapper.getAttribute("style") || "").not.toMatch(/opacity:\s*0(?![.\d])/);
});
