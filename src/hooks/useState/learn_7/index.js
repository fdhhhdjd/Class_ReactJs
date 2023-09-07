//* REACT
import React, { useState } from "react";

//* LIBRARY
import { CopyToClipboard } from "react-copy-to-clipboard";

//* STYLE
import "./style.css";

const colors = [
  "#FF0000",
  "#00FF00",
  "#FFFF00",
  "#0000FF",
  "#FFFFFF",
  "#800080",
  "#FF00FF",
  "#FF9900",
  "#330000",
  "#33FFFF",
];
const CopyColor = () => {
  const [background, setBackground] = useState("#071415");
  const [current, setCurrent] = useState("");

  return (
    <>
      <div className="app" style={{ background: background }}>
        <div className="container">
          {colors.map((color, index) => (
            <div key={index} className="card">
              <div
                style={{
                  background: color,
                  filter: "brightness(85%)",
                  boxShadow: color === background ? "0 0 5px #000" : "",
                }}
                className="box"
                onClick={() => setBackground(color)}
              />
              <CopyToClipboard text={`color:${color}`}>
                <p
                  style={{ color: color === background ? "#fff" : color }}
                  onClick={() => setBackground(color)}
                >
                  {color}
                </p>
              </CopyToClipboard>
              <CopyToClipboard text={`${color}`}>
                <button onCopy={() => setCurrent(current)}>Copy Color</button>
              </CopyToClipboard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CopyColor;
