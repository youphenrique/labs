import styles from "./empty-state.module.css";

export function EmptyState() {
  return (
    <div className={styles.container}>
      <img src="/Images/empty-state.png" alt="Empty state icon" className={styles.image} />
    </div>
  );
}
