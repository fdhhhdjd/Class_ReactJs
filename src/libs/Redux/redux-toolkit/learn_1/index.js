//* REACT
import React from 'react';

//* LIBRARY
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

//* STORE
import store from './stores/Store';

//* STYLES
import './styles/main.css';

//* ROUTER
import RouterMain from './router';
const Learn_1 = () => {
  return (
    <>
      <Provider store={store}>
        <ToastContainer position="top-center" />
        <RouterMain />
      </Provider>
    </>
  );
};

export default Learn_1;
