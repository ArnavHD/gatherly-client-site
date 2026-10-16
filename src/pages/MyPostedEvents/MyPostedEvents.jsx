// import React from 'react';
import { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import EventList from "./EventList";
import useEventApi from "../../api/useEventApi";


const MyPostedEvents = () => {
    const {user} = useAuth();
    const { eventsCreatedBy } = useEventApi();
    return (
      <div>
        <h2>My posted events: </h2>
        <Suspense>
          <EventList eventsCreatedBy={eventsCreatedBy(user.email, user.accessToken)}></EventList>
        </Suspense>
      </div>
    );
};

export default MyPostedEvents;