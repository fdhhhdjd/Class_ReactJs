import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Learn_2 from './Learn_2';

const index = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Learn_2 />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default index;
