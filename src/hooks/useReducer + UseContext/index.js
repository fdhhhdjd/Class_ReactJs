import React from 'react';
import GlobalProviderContext from './providers/contexts/GlobalContext';

const index = () => {
  return (
    <GlobalProviderContext>
      <h1>Hello</h1>
    </GlobalProviderContext>
  );
};

export default index;
