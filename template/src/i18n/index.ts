import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const resources = {
    uz: {
        translation: {},
    },
    en: {
        translation: {},
    },
    ru: {
        translation: {},
    },
};

export type TTtranslation = keyof typeof resources.uz.translation;

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "uz",
        supportedLngs: ["uz", "ru", "en"],
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
