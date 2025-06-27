import { useLoaderData } from "react-router-dom"; // import useLoader Data

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData(); // saving the returned response
  const events = data.events;
  return (
    <>
      {/* passing the value to a prop to be used */}
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

// this is the function we will use to fetch data

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw { message: "couldn't find events" };
  } else {
    return response;
  }
}
