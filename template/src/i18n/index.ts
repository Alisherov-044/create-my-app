import i18n from "i18next";
import { Languages } from "@/enums";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const translations = {
    hallo: {
        uz: "hallo",
        ru: "hallo",
        en: "hallo",
    },
    bye: {
        uz: "bye",
        ru: "bye",
        en: "bye",
    },
};

function getTrasnslation(key: Languages) {
    return Object.assign(
        {},
        ...Object.entries(translations).map((item) => ({
            [item[0]]: item[1][key],
        }))
    );
}

export const resources = {
    uz: {
        translation: getTrasnslation(Languages.uz),
    },
    en: {
        translation: getTrasnslation(Languages.en),
    },
    ru: {
        translation: getTrasnslation(Languages.ru),
    },
};

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
