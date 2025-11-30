import MainLayout from "@/components/Layout/MainLayout";
import styles from "./page.module.css";

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <section className={styles.detailSection}>
        </section>

        <section className={styles.sidebar}>
        </section>
      </div>
    </MainLayout>
  );
}
