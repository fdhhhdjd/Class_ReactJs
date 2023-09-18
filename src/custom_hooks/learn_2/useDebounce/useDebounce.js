import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Thiết lập một timeout để thay đổi debouncedValue sau một khoảng thời gian delay
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Hủy timeout nếu giá trị value thay đổi hoặc khi component bị unmount
    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
