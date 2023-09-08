import React, { useState } from "react";
import Content from "./components/content";

const Memo = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  console.log('re-render Page Main');
  return (
    <>
      <Content/>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Click Me !!!</button>
    </>
  );
};

export default Memo;
