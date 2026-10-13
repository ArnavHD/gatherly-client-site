import { use } from "react";
import EventsApplicationRows from "./EventsApplicationRows";

const ApplicationList = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);
  return (
    <div>
      <h3 className="text-4xl">Jobs applied so far: {applications.length}</h3>

      <div className="overflow-x-auto bg-black/50 mx-20 my-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <EventsApplicationRows
                application={application}
                key={application._id}
                index={index}
              ></EventsApplicationRows>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
