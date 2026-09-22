import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import { DEFAULT_LOCALE, detectLocale } from "./locale";

const locale = detectLocale();

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: locale,
  fallbackLng: DEFAULT_LOCALE,
  interpolation: { escapeValue: false },
  returnEmptyString: false,
});

if (typeof document !== "undefined") {
  document.documentElement.lang = locale;
}

export default i18n;
