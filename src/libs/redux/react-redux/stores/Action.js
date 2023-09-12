import * as TYPES from "./ActionType";

export const completeTodo = (todo) => ({
  type: TYPES.COMPLETE_TODO,
  payload: todo,
});

export const addTodo = (todo) => ({
  type: TYPES.ADD_TODO,
  payload: todo,
});

export const removeTodo = (todo) => ({
  type: TYPES.REMOVE_TODO,
  payload: todo,
});

export const updateTodo = (todo) => ({
  type: TYPES.UPDATE_TODO,
  payload: todo,
});
