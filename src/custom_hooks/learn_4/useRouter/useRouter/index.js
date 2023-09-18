import React from 'react';
import useRouter from './useRouter'; // Import custom hook useRouter

function Learn_4() {
  const { navigate, location, params } = useRouter(); // Sử dụng custom hook useRouter

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <p>Current Path: {location.pathname}</p>
      <p>Route Param: {params.id}</p>
      <button onClick={navigateToHome}>Go to Home</button>
    </div>
  );
}

export default Learn_4;
