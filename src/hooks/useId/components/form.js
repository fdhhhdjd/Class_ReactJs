import React, { useId } from 'react';

const Form = () => {
  // Chúng ta cũng có thể sửa lại id tùy thích qua file index.js
  const id = useId();
  console.log(id);
  return (
    <>
      <h3>UseId</h3>
      <label htmlFor={id}>Name</label>
      <input type="text" name="name" id={id} />
    </>
  );
};

export default Form;
