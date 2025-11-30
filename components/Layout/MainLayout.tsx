"use client";

import styles from "./MainLayout.module.css";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.bg} />
      <div className={styles.ground} />
      <header className={styles.header}>
        <Image src="/rick-and-morty-logo.png" id="rick-and-morty-logo" alt="Rick and Morty" width={500} height={150} />
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}