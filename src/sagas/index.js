import {
  put, take,
} from 'redux-saga/effects';
import { DELETE_BOOKS } from '../actions/type';

export function* deleteBook(action) {
  yield put({ type: DELETE_BOOKS, action });
}

function* booksSaga() {
  yield take(DELETE_BOOKS, deleteBook);
}

export default booksSaga;
