import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const { hello } = useOutletContext();
  return (
    <>
      <h2>
        BookDetail ---- {id} ---- {hello}
      </h2>
    </>
  );
};

export default BookDetail;
