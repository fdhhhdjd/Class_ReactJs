//* REACT
import React, { useState } from 'react';

//* LIBRARY
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const BookLayout = () => {
  // const [number, setNumber] = useState(3);
  const [searchNumber, setSearchNumber] = useSearchParams({ n: 3 });
  const number = searchNumber.get('n');

  // Navigation State
  const location = useLocation();

  console.log(location);

  return (
    <>
      <ul>
        <li>
          <Link to={`/book/${uuid()}`}>Book Detail</Link>
        </li>
        <li>
          <Link to={`/book/${number}`}>Book {number}</Link>
        </li>
        <li>
          <Link to="/book/new">Book New</Link>
        </li>
      </ul>
      <Outlet context={{ hello: 'Tai Heo FA' }} />

      {/* Search Parameters  */}

      {/* Step1 */}
      {/* <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} /> */}

      {/* Step2 */}
      <input
        type="number"
        value={number}
        onChange={(e) =>
          setSearchNumber(
            { n: e.target.value },
            {
              replace: true,
            }
          )
        }
      />
    </>
  );
};

export default BookLayout;
