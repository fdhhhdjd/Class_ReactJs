//* REACT
import React from 'react';

//* LIBRARY
import { Link, Route, Routes } from 'react-router-dom';

import Home from './2.Dynamic Routes/Home';
import About from './2.Dynamic Routes/About';
import Detail from './2.Dynamic Routes/Detail';
import NotFound from './3.Route Specificity/NotFound';
import Book from './4.Nested Routes/Book';
import BookStep2 from './4.Nested Routes/BookStep2';
import BookDetail from './4.Nested Routes/BookDetail';
import New from './4.Nested Routes/New';
import BookLayout from './4.Nested Routes/layouts/BookLayout';
import { BookRoutes } from './4.Nested Routes/routes/BookRoute';
import LinkComponent from './6. Link Component';
import NavLinkComponent from './7.NavLink Component';

const Main = () => {
  return (
    <>
      {/* ------- */}
      {/* <nav>
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
      </nav> */}

      {/* <LinkComponent /> */}
      <NavLinkComponent />

      {/* ------- */}
      <React.Fragment>
        <div className="App">
          {/* <Routes>
            <Route path="/book" element={<h1>Test Book</h1>} />
          </Routes> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />

            {/* Step 1 --- Nested Routes */}
            {/* <Route path="/book">
              <Route index element={<Book />} />
              <Route path=":id" element={<BookDetail />} />
              <Route path="new" element={<New />} />
            </Route> */}

            {/* Step 2 --- Nested Routes */}
            {/* <Route path="/book" element={<BookLayout />}>
              <Route index element={<BookStep2 />} />
              <Route path=":id" element={<BookDetail />} />
              <Route path="new" element={<New />} />
            </Route> */}

            {/* Step 3 --- Nested Routes */}
            <Route path="/book/*" element={<BookRoutes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </React.Fragment>
    </>
  );
};

export default Main;
