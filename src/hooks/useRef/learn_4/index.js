import React, { useRef, useState } from 'react';

const SizeButton = () => {
  const [name, setName] = useState('');
  const sizeInput = useRef();
  const handleClickSize = () => {
    sizeInput.current.style.width = '400px';
  };
  return (
    <>
      <input
        type="text"
        style={{ width: '200px' }}
        ref={sizeInput}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClickSize}>Click size Input 😉</button>
    </>
  );
};

export default SizeButton;
