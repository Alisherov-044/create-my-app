import { produce } from "immer";
import { Language } from "@/enums";
import { createSlice } from "@reduxjs/toolkit";
import type { LangState } from "@/types/redux";

const initialState: LangState = {
    lang: Language.uz,
};

export const langSlice = createSlice({
    name: "lang",
    initialState,
    reducers: {
        setLang: (state, { payload }) => {
            return produce(state, (draft) => {
                draft.lang = payload;
            });
        },
    },
});

export const { setLang } = langSlice.actions;
