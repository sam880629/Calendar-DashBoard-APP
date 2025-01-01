// darkModeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState={ isDarkMode: false };

// 深淺模式
const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;