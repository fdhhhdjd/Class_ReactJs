//* REACT
import React, { Fragment, useId, useMemo, useState } from "react";

//* UTILS
import { generateRandomStudentList } from "../../../utils";

//* COMPONENTS
import Student from "./components/student";

const randomStudents = generateRandomStudentList(500);

const Learn_1 = () => {
  const id = useId();
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const data = useMemo(() => {
    return randomStudents.map((student) => {
      const index = student.name.indexOf(searchInput); // Assuming you want to search in the 'name' property
      return index === -1 ? (
        <p>{student.name}</p>
      ) : (
        <p>
          {student.name.slice(0, index)}
          <span style={{ backgroundColor: "yellow" }}>
            {student.name.slice(index, index + searchInput.length)}
          </span>
          {student.name.slice(index + searchInput.length)}
        </p>
      );
    });
  }, [searchInput]);

  return (
    <Fragment>
      <h2>Students</h2>
      <label htmlFor={id}>Search: </label>
      <input
        type="text"
        name="name"
        value={searchInput}
        id={id}
        onChange={handleSearchInput}
      />
      <hr />
      <div>
        <Student data={data} />
      </div>
    </Fragment>
  );
};
export default Learn_1;
