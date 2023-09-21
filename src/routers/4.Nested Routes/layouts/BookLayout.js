//* REACT
import React from 'react';

//* LIBRARY
import { Link, Outlet } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const BookLayout = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={`/book/${uuid()}`}>Book Detail</Link>
        </li>
        <li>
          <Link to="/book/new">Book New</Link>
        </li>
      </ul>
      <Outlet context={{ hello: 'Tai Heo FA' }} />
    </>
  );
};

export default BookLayout;
