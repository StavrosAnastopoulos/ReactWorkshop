import { createSlice } from '@reduxjs/toolkit'

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    active: 'home',
  },
  reducers: {
    navigate: (state, action) => {
      if (action.payload) {
        state.active = action.payload;
      }
    }
  },
});

export const { navigate } = navigationSlice.actions;

export default navigationSlice.reducer;