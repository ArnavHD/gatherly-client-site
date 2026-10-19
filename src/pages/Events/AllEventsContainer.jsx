// import React from 'react';
import AllEvents from './AllEvents';
import AllEventsBanner from './AllEventsBanner';
import { useLoaderData } from 'react-router';

const AllEventsContainer = () => {
    const events = useLoaderData();
    // console.log("This is events from events", events);

    const now = new Date();

  const filteredEvents = events
    .filter((event) => new Date(event.eventDate) >= now)
    .sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));


    return (
      <div>
        <AllEventsBanner></AllEventsBanner>
        <AllEvents filteredEvents={filteredEvents}></AllEvents>
      </div>
    );
};

export default AllEventsContainer;