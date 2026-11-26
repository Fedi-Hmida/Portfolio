import { render, screen } from "@testing-library/react";
import homeEn from "../../content/home/home.en";
import homeFr from "../../content/home/home.fr";
import Availability from "./Availability";

test("states both availabilities and the language levels in English", () => {
  render(<Availability hero={homeEn.hero} />);
  expect(screen.getByText("Available for")).toBeInTheDocument();
  expect(screen.getByText("Internship")).toBeInTheDocument();
  expect(screen.getByText("4 to 6 months, from April 2027")).toBeInTheDocument();
  expect(screen.getByText("Alternance")).toBeInTheDocument();
  expect(screen.getByText("AI / software engineering, from September 2027")).toBeInTheDocument();
  expect(screen.getByText("English B2, French B2")).toBeInTheDocument();
});

test("states the same facts in French", () => {
  render(<Availability hero={homeFr.hero} />);
  expect(screen.getByText("Disponible pour")).toBeInTheDocument();
  expect(screen.getByText("Stage")).toBeInTheDocument();
  expect(screen.getByText("4 à 6 mois, dès avril 2027")).toBeInTheDocument();
  expect(screen.getByText("Anglais B2, Français B2")).toBeInTheDocument();
});

test("is a description list labelled by its title, with three term/detail pairs", () => {
  const { container } = render(<Availability hero={homeEn.hero} />);
  const titleId = screen.getByText("Available for").id;
  const list = container.querySelector(`dl[aria-labelledby="${titleId}"]`);
  expect(list).not.toBeNull();
  expect(list.querySelectorAll("dt")).toHaveLength(3);
  expect(list.querySelectorAll("dd")).toHaveLength(3);
});
