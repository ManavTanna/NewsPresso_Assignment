import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [],
  loading: false,
  error: null,
  favorites: [],
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (article) => article.url !== action.payload.url
      );
    },
  },
});

export const { setArticles, setLoading, setError, addFavorite, removeFavorite } = newsSlice.actions;

export default newsSlice.reducer;
