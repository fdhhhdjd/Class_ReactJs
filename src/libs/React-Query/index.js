import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Learn_1 from './learn_1';
import axios from 'axios';

export const BASE_URL = 'https://dummyjson.com';

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

const React_Query = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Learn_1 />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default React_Query;
