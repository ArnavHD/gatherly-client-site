// import React from 'react';

import { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import ApplicationStats from "./ApplicationStats";
import useAuth from "../../hooks/useAuth";
import useApplicationApi from "../../api/useApplicationApi";

const MyApplications = () => {

    const {user} = useAuth();
  const { myApplicationPromise } = useApplicationApi();

    

  return (
    <div className=" ">
      <ApplicationStats></ApplicationStats>
      <Suspense fallback={"Loading the applicaations"}>
        <ApplicationList
          myApplicationPromise={myApplicationPromise(user.email, user.accessToken)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
