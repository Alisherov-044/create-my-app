import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice, langSlice, themeSlice } from "@/redux/slices";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["lang", "auth", "theme"],
};

const rootReducer = combineReducers({
    lang: langSlice.reducer,
    auth: authSlice.reducer,
    theme: themeSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
