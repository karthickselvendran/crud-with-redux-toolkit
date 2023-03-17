import React from "react";
import { AddTask } from "../addTask";
import "./style.css";

export const UpdateTask = (props) => {
  const {
    isOpen = false,
    handleClose = () => {},
    handleChange = () => {},
    handleSubmit = () => {},
  } = props;
  return (
    <>
      {isOpen && (
        <>
          <div className="modalOverlay"></div>
          <dialogue className="updateTask" true>
            <h1>UpdateTask</h1>
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
              <button onClick={handleClose}>Update</button>
            </div>
            {/* <button onClick={handleClose}>Close</button> */}
          </dialogue>
        </>
      )}
    </>
  );
};
