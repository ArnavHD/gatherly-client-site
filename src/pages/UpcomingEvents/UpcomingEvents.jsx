// import React from 'react';

import PastEvents from "../PastEvents/PastEvents";
import UpComingEvent from "./UpComingEvent";

const UpcomingEvents = ({events}) => {
    console.log("This is events",events);
    const now = new Date();

    const upComingEvents = events.filter((event) => new Date(event.eventDate) >= now)
    .sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate)).slice(0, 5);
    console.log("This is upcoming events",upComingEvents);

    const pastEvents = events.filter((event) => new Date(event.eventDate) < now)
    .sort((a,b) => new Date(b.eventDate) - new Date(a.eventDate));


    return (
      <div className=" md:mx-40 bg-white md:p-10 mt-10 mb-10 rounded-2xl">
        <h2 className="text-black pt-7 text-3xl libre text-center mb-7">
          Glimpse of Our Events
        </h2>
        <div className="tabs tabs-border">
          <input
            type="radio"
            name="my_tabs_2"
            className="tab text-black"
            aria-label="Upcoming"
            defaultChecked
          />
          <div className="tab-content mt-2 text-black  bg-base-100/10 p-5 md:p-10">
            <div className="badge badge-secondary mt-3 mb-5">Top 5 Events</div>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
              {upComingEvents.map((upComingEvent) => (
                <UpComingEvent
                  key={upComingEvent._id}
                  upComingEvent={upComingEvent}
                ></UpComingEvent>
              ))}
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            className="tab text-black"
            aria-label="Past"
          />
          <div className="tab-content mt-2 text-black p-5  bg-base-100/10 md:p-10">
            {pastEvents.length < 5 ? (
              <div className="badge mt-3 badge-secondary mb-5">
                Past {pastEvents.length} Events
              </div>
            ) : (
              <div className="badge badge-secondary mb-5">Top 5 Events</div>
            )}

            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 items-stretch gap-5">
              {pastEvents.map((pastEvent) => (
                <PastEvents
                  key={pastEvent._id}
                  pastEvent={pastEvent}
                ></PastEvents>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpcomingEvents;