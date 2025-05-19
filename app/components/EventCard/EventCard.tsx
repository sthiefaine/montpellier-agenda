import Image from "next/image";
import Link from "next/link";
import { Event } from "@/types/events";
import { getCategoryStyle } from "@/types/categories";
import styles from "./EventCard.module.css";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const formatDate = (date: string) => {
    const eventDate = new Date(date);
    const currentYear = new Date().getFullYear();
    const isCurrentYear = eventDate.getFullYear() === currentYear;

    return eventDate.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: isCurrentYear ? undefined : "numeric",
    });
  };

  const formatPrice = (price: string | undefined, currency: string) => {
    if (!price) return null;
    if (price === "0") return "Gratuit";
    return `${price} ${currency}`;
  };

  const price = formatPrice(event.tariffs.price, event.tariffs.currency);
  const categoryStyle = getCategoryStyle(event.type);

  const startDate = new Date(event.dates[0].start.startDate);
  const endDate = event.dates[0].end?.endDate
    ? new Date(event.dates[0].end.endDate)
    : null;

  const hasEndDate =
    endDate &&
    (startDate.getFullYear() !== endDate.getFullYear() ||
      startDate.getMonth() !== endDate.getMonth() ||
      startDate.getDate() !== endDate.getDate());

  return (
    <Link href={event.link} className={styles.card} target="_blank">
      <div className={styles.imageContainer}>
        <Image
          src={event.img.url}
          alt={event.img.alt}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className={styles.overlay}>
          <div className={styles.badges}>
            <span
              className={styles.type}
              style={{
                backgroundColor: categoryStyle.background,
                color: categoryStyle.color,
              }}
            >
              {event.type}
            </span>
            {price && <span className={styles.price}>{price}</span>}
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{event.title}</h3>
        <div className={styles.details}>
          <div className={styles.dateContainer}>
            <p className={styles.date}>
              <span className={styles.icon}>📅</span>
              {formatDate(event.dates[0].start.startDate)}
              {event.dates[0].start.startTime &&
                ` • ${event.dates[0].start.startTime}`}
            </p>
            {hasEndDate && event.dates[0].end?.endDate && (
              <p className={styles.endDate}>
                {formatDate(event.dates[0].end.endDate)}
                {event.dates[0].end?.endTime &&
                  ` • ${event.dates[0].end.endTime}`}
              </p>
            )}
          </div>
          <p className={styles.location}>
            <span className={styles.icon}>📍</span>
            {event.location.town}
          </p>
        </div>
      </div>
    </Link>
  );
}
