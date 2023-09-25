//* REACT

//* LIBRARY
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';
// import Main1 from './Main1';

const RouterMain = () => {
  return (
    <>
      <Router>
        {/* Learn 1 2 3 4  */}
        <Main />

        {/* Learn 5 */}
        {/* <Main1 /> */}
      </Router>
    </>
  );
};

export default RouterMain;
