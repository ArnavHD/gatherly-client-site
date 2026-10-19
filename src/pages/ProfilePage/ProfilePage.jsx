// import React from 'react';
// import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';
// import NavBar from '../shared/NavBar';

const ProfilePage = () => {
    
    const {user, loading} = useAuth();
    console.log(user);
    console.log("Photo URL:", user?.photoURL);


    if(loading){
        return <span className="loading loading-bars loading-xl"></span>;
    }
    if(!user){
        return;
    }
    return (
      <div className="h-screen overflow-hidden">
        <div className="h-screen bg-black/30 ">
          <div className="h-full pt-12 mx-3  lg:pt-8 lg:mx-15 ">
            <div
              style={{
                backgroundImage: `url("https://i.ibb.co/7J319w9m/Dewy-Magenta-Leaves-in-Shadow.png")`,
              }}
              className="h-30 lg:h-56 relative bg-center rounded-t-xl bg-cover"
            ></div>
            <div className="bg-white/80 pt-8 px-12 pb-10 rounded-b-xl">
              <div className="bg-white absolute top-42 left-10 lg:top-52 lg:left-32 p-2 lg:p-5 rounded-full">
                <img
                  className="w-24 h-24 lg:w-56 lg:h-56 rounded-full object-cover"
                  src={user?.photoURL || "/default-avatar.png"}
                  alt="Profile"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/default-avatar.png";
                  }}
                />
              </div>
              <div className="mt-16 lg:mt-32 lg:ml-8">
                <div className="flex  flex-col sm:flex-row justify-start items-start sm:justify-between sm:items-center">
                  <h1 className="text-4xl text-black font-bold">
                    {user.displayName}
                  </h1>
                  <div>
                    {/* <Link to={"/update-profile"} */}
                    {/* className=" bg-black/60 text-white"> */}
                    <button  className="btn bg-black/60 cursor-not-allowed text-white">
                      Update profile
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
                <h2 className="text-xl text-black">{user.email}</h2>
                <h3>
                  <span className="text-xl text-black">Last active:</span>{" "}
                  <span className="text-black">
                    {user.metadata.lastSignInTime}
                  </span>
                </h3>
                <h3 className="flex flex-col">
                  <span className="text-xs text-black">
                    Your account was created on:
                  </span>
                  <span className="text-xs text-black">
                    {user.metadata.creationTime}
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProfilePage;