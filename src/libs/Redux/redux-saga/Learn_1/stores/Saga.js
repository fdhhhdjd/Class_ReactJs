import { all, fork, put, takeLatest } from 'redux-saga/effects';
import firebaseDb from '../configs/firebase';
import {
  addContactsSuccess,
  deleteContactsSuccess,
  editContactsFail,
  editContactsSuccess,
  getContactsFail,
  getContactsSuccess,
} from './action';
import * as types from './actionType';

//* GET ALL
function* onLoadContactAsync() {
  try {
    const contacts = yield new Promise((resolve) =>
      firebaseDb.child('contacts_saga').on('value', resolve),
    );
    if (contacts.val() !== null) {
      yield put(getContactsSuccess(contacts.val()));
    } else {
      yield put(getContactsSuccess({}));
    }
  } catch (error) {
    yield put(getContactsFail());
  }
}
export function* onLoadContact() {
  yield takeLatest(types.GET_CONTACTS_START, onLoadContactAsync);
}

//* DELETE
function* OnDeleteContactAsync({ payload: id }) {
  try {
    yield firebaseDb.child(`contacts_saga/${id}`).remove();
    yield put(deleteContactsSuccess());
  } catch (error) {
    yield put(getContactsFail());
  }
}
export function* onDeleteContact() {
  yield takeLatest(types.DELETE_CONTACTS_START, OnDeleteContactAsync);
}

//* ADD
function* onAddContactAsync({ payload: contacts }) {
  try {
    yield firebaseDb.child('contacts_saga').push(contacts);

    yield put(addContactsSuccess());
  } catch (error) {
    yield put(getContactsFail());
  }
}
export function* onAddContact() {
  yield takeLatest(types.ADD_CONTACTS_STARTS, onAddContactAsync);
}

//* Edit
function* onEditContactAsync({ payload: { id, initialState: edit } }) {
  try {
    yield firebaseDb.child(`contacts_saga/${id}`).set(edit);
    yield put(editContactsSuccess());
  } catch (error) {
    yield put(editContactsFail());
  }
}
export function* onEditContact() {
  yield takeLatest(types.EDIT_CONTACTS_STARTS, onEditContactAsync);
}

//* run saga
const contactsSaga = [
  fork(onLoadContact),
  fork(onDeleteContact),
  fork(onAddContact),
  fork(onEditContact),
];
export default function* rootSaga() {
  yield all([...contactsSaga]);
}
