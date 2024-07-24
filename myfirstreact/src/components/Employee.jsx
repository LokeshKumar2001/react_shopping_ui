import React, { useState } from "react";

const Employee = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [dept, setDept] = useState("");
  const [email, setEmail] = useState("");

  const empDetails = { name, role, dept, email };

  const empHandler = async (e) => {
    e.preventDefault();
    console.log(empDetails);

    try {
      const response = await fetch("http://localhost:5000/api/emp/add-emp", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(empDetails),
      });
      alert(" Data posted Successfully");
    } catch (error) {
      console.log(error);
      alert("Sorry Data failed To Post");
    }
  };

  return (
    <div className="empform">
      <div className="section">
        <form onSubmit={empHandler}>
          <label>Employee Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>Employee Role</label>
          <input
            type="text"
            name="role"
            onChange={(e) => setRole(e.target.value)}
          />
          <br />
          <label>Employee Dept</label>
          <input
            type="text"
            name="dept"
            onChange={(e) => setDept(e.target.value)}
          />
          <br />
          <label>Employee Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Employee;
