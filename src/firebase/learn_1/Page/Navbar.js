import React, { useEffect, useRef, useState } from 'react';
import '../Styles/Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutInitial } from '../Redux/Actions';
const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [search, setSearch] = useState('');
  const InputEl = useRef();
  const location = useLocation();
  const history = useNavigate();
  const { current } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = (user) => {
    user.preventDefault();
    if (window.confirm('Are you sure you want to log out ?')) {
      if (current) {
        dispatch(logoutInitial(user));
      }
    }
  };
  useEffect(() => {
    InputEl.current.focus();
  }, []);
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveTab('Home');
    } else if (location.pathname === '/add') {
      setActiveTab('AddContact');
    } else if (location.pathname === '/about') {
      setActiveTab('About');
    } else if (location.pathname === '/login') {
      setActiveTab('Login');
    }
  }, [location]);
  const handleSubmit = (e) => {
    e.preventDefault();
    history(`/search?name=${search}`);
    setSearch('');
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <p className="logo">Contact App</p>
        </Link>

        <div className="header-right">
          <Link to="/">
            <p
              className={`${activeTab === 'Home' ? 'active' : ''}`}
              onClick={() => setActiveTab('Home')}
            >
              Home
            </p>
          </Link>
          <Link to="/addContact">
            <p
              className={`${activeTab === 'AddContact' ? 'active' : ''}`}
              onClick={() => setActiveTab('AddContact')}
            >
              Add Contact
            </p>
          </Link>
          <Link to="/about">
            <p
              className={`${activeTab === 'About' ? 'active' : ''}`}
              onClick={() => setActiveTab('About')}
            >
              About
            </p>
          </Link>
          {current ? (
            <>
              <p className={`${activeTab === 'Logout' ? 'active' : ''}`} onClick={handleLogout}>
                Logout
              </p>
            </>
          ) : (
            <>
              <Link to="/login">
                <p
                  className={`${activeTab === 'Login' ? 'active' : ''}`}
                  onClick={() => setActiveTab('Login')}
                ></p>
              </Link>
            </>
          )}
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'block', textAlign: 'center' }}>
          <input
            type="text"
            className="inputField"
            placeholder="Search Name..."
            ref={InputEl}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default Navbar;
