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
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 20,
            pointerEvents: "none",
          }}
          // Controls the number of snowflakes that are created (default 150)
          snowflakeCount={200}
        />

        <div className="flex flex-col md:flex-row justify-center relative h-screen justify-items-center items-center z-10">
          <div>
            <img
              src="https://i.ibb.co/ZpxcW4zy/Enchanted-Pumpkin-Patch-Glow.png"
              className="hidden md:block lg:w-70 rounded-xl border-2 translate-y-40 md:translate-y-8 translate-x-12 rotate-25"
              alt=""
            />
          </div>
          <div className=" md:w-3/5 lg:w-2/6 -translate-y-10 md:translate-y-0 relative z-10">
            <h1 className=" text-shadow-white text-center">
              THE BEST EVENTS START HERE
            </h1>
            <h1 className="text-3xl md:text-5xl text-center lg:text-7xl  text-amber-200 libre ">
              CREATION OF MEMORABLE EVENTS
            </h1>
          </div>
          <div className="flex md:hidden gap-2 mx-2">
            <div>
              <img
                src="https://i.ibb.co/ZpxcW4zy/Enchanted-Pumpkin-Patch-Glow.png"
                alt=""
                className="w-40 rounded-xl -translate-y-5"
              />
            </div>
            <div>
              <img
                src="https://i.ibb.co/8LkQVBf1/Joyful-Diwali-Sparklers-with-Siblings.png"
                alt=""
                className="w-40 rounded-xl translate-y-10"
              />
            </div>
          </div>
          <div>
            <img
              src="https://i.ibb.co/8LkQVBf1/Joyful-Diwali-Sparklers-with-Siblings.png"
              className="hidden md:block lg:w-70 rounded-xl border-2 -rotate-20 -translate-y-40 -translate-x-8 md:-translate-y-15 md:-translate-x-10"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Banner;