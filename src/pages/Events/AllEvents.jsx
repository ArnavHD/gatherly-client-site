// import React from 'react';

import EventCard from "../shared/EventCard";

const AllEvents = ({ events }) => {
    console.log("This is events form all events",events);
  return (
    <div className="mt-32 mx-32">
        <h1 className="text-5xl libre mb-14 text-center text-black"> Our Upcoming Events</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mb-32">
        {
            events.map(event => <EventCard key={event._id} event={event}></EventCard>)
        }
      </div>
    </div>
  );
};

export default AllEvents;