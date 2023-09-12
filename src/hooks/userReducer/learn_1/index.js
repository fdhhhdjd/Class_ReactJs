import React, { useReducer } from 'react';

//* Init state
const initState = 0;

//* Actions
const UP_ACTION = 'UP';
const DOWN_ACTION = 'DOWN';

//* Reducer

const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;

    default:
      break;
  }
};
const Learn_1 = () => {
  const [count, dispatch] = useReducer(reducer, initState);

  const handleIncrement = () => {
    dispatch(UP_ACTION);
  };

  const handleDecrement = () => {
    dispatch(DOWN_ACTION);
  };

  return (
    <>
      <h1>UseReducer</h1>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>Up</button>
      <button onClick={handleDecrement}>Down</button>
    </>
  );
};

export default Learn_1;
