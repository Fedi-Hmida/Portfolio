import { DEFAULT_LOCALE, detectLocale } from "./locale";

/**
 * Picks the long-form content module for the current URL locale, falling back
 * to English. Pages import their { en, fr } modules directly, so both stay in
 * the page's lazy chunk instead of the main bundle; the locale is read from the
 * URL because switching language is a full page load (see locale.js).
 */
export const pickContent = (byLocale) =>
  byLocale[detectLocale()] || byLocale[DEFAULT_LOCALE];
