import styles from "./CurrentDate.module.css";

export function CurrentDate() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className={styles.container}>
      <span className={styles.date}>{formattedDate}</span>
    </div>
  );
}
