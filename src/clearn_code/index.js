import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get('https://jsonplaceholder.typicode.com/posts', { cancelToken: source.token })
      .then((response) => setData(response.data))
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
        } else {
          console.error('Another error: ', error);
        }
      });

    return () => {
      source.cancel('Operation canceled by the user.');
    };
  }, []);

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
};

export default Home;
