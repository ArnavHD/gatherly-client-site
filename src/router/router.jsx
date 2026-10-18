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
import PrivateRouts from "../routs/PrivateRouts";
import JoinEvent from "../JoinEvent/JoinEvent";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddEvents from "../pages/AddEvents/AddEvents";
import MyPostedEvents from "../pages/MyPostedEvents/MyPostedEvents";
import ViewParticipants from "../pages/ViewParticipants/ViewParticipants";
import UpdateEvents from "../pages/UpdateEvents/UpdateEvents";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/events"),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "addEvent",
        element: (
          <PrivateRouts>
            <AddEvents></AddEvents>
          </PrivateRouts>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "myApplications",
        element: (
          <PrivateRouts>
            <MyApplications></MyApplications>
          </PrivateRouts>
        ),
      },
      {
        path: "applications/:event_id",
        element: (
          <PrivateRouts>
            <ViewParticipants></ViewParticipants>
          </PrivateRouts>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/applications/event/${params.event_id}`),
      },
      {
        path: "myPostedEvents",
        element: (
          <PrivateRouts>
            <MyPostedEvents></MyPostedEvents>
          </PrivateRouts>
        ),
      },
      {
        path: "/updateEvents/:id",
        element: (
          <PrivateRouts>
            <UpdateEvents></UpdateEvents>
          </PrivateRouts>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/events/${params.id}`),
      },
      {
        path: "/profile",
        element: (
          <PrivateRouts>
            <ProfilePage></ProfilePage>
          </PrivateRouts>
        ),
      },
      {
        path: "/*",
        Component: ErrorPage,
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
        path: "event/:id",
        element: (
          <PrivateRouts>
            <EventDetails></EventDetails>
          </PrivateRouts>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/events/${params.id}`),
      },
      {
        path: "joinEvent/:id",
        element: (
          <PrivateRouts>
            <JoinEvent></JoinEvent>
          </PrivateRouts>
        ),
      },
    ],
  },
]);

export default router;
