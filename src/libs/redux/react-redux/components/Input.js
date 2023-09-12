//* REACT
import React, { useState } from 'react';

//* LIBRARY
import { useDispatch } from 'react-redux';

//* REDUX
import { addTodo } from '../stores/Action';

import { showToastError, showToastSuccess } from '../../../../utils/toast';

//* STYLES
import '../styles/input.css';

const TodoInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === '') return showToastError('Please enter input 🙃');

    dispatch(addTodo(task), showToastSuccess(' Add task successfully😊 '));

    setTask('');
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <>
      <form className="TodoInput" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          id="task"
          name="task"
          value={task}
          onChange={handleChange}
        />
        <button>Add Todo</button>
      </form>
    </>
  );
};

export default TodoInput;
