//* REACT
import React from 'react';

//* LIBRARY
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';

const RouterMain = () => {
  return (
    <>
      <Router>
        <Main />
      </Router>
    </>
  );
};

export default RouterMain;
