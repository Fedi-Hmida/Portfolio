import { useTranslation } from "react-i18next";
import { DEFAULT_LOCALE, detectLocale } from "../i18n/locale";

/**
 * Shown on pages whose long-form content has not been translated yet - the
 * case studies and news articles. Renders nothing in English.
 *
 * Saying so explicitly is better than letting a French visitor hit an English
 * wall with no explanation.
 */
const EnglishOnlyNotice = ({ className = "" }) => {
  const { t } = useTranslation();
  if (detectLocale() === DEFAULT_LOCALE) return null;

  return (
    <div
      lang="fr"
      className={`rounded-2xl border border-amber-300/25 bg-amber-300/10 px-5 py-4 ${className}`}
    >
      <p className="text-xs font-bold uppercase tracking-widest text-amber-300/90">
        {t("common.englishOnlyTitle")}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-gray-300">
        {t("common.englishOnlyBody")}
      </p>
    </div>
  );
};

export default EnglishOnlyNotice;
