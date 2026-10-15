// import React from 'react';
import { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import EventList from "./EventList";
import { eventsCreatedBy } from "../../api/EventsApi";

const MyPostedEvents = () => {
    const {user} = useAuth();
    return (
      <div>
        <h2>My posted events: </h2>
        <Suspense>
          <EventList eventsCreatedBy={eventsCreatedBy(user.email)}></EventList>
        </Suspense>
      </div>
    );
};

export default MyPostedEvents;