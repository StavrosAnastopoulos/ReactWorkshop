import { createSlice } from '@reduxjs/toolkit'

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    loading: false,
    error: '',
    data: [],
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
      state.error = '';
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    append: (state, action) => {
      state.data = [...state.data, ...action.payload];
    },
    reset: (state) => {
      state.data = [];
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
});

export const { startLoading, stopLoading, append, reset, setError } = questionsSlice.actions;

export default questionsSlice.reducer