import React, { useCallback, useState } from 'react';
import Content from './components/content';

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  console.log('re-render Page Main');
  return (
    <>
      <Content onIncrement={handleIncrement} />
      <h1>{count}</h1>
    </>
  );
};

export default UseCallback;
