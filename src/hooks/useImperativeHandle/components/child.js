import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
const Child = (props, ref) => {
  const [user, setUser] = useState({
    name: 'Nguyen Tien Tai',
  });
  useImperativeHandle(ref, () => {
    return {
      test: () => {
        alert('Hello React');
      },
      data: () => {
        return console.log(user);
      },
    };
  });
  return (
    <>
      <h1>child</h1>
    </>
  );
};

export default forwardRef(Child);
