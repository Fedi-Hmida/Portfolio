import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "../../i18n";
import en from "../../content/callverse/caseStudy.en";
import CallVerseDetails from "./CallVerseDetails";

const renderPage = () =>
  render(
    <MemoryRouter>
      <CallVerseDetails />
    </MemoryRouter>,
  );

// The page tells two phases: the AI core Fedi built (phase 2) first, then the platform (phase 1).
test("phase 2 comes before phase 1, each with its own heading", () => {
  renderPage();
  const headings = screen.getAllByRole("heading", { level: 2 }).map((h) => h.textContent);
  const phase2 = headings.indexOf(en.phase2.title);
  const phase1 = headings.indexOf(en.phase1.title);
  expect(phase2).toBeGreaterThan(-1);
  expect(phase1).toBeGreaterThan(phase2);
});

test("the staffing table shows every strategy with its abandonment", () => {
  renderPage();
  // The phase 2 staffing table is the first table on the page; the phase 1 twin tables follow.
  const table = screen.getAllByRole("table")[0];
  en.ppo.rows.forEach((row) => {
    const cell = within(table).getByRole("rowheader", { name: row.strategy });
    expect(cell.closest("tr")).toHaveTextContent(row.abandon);
  });
});

test("the gain is shown with its cost", () => {
  renderPage();
  expect(screen.getByText(en.ppo.note)).toBeInTheDocument();
  expect(en.ppo.note).toMatch(/€ per day/);
});
