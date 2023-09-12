//* REACT
import React from 'react';

//* LIB
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

//* COMPONENTS
import TodoInput from '../components/Input';
import Todo from '../components/Todo';

//* STORE
import { completeTodo, updateTodo } from '../stores/Action';

//* STYLES
import '../styles/todo_list.css';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state.data);
  const update = (id, updatedTask) => {
    dispatch(updateTodo({ id, updatedTask }));
  };
  return (
    <>
      <div className="TodoList">
        <h1>Todo List With React-Redux 😍 </h1>
        <ToastContainer />
        <TodoInput />
        <ul>
          <TransitionGroup className="todo=list">
            {todo &&
              todo
                .sort((a, b) => (a.task < b.task ? -1 : 1))
                .map((item) => {
                  return (
                    <CSSTransition key={item.id} classNames="todo">
                      <Todo
                        key={item.id}
                        id={item.id}
                        task={item.task}
                        completed={item.completed}
                        toggleTodo={() => dispatch(completeTodo(item))}
                        updateTodo={update}
                      />
                    </CSSTransition>
                  );
                })}
          </TransitionGroup>
        </ul>
      </div>
    </>
  );
};

export default TodoList;
