// import React from 'react';

import Snowfall from "react-snowfall";

const Banner = () => {
    return (
      <div
        className="relative h-screen md:bg-cover sm:bg-contain lg:bg-bottom"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/dqmTwxV/Snowy-Fjord-City-at-Blue-Hour-1.png')",
        }}
      >
        <Snowfall
        className=""
          // Changes the snowflake color
          color="white"
          // Applied to the canvas element
          style={{position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 20,
                            pointerEvents: "none"}}
          // Controls the number of snowflakes that are created (default 150)
          snowflakeCount={200}
        />

        <div className="flex justify-center relative h-screen justify-items-center items-center z-10">
          <div>
            <img
              src="https://i.ibb.co/ZpxcW4zy/Enchanted-Pumpkin-Patch-Glow.png"
              className="w-80 rounded-xl border-2 translate-y-8 translate-x-12 rotate-25"
              alt=""
            />
          </div>
          <div className=" w-2/6 text-center relative z-10">
            <h1 className=" text-shadow-white">THE BEST EVENTS START HERE</h1>
            <h1 className="text-7xl text-amber-200 libre ">
              CREATION OF MEMORABLE EVENTS
            </h1>
          </div>
          <div>
            <img
              src="https://i.ibb.co/8LkQVBf1/Joyful-Diwali-Sparklers-with-Siblings.png"
              className="w-80 rounded-xl border-2 -rotate-20 -translate-y-15 -translate-x-10"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Banner;