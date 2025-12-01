import reducer, {
    loadFavorites,
    addToFavorites,
    removeFromFavorites
} from "@/store/FavoritesSlice";
import type { Favorite } from "@/services/jsonServerApi";

describe("favoritesSlice", () => {
    const initialState = {
        items: [] as Favorite[],
        loading: false,
        error: null as string | null
    };

    test("debe retornar el estado inicial", () => {
        const state = reducer(undefined, { type: "@@INIT" });
        expect(state.items).toEqual([]);
        expect(state.loading).toBe(false);
        expect(state.error).toBeNull();
    });

    test("loadFavorites.pending pone loading en true", () => {
        const action = { type: loadFavorites.pending.type };
        const state = reducer(initialState, action);
        expect(state.loading).toBe(true);
        expect(state.error).toBeNull();
    });

    test("addToFavorites.fulfilled agrega un favorito", () => {
        const fakeFavorite: Favorite = {
            id: 1,
            characterId: 10,
            name: "Rick",
            image: "rick.png"
        };

        const action = {
            type: addToFavorites.fulfilled.type,
            payload: fakeFavorite
        };

        const state = reducer(initialState, action);
        expect(state.items).toHaveLength(1);
        expect(state.items[0]).toEqual(fakeFavorite);
    });

    test("removeFromFavorites.fulfilled elimina por id", () => {
        const startState = {
            ...initialState,
            items: [
                { id: 1, characterId: 10, name: "Rick", image: "rick.png" },
                { id: 2, characterId: 20, name: "Morty", image: "morty.png" }
            ]
        };

        const action = {
            type: removeFromFavorites.fulfilled.type,
            payload: 1
        };

        const state = reducer(startState, action);
        expect(state.items).toHaveLength(1);
        expect(state.items[0].name).toBe("Morty");
    });
});
