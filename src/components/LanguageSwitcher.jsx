import { useTranslation } from "react-i18next";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  detectLocale,
  pathForLocale,
} from "../i18n/locale";

/**
 * Switching locale is a full navigation, not a client-side transition: the
 * locale is a URL prefix consumed by <Router basename>, and <html lang> has to
 * change with it. A hard assign gets both right in one step.
 *
 * Rendered as a real <a> so the other language is a crawlable, right-clickable
 * link rather than a button only JavaScript can operate.
 */
const LanguageSwitcher = ({ className = "", onNavigate }) => {
  const { t } = useTranslation();
  const current = detectLocale();
  const other =
    SUPPORTED_LOCALES.find((code) => code !== current) || DEFAULT_LOCALE;
  const href = pathForLocale(
    other,
    typeof window === "undefined" ? "/" : window.location.pathname,
  );

  return (
    <a
      href={href}
      hrefLang={other}
      onClick={onNavigate}
      title={t("lang.switchTo")}
      aria-label={t("lang.switchTo")}
      className={
        className ||
        "inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-gray-300 transition-colors hover:border-primary-pink hover:text-primary-pink focus:outline-none focus:ring-2 focus:ring-primary-pink/60"
      }
    >
      <span aria-hidden="true">{current.toUpperCase()}</span>
      <span aria-hidden="true" className="opacity-40">
        /
      </span>
      <span aria-hidden="true" className="opacity-60">
        {other.toUpperCase()}
      </span>
    </a>
  );
};

export default LanguageSwitcher;
