import React, { useState, useRef, useEffect } from 'react';

const Increase = () => {
  const [Increase, setIncrease] = useState(0);
  const prevIncrease = useRef(0);
  const HandleClickIncrease = (e) => {
    setIncrease((e) => e + 1);
  };
  useEffect(() => {
    prevIncrease.current = Increase;
  }, [Increase]);
  return (
    <>
      <h3>{Increase}</h3>
      <h3>{prevIncrease.current}</h3>
      <button onClick={HandleClickIncrease}>Prev Increase 👨‍🚀</button>
    </>
  );
};

export default Increase;
