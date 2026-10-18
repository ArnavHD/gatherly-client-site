// import React from 'react';

import { useLoaderData } from "react-router";
import OurActivities from "../OurActivities/OurActivities";
import OurResponsibilities from "../OurResponsibilities/OurResponsibilities";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import Banner from "./Banner";
import WhyWeAreBest from "../WhyWeAreBest/WhyWeAreBest";

const Home = () => {
    const events = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <UpcomingEvents events={events}></UpcomingEvents>
            <OurResponsibilities></OurResponsibilities>
            <OurActivities></OurActivities>
            <WhyWeAreBest></WhyWeAreBest>
        </div>
    );
};

export default Home;