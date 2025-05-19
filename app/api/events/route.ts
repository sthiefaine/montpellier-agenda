import { NextResponse } from "next/server";
import { getCachedEvents } from "@/app/actions/events";

export async function GET() {
  try {
    const events = await getCachedEvents();
    return NextResponse.json(events);
  } catch (error) {
    console.error("Erreur API:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des événements" },
      { status: 500 }
    );
  }
}
