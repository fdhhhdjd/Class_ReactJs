//* REACT
import React from 'react';

//* CSS
import './styles/style.css';

//* LIB
import { Provider } from 'react-redux';

//* PAGE
import TodoList from './pages/TodoList';

//* STORE
import store from './stores/Store';

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
