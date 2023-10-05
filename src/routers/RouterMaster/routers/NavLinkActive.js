import { NavLink, useLocation, useOutletContext } from 'react-router-dom';

const NavLinkActive = (props) => {
  const location = useLocation();
  const outLefData = useOutletContext();

  return (
    <NavLink
      style={({ isActive }) => {
        return isActive ? { color: 'red' } : {};
      }}
      {...props}
    />
  );
};

export default NavLinkActive;
