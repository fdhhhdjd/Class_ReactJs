import { combineReducers } from 'redux';
import contactsReducer from './reducer';
const rootReducer = combineReducers({
  data: contactsReducer,
});

export default rootReducer;
