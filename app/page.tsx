import { Suspense } from 'react';
import { EventGrid } from '@/app/components/EventGrid/EventGrid';
import { EventGridSkeleton } from '@/app/components/EventGrid/EventGridSkeleton';
import { getCachedEvents } from './actions/events';
import styles from './page.module.css';

export default async function Home() {
  const events = await getCachedEvents();

  return (
    <main className={styles.main}>
      <Suspense fallback={<EventGridSkeleton />}>
        <EventGrid events={events} />
      </Suspense>
    </main>
  );
}
