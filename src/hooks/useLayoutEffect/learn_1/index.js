import React, { useEffect, useLayoutEffect, useState } from 'react';

function AutoCount() {
  const [count, setCount] = useState(0);

  const handleIncrementCount = () => {
    setCount(count + 1);
  };
  // False
  // useEffect(() => {
  //   if (count > 3) {
  //     setCount(0);
  //   }
  // }, [count]);

  // True
  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrementCount}>Increment</button>
    </div>
  );
}

export default AutoCount;
