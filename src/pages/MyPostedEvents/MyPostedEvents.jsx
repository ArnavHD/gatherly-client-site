// import React from 'react';
import { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import EventList from "./EventList";
import useEventApi from "../../api/useEventApi";


const MyPostedEvents = () => {
    const {user} = useAuth();
    const { eventsCreatedBy } = useEventApi();
    return (
      <div className="" style={{}}>
        <h2 className="text-3xl libre text-black text-center mb-14 mt-5">My posted events </h2>
        <Suspense>
          <EventList eventsCreatedBy={eventsCreatedBy(user.email, user.accessToken)}></EventList>
        </Suspense>
      </div>
    );
};

export default MyPostedEvents;