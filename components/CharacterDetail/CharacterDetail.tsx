// components/CharacterDetail/CharacterDetail.tsx
"use client";

import { Character } from "@/services/rickAndMortyApi";
import styles from "./CharacterDetail.module.css";

interface Props {
  character: Character;
}

export default function CharacterDetail({ character }: Props) {
  const isAlive = character.status === "Alive";
  const isDead = character.status === "Dead";

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img
          src={character.image}
          alt={character.name}
          className={styles.image}
        />

        <div className={styles.statusBadge}>
          <span
            className={`${styles.statusDot} ${isAlive
                ? styles.statusAlive
                : isDead
                  ? styles.statusDead
                  : styles.statusUnknown
              }`}
          />
          <span>{character.status === "unknown" ? "Unknown" : character.status}</span>
        </div>

        <div className={styles.info}>
          <div>
            <h2 className={styles.name}>{character.name}</h2>
            <p className={styles.subtitle}>
              {character.species}
            </p>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <div className={styles.statLabel}>Origin</div>
              <div className={styles.statValue}>{character.origin?.name}</div>
            </div>

            <div className={styles.stat}>
              <div className={styles.statLabel}>Location</div>
              <div className={styles.statValue}>{character.location?.name}</div>
            </div>

            <div className={styles.stat}>
              <div className={styles.statLabel}>Gender</div>
              <div className={styles.statValue}>{character.gender}</div>
            </div>

            <div className={styles.stat}>
              <div className={styles.statLabel}>Episodes</div>
              <div className={styles.statValue}>
                {character.episode?.length ?? 0}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
