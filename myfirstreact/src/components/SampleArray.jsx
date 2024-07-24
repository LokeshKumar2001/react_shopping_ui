import React from "react";

let sampleArray = ["Apple", "Mango", 35, { userName: "Lokesh" }];
const SampleArray = () => {
  return (
    <div>
      <h2> {sampleArray[0]} is Red in color</h2>
      <h2>my age is {sampleArray[2]} </h2>
      <h2>my name is {sampleArray[3].userName}</h2>
    </div>
  );
};

export default SampleArray;
