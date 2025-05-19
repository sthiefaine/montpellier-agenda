import { Event } from "@/types/events";
import { EventCard } from "../EventCard/EventCard";

interface EventGridProps {
  events: Event[];
}

export function EventGrid({ events }: EventGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {events.map((event) => (
        <div key={event.id} className="h-full">
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
}
