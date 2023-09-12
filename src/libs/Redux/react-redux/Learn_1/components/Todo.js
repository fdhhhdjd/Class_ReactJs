//* REACT
import React, { useState } from 'react';

//* LIB
import { useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

//* REDUX
import { removeTodo } from '../stores/Action';

//* STYLE
import { showToastError, showToastSuccess } from '../../../../../utils/toast';
import '../styles/todo.css';

const Todo = ({ id, task, completed, toggleTodo, updateTodo }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [editStack, setEditStack] = useState(task);
  const handleUpload = (e) => {
    e.preventDefault();
    if (editStack === task) {
      return showToastError('Please enter input 🙂 ');
    }
    updateTodo(id, editStack);
    showToastSuccess('Edit task successfully 😍');
    setEdit(false);
  };

  const removeItem = () => {
    if (window.confirm('Are you sure delete task 🤔')) {
      dispatch(removeTodo({ id }), showToastSuccess('Remove task successful 😒'));
    }
  };
  return (
    <>
      <TransitionGroup className={completed ? 'Todo completed' : 'Todo'}>
        {edit ? (
          <CSSTransition key="editing" timeout={500} classNames="form">
            <form className="Todo-edit-form" onSubmit={handleUpload}>
              <input
                type="text"
                name="task"
                value={editStack}
                onChange={(e) => setEditStack(e.target.value)}
              />
              <button>Edit Save</button>
            </form>
          </CSSTransition>
        ) : (
          <CSSTransition key="normal" timeout={500} classNames="task-text">
            <li className="Todo-task" onClick={toggleTodo}>
              {task}
            </li>
          </CSSTransition>
        )}

        <div className="Todo-buttons">
          <button onClick={() => setEdit(true)}>
            <i className="fas fa-pen" />
          </button>

          <button onClick={removeItem}>
            <i className="fas fa-trash" />
          </button>
        </div>
      </TransitionGroup>
    </>
  );
};

export default Todo;
