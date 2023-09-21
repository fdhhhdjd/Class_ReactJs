import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  return (
    <>
      <h2>BookDetail ---- {id}</h2>
    </>
  );
};

export default BookDetail;
