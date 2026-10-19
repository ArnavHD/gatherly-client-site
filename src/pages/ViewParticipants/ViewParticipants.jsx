import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewParticipants = () => {
    const {event_id} = useParams();
    const applications = useLoaderData();
    // console.log(applications);

    const handleStatusChange = (e, app_id) =>{
        // console.log(e.target.value, app_id);

        axios
          .patch(
            `http://localhost:3000/applications/${app_id}`,
            { status: e.target.value },
          )
          .then((res) => {
            // console.log(res.data);
            if(res.data.modifiedCount){
                Swal.fire({
                  title: "Application Status Updated",
                  icon: "success",
                  draggable: true,
                });
            }
          })
          .catch((error) => {
            console.log(error);
          });
    }

    return (
      <div className="h-screen">
        {/* <h2>
          {applications.length} Participators for: {event_id}
        </h2> */}
        <div className="overflow-x-auto mx-96 mt-24">
          <table className="table">
            {/* head */}
            <thead className="bg-black">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {applications.map((application, index) => (
                <tr key={application._id} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{application.name}</td>
                  <td>Quality Control Specialist</td>
                  <td>
                    <select
                      onChange={(e) => handleStatusChange(e, application._id)}
                      defaultValue={application.status}
                      className="select"
                    >
                      <option value={""}>Update Status</option>
                      <option value={"Pending"}>Pending</option>
                      <option value={"Interview"}>Called for interview</option>
                      <option value={"Hired"}>Hired</option>
                      <option value={"Rejected"}>Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ViewParticipants;