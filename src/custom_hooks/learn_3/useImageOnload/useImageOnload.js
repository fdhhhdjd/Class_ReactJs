import { useState, useEffect } from 'react';

function useImageOnload(src) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const image = new Image();

    const handleLoad = () => {
      setLoaded(true);
      setError(null);
    };

    const handleError = () => {
      setLoaded(false);
      setError('Error loading image');
    };

    image.addEventListener('load', handleLoad);
    image.addEventListener('error', handleError);

    // Bắt đầu tải hình ảnh khi src thay đổi
    image.src = src;

    // Hủy bỏ event listeners khi component bị unmount
    return () => {
      image.removeEventListener('load', handleLoad);
      image.removeEventListener('error', handleError);
    };
  }, [src]);

  return [loaded, error];
}

export default useImageOnload;
