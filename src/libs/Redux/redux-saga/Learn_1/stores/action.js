import * as types from './actionType';

//* Get from Firebase
export const getContactsStart = () => ({
  type: types.GET_CONTACTS_START,
});
export const getContactsSuccess = (contacts) => ({
  type: types.GET_CONTACTS_SUCCESS,
  payload: contacts,
});
export const getContactsFail = (error) => ({
  type: types.GET_CONTACTS_FAIL,
  payload: error,
});

//* Delete From Firebase
export const deleteContactsStart = (id) => ({
  type: types.DELETE_CONTACTS_START,
  payload: id,
});
export const deleteContactsSuccess = () => ({
  type: types.DELETE_CONTACTS_SUCCESS,
});
export const deleteContactsFail = (error) => ({
  type: types.DELETE_CONTACTS_FAIL,
  payload: error,
});

//* Add From Firebase
export const addContactsStart = (contact) => ({
  type: types.ADD_CONTACTS_STARTS,
  payload: contact,
});
export const addContactsSuccess = () => ({
  type: types.ADD_CONTACTS_SUCCESS,
});
export const addContactsFail = (error) => ({
  type: types.ADD_CONTACTS_FAIL,
  payload: error,
});

//* Edit From Firebase
export const editContactsStart = (edit) => ({
  type: types.EDIT_CONTACTS_STARTS,
  payload: edit,
});
export const editContactsSuccess = () => ({
  type: types.EDIT_CONTACTS_SUCCESS,
});
export const editContactsFail = (error) => ({
  type: types.EDIT_CONTACTS_FAIL,
  payload: error,
});
