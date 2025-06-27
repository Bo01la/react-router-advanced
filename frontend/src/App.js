// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3.  Add a root layout that adds the <MainNavigation> component above all page components
// 4.  Add properly working links to the MainNavigation
// 5.  Ensure that the links in MainNavigation receive an "active" class when active
// 6.  Output a list of dummy events to the EventsPage
//     Every list item should include a link to the respective EventDetailPage
// 7.  Output the ID of the selected event on the EventDetailPage
//  BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Errorpage from "./Pages/ErrorPage";
import EventsPage, { loader as eventsLoader } from "./Pages/EventsPage";
import EventDetailPage, {
  loader as eventDetails,
  action as deleteEvent,
} from "./Pages/EventDetailPage";

import NewEventPage from "./Pages/NewEventPage";
import EditEventPage from "./Pages/EditEventPage";
import RootLayout from "./Pages/RootLayout.jsx";
import EventsLayout from "./Pages/EventsLayout.jsx";
import NewsletterPage, {action as newsletterAction} from "./Pages/NewsletterPage";
import { action as eventManipulation } from "./components/EventForm";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "events",
        element: <EventsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-data",
            loader: eventDetails,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEvent, // the action function to delete event
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: eventManipulation,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: eventManipulation,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
