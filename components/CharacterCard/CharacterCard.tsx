"use client";

import { Character } from "@/services/rickAndMortyApi";
import styles from "./CharacterCard.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { addToFavorites, removeFromFavorites } from "@/store/FavoritesSlice";

interface Props {
  character: Character;
  isSelected?: boolean;
  onClick: () => void;
}

export default function CharacterCard({ character, isSelected, onClick }: Props) {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((fav) => fav.id === character.id);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFromFavorites(character.id));
    } else {
      dispatch(addToFavorites(character));
    }
  };

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
      <button
        type="button"
        className={`${styles.heart} ${isFavorite ? styles.heartActive : ""}`}
        onClick={handleToggleFavorite}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? "♥" : "♡"}
        <span className={styles.likeText}>Like</span>
      </button>
    </article>
  );
}
