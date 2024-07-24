import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FormExample = () => {
  const [userName, setUserName] = useState("");

  const [newUserDetails, setNewUserDetails] = useState();

  const getUserName = (e) => {
    //console.log(e.target.value);
    setUserName(e.target.value);
  };

  const userDetails = (e) => {
    e.preventDefault();
    setNewUserDetails(userName);
    notify();
  };

  const notify = () => toast("your data is uploaded successfully");

  return (
    <section className="formSection">
      {/*<h2>Hello,{userName}</h2>*/}
      <h2>Hello,{newUserDetails}</h2>
      <div className="inputDiv">
        <ToastContainer />
        <form onSubmit={userDetails}>
          <input
            type="text"
            placeholder="Enter your Name"
            onChange={getUserName}
          />
          <br />
          <button className="submitBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormExample;
