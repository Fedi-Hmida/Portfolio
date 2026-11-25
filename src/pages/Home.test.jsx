import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "../i18n";
import en from "../i18n/locales/en.json";
import Home from "./Home";

const renderHome = () =>
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );

test("Home no longer has the About Me tabs section", () => {
  renderHome();
  expect(screen.queryByRole("heading", { name: "About Me" })).toBeNull();
  ["Services", "Hard Skills", "Soft Skills", "Methodologies"].forEach((tab) =>
    expect(screen.queryByRole("button", { name: tab })).toBeNull(),
  );
});

test("Home shows the availability in the hero", () => {
  renderHome();
  expect(screen.getByText("4 months, from April 2027")).toBeInTheDocument();
  expect(screen.getByText("AI / software engineering, from September 2027")).toBeInTheDocument();
  expect(screen.getByText("English B2, French B2")).toBeInTheDocument();
});

test("Home keeps its other sections", () => {
  renderHome();
  expect(screen.getByRole("heading", { level: 1, name: "Fedi Hmida" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: en.home.myWork })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: en.home.latestNews })).toBeInTheDocument();
});
