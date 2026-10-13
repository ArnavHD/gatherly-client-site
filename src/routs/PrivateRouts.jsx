// import React from 'react';

import { use } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { Navigate } from "react-router";

const PrivateRouts = ({children}) => {

    const {user, loading} = use(AuthContext);

    if(loading){
        return <span className="loading loading-bars loading-xl"></span>;
    }

    if(!user){
        return <Navigate to={"/login"} state={location.pathname}></Navigate>;
    }
    return children;
};

export default PrivateRouts;