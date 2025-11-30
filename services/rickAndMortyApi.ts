
export interface ApiInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharactersResponse {
  info: ApiInfo;
  results: Character[];
}

const BASE_URL = "https://rickandmortyapi.com/api";

export async function fetchCharacters(name?: string): Promise<Character[]> {
  const url = new URL(`${BASE_URL}/character`);
  if (name) url.searchParams.set("name", name);
  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error("Error fetching characters");
  }

  const data: CharactersResponse = await res.json();
  return data.results;
}