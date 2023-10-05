import React, { Suspense } from 'react';
import Loading from './loading/Loading';
import RoutesPage from './routers/Routes';

const index = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RoutesPage />
    </Suspense>
  );
};

export default index;
