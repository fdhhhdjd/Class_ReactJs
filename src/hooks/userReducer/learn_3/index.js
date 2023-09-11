//* REACT
import React, { useReducer, useState } from "react";

//* LIBRARY
import { ToastContainer } from "react-toastify";

//* STYLE
import "./style.css";

//* REDUCER
import {
  addTodoAction,
  deleteTodoAction,
  editTodoAction,
  toggleEditModeAction,
  toggleTodoAction,
} from "./Reducer/Todo/action";
import { logger } from "./Reducer/Todo/logger";
import todoReducer, { initState } from "./Reducer/Todo/reducer";

//* UTILS
import {
  showToastError,
  showToastInfo,
  showToastSuccess,
} from "../../../utils/toast";

const TodoList = () => {
  const [state, dispatch] = useReducer(logger(todoReducer), initState);

  const { todos } = state;

  console.log(todos);

  const [newTodo, setNewTodo] = useState("");
  const [editingText, setEditingText] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    dispatch(addTodoAction(newTodo));
    showToastSuccess(`Add ${newTodo} into todo success!`);
    setNewTodo("");
  };

  const toggleTodo = (index) => {
    dispatch(toggleTodoAction(index));
  };

  const deleteTodo = (index) => {
    const originalText = todos[index].text;

    dispatch(deleteTodoAction(index));
    showToastSuccess(`Delete ${originalText} success!`);
  };

  const toggleEditMode = (index) => {
    dispatch(toggleEditModeAction(index));

    setEditingText(todos[index].text);
  };

  const editTodo = (index) => {
    const originalText = todos[index].text;

    if (editingText.trim() === "")
      return showToastError("Please,Input not empty!");

    dispatch(editTodoAction(index, editingText));

    if (originalText === editingText)
      return showToastInfo("Nothing changes input !");

    showToastSuccess(`Edit "${originalText}" to "${editingText}" success!`);

    setEditingText("");
  };

  const handleAddTodoSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <>
      <ToastContainer />
      <div className="todo-list">
        <h1>Todo List</h1>
        <form action="" onSubmit={handleAddTodoSubmit}>
          <input
            type="text"
            className="todo-input"
            placeholder="Thêm công việc mới"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className="todo-button" onClick={addTodo}>
            Add
          </button>
        </form>
        <ul className="todo-items">
          {todos?.map((todo, index) => (
            <li key={index} className="todo-item">
              {todo.isEditing ? (
                <>
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    className="todo-input todo-input-editing"
                  />
                  <button
                    onClick={() => editTodo(index)}
                    className="save-button"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => toggleEditMode(index)}
                    className="cancel-button"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span
                    className={
                      todo.completed ? "todo-text completed" : "todo-text"
                    }
                    onClick={() => toggleTodo(index)}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => toggleEditMode(index)}
                    className="edit-button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(index)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
