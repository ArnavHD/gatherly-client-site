// import React from 'react';
import AllEvents from './AllEvents';
import AllEventsBanner from './AllEventsBanner';
import { useLoaderData } from 'react-router';

const AllEventsContainer = () => {
    const events = useLoaderData();
    return (
      <div>
        <AllEventsBanner></AllEventsBanner>
        <AllEvents events={events}></AllEvents>
      </div>
    );
};

export default AllEventsContainer;