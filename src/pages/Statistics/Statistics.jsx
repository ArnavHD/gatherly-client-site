// import React from 'react';
// import CountUp from 'react-countup';
import CountUpModules from "react-countup";

const CountUp = CountUpModules.default;

const Statistics = () => {
    return (
      <div className="mb-30 mt-20">
        <h1 className="text-2xl md:text-3x lg:text-4xl text-black libre text-center ">
          Our Success Statistics
        </h1>
        <h2 className=" text-center md:text-xl text-black/60 mb-16">
          We publish our real data just to make you assured and secure about
          your event
        </h2>
        <div className="grid grid-cols-1 mx-8 lg:mx-45 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex flex-col items-center md:items-start gap-3 p-10 rounded-xl bg-gray-100">
            <div>
              <img
                className="w-15"
                src="https://i.ibb.co/n80tqVsx/event.png"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-black">
                <CountUp
                  start={0}
                  end={1200}
                  duration={3.75}
                  separator=","
                  suffix="+"
                  redraw={true}
                  enableScrollSpy={true}
                  scrollSpyDelay={100}
                >
                  {({ countUpRef, start }) => (
                    <div>
                      <span ref={countUpRef} />
                      <button onClick={start}></button>
                    </div>
                  )}
                </CountUp>
              </h2>
            </div>
            <div>
              <h2 className="text-xl text-black">Events Organized</h2>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start gap-3 p-10 rounded-xl bg-gray-100">
            <div>
              <img
                className="w-15"
                src="https://i.ibb.co/7JMkTKx8/stars.png"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-black">
                <CountUp
                  start={0}
                  end={550}
                  duration={3.75}
                  separator=","
                  suffix="+"
                  redraw={true}
                  enableScrollSpy={true}
                  scrollSpyDelay={100}
                >
                  {({ countUpRef, start }) => (
                    <div>
                      <span ref={countUpRef} />
                      <button onClick={start}></button>
                    </div>
                  )}
                </CountUp>
              </h2>
            </div>
            <div>
              <h2 className="text-xl text-black">Total Reviews</h2>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start gap-3 p-10 rounded-xl bg-gray-100">
            <div>
              <img
                className="w-15"
                src="https://i.ibb.co/WNnNNxqB/wedding.png"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-black">
                <CountUp
                  start={0}
                  end={350}
                  duration={3.75}
                  separator=","
                  suffix="+"
                  redraw={true}
                  enableScrollSpy={true}
                  scrollSpyDelay={100}
                >
                  {({ countUpRef, start }) => (
                    <div>
                      <span ref={countUpRef} />
                      <button onClick={start}></button>
                    </div>
                  )}
                </CountUp>
              </h2>
            </div>
            <div>
              <h2 className="text-xl text-black">Total Venues</h2>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start gap-3 p-10 rounded-xl bg-gray-100">
            <div>
              <img
                className="w-15"
                src="https://i.ibb.co/Txq9wqKM/customer-review.png"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-black">
                <CountUp
                  start={0}
                  end={2000}
                  duration={3.75}
                  separator=","
                  suffix="+"
                  redraw={true}
                  enableScrollSpy={true}
                  scrollSpyDelay={100}
                >
                  {({ countUpRef, start }) => (
                    <div>
                      <span ref={countUpRef} />
                      <button onClick={start}></button>
                    </div>
                  )}
                </CountUp>
              </h2>
            </div>
            <div>
              <h2 className="text-xl text-black">Satisfied Customers</h2>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Statistics;