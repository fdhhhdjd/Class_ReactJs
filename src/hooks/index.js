import React from "react";

const Step1 = () => {
  const handleIncrement = () => {
    console.log(Math.random());
  };
  return (
    <React.Fragment>
      <button onClick={handleIncrement}>Click Me</button>
    </React.Fragment>
  );
};

export default Step1;
