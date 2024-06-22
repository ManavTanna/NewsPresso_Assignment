import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './Slice';

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;
