import React from "react";
import { useData } from "../context/ExampleContext";
const Bangalore = ({ gift }) => {
  const { suprise } = useData();
  return (
    <div>
      <h4>
        I am Bangalore,<span style={{ color: "green" }}>{suprise.game}</span>{" "}
        Received from Delhi
      </h4>
    </div>
  );
};

export default Bangalore;
