// Locale resolution that runs BEFORE React mounts, so <Router basename> can be
// set correctly on the first render. English lives at "/", French at "/fr".
//
// Because the locale is a URL prefix rather than component state, every existing
// <Link to="/about"> resolves to "/fr/about" automatically once basename is set.
// That is why switching languages is a full page assign, not a client transition.

export const DEFAULT_LOCALE = "en";
export const SUPPORTED_LOCALES = ["en", "fr"];

export const LOCALE_LABELS = {
  en: "English",
  fr: "Français",
};

/** Locale implied by the current URL. Falls back to English. */
export const detectLocale = () => {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const segment = window.location.pathname.split("/")[1];
  return SUPPORTED_LOCALES.includes(segment) && segment !== DEFAULT_LOCALE
    ? segment
    : DEFAULT_LOCALE;
};

/** Router basename for a locale. English is served from the root. */
export const basenameFor = (locale) =>
  locale === DEFAULT_LOCALE ? undefined : `/${locale}`;

/** The current path with any locale prefix removed, always leading-slashed. */
export const stripLocale = (pathname) => {
  const segments = pathname.split("/");
  if (SUPPORTED_LOCALES.includes(segments[1]) && segments[1] !== DEFAULT_LOCALE) {
    segments.splice(1, 1);
  }
  const stripped = segments.join("/");
  return stripped.startsWith("/") ? stripped || "/" : `/${stripped}`;
};

/** Same page, other locale — used by the language switcher and hreflang tags. */
export const pathForLocale = (locale, pathname) => {
  const bare = stripLocale(pathname);
  if (locale === DEFAULT_LOCALE) return bare;
  return bare === "/" ? `/${locale}` : `/${locale}${bare}`;
};
