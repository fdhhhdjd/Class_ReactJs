import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_EDIT_MODE,
  TOGGLE_TODO,
} from "./type";

export const addTodoAction = (text) => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

export const toggleTodoAction = (index) => {
  return {
    type: TOGGLE_TODO,
    payload: index,
  };
};

export const deleteTodoAction = (index) => {
  return {
    type: DELETE_TODO,
    payload: index,
  };
};

export const toggleEditModeAction = (index) => {
  return {
    type: TOGGLE_EDIT_MODE,
    payload: index,
  };
};

export const editTodoAction = (index, text) => {
  return {
    type: EDIT_TODO,
    payload: { index, text },
  };
};
