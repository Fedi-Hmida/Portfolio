import { useTranslation } from "react-i18next";
import {
  LOCALE_LABELS,
  SUPPORTED_LOCALES,
  detectLocale,
  pathForLocale,
} from "../i18n/locale";

/**
 * Segmented EN | FR toggle. Both options are always shown with the active one
 * filled, so it reads as "you are here, click the other" rather than asking the
 * viewer to guess what a single label means.
 *
 * Each option is a real <a>: crawlable, middle-clickable, and a full navigation
 * - which is what lets <Router basename> and <html lang> both change cleanly.
 */
const LanguageSwitcher = ({ className = "", onNavigate }) => {
  const { t } = useTranslation();
  const current = detectLocale();
  const pathname = typeof window === "undefined" ? "/" : window.location.pathname;

  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/15 bg-white/5 p-0.5 ${className}`}
      role="group"
      aria-label={t("lang.label")}
    >
      {SUPPORTED_LOCALES.map((code) => {
        const isActive = code === current;
        return (
          <a
            key={code}
            href={pathForLocale(code, pathname)}
            hrefLang={code}
            lang={code}
            onClick={isActive ? (e) => e.preventDefault() : onNavigate}
            aria-current={isActive ? "true" : undefined}
            title={LOCALE_LABELS[code]}
            className={`rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-primary-pink/60 ${
              isActive
                ? "bg-primary-pink text-white shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {code}
            <span className="sr-only"> - {LOCALE_LABELS[code]}</span>
          </a>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
