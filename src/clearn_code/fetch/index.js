import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState(null);

  // Todo: Used with fetch to destroy request render then component umount
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch('https://jsonplaceholder.typicode.com/posts', { signal })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.info('Fetch aborted');
        } else {
          console.error('Another error: ', error);
        }
      });

    return () => controller.abort();
  }, []);

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
};

export default Home;
