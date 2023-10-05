import AuthConsumer from '../hooks/useAuth';
import { useLayoutEffect } from 'react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';

const ProtectedRoute = ({ element, ...props }) => {
  const [authed] = AuthConsumer();
  const Navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    if (!authed.auth) {
      Navigate('/login', {
        state: location,
        replace: true,
      });
    }
  }, [authed?.auth]);

  return element;
};

export default ProtectedRoute;
