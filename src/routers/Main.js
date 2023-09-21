//* REACT
import React from 'react';

//* LIBRARY
import { Link, Route, Routes } from 'react-router-dom';

import Home from './2.Dynamic Routes/Home';
import About from './2.Dynamic Routes/About';
import Detail from './2.Dynamic Routes/Detail';

const Main = () => {
  return (
    <>
      {/* ------- */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      {/* ------- */}
      <React.Fragment>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </div>
      </React.Fragment>
    </>
  );
};

export default Main;
