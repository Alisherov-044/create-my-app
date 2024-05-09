import { useEffect, useMemo } from "react";
import { useSelector } from "@/hooks";
import { useTranslation } from "react-i18next";
import { resources } from "@/i18n";
import type { TTtranslation } from "@/types/i18n";
import type { UseTranslateResponse } from "@/types/hooks";

export function useTranslate(defaultLng?: string): UseTranslateResponse {
    const browserLng = useMemo(() => {
        return navigator.language;
    }, [navigator.language]);
    const { t: translate, i18n } = useMemo(() => {
        return useTranslation();
    }, []);
    const { currentLang: selectedLang } = useMemo(() => {
        return useSelector((state) => state.lang);
    }, []);
    const currentLng = useMemo(() => {
        return defaultLng ?? selectedLang ?? browserLng;
    }, [defaultLng, selectedLang, browserLng]);

    useEffect(() => {
        i18n.changeLanguage(currentLng);
    }, [selectedLang]);

    const t = (key: TTtranslation, option?: string | number): string => {
        if (typeof option !== "undefined") {
            try {
                // @ts-ignore
                return resources[currentLng].translation[key](option);
            } catch (error) {
                return translate(key);
            }
        }

        return translate(key);
    };

    return { t, i18n, browserLng, currentLng };
}
