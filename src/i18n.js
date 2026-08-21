import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enHome from "./locales/en/home.json";
import plHome from "./locales/pl/home.json";
import enForm from "./locales/en/form.json";
import plForm from "./locales/pl/form.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        home: enHome,
        form: enForm,
      },
      pl: {
        home: plHome,
        form: plForm,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    defaultNs: "home",
    ns: ["home", "form"],
  });

export default i18n;
