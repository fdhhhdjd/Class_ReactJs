import React, { memo } from 'react';

const Content = ({ onIncrement }) => {
  console.log('re-render-content');
  return (
    <>
      <div>content</div>
      <button onClick={onIncrement}>Click Me !!!</button>
    </>
  );
};

export default memo(Content);
