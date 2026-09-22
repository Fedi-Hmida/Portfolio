import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import {
  SUPPORTED_LOCALES,
  detectLocale,
  pathForLocale,
} from "../i18n/locale";

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

const setAlternate = (locale, href) => {
  const id = `hreflang-${locale}`;
  let link = document.head.querySelector(`link#${id}`);
  if (!link) {
    link = document.createElement("link");
    link.id = id;
    link.rel = "alternate";
    link.hreflang = locale;
    document.head.appendChild(link);
  }
  link.href = href;
};

/**
 * Keeps <html lang>, the document title/description and the hreflang pair in
 * sync with the active locale and route.
 *
 * Note this runs client-side: the HTML Vercel serves is identical for both
 * locales, so search engines only see these after executing JavaScript. That is
 * a known limitation of a CRA single-page app - prerendering would be the fix.
 */
const LocaleHead = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const locale = detectLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t("meta.title");
    setMeta('meta[name="description"]', "content", t("meta.description"));
    setMeta('meta[property="og:title"]', "content", t("meta.title"));
    setMeta('meta[property="og:description"]', "content", t("meta.description"));
    setMeta('meta[property="og:locale"]', "content", locale === "fr" ? "fr_FR" : "en_US");
    setMeta('meta[name="twitter:title"]', "content", t("meta.title"));
    setMeta('meta[name="twitter:description"]', "content", t("meta.description"));

    const { origin } = window.location;
    SUPPORTED_LOCALES.forEach((code) => {
      setAlternate(code, `${origin}${pathForLocale(code, pathname)}`);
    });
    setAlternate("x-default", `${origin}${pathForLocale("en", pathname)}`);
  }, [locale, pathname, t]);

  return null;
};

export default LocaleHead;
