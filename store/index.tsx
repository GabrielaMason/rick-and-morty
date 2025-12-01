"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import type { ReactNode } from "react";
import favoritesReducer from "./FavoritesSlice";

const store = configureStore({
    reducer: {
        favorites: favoritesReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function ReduxProvider({ children }: { children: ReactNode }) {
    return (
        <Provider store= { store } >
        { children }
        </Provider>
  );
}

