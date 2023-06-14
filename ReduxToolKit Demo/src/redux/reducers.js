import { createSlice } from "@reduxjs/toolkit";

let reducer = createSlice({
  name: "DarkMode",
  initialState: {
    ModeElements: `hsl(209, 23%, 22%)`,
    ModeBackground: `hsl(207, 26%, 17%)`,
    ModeText: `hsl(0, 0%, 100%)`,
    isDark: true,
    count: 1,
  },
  reducers: {
    addOne: (state) => {
      state.count += 1;
    },
    minOne: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementBy: (state, action) => {
      state.count += action.payload;
    },
    decrementBy: (state, action) => {
      state.count -= action.payload;
    },
    makeItDark: (state) => {
      (state.ModeElements = `hsl(0, 0%, 100%)`),
        (state.ModeBackground = `hsl(0, 0%, 98%)`),
        (state.ModeText = `hsl(200, 15%, 8%)`);
      state.isDark = true;
    },
    makeItLight: (state) => {
      (state.ModeElements = `hsl(0, 0%, 100%)`),
        (state.ModeBackground = `hsl(0, 0%, 98%)`),
        (state.ModeText = `hsl(200, 15%, 8%)`);
      state.isDark = false;
    },
  },
});
export const {
  addOne,
  minOne,
  reset,
  incrementBy,
  decrementBy,
  makeItDark,
  makeItLight,
} = reducer.actions;

export default reducer.reducer;
