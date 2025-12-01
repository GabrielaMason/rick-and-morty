"use client";
import MainLayout from "@/components/Layout/MainLayout";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Character } from "@/services/rickAndMortyApi";
import CharacterList from "@/components/CharacterList/CharacterList";
import CharacterDetail from "@/components/CharacterDetail/CharacterDetail";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selected, setSelected] = useState<Character | null>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("https://rickandmortyapi.com/api/character");
        if (!res.ok) {
          throw new Error("Error al obtener personajes");
        }

        const data = await res.json();
        setCharacters(data.results);
        setSelected(data.results[0] ?? null);
      } catch (err: any) {
        setError(err.message ?? "Error desconocido");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className={styles.state}>Cargando personajes...</p>;
  if (error) return <p className={styles.state}>Error: {error}</p>;
  if (!characters.length) return <p className={styles.state}>Sin personajes</p>;

  return (
    <MainLayout>
      <div className={styles.container}>
        <section className={styles.left}>
          {selected && <CharacterDetail character={selected} />}
        </section>
        <section className={styles.right}>
          <SearchBar
            value={search}
            onChange={setSearch}
          />
          {filteredCharacters.length === 0 && !loading && (
            <p className={styles.stateInline}>No se encontraron personajes</p>
          )}
          <div className={styles.listScroll}>
            <CharacterList
              characters={filteredCharacters}
              selectedId={selected?.id}
              onSelect={setSelected}
            />
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
