import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  return (
    <>
      <h2>Home {location.state && location.state}</h2>
    </>
  );
};

export default Home;
