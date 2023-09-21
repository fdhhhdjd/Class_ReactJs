//* REACT
import React from 'react';

//* LIBRARY
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const Book = () => {
  return (
    <>
      <h2>Book List</h2>
      <ul>
        <li>
          <Link to={`/book/${uuid()}`}>Book Detail</Link>
        </li>
        <li>
          <Link to="/book/new">Book New</Link>
        </li>
      </ul>
    </>
  );
};

export default Book;
