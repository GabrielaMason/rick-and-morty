"use client";

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { Favorite } from "@/services/jsonServerApi";
import {
    fetchFavorites,
    addFavorite,
    removeFavorite
} from "@/services/jsonServerApi";

interface FavoritesState {
    items: Favorite[];
    loading: boolean;
    error: string | null;
}

const initialState: FavoritesState = {
    items: [],
    loading: false,
    error: null
};

export const loadFavorites = createAsyncThunk(
    "favorites/load",
    async () => {
        const data = await fetchFavorites();
        return data;
    }
);

export const addToFavorites = createAsyncThunk(
    "favorites/add",
    async (character: { id: number; name: string; image: string }) => {
        const data = await addFavorite(character as any);
        return data;
    }
);

export const removeFromFavorites = createAsyncThunk(
    "favorites/remove",
    async (favoriteId: number) => {
        await removeFavorite(favoriteId);
        return favoriteId;
    }
);

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadFavorites.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                loadFavorites.fulfilled,
                (state, action: PayloadAction<Favorite[]>) => {
                    state.loading = false;
                    state.items = action.payload;
                }
            )
            .addCase(loadFavorites.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Error loading favorites";
            })
            .addCase(
                addToFavorites.fulfilled,
                (state, action: PayloadAction<Favorite>) => {
                    const exists = state.items.some(
                        (fav) => fav.characterId === action.payload.characterId
                    );
                    if (!exists) {
                        state.items.push(action.payload);
                    }
                }
            )
            .addCase(
                removeFromFavorites.fulfilled,
                (state, action: PayloadAction<number>) => {
                    state.items = state.items.filter(
                        (fav) => fav.id !== action.payload
                    );
                }
            );
    }
});

export default favoritesSlice.reducer;
