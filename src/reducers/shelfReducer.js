import { DELETE_BOOKS, SET_BOOKS, ALLOW_DELETE_BOOKS } from '../actions/type';

const initialState = {
  books: [],
  allowDelete: false,
};

const shelfReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, books: action.payload };
    case DELETE_BOOKS: {
      const { books } = state;
      const { payload: id } = action;
      return { ...state, books: books.filter((x) => x.id !== id) };
    }
    case ALLOW_DELETE_BOOKS:
      return { ...state, allowDelete: !state.allowDelete};
    default:
      return { ...state };
  }
};

export default shelfReducer;
