import { Link } from "react-router-dom";

const dummyEvents = [
  { id: "e1", title: "React Workshop" },
  { id: "e2", title: "Vue Conference" },
];

export default function EventPage() {
  return (
    <>
      <h1>EventPage</h1>
      <ul>
        {dummyEvents.map((ev) => (
          <Link key={ev.id} to={ev.id}>
            {ev.title}
          </Link>
        ))}
      </ul>
    </>
  );
}
