"use client";

import { useEffect, useState } from "react";
import styles from "./FavoritesBar.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
    loadFavorites,
    removeFromFavorites
} from "@/store/FavoritesSlice";

export default function FavoritesBar() {
    const dispatch = useAppDispatch();
    const { items: favorites } = useAppSelector((state) => state.favorites);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        dispatch(loadFavorites());
    }, [dispatch]);

    const toggleOverlay = () => setIsOpen((prev) => !prev);

    const handleRemove = (favoriteId: number) => {
        dispatch(removeFromFavorites(favoriteId));
    };

    return (
        <>
            <section className={styles.bar}>
                <button className={styles.tab} onClick={toggleOverlay}>
                    FAVS
                </button>
            </section>

            {isOpen && (
                <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                        <header className={styles.overlayHeader}>
                            <h2>My Favorites</h2>
                            <button
                                type="button"
                                className={styles.closeBtn}
                                onClick={toggleOverlay}
                            >
                                ✕
                            </button>
                        </header>

                        {favorites.length === 0 ? (
                            <p className={styles.empty}>The list is empty</p>
                        ) : (
                            <ul className={styles.list}>
                                {favorites.map((fav) => (
                                    <li key={fav.id} className={styles.item}>
                                        <span className={styles.name}>{fav.name}</span>
                                        <button
                                            type="button"
                                            className={styles.deleteBtn}
                                            onClick={() => handleRemove(fav.id)}
                                            aria-label={`Delete ${fav.name} from favorites`}
                                        >
                                            🗑
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
