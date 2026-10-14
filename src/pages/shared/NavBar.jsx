// import React from 'react';
import { motion } from "motion/react";

import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const NavBar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = ()=>{
    signOutUser()
    .then(()=>{
      console.log("Signed out user", user);
    })
    .catch(error =>{
      console.log(error);
    })
  }
  const links = (
    <>
      <div className="flex gap-2.5">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline decoration-3 underline-offset-5" : ""
            }
            to={"/"}
          >
            <h3 className="">Home</h3>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline decoration-3 underline-offset-5" : ""
            }
            to={"/events"}
          >
            Events
          </NavLink>
        </li>
        {user && (
          <>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline decoration-3 underline-offset-5" : ""
                }
                to={"/addEvent"}
              >
                <h3 className="">Add Events</h3>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline decoration-3 underline-offset-5" : ""
                }
                to={"/myApplications"}
              >
                <h3 className="">My Applications</h3>
              </NavLink>
            </li>
          </>
        )}
      </div>
    </>
  );
  return (
    <div className="navbar px-7 bg-black shadow-sm">
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"}>
          {/* <h3 className="text-4xl outfit">
            <span className="text-blue-300 font-semibold">Gather</span>
            <span className="text-orange-400 font-semibold">ly</span>
          </h3> */}
          {/* <motion.h1
            className="text-4xl font-bold bg-linear-to-r from-white via-yellow-300 to-white bg-clip-text text-transparent bg-[length:200%_100%]"
            animate={{
              backgroundPosition: ["0% 50%", "200% 50%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Gatherly
          </motion.h1> */}
          <motion.h1
            className="
        text-4xl p-1 font-bold
        bg-linear-to-r
        from-blue-500
        via-amber-300
        to-red-500
        bg-clip-text
        text-transparent
        bg-size-[300%_100%]
      "
            animate={{
              backgroundPosition: [
                "-100% 50%",
                "0% 50%",
                "100% 50%",
                "200% 50%",
                "200% 50%",
                "-100% 50%",
              ],
              textShadow: [
                "0 0 0px rgba(59,130,246,0)",
                "0 0 18px rgba(59,130,246,0.8)",
                "0 0 22px rgba(252,211,77,0.9)",
                "0 0 18px rgba(239,68,68,0.8)",
                "0 0 0px rgba(239,68,68,0)",
                "0 0 0px rgba(239,68,68,0)",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.2, 0.4, 0.6, 0.65, 1],
            }}
          >
            Gatherly
          </motion.h1>
          {/* <motion.div
            className="w-16 h-2 bg-white"
            animate={{ x: [0, 80, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          ></motion.div> */}
        </Link>
      </div>
      <div className="navbar-end gap-4">
        {user ? (
          <div className="flex justify-center items-center gap-4">
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
            <Link>
              <img
                className="rounded-full w-12 h-12"
                src="https://i.ibb.co/1J2ZZ1MK/back-pic.jpg"
                alt=""
              />
            </Link>
          </div>
        ) : (
          <>
            <NavLink to={"/register"} className="btn">
              Register
            </NavLink>
            <NavLink to={"/login"} className="btn">
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
