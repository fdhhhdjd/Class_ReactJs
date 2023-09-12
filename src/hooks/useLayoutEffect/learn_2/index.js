import React, { useLayoutEffect, useRef, useState } from 'react';

function ImageGallery() {
  const [isScrolled, setIsScrolled] = useState(false);
  const imageRefs = useRef([]);
  // Sử dụng `Array.fill` để tạo một mảng với các phần tử giống nhau
  const duplicateImages = Array(30).fill('https://via.placeholder.com/150');

  // Gộp mảng các hình ảnh giống nhau vào mảng `imageUrls`
  const imageUrls = [
    ...duplicateImages,
    // Các URL hình ảnh khác (nếu có)
  ];

  // Sử dụng useLayoutEffect để theo dõi sự kiện cuộn trang
  useLayoutEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      const newIsScrolled = window.scrollY > 100;
      setIsScrolled(newIsScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Loại bỏ lắng nghe sự kiện khi component bị hủy
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Khi người dùng cuộn trang, chúng ta thay đổi scale của các hình ảnh
  const imageStyles = isScrolled
    ? { transform: 'scale(0.8)', transition: 'transform 0.2s' }
    : { transform: 'scale(1)', transition: 'transform 0.2s' };

  return (
    <div>
      <h1>Thư viện ảnh</h1>
      <div className="image-gallery">
        {imageUrls.map((url, index) => (
          <img
            ref={(ref) => (imageRefs.current[index] = ref)}
            key={index}
            src={url}
            alt={`Hình ảnh ${index + 1}`}
            style={imageStyles}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
