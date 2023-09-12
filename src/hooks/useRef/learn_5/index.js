import React, { useRef, useState } from 'react';

function ExampleComponent() {
  // Sử dụng useRef để tham chiếu đến một phần tử DOM cụ thể
  const inputRef = useRef(null);

  // Sử dụng useState để lưu trữ dữ liệu trạng thái của component
  const [inputValue, setInputValue] = useState('');

  // Hàm xử lý sự kiện khi nút được nhấn
  const handleButtonClick = () => {
    // Sử dụng `.current` để truy cập phần tử DOM được tham chiếu
    alert(`Giá trị nhập: ${inputRef.current.value}`);
  };

  // Hàm xử lý sự kiện khi giá trị của input thay đổi
  const handleInputChange = () => {
    // Sử dụng `.current` để truy cập phần tử DOM được tham chiếu
    setInputValue(inputRef.current.value);
  };

  console.log('re-render');

  return (
    <div>
      {/* Sử dụng useRef để tham chiếu đến input */}
      <input type="text" ref={inputRef} onChange={handleInputChange} value={inputValue} />
      <button onClick={handleButtonClick}>Xem giá trị</button>
    </div>
  );
}

export default ExampleComponent;
