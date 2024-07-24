import React from "react";
import { useState } from "react";
const StatesMgm = () => {
  const [city, setCity] = useState("Hyderabad");

  if (city === "Hyderabad") {
    setCity("Bangalore");
  } /*else {
    setCity("Goa");
  }*/
  return (
    <div>
      <h1>I live in {city}</h1>
    </div>
  );
};

export default StatesMgm;
