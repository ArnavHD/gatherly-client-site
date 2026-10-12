// import React from 'react';
import NavBar from '../pages/shared/NavBar';
import Footer from '../pages/shared/Footer';
// import AllEvents from '../pages/Events/AllEvents';
import { Outlet } from 'react-router';

const EventsLayout = () => {

    // const events = useLoaderData();

    return (
      <div>
        <NavBar></NavBar>
        {/* <AllEvents events={events}></AllEvents> */}
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default EventsLayout;