import React, { useRef, useEffect } from 'react';
import Child from '../components/child';

const Learn_1 = () => {
  const myRef = useRef(3);

  useEffect(() => {
    myRef.current.data();
  }, []);

  return (
    <>
      <h1>Mother</h1>
      <Child ref={myRef} />
    </>
  );
};

export default Learn_1;
