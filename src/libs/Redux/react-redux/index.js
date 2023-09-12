//* REACT
import React from 'react';

//* CSS
import './Learn_1/styles/style.css';

//* LIB
import { Provider } from 'react-redux';

//* PAGE
import TodoList from './Learn_1/pages/TodoList';

//* STORE
import store from './Learn_1/stores/Store';

const React_Redux = () => {
  return (
    <>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </>
  );
};

export default React_Redux;
