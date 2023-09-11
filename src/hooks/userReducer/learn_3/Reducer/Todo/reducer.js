import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_EDIT_MODE,
  TOGGLE_TODO,
} from "./type";

export const initState = {
  todos: [],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { text: action.payload, completed: false, isEditing: false },
        ],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload),
      };

    case TOGGLE_EDIT_MODE:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload
            ? { ...todo, isEditing: !todo.isEditing }
            : todo
        ),
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.index
            ? { ...todo, text: action.payload.text, isEditing: false }
            : todo
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
