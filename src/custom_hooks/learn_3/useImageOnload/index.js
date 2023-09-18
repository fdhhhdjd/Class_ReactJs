import React from 'react';
import useImageOnload from './useImageOnload';

function Learn_3() {
  const imageUrl =
    'https://res.cloudinary.com/ecommerce2021/image/upload/v1663398918/profile-forme/avatar_ws0jhh.png';
  const [loaded, error] = useImageOnload(imageUrl);

  return (
    <div>
      {error && <p>{error}</p>}
      {loaded ? (
        <img src={imageUrl} alt="Loaded Image" style={{ width: '50%' }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Learn_3;
