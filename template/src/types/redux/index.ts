import { store } from "@/redux";
import type { Language, Theme } from "@/enums";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AuthState = {
    roles?: number[];
    accessToken?: string;
    refreshToken?: string;
};

export type LangState = {
    lang: Language;
};

export type ThemeState = {
    theme: Theme;
};
