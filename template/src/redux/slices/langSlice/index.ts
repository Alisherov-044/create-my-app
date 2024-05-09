import { createSlice } from "@reduxjs/toolkit";
import type { LangState } from "@/types/redux";

const initialState: LangState = {
    currentLang: "uz",
};

export const langSlice = createSlice({
    name: "lang",
    initialState,
    reducers: {
        setLang: (state, { payload }) => {
            state.currentLang = payload;
        },
    },
});

export const { setLang } = langSlice.actions;
