import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
// import TodoListPro from './learn_1';
import Learn_2 from './learn_2';
import store from './learn_1/Redux/Store';
import { ToastContainer } from 'react-toastify';

const index = () => {
  return (
    <>
      {/* Lear 1 */}
      {/* <Provider store={store}>
        <Router>
          <ToastContainer position="top-center" />
          <TodoListPro />
        </Router>
      </Provider> */}

      {/* Learn 2  */}
      <Learn_2 />
    </>
  );
};

export default index;
