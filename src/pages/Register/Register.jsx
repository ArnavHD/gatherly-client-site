// import React from 'react';

import { use } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { Link } from "react-router";

const Register = () => {

  
  const { createUser } = use(AuthContext);

  



  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className="hero bg-base-200 bg-top md:bg-cover sm:bg-contain bg-no-repeat min-h-screen"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/XkdQNNzy/Warm-Candlelit-Dinner-Toast-1.png')",
      }}
    >
      <div className="hero-content mb-20 flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>

        <div className="card bg-black/60 w-full lg:-translate-x-20 max-w-sm shrink-0 shadow-2xl">
          <div className="card-body ">
            <h1 className="text-5xl  font-bold">Register Now!</h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input bg-black/50"
                  placeholder="Email"
                />
                <label className="label text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input bg-black/50"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn bg-gray-500/50 btn-neutral mt-4">
                  Register
                </button>
              </fieldset>
              <h3>
                Already have an account?{" "}
                <Link to={"/login"} className="underline text-red-400">
                  Login
                </Link>
              </h3>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
