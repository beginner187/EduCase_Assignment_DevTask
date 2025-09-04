import React, { useState } from "react";

function Profile() {
  const [name, setName] = useState(localStorage.getItem("local_name") || "");
  const [email, setEmail] = useState(localStorage.getItem("local_email") || "");

  return (
    <>
      <div className="">
        <h4 className="bg-white p-2 rounded-lg mb-2">Account Settings</h4>
        <div className="flex mb-8">
          <div className="w-2/5">
            <img
              src=""
              alt="image"
              className="ml-6 rounded-full border-1 border-black border-solid w-16 h-16"
            />
          </div>
          <div className="w-3/5 ml-6">
            <p className="font-semibold mb-2">{name}</p>
            <p>{email}</p>
          </div>
        </div>

        <p className="text-md text-black">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
          debitis? Dolore, consequuntur pariatur vero repellat dolores expedita
          libero commodi veritatis omnis praesentium? Nesciunt iste architecto
          odit sequi. Minus, possimus blanditiis.
        </p>
      </div>
    </>
  );
}

export default Profile;
