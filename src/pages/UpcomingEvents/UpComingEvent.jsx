// import React from 'react';
import { TfiLocationPin } from 'react-icons/tfi';
import { Link } from 'react-router';

const UpComingEvent = ({ upComingEvent }) => {
  const { _id, title, description, image, location } = upComingEvent;
  const date = new Date(upComingEvent.eventDate);

  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const weekday = date.toLocaleString("en-US", { weekday: "short" });
  const year = date.getFullYear();
  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div>
      <div className="mx-auto card bg-base-100/60 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl w-full h-56" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-center items-center">
            <TfiLocationPin size={20} />
            <h3 className="text-sm">{location.address}</h3>
          </div>
          <p>{description}</p>
          <div className="flex flex-col gap-2">
            <div>
              <span className="">Event Date:</span>
              {"   "}
              <div className="badge badge-outline badge-info">
                {weekday}, {month} {day}, {year}
              </div>
            </div>
            <div>
              <span className="">Event Time:</span>{" "}
              <div className="badge badge-outline badge-info">{time}</div>
            </div>
          </div>
          <div className="card-actions">
            <Link to={`/events/event/${_id}`}>
              <button className="btn bg-mauve-900">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComingEvent;