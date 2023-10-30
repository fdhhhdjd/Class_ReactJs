//* TYPE
import * as types from './type';

//* STATE
import { initState } from './state';

const countReducer = (state = initState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: +state.count + 1,
      };

    default:
      return state;
  }
};

export default countReducer;
