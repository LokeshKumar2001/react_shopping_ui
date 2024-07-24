import React, { useEffect } from "react";
import { useState } from "react";
const UseEffect = () => {
  const [city, setCity] = useState("Hyderabad");

  useEffect(() => {
    if (city === "Hyderabad") {
      setCity("Bangalore");
    } else {
      setCity("Delhi");
    }
  }, []);

  return (
    <div>
      <h1>I live in {city}</h1>
    </div>
  );
};

export default UseEffect;
