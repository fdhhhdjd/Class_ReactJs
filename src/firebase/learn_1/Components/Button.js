import React from 'react';

const Button = ({ className, id, onClick, title }) => {
  return (
    <>
      <button className={`${className} `} id={`${id}`} onClick={onClick}>
        {title}
      </button>
    </>
  );
};

export default Button;
