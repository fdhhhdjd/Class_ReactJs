import * as TYPES from './ActionType';

import { v4 as uuidv4 } from 'uuid';

const initialState = {
  todo: [
    {
      id: uuidv4,
      task: 'Nguyễn Tiến Tài',
      completed: false,
    },
    {
      id: uuidv4,
      task: 'Nguyễn Bảo khang',
      completed: false,
    },
    {
      id: uuidv4,
      task: 'Trần Phi Hoàng',
      completed: false,
    },
    {
      id: uuidv4,
      task: ' Nguyễn Hữu Quyền ',
      completed: false,
    },
    {
      id: uuidv4,
      task: 'Bùi Huỳnh Quốc Trung',
      completed: false,
    },
  ],
};

const TodoReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case TYPES.COMPLETE_TODO:
      const toggleTodo = state.todo.map((t) =>
        t.id === action.payload.id
          ? {
              ...action.payload,
              completed: !action.payload.completed,
            }
          : t,
      );
      return {
        ...state,
        todo: toggleTodo,
      };
    case TYPES.ADD_TODO:
      const newTodo = {
        id: uuidv4(),
        task: action.payload,
        completed: false,
      };
      const addedTodo = [...state.todo, newTodo];
      return {
        ...state,
        todo: addedTodo,
      };
    case TYPES.REMOVE_TODO:
      const filterTodo = state.todo.filter((t) => t.id !== action.payload.id);
      return {
        ...state,
        todo: filterTodo,
      };
    case TYPES.UPDATE_TODO:
      const update = state.todo.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, task: action.payload.updatedTask };
        }
        return todo;
      });
      return {
        ...state,
        todo: update,
      };
    default:
      return state;
  }
};
export default TodoReducer;
