import { fireEvent, render, screen } from "@testing-library/react";
import i18n from "../../i18n";
import en from "../../i18n/locales/en.json";
import fr from "../../i18n/locales/fr.json";
import ConnectSection from "./ConnectSection";
import MapFacade from "./MapFacade";

// Step 6 of the performance plan: the Google Maps embed (478 KB, ~15 requests, and calls
// to Google before any consent) loads only when the visitor asks for it.

afterEach(() => i18n.changeLanguage("en"));

test("no Google Maps iframe on load, only a placeholder with the place", () => {
  render(<MapFacade />);
  expect(document.querySelector("iframe")).toBeNull();
  expect(screen.getByText("Limoges, France")).toBeInTheDocument();
  expect(screen.getByText(en.contact.map.note)).toBeInTheDocument();
});

test("clicking the button loads the map in place, with its accessible title", () => {
  render(<MapFacade />);
  fireEvent.click(screen.getByRole("button", { name: en.contact.map.show }));
  const iframe = screen.getByTitle(en.contact.mapTitle);
  expect(iframe.tagName).toBe("IFRAME");
  expect(iframe.getAttribute("src")).toMatch(/^https:\/\/maps\.google\.com\/maps\?q=Limoges/);
  expect(screen.queryByRole("button", { name: en.contact.map.show })).toBeNull();
});

test("offers Google Maps in a new tab without loading anything", () => {
  render(<MapFacade />);
  const link = screen.getByRole("link", { name: new RegExp(en.contact.map.open) });
  expect(link.getAttribute("href")).toMatch(/^https:\/\/www\.google\.com\/maps\/search\/\?api=1&query=Limoges/);
  expect(link).toHaveAttribute("target", "_blank");
  expect(link).toHaveAttribute("rel", "noreferrer");
});

test("speaks French on /fr", async () => {
  await i18n.changeLanguage("fr");
  render(<MapFacade />);
  expect(screen.getByRole("button", { name: fr.contact.map.show })).toBeInTheDocument();
  expect(screen.getByText(fr.contact.map.note)).toBeInTheDocument();
});

test("the contact section no longer embeds the map on load", () => {
  render(<ConnectSection />);
  expect(document.querySelector("iframe")).toBeNull();
});
