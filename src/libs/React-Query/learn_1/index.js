import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from 'axios';
import Posts from './pages/Posts';

export const BASE_URL = 'https://dummyjson.com';

const index = () => {
  // Access the client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: async ({ queryKey }) => {
          const res = await axios.get(`${BASE_URL}${queryKey}`);
          return res.data;
        },
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Posts />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default index;
