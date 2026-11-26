import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "../i18n";
import About from "./About";

// The portrait is the About page's main image and sits above the text on phones.
// Without width/height its arrival pushed the text down (CLS 0.245), and lazy loading
// delayed the page's largest paint.
test("the About portrait reserves its space and loads immediately", () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>,
  );
  const portrait = screen.getByAltText("Fedi Hmida");
  expect(portrait).toHaveAttribute("width");
  expect(portrait).toHaveAttribute("height");
  expect(portrait).not.toHaveAttribute("loading", "lazy");
});
