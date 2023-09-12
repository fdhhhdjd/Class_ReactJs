//* LIBARY
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//* REDUX
import TodoReducer from './Slice';

const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}
const reducer = combineReducers({
  todos: TodoReducer,
});
const store = configureStore({
  reducer: reducer,
});
export default store;
