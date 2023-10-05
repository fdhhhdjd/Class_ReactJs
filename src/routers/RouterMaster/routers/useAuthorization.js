import AuthConsumer from '@/hooks/useAuth';
import { useLayoutEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const UseAuthorization = ({ element, ...props }) => {
  const [authed, _] = AuthConsumer();
  const { state } = useLocation();
  const Navigate = useNavigate();

  useLayoutEffect(() => {
    if (authed.auth) {
      return Navigate(state?.pathname || '/', { state: 'Home' });
    }
  }, [authed.auth]);
  return authed.auth ? <Outlet context={{ state: 'hello' }} /> : element;
};

export default UseAuthorization;
