import { ALLOW_DELETE_BOOKS, DELETE_BOOKS, REORDER_BOOKS, SET_BOOKS } from './type';

export const setBooks = (payload) => ({
  type: SET_BOOKS,
  payload,
});

export const deleteBooks = (payload) => ({
  type: DELETE_BOOKS,
  payload,
});

export const allowDeleteBooks = () => ({
  type: ALLOW_DELETE_BOOKS,
});

export const reorderBooks = (payload) => ({
  type: REORDER_BOOKS,
  payload,
})
