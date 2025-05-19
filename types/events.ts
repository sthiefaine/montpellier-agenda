export interface EventImage {
  url: string;
  title: string;
  alt: string;
}

export interface EventDateInfo {
  startDate: string;
  label: string;
  day: string;
  month: string;
  shortMonth: string;
  startTime?: string;
  weekday?: string;
  year?: string | null;
  endDate?: string;
  endTime?: string;
}

export interface EventDate {
  isWeekly: boolean;
  oneday: boolean;
  over: string;
  start: EventDateInfo;
  end?: EventDateInfo;
}

export interface EventTariff {
  price: string;
  hasSinglePrice: boolean;
  type: string;
  free: string;
  label: string;
  currency: string;
}

export interface EventLocation {
  address: string;
  town: string;
  gps: {
    longitude: string;
    latitude: string;
  };
}

export interface Event {
  id: string;
  title: string;
  type: string;
  link: string;
  location: EventLocation;
  website: string | null;
  phone: string | null;
  img: EventImage;
  description: string;
  dates: EventDate[];
  tariffs: EventTariff;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface EventsResponse {
  events: Event[];
  total: number;
  page: number;
  pageSize: number;
  hasNextPage: boolean;
  lastPage: number;
  pagination: PaginationInfo;
}
