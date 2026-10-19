// import React, { use } from "react";
import { use } from "react";
import { MdModeEdit, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const EventList = ({ eventsCreatedBy }) => {
  const events = use(eventsCreatedBy);
  // console.log(events);
  const handleDelete = (_id) =>{
    // console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      
      if (result.isConfirmed){
        fetch(`http://localhost:3000/events/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("after delete", data);
            if(data.deletedCount){
              Swal.fire({
                title: "Deleted!",
                text: "Your event has been deleted.",
                icon: "success",
              });
            }
          });
        
      }
        
    });

  }
  return (
    <div className="h-screen">
      <div className="overflow-x-auto mx-3 xl:mx-96 rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th className="text-center">Edit/Delete</th>

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
                <td>
                  <div className="flex gap-5">
                    <div className="btn bg-gray-700">
                      <Link to={`/updateEvents/${event._id}`}>
                        <MdModeEdit size={23} />
                      </Link>
                    </div>
                    <div onClick={() => handleDelete(event._id)} className="btn bg-gray-700">
                      <MdOutlineDelete size={23} />
                    </div>
                  </div>
                </td>

                <td>{event.deadline}</td>
                <td>
                  <Link
                    className="btn bg-black/70"
                    to={`/applications/${event._id}`}
                  >
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
