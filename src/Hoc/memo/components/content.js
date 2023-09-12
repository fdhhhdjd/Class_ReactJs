import React, { memo } from 'react';

const Content = () => {
  console.log('re-render-content');
  return <div>content</div>;
};

export default memo(Content);
