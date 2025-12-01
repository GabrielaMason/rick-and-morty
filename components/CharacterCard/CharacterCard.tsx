"use client";

import { Character } from "@/services/rickAndMortyApi";
import styles from "./CharacterCard.module.css";

interface Props {
  character: Character;
  isSelected?: boolean;
  onClick: () => void;
}

export default function CharacterCard({ character, isSelected, onClick }: Props) {
  return (
    <article
      className={`${styles.card} ${isSelected ? styles.cardSelected : ""}`}
      onClick={onClick}
    >
      <div className={styles.info}>
        <span className={styles.name}>{character.name}</span>
      </div>
      <img
        src={character.image}
        alt={character.name}
        className={styles.image}
      />
    </article>
  );
}
