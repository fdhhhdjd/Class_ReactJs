//* REACT
import React from 'react';
import { Route, Routes } from 'react-router-dom';

//* PAGES
import { Home, AddEdit, View } from '../pages';

const RouterMain = () => {
  return (
    <>
      <React.Fragment>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddEdit />} />
            <Route path="/update/:id" element={<AddEdit />} />
            <Route path="/view/:id" element={<View />} />
          </Routes>
        </div>
      </React.Fragment>
    </>
  );
};

export default RouterMain;
