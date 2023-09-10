import React, { useDeferredValue } from "react";

const Student = ({ data }) => {
  const deferredValue = useDeferredValue(data);

  return (
    <>
      {deferredValue.map((student, index) => {
        return <p key={index}>{student}</p>;
      })}
    </>
  );
};

export default Student;
