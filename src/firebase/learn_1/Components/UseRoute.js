import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router';
import LoadingRedirect from './LoadingRedirect';

const UseRoute = ({ children }) => {
  const { current } = useSelector((state) => state.user);

  return current ? children : <LoadingRedirect />;
};

export default UseRoute;
