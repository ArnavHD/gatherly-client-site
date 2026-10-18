// import React from 'react';
import { AiOutlineLayout } from "react-icons/ai";
import { FaGears } from "react-icons/fa6";
import { MdOutlineCenterFocusStrong, MdSupportAgent } from "react-icons/md";
import { GiSatelliteCommunication } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";

const WhyWeAreBest = () => {
    return (
      <div className="mt-20 mb-12">
        <div>
          <h2 className="text-3xl mb-5 text-center libre text-black">
            Why We Are Your Best Choise
          </h2>
        </div>
        <div className="grid grid-cols-3 mx-52 p-7 gap-5">
          <div className="flex flex-col border-2 p-3 rounded-xl gap-3 bg-gray-100 border-black/30 justify-center items-center">
            <div>
              <AiOutlineLayout color="black" size={45} />
            </div>
            <div>
              <h2 className="text-xl text-black">Arrangement</h2>
            </div>
            <div className="">
              <p className="text-black text-center">
                We are here with our full team arrangment. Our entire team is
                waiting for you.
              </p>
            </div>
          </div>
          <div className="flex flex-col p-3 border-2 bg-gray-100 rounded-xl gap-3  border-black/30 justify-center items-center">
            <div>
              <FaGears color="black" size={45} />
            </div>
            <div>
              <h2 className="text-xl text-black">Tailored Solutions</h2>
            </div>
            <div className="">
              <p className="text-black text-center">
                We are here with our full team arrangment. Our entire team is
                waiting for you.
              </p>
            </div>
          </div>
          <div className="flex flex-col p-3 rounded-xl gap-3 bg-gray-100 border-black/30 border-2  justify-center items-center">
            <div>
              <MdOutlineCenterFocusStrong color="black" size={45} />
            </div>
            <div>
              <h2 className="text-xl text-black">Client-Focus</h2>
            </div>
            <div className="">
              <p className="text-black text-center">
                We are here with our full team arrangment. Our entire team is
                waiting for you.
              </p>
            </div>
          </div>
          <div className="flex flex-col p-3 border-2 rounded-xl gap-3 bg-gray-100 border-black/30 justify-center items-center">
            <div>
              <GiSatelliteCommunication color="black" size={45} />
            </div>
            <div>
              <h2 className="text-xl text-black">Communication</h2>
            </div>
            <div className="">
              <p className="text-black text-center">
                We are here with our full team arrangment. Our entire team is
                waiting for you.
              </p>
            </div>
          </div>
          <div className="flex flex-col p-3 border-2 rounded-xl gap-3 bg-gray-100 border-black/30 justify-center items-center">
            <div>
              <MdSupportAgent color="black" size={45} />
            </div>
            <div>
              <h2 className="text-xl text-black"> 24/7 Support</h2>
            </div>
            <div className="">
              <p className="text-black text-center">
                We are here with our full team arrangment. Our entire team is
                waiting for you.
              </p>
            </div>
          </div>
          <div className="flex flex-col p-3 border-2 rounded-xl gap-3 bg-gray-100 border-black/30 justify-center items-center">
            <div>
              <GrUserExpert color="black" size={45} />
            </div>
            <div>
              <h2 className="text-xl text-black">Indusrty Experts</h2>
            </div>
            <div className="">
              <p className="text-black text-center">
                We are here with our full team arrangment. Our entire team is
                waiting for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WhyWeAreBest;