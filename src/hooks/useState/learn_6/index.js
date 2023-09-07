//* REACT
import React, { useState } from "react";

//* STYLE
import "./choose.css";

//* IMG
import img from "./img";
const Choose = () => {
  const [select, setSelect] = useState(img[0]);
  
  return (
    <div className="app">
      <div className="container">
        <img src={select} alt="selected" className="selected" />
        <div className="imgContainer">
          {img.map((item, index) => (
            <img
              src={item}
              key={index}
              alt="oto"
              style={{ border: select === item ? "4px solid purple" : "" }}
              onClick={() => setSelect(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
