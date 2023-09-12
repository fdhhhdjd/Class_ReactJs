import React, { useState } from 'react';

const LearnTow = () => {
  // Khởi tạo biến state "color" với giá trị ban đầu là "black".
  const [color, setColor] = useState('black');

  // Hàm xử lý khi người dùng click vào nút "Thay đổi màu".
  const changeColor = () => {
    // Tạo một mảng các màu sắc.
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];

    // Lấy một màu sắc ngẫu nhiên từ mảng.
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Cập nhật giá trị "color" với màu sắc ngẫu nhiên.
    setColor(randomColor);
  };
  return (
    <div>
      <h1 style={{ color: color }}>Màu sắc thay đổi: {color}</h1>
      <button onClick={changeColor}>Thay đổi màu</button>
    </div>
  );
};

export default LearnTow;
