//* LIBRARY
import { combineReducers } from 'redux';

//* REACT-REDUX
import todoReducer from './Reducer';

const rootReducer = combineReducers({
  data: todoReducer,
});
export default rootReducer;
