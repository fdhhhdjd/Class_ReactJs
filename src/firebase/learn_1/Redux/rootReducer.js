//
import { combineReducers } from 'redux';
import userReducer from './Reducer';
const rootReducer = combineReducers({
  user: userReducer,
});
export default rootReducer;
