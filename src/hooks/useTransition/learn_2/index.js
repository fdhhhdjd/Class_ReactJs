import React, { Fragment, useId, useMemo, useState, useTransition } from 'react';
import { generateRandomStudentList } from '../../../utils';

const randomStudents = generateRandomStudentList(5000);

const Learn_2 = () => {
  const id = useId();
  const [searchInput, setSearchInput] = useState('');
  const [filterText, setFilterText] = useState();
  const [isPending, startTransition] = useTransition();

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);

    startTransition(() => {
      setFilterText(e.target.value);
    });
  };

  const data = useMemo(() => {
    return randomStudents.map((student) => {
      const index = student.name.indexOf(filterText); // Assuming you want to search in the 'name' property
      return index === -1 ? (
        <p>{student.name}</p>
      ) : (
        <p>
          {student.name.slice(0, index)}
          <span style={{ backgroundColor: 'yellow' }}>
            {student.name.slice(index, index + filterText.length)}
          </span>
          {student.name.slice(index + filterText.length)}
        </p>
      );
    });
  }, [filterText]);

  return (
    <Fragment>
      <h2>Students</h2>
      <label htmlFor={id}>Search: </label>
      <input type="text" name="name" value={searchInput} id={id} onChange={handleSearchInput} />
      <hr />
      <div>
        {isPending ? (
          'Loading...'
        ) : (
          <>
            {data.map((student, index) => {
              return <p key={index}>{student}</p>;
            })}
          </>
        )}
      </div>
    </Fragment>
  );
};
export default Learn_2;
