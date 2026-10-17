// import React from 'react';

import OurActivities from "../OurActivities/OurActivities";
import OurResponsibilities from "../OurResponsibilities/OurResponsibilities";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurResponsibilities></OurResponsibilities>
            <OurActivities></OurActivities>
        </div>
    );
};

export default Home;