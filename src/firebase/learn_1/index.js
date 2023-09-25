import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRoutes } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { setUser } from './Redux/Actions';
import Route from './routes/route';
import { auth } from './utils/Firebase';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  return useRoutes(Route);
}

export default App;
