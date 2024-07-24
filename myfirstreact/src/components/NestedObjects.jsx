import React from "react";
import { userData } from "../mock/data";

console.log(userData);
const NestedObjects = () => {
  return (
    <div>
      {userData.map((user) => {
        return (
          <div style={{ border: "1px solid blue" }}>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>{user.address.street}</div>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default NestedObjects;
