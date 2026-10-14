// import React from 'react';

import useAuth from "../../hooks/useAuth";

const AddEvents = () => {

    const {user} = useAuth();

    return (
      <div
        className="relative z-10 w-screen pb-10 mx-auto bg-center pt-5 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/Q3gNhY1f/Campus-Commons-Conversation.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl text-white mb-10 libre text-center">
            Please Fill The Form
          </h1>
          <form className=" max-w-2xl mx-auto">
            <fieldset className="fieldset bg-base-200/80 border-base-300 rounded-box  border p-4">
              <div className="flex-col md:flex md:flex-row gap-3">
                <div className="w-1/2 flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <label className="label text-white">Title</label>
                    <input
                      type="text"
                      className="input"
                      name="title"
                      placeholder="Enter your Event Title"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="label text-white">Description</label>
                    <input
                      type="text"
                      className="input"
                      name="description"
                      placeholder="Enter Event Description"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="label text-white">Location Type</label>
                    <select
                      name="locationType"
                      className="select"
                      defaultValue=""
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
                      className="input"
                      placeholder="Enter Event Address"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="label text-white">Event Date</label>
                    <input
                      type="datetime-local"
                      name="eventDate"
                      className="input"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="label text-white">Join Deadline</label>
                    <input
                      type="datetime-local"
                      name="deadline"
                      className="input"
                    />
                  </div>
                </div>

                <div className="w-1/2 flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <label className="label text-white">Event Category</label>
                    <select
                      defaultValue={""}
                      name="category"
                      className="select"
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
                      className="input"
                      name="name"
                      placeholder="Enter Organizer Name"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="label text-white">Organizer email</label>
                    <input
                      type="email"
                      className="input"
                      name="email"
                      value={user.email}
                      readOnly
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="label text-white">
                      Maximum Participants
                    </label>
                    <input
                      type="text"
                      className="input"
                      name="maxParticipants"
                      placeholder="Enter Maximum Participants Number"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="label text-white">Requirements</label>
                    <textarea
                      className="textarea"
                      placeholder="Enter Your Requirements (Seperated by comma(,))"
                    ></textarea>
                  </div>
                </div>
              </div>
              <input type="submit" value="Submit" className="btn bg-black" />
            </fieldset>
          </form>
        </div>
      </div>
    );
};

export default AddEvents;