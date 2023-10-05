import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Outlet />
    </>
  );
};

export default Layout;
