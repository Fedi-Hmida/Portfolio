import { render, screen } from "@testing-library/react";
import i18n from "../i18n";
import fr from "../i18n/locales/fr.json";
import en from "../i18n/locales/en.json";
import { socialLinks } from "../data/socialLinks";
import SocialIconLink from "./SocialIconLink";

const linkedin = socialLinks.find((s) => s.name === "LinkedIn");

afterEach(() => i18n.changeLanguage("en"));

test("SocialIconLink speaks French on /fr", async () => {
  await i18n.changeLanguage("fr");
  render(<SocialIconLink social={linkedin} />);
  expect(screen.getByRole("link")).toHaveAttribute("aria-label", fr.social.linkedin);
});

test("SocialIconLink speaks English on /", async () => {
  await i18n.changeLanguage("en");
  render(<SocialIconLink social={linkedin} />);
  expect(screen.getByRole("link")).toHaveAttribute("aria-label", en.social.linkedin);
});
