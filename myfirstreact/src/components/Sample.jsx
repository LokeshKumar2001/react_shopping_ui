import React from "react";
import TestComponent from "./TestComponent";

const Mango = () => {
  return <h2>Mangoes are Sweet</h2>;
};

const Grapes = () => {
  return <h2>Grapes are good</h2>;
};
const Sample = () => {
  return (
    <div>
      Sample
      <Mango />
      <Grapes />
      <TestComponent />
    </div>
  );
};

export default Sample;
