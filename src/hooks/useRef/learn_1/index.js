//* REACT
import React, { useEffect, useRef, useState } from "react";

const AutoCount = () => {
  const [count, setCount] = useState(0);
  const countAuto = useRef(0);
  const StartAuto = () => {
    if (countAuto.current) {
      return;
    }
    countAuto.current = setInterval(() => setCount((count) => count + 1), 500);
  };
  const StopAuto = () => {
    clearInterval(countAuto.current);
    countAuto.current = 0;
  };
  const ResetAuto = () => {
    clearInterval(countAuto.current);
    countAuto.current = 0;
    setCount(0);
  };
  useEffect(() => {
    return () => clearInterval(countAuto.current);
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={StartAuto}>Start</button>
      <button onClick={StopAuto}>Stop</button>
      <button onClick={ResetAuto}>Reset</button>
    </>
  );
};

export default AutoCount;
