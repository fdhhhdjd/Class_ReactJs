import * as types from './actionType';

const initialState = {
  contacts: [],
  error: null,
  loading: false,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CONTACTS_START:
    case types.DELETE_CONTACTS_START:
    case types.ADD_CONTACTS_STARTS:
    case types.EDIT_CONTACTS_STARTS:
      return {
        ...state,
        loading: true,
      };
    case types.GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case types.DELETE_CONTACTS_SUCCESS:
    case types.ADD_CONTACTS_SUCCESS:
    case types.EDIT_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.GET_CONTACTS_FAIL:
    case types.DELETE_CONTACTS_FAIL:
    case types.ADD_CONTACTS_FAIL:
    case types.EDIT_CONTACTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default contactsReducer;
