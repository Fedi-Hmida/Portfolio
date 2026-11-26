import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "../../i18n";
import en from "../../i18n/locales/en.json";
import Portfolio from "./Portfolio";

// Every page needs exactly one <h1> (screen readers, search engines, and the prerender
// check that refuses to ship a page without one).
test("the Portfolio page title is its single h1", () => {
  render(
    <MemoryRouter>
      <Portfolio />
    </MemoryRouter>,
  );
  const h1s = screen.getAllByRole("heading", { level: 1 });
  expect(h1s).toHaveLength(1);
  expect(h1s[0]).toHaveTextContent(en.portfolio.title);
});
