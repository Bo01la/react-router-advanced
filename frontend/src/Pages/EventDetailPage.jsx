import { useParams } from "react-router-dom";

export default function EventDetailsPage() {
  const params = useParams();
  return <h1>the id of the event is {params.eventId}</h1>;
}
