import { configureStore } from '@reduxjs/toolkit';
import shelfReducer from '../reducers/shelfReducer';

export const store = configureStore({
  reducer: {
    shelfReducer,
  },
  preloadedState: {
    shelfReducer,
  },
});
