import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const isDevOrStaging = (
    import.meta.env.VITE_APP_ENV === "development"
    || import.meta.env.VITE_APP_ENV === "staging"
);

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)

    .init({
        fallbackLng: "ru",
        debug: isDevOrStaging,
        backend: {
            loadPath: "audit_front/locales/{{lng}}/{{ns}}.json",
        },

        detection: {
            lookupLocalStorage: "language",
        },
        lng: i18n.language || "ru",

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
