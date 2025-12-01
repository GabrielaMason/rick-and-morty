// components/CharacterList/CharacterList.tsx
"use client";

import CharacterCard from "../CharacterCard/CharacterCard";
import styles from "./CharacterList.module.css";
import { Character } from "@/services/rickAndMortyApi";

interface Props {
    characters: Character[];
    selectedId?: number;
    onSelect: (character: Character) => void;
}

export default function CharacterList({ characters, selectedId, onSelect }: Props) {
    return (
        <div className={styles.grid}>
            {characters.map((char) => (
                <CharacterCard
                    key={char.id}
                    character={char}
                    isSelected={char.id === selectedId}
                    onClick={() => onSelect(char)}
                />
            ))}
        </div>
    );
}
