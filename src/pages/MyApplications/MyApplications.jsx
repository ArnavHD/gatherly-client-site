// import React from 'react';

import { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import ApplicationStats from "./ApplicationStats";
import useAuth from "../../hooks/useAuth";
import { myApplicationPromise } from "../../api/ApplicationsApi";



const MyApplications = () => {

    const {user} = useAuth();


  return (
    <div className=" ">
      <ApplicationStats></ApplicationStats>
      <Suspense fallback={"Loading the applicaations"}>
        <ApplicationList
          myApplicationPromise={myApplicationPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
