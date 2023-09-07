import React, { useState } from "react";

const UseState = () => {

  // Khởi tạo một biến state "count" với giá trị ban đầu là 0 và một hàm "setCount" để cập nhật giá trị "count".
  const [count, setCount] = useState(0);

  // Hàm xử lý khi người dùng click vào nút "Tăng".
  const increment = () => {
    setCount(count + 1); // Cập nhật giá trị "count" bằng cách tăng lên 1 đơn vị.
  };

  // Hàm xử lý khi người dùng click vào nút "Giảm".
  const decrement = () => {
    setCount(count - 1); // Cập nhật giá trị "count" bằng cách giảm đi 1 đơn vị.
  };


  return (
   <div>
      <h1>Đếm số lần bạn đã click: {count}</h1>
      <button onClick={increment}>Tăng</button>
      <button onClick={decrement}>Giảm</button>
    </div>

  );
};

export default UseState;
