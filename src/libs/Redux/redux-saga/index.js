import React from 'react';
import { Provider } from 'react-redux';
import store from './Learn_1/stores/store';
import Learn_1 from '../redux-saga/Learn_1';
const index = () => {
  return (
    <>
      <Provider store={store}>
        <Learn_1 />
      </Provider>
    </>
  );
};

export default index;
