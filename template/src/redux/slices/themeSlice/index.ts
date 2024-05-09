import { produce } from "immer";
import { Theme } from "@/enums";
import type { ThemeState } from "@/types/redux";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ThemeState = {
    theme: Theme.light,
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, { payload }: PayloadAction<Theme>) => {
            return produce(state, (draft) => {
                draft.theme = payload;
            });
        },
    },
});

export const { setTheme } = themeSlice.actions;
