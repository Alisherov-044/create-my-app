import type { AuthState } from "@/types/redux";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, { payload }: PayloadAction<AuthState>) => {
            return (state = payload);
        },
    },
});

export const { setAuth } = authSlice.actions;
