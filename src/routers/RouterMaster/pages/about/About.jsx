import React, { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchNumber, setSearchNumber] = useSearchParams({ key: 3 });
  const number = searchNumber.get('key');
  const location = useLocation();

  useEffect(() => {}, [location.state]);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setSearchNumber(
            {
              key: e.target.value,
            },
            {
              replace: true,
            }
          );
        }}
        value={number}
      />
    </>
  );
};

export default About;
