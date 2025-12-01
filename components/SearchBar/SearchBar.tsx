"use client";

import styles from "./SearchBar.module.css";
import { FormEvent } from "react";

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                placeholder="Find your character..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
