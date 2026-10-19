// import React from "react";
import { BiCategory } from "react-icons/bi";
import { DiRequirejs } from "react-icons/di";
import { GoOrganization } from "react-icons/go";
import { GrStatusGood } from "react-icons/gr";
import { IoTimeOutline } from "react-icons/io5";
import {
  MdOutlineDateRange,
  MdOutlineDescription,
  MdOutlineLocationOn,
} from "react-icons/md";
import { Link, useLoaderData, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const EventDetails = () => {
  const { id: eventId } = useParams();
  const {user} = useAuth();
  console.log(eventId, user);
  const {
    title,
    description,
    requirements,
    eventDate,
    image,
    organizer,
    category,
    status,
    location,
  } = useLoaderData();
  const date = new Date(eventDate);

  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const weekday = date.toLocaleString("en-US", { weekday: "short" });
  const year = date.getFullYear();
  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  return (
    <div className="p-5 md:p-10">
      <div className="card lg:card-side bg-base-100/80 shadow-sm">
        <figure>
          <img src={image} alt="Album" className="w-2xl" />
        </figure>
        <div className="card-body ">
          <h2 className="text-3xl mb-7 font-semibold text-center">{title}</h2>
          <div className="flex gap-3">
            <div className="flex flex-col gap-3.5">
              <div className="flex text-white/40 items-center gap-2.5">
                <GoOrganization size={20} />
                <h2 className="text-xm">Organizer:</h2>
              </div>
              <div className="flex text-white/40 items-center gap-2.5">
                <GrStatusGood size={20} />
                <h2 className="text-xm">Status: </h2>
              </div>
              <div className="flex text-white/40 items-center gap-2.5">
                <BiCategory size={20} />
                <h2 className="text-xm">Category: </h2>
              </div>
              <div className="flex text-white/40 items-center gap-2.5">
                <MdOutlineLocationOn size={20} />
                <h2 className="text-xm">Location: </h2>
              </div>
              <div className="flex text-white/40 items-center gap-2.5">
                <MdOutlineDateRange size={20} />
                <h2 className="text-xm">Event Date </h2>
              </div>
              <div className="flex text-white/40 items-center gap-2.5">
                <IoTimeOutline size={20} />
                <h2 className="text-xm">Event Time: </h2>
              </div>
            </div>
            <div className="flex flex-col gap-3.5">
              <div>
                <h2 className="text-xm">{organizer.name}</h2>
              </div>
              <div>
                <h2>{status}</h2>
              </div>
              <div>
                <h2>{category}</h2>
              </div>
              <div>
                <h2>{location.address}</h2>
              </div>
              <div>
                <h2>
                  <div className="badge badge-outline badge-info">
                    {weekday}, {month} {day}, {year}
                  </div>
                </h2>
              </div>
              <div>
                <div className="badge badge-outline badge-accent">{time}</div>
              </div>
            </div>
          </div>
          <div className="flex text-white/40 items-center gap-2.5">
            <MdOutlineDescription size={20} />
            <h2 className="text-xm">Description: </h2>
          </div>
          <textarea
            value={description}
            readOnly
            className="textarea textarea-md w-full bg-base-100/60 pointer-events-none"
          ></textarea>

          <div className=" gap-3.5">
            <div className="flex gap-2.5 text-white/40">
              <DiRequirejs size={20} />
              <h2>Requirements:</h2>
            </div>
            <div>
              {requirements.map((requirement, index) => (
                <li key={index} className="list-row flex gap-2">
                  <div className="text-xm font-thin tabular-nums">
                    {index + 1}.
                  </div>

                  <div className="list-col-grow">
                    <div>{requirement}</div>
                  </div>
                </li>
              ))}
            </div>
          </div>

          <div className="card-actions justify-end">
            <Link to={`/events/joinEvent/${eventId}`}>
              <button className="btn bg-black/80">Join Event</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
