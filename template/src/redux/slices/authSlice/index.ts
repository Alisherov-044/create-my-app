import { produce } from "immer";
import type { AuthState } from "@/types/redux";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, { payload }: PayloadAction<AuthState>) => {
            return produce(state, (draft) => {
                draft.accessToken = payload.accessToken;
                draft.refreshToken = payload.refreshToken;
                draft.roles = payload.roles;
            });
        },
    },
});

export const { setAuth } = authSlice.actions;
