import {
  all,
  put, take,
} from 'redux-saga/effects';
import { DELETE_BOOKS, REORDER_BOOKS } from '../actions/type';

export function* deleteBook(action) {
  yield put({ type: DELETE_BOOKS, action });
}

export function* reoderBooks(action) {
  yield put({ type: REORDER_BOOKS, action });
}

function* booksSaga() {
  yield all([
    take(DELETE_BOOKS, deleteBook),
    take(REORDER_BOOKS, reoderBooks),
  ]);
}

export default booksSaga;
