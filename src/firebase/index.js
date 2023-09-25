import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import TodoListPro from './learn_1';
import store from './learn_1/Redux/Store';
import { ToastContainer } from 'react-toastify';

const index = () => {
  return (
    <>
      <Provider store={store}>
        <ToastContainer position="top-center" />
        <Router>
          <TodoListPro />
        </Router>
      </Provider>
    </>
  );
};

export default index;
