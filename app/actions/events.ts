"use server";

import { unstable_cache } from "next/cache";
import { Event, EventsResponse } from "@/types/events";

const API_URL = process.env.API_URL;

function sortEventsByDate(events: Event[]): Event[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return events.sort((a, b) => {
    const dateA = new Date(a.dates[0].start.startDate);
    const dateB = new Date(b.dates[0].start.startDate);

    dateA.setHours(0, 0, 0, 0);
    dateB.setHours(0, 0, 0, 0);

    const isTodayA = dateA.getTime() === today.getTime();
    const isTodayB = dateB.getTime() === today.getTime();

    if (isTodayA && !isTodayB) return -1;
    if (!isTodayA && isTodayB) return 1;


    return dateA.getTime() - dateB.getTime();
  });
}

async function fetchEvents(page: number = 1): Promise<EventsResponse> {
  try {
    const response = await fetch(`${API_URL}?page=${page}`, {
      next: { revalidate: 36 },
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();

    const events: Event[] = data.items.map((item: any) => ({
      id: item.sheetId,
      title: item.title,
      type: item.type,
      link: item.link,
      location: {
        address: item.address,
        town: item.town,
        gps: {
          longitude: item.gps.longitude,
          latitude: item.gps.latitude,
        },
      },
      website: item.website,
      phone: item.phone,
      img: {
        url: item.img.url.landscape,
        title: item.img.title,
        alt: item.img.alt,
      },
      description: item.description,
      dates: item.dates,
      tariffs: {
        price: item.tariffs.price,
        hasSinglePrice: item.tariffs.hasSinglePrice,
        type: item.tariffs.type,
        free: item.tariffs.free,
        label: item.tariffs.label,
        currency: item.tariffs.currency,
      },
    }));

    return {
      events,
      total: data.total,
      page: data.page,
      pageSize: data.pageSize,
      hasNextPage: data.hasNextPage,
      lastPage: data.lastPage,
      pagination: {
        currentPage: data.page,
        totalPages: data.lastPage,
        totalItems: data.total,
        itemsPerPage: data.pageSize,
      },
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des événements:", error);
    throw error;
  }
}

export const getCachedEvents = unstable_cache(
  async (): Promise<Event[]> => {
    const justFirstPage = true;
    try {
      const firstPage = await fetchEvents(1);
      const totalPages = justFirstPage ? 1 : firstPage.lastPage;

      // Récupérer toutes les pages en parallèle
      const remainingPages = Array.from(
        { length: totalPages - 1 },
        (_, i) => i + 2
      );
      const remainingPagesData = await Promise.all(
        remainingPages.map((page: number) => fetchEvents(page))
      );

      // Combiner tous les événements
      const allEvents = [
        ...firstPage.events,
        ...remainingPagesData.flatMap((page: EventsResponse) => page.events),
      ];

      // Trier les événements par date
      return sortEventsByDate(allEvents);
    } catch (error) {
      console.error("Erreur lors de la récupération des événements:", error);
      return [];
    }
  },
  ["events"],
  {
    tags: ["events"],
  }
);
