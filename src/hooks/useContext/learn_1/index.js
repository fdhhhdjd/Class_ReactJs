//* React
import React from 'react';

//* Store
import { useContextLearn } from '../store';

const Learn_1 = () => {
  const { data_list } = useContextLearn();
  return (
    <>
      <div>
        <h1>{data_list.name}</h1>
      </div>
    </>
  );
};

export default Learn_1;
