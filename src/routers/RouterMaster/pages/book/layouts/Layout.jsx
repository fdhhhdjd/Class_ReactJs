import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: 'red' } : {};
            }}
            to={`/book/${uuid()}`}
          >
            Detail
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: 'red' } : {};
            }}
            to="new"
          >
            New
          </NavLink>
        </li>
      </ul>
      <Outlet context={{ title: 'xin Chao moi người ' }} />
    </>
  );
};

export default Layout;
