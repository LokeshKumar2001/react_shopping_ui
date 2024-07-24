import React, { useState } from "react";
import TestComponent from "./TestComponent";

const TernaryOperator = () => {
  const [sampleCondition, setSampleCondition] = useState(true);

  return (
    <div>
      <h1>{sampleCondition ? <TestComponent /> : " I am False Statement"}</h1>
    </div>
  );
};

export default TernaryOperator;
