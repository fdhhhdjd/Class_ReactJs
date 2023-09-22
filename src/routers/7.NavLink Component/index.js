import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkComponent = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: 'red' } : {};
              }}
              end
              to="/book"
            >
              {({ isActive }) => {
                return isActive ? 'Active book' : 'book';
              }}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavLinkComponent;
