import React, { useState, useTransition } from 'react';

const Learn_1 = () => {
  const [isPending, setTransition] = useTransition();
  const [input, setInput] = useState('');
  const [lists, setLists] = useState([]);
  const LIST_SIZE = 20000;
  const handleChange = (e) => {
    setInput(e.target.value);
    setTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setLists(l);
    });
  };
  return (
    <React.Fragment>
      <input type="text" value={input} onChange={handleChange} />
      {isPending
        ? 'Loading...'
        : lists.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </React.Fragment>
  );
};

export default Learn_1;
