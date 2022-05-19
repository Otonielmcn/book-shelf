import { DELETE_BOOKS, SET_BOOKS, ALLOW_DELETE_BOOKS, REORDER_BOOKS } from '../actions/type';

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
    case REORDER_BOOKS: {
      const { books } = state;
      const { payload: { source, destination }} = action;
      const items = Array.from(books);
      const [reorderedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, reorderedItem);
      return { ...state, books: items };
    }
    case ALLOW_DELETE_BOOKS:
      return { ...state, allowDelete: !state.allowDelete};
    default:
      return { ...state };
  }
};

export default shelfReducer;
