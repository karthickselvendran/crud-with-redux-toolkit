import React, { useState } from "react";
import "./style.css";

const initialState = {
  name: "",
  phoneNumber: "",
};

export const AddTask = () => {
  const [userDetails, setUserDetails] = useState(initialState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserDetails({
      ...userDetails,
      [id]: value,
    });
  };

  const handleSubmit = () => {
    console.log(userDetails);
  };

  //   console.log("userDetails--", userDetails);
  return (
    <div className="addContactCard">
      <h2>Add Contact</h2>
      <div>
        <label>Name</label>
        <br />
        <input type="text" id="name" onChange={handleChange} />
      </div>
      <div>
        <label>Phone Number</label>
        <br />
        <input type="number" id="phoneNumber" onChange={handleChange} />
      </div>
      <div className="btn">
        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
};
