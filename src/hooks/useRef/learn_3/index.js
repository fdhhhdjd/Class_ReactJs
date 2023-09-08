import React, { useEffect, useRef, useState } from "react";

const InputFocus = () => {
  const [name, setName] = useState("");
  const inputEl = useRef();
  const handleResetName = () => {
    setName("");
    inputEl.current.focus();
    inputEl.current.value = "toi la tai heo Fa";
  };
  useEffect(() => {
    inputEl.current.focus();
  }, []);
  return (
    <>
      <input
        ref={inputEl}
        type="text"
        autoComplete="off"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleResetName}>Reset Name 😄</button>
    </>
  );
};

export default InputFocus;
