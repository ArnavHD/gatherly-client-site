// import React, { use } from "react";
import { use } from "react";
import { Link } from "react-router";

const EventList = ({ eventsCreatedBy }) => {
  const events = use(eventsCreatedBy);
  console.log(events);
  return (
    <div  className="h-screen">

      <div className="overflow-x-auto mx-96 rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Event Join Deadline</th>
              <th>View All Participants</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {events.map((event, index) => (
              <tr key={event._id}>
                <th>{index + 1}</th>
                <td>{event.title}</td>

                <td>{event.deadline}</td>
                <td>
                  <Link className="btn bg-black/70" to={`/applications/${event._id}`}>
                    View Participants
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventList;
