import React from "react";
import "./style.css";

export const UpdateTask = (props) => {
  const {
    isOpen = false,
    handleUpdate = () => {},
    handleChange = () => {},
  } = props;

  return (
    <>
      {isOpen && (
        <>
          <div className="modalOverlay"></div>
          <dialogue className="updateTask">
            <h1>UpdateTask</h1>
            <br />
            <div>
              <label>Name</label>
              <br />
              <input type="text" id="name" onChange={handleChange} />
            </div>
            <br />
            <div>
              <label>Phone Number</label>
              <br />
              <input type="number" id="phoneNumber" onChange={handleChange} />
            </div>
            <br />
            <div className="btn">
              <button onClick={handleUpdate}>Update</button>
            </div>
          </dialogue>
        </>
      )}
    </>
  );
};
