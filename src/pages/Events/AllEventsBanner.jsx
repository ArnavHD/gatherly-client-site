// import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const AllEventsBanner = () => {
  
  return (
    <div
      className="relative h-[70vh] bg-no-repeat bg-center lg:bg-cover bg-contain"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/HDCDNgn2/Twilight-Lantern-Lit-Outdoor-Dinner.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      {/* <h1 className=" relative z-20">Hey</h1> */}
      <div className="flex flex-col relative h-full z-20 justify-center text-center items-center justify-items-center">
        <div>
          <h1 className="text-6xl libre">EVENTS</h1>
        </div>
        <div className="flex items-center justify-center text-center">
          <h3>Home</h3>
          <MdOutlineKeyboardArrowRight className="translate-y-0.5" />
          <h3>Events</h3>
        </div>
      </div>
    </div>
  );
};

export default AllEventsBanner;
