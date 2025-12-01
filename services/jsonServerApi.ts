import { Character } from "./rickAndMortyApi";

const JSON_SERVER_URL = "http://localhost:4000";

export interface Favorite {
    id: number;
    characterId: number;
    name: string;
    image: string;
}

export async function fetchFavorites(): Promise<Favorite[]> {
    const res = await fetch(`${JSON_SERVER_URL}/favorites`);
    if (!res.ok) throw new Error("Error fetching favorites");
    return res.json();
}

export async function addFavorite(character: Character): Promise<Favorite> {
    const res = await fetch(`${JSON_SERVER_URL}/favorites`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            characterId: character.id,
            name: character.name,
            image: character.image
        })
    });

    if (!res.ok) throw new Error("Error adding favorite");
    return res.json();
}

export async function removeFavorite(favoriteId: number): Promise<number> {
    const res = await fetch(`${JSON_SERVER_URL}/favorites/${favoriteId}`, {
        method: "DELETE"
    });

    if (!res.ok) throw new Error("Error removing favorite");
    return favoriteId;
}
