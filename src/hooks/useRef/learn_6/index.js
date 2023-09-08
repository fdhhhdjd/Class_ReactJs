import React, { useEffect, useRef, useState } from "react";

const paragraphStyle = {
  WebkitLineClamp: 3,
  webkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

const Learn_4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [showReadMore, setShowReadMore] = useState(false);

  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.scrollHeight, ref.current.clientHeight);
      setShowReadMore(ref.current.scrollHeight !== ref.current.clientHeight);
    }
  }, []);
  return (
    <div>
      <p style={isOpen ? null : paragraphStyle} ref={ref}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
        ullam aperiam suscipit nostrum deserunt possimus unde quam totam
        similique expedita fugiat nobis pariatur rerum, cumque quae accusantium
        in eligendi! Doloribus. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Distinctio cum minus dolorum, quaerat harum omnis
        rerum eveniet explicabo porro quo unde quod eaque eligendi doloribus,
        pariatur odit rem ut nulla.
      </p>
      {showReadMore && (
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Read less..." : "read more..."}
        </button>
      )}
    </div>
  );
};

export default Learn_4;
