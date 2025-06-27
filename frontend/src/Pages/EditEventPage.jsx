import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

export default function EditEventPage() {
  const eventData = useRouteLoaderData("event-data"); 
  return <EventForm method="PATCH" event={eventData.event} />;
}
