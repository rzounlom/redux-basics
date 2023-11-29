import { createSlice } from "@reduxjs/toolkit";

// Create a slice with a name, initial state, and reducers.
const counterSlice = createSlice({
  name: "counter", // Name of the slice
  initialState: {
    // Initial state of this slice
    count: 0,
  },
  reducers: {
    // Reducer functions
    increment: (state) => {
      // Increment the count. Note: In Redux Toolkit, we can mutate the state directly thanks to Immer library.
      state.count += 1;
    },
    decrement: (state) => {
      // Decrement the count.
      state.count -= 1;
    },
  },
});

// Export the generated action creators
export const { increment, decrement } = counterSlice.actions;

// Export the reducer as default
export default counterSlice.reducer;
