
import { Link, useSubmit } from "react-router-dom";

import classes from "./EventItem.module.css";

function EventItem({ event }) {
  // used to submit data and headers to the related action function
  // it takes 2 arguments (1- data to submit -- 2- the vales we can set in a form like method, headers, etc..)
  const submit = useSubmit();
  function startDeleteHandler() {// this will be used later in an onClick button
    const proceed = window.confirm("are you sure ??"); // this is a browser event listener

    if (proceed) {
      submit(null, { method: "DELETE" }); // setting data to null and method to delete
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
