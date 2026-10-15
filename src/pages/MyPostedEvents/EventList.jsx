import React, { use } from "react";
import { Link } from "react-router";

const EventList = ({ eventsCreatedBy }) => {
  const events = use(eventsCreatedBy);
  console.log(events);
  return (
    <div>
      <h2 className="text-3xl">Events Created by you: {events.length}</h2>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Event Join Deadline</th>
              <th>All Participants</th>
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
                  <Link to={`/applications/${event._id}`}>
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
