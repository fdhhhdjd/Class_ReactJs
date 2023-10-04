import React from 'react';
import { useQuery } from '@tanstack/react-query';
import MutationPage from '../mutation/Mutation';

const Posts = () => {
  const { isError, isLoading, data, dataUpdatedAt, refetch } = useQuery({
    queryKey: ['/users'],
    enabled: false,
  });

  React.useEffect(() => {
    refetch();
  }, []);

  if (isError) {
    return <h3>Error....</h3>;
  }

  if (isLoading) {
    return <h3>Loading....</h3>;
  }

  console.log('re-render Post', data);

  return (
    <>
      <MutationPage />
      <hr />
      <button onClick={() => refetch()}>Refetch Data</button>
      <h1>Update Refetch {dataUpdatedAt}</h1>
      <ul>
        {data.users.map((item) => (
          <li key={item.id}>{item.lastName}</li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
