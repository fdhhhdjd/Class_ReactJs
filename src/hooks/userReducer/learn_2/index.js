import React, { useReducer, useState } from 'react';

import './style.css';
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.payload, completed: false, isEditing: false }];
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        index === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter((_, index) => index !== action.payload);
    case 'TOGGLE_EDIT_MODE':
      return state.map((todo, index) =>
        index === action.payload ? { ...todo, isEditing: !todo.isEditing } : todo
      );
    case 'EDIT_TODO':
      return state.map((todo, index) =>
        index === action.payload.index
          ? { ...todo, text: action.payload.text, isEditing: false }
          : todo
      );
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [newTodo, setNewTodo] = useState('');
  const [editingText, setEditingText] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setNewTodo('');
  };

  const toggleTodo = (index) => {
    dispatch({ type: 'TOGGLE_TODO', payload: index });
  };

  const deleteTodo = (index) => {
    dispatch({ type: 'DELETE_TODO', payload: index });
  };

  const toggleEditMode = (index) => {
    dispatch({ type: 'TOGGLE_EDIT_MODE', payload: index });
    setEditingText(todos[index].text);
  };

  const editTodo = (index) => {
    dispatch({ type: 'EDIT_TODO', payload: { index, text: editingText } });
    setEditingText('');
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <input
        type="text"
        className="todo-input"
        placeholder="Thêm công việc mới"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="todo-button" onClick={addTodo}>
        Thêm
      </button>
      <ul className="todo-items">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo.isEditing ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="todo-input todo-input-editing"
                />
                <button onClick={() => editTodo(index)} className="save-button">
                  Lưu
                </button>
              </>
            ) : (
              <>
                <span
                  className={todo.completed ? 'todo-text completed' : 'todo-text'}
                  onClick={() => toggleTodo(index)}
                >
                  {todo.text}
                </span>
                <button onClick={() => toggleEditMode(index)} className="edit-button">
                  Chỉnh sửa
                </button>
                <button onClick={() => deleteTodo(index)} className="delete-button">
                  Xóa
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
