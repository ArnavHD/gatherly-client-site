// import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
      <div className="h-screen flex flex-col justify-center gap-5 items-center">
        <img
          className=" w-1/2 "
          src="https://i.ibb.co/nMzXGQn5/error.avif"
          alt=""
        />
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-red-500">Wrong Path</h2>
          
            <button onClick={()=>{navigate("/")}} className="btn">Go Home</button>
          
        </div>
      </div>
    );
};

export default ErrorPage;