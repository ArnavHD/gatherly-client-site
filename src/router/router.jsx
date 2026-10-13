import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
// import AllEvents from "../pages/Events/AllEvents";
import EventsLayout from "../layouts/EventsLayout";
// import AllEvents from "../pages/Events/AllEvents";
import AllEventsContainer from "../pages/Events/AllEventsContainer";
import EventDetails from "../pages/EventDetails/EventDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
  {
    path: "/events",
    Component: EventsLayout,
    //
    children: [
      {
        index: true,
        Component: AllEventsContainer,
        loader: () => fetch("http://localhost:3000/events"),
      },
      {
        path: "/events/:id",
        Component: EventDetails,
        loader: ({params}) =>
          fetch(`http://localhost:3000/events/${params.id}`),
      },
    ],
  },
]);

export default router;
