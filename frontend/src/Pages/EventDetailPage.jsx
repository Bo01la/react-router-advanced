
import { useRouteLoaderData, redirect } from "react-router-dom";

import EventItem from "../components/EventItem";

export default function EventDetailsPage() {
  const data = useRouteLoaderData("event-data");
  return <EventItem event={data.event} />;
}
export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`);

  return response;
}

// action function to delete event
export async function action({ request, params }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method, // using the method we set in useSubmit hook
  });

  if (!response.ok) {
    console.log("couldn't delete the event");
  }

  return redirect("/events");
}
