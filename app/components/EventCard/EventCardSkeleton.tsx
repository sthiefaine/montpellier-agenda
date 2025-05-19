import styles from "./EventCard.module.css";

export function EventCardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.skeletonImage} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.skeletonType} />
          <div className={styles.skeletonPrice} />
        </div>
        <div className={styles.skeletonTitle} />
        <div className={styles.details}>
          <div className={styles.skeletonDate} />
          <div className={styles.skeletonLocation} />
        </div>
      </div>
    </div>
  );
}
