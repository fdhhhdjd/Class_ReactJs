//* REACT
import React from 'react';

//* LIBRARY
import { useRoutes } from 'react-router-dom';

import NotFound from './3.Route Specificity/NotFound';
import Home from './5.useRoutes Hooks/pages/Home';
import Navbar from './5.useRoutes Hooks/layouts/NavBar';
import About from './5.useRoutes Hooks/pages/About';
import Contact from './5.useRoutes Hooks/pages/Contact';

const Main1 = () => {
  let elements = useRoutes([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          index: true, // Sửa thành 'home' để khớp với '/home'
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ]);

  return elements;
};

export default Main1;
