import { useLoaderData } from "react-router-dom"; // import useLoader Data

import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData(); // saving the returned value
  return (
    <>
      {/* passing the value to a prop to be used */}
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
