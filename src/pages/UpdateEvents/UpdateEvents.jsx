// import React from 'react';

import { useLoaderData, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa";

const UpdateEvents = () => {
    const event = useLoaderData();
    const { user } = useAuth();
    // console.log(event);
    // console.log(user.email);
    const navigate = useNavigate();

    const handleUpdateEvent = (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      //  console.log(data);

      const eventData = {
        title: data.title,
        description: data.description,
        category: data.category,
        location: {
          type: data.locationType,
          address: data.address,
        },
        eventDate: data.eventDate,
        deadline: data.deadline,
        organizer: {
          name: data.name,
          email: data.email,
        },
        image: data.image,
        maxParticipants: data.maxParticipants,
        requirements: data.requirements.split(",").map((item) => item.trim()),
        participants: [],
        status: data.status,
      };
      // save event to the database
      axios
        .patch(`http://localhost:3000/events/${event._id}`, eventData)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Event has been Updated",
              icon: "success",
              draggable: true,
            });
          }
        })
        .catch((error) => {
            console.log(error);
          if (error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          }
        });
        // console.log(eventData);
    };

    
    return (
      <div
        className="relative z-10 w-full pb-10 mx-auto bg-center pt-5 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/Q3gNhY1f/Campus-Commons-Conversation.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl text-white mb-5 libre text-center">
            Please Update The Form
          </h1>
          <div className="flex justify-start">
            <div className="flex">
              <button
                onClick={() => {
                  navigate(-1);
                }}
                className="btn mb-5 mt-5 ml-16 bg-white/50 text-black"
              >
                <FaArrowLeft size={22} color="black" />
                <span>Go Back</span>
              </button>
            </div>
          </div>
          <form onSubmit={handleUpdateEvent} className=" max-w-2xl mx-5 md:mx-auto">
            <fieldset className="fieldset bg-base-200/80 border-base-300 rounded-box  border p-4">
              <div className="flex-col lg:flex  md:flex-row gap-3">
                <div className=" lg:w-1/2 flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <label className="label text-white">Title</label>
                    <input
                      type="text"
                      className="input w-full"
                      defaultValue={event.title}
                      name="title"
                      placeholder="Enter your Event Title"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="label text-white">Description</label>
                    <input
                      type="text"
                      className="input w-full"
                      defaultValue={event.description}
                      name="description"
                      placeholder="Enter Event Description"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="label text-white">Location Type</label>
                    <select
                      name="locationType"
                      className="select w-full"
                      defaultValue={event.location.type}
                    >
                      <option value="" disabled>
                        Select location type
                      </option>
                      <option value="physical">Physical</option>
                      <option value="online">Online</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="label text-white">Address</label>
                    <input
                      type="text"
                      name="address"
                      defaultValue={event.location.address}
                      className="input w-full"
                      placeholder="Enter Event Address"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="label text-white">Event Date</label>
                    <input
                      type="datetime-local"
                      name="eventDate"
                      defaultValue={event.eventDate}
                      className="input w-full"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="label text-white">Join Deadline</label>
                    <input
                      type="datetime-local"
                      name="deadline"
                      defaultValue={event.deadline}
                      className="input w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="label text-white">Image URL</label>
                    <input
                      type="url"
                      name="image"
                      defaultValue={event.image}
                      className="input w-full"
                      placeholder="My awesome page"
                    />
                  </div>
                </div>

                <div className="lg:w-1/2 flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <label className="label text-white">Event Category</label>
                    <select
                      name="category"
                      defaultValue={event.category}
                      className="select w-full"
                    >
                      <option value="" disabled>
                        Select a category
                      </option>

                      <option value="environment-nature">
                        Environment & Nature
                      </option>

                      <option value="community-support">
                        Community Support
                      </option>

                      <option value="education-tutoring">
                        Education & Tutoring
                      </option>

                      <option value="technology-digital-skills">
                        Technology & Digital Skills
                      </option>

                      <option value="animals-pets">Animals & Pets</option>

                      <option value="health-wellness">Health & Wellness</option>

                      <option value="seniors-elderly-support">
                        Seniors & Elderly Support
                      </option>

                      <option value="children-youth">Children & Youth</option>

                      <option value="arts-culture-creativity">
                        Arts, Culture & Creativity
                      </option>

                      <option value="sports-recreation">
                        Sports & Recreation
                      </option>

                      <option value="neighbourhood-local-community">
                        Neighbourhood & Local Community
                      </option>

                      <option value="fundraising-charity">
                        Fundraising & Charity
                      </option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="label text-white">Organizer Name</label>
                    <input
                      type="text"
                      className="input w-full"
                      defaultValue={event.organizer.name}
                      name="name"
                      placeholder="Enter Organizer Name"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="label text-white">Organizer email</label>
                    <input
                      type="email"
                      className="input w-full"
                      name="email"
                      value={user?.email || " "}
                      readOnly
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="label text-white">
                      Maximum Participants
                    </label>
                    <input
                      type="text"
                      className="input w-full"
                      defaultValue={event.maxParticipants}
                      name="maxParticipants"
                      placeholder="Enter Maximum Participants Number"
                    />
                  </div>
                  <div>
                    <div className="filter flex flex-col gap-2">
                      <label className="label text-white">Event Status</label>
                      <select
                        name="status"
                        className="select w-full"
                        defaultValue={event.status}
                      >
                        <option value="" disabled>
                          Select Your Event Status
                        </option>
                        <option value="physical">Upcoming</option>
                        <option value="online">Register</option>
                        <option value="online">Cancelled</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="label text-white">Requirements</label>
                    <textarea
                      className="textarea w-full"
                      defaultValue={event.requirements}
                      name="requirements"
                      placeholder="Enter Requirements (Seperated by comma(,))"
                    ></textarea>
                  </div>
                </div>
              </div>
              <input
                type="submit"
                value="Update Event"
                className="btn bg-black w-full"
              />
            </fieldset>
          </form>
        </div>
      </div>
    );
};

export default UpdateEvents;