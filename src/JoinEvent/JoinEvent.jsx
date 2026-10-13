// import React from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';

const JoinEvent = () => {
    const {user } = useAuth();
    const {id: eventId} = useParams();
    console.log(user, eventId);

    const handleJoinEvent = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const age = form.age.value;
        const email = form.email.value;
        console.log(name, age, email);


        const application = {
            eventId,
            applicant: user.email,
            name,
            age,
        }
        axios
          .post("http://localhost:3000/applications", application)
          .then((res) => {
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                  title: "Application Successful",
                  icon: "success",
                  draggable: true,
                });
            }
            else{
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
                });
            }
          })
          .catch((error) => {
            console.log(error);
          });


    }

    return (
      <div
        className="h-screen flex justify-center items-center bg-no-repeat lg:bg-cover "
        style={{
          backgroundImage:
            "url('https://i.ibb.co/RGVtCMp7/Friendly-Business-Meeting-Handshake.png')",
        }}
      >
        <form onSubmit={handleJoinEvent} className="mx-auto  mb-30">
          <fieldset className="fieldset bg-base-200/60 border-base-300 rounded-box w-xs border p-4">
            <img
              src="https://i.ibb.co/Ndb4kbFD/Thank-You-Paper-Reveal.png"
              alt=""
            />
            <label className="label mt-10">Your Name</label>
            <input
              type="text"
              name="name"
              className="input "
              placeholder="Enter Your Name"
            />

            <label className="label">Your Age</label>
            <input
              type="number"
              name="age"
              className="input [appearance:textfield]"
              placeholder="Enter Your Age (eg. 24 or 27)"
            />

            <label className="label">Your Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Enter Your Email"
            />
            <input
              className="btn btn-neutral"
              type="submit"
              placeholder="Submit"
            />
          </fieldset>
        </form>
      </div>
    );
};

export default JoinEvent;