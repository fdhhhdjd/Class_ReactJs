import React from 'react';
import { Link } from 'react-router-dom';

const LinkComponent = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default LinkComponent;
