import { Character } from "./rickAndMortyApi";

const JSON_SERVER_URL = "http://localhost:4000";

export type Favorite = Character;

export async function fetchFavorites(): Promise<Favorite[]> {
  const res = await fetch(`${JSON_SERVER_URL}/favorites`);
  if (!res.ok) throw new Error("Error fetching favorites");
  return res.json();
}

export async function addFavorite(character: Favorite): Promise<Favorite> {
  const res = await fetch(`${JSON_SERVER_URL}/favorites`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(character)
  });
  if (!res.ok) throw new Error("Error adding favorite");
  return res.json();
}

export async function removeFavorite(id: number): Promise<number> {
  const res = await fetch(`${JSON_SERVER_URL}/favorites/${id}`, {
    method: "DELETE"
  });
  if (!res.ok) throw new Error("Error removing favorite");
  return id;
}