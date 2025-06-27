import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
  redirect,
} from "react-router-dom"; // importing "Form" component from React router

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  const submittedData = useActionData();

  return (
    <Form method={method} className={classes.form}>
      {submittedData && submittedData.errors && (
        <ul>
          {Object.values(submittedData.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

// action function
export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let URL = "http://localhost:8080/events";
  if (method === "PATCH") {
    const id = params.eventId;
    URL = `http://localhost:8080/events/${id}`;
  }

  const response = await fetch(URL, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    console.log("an error happend");
  }

  return redirect("/events");
}
