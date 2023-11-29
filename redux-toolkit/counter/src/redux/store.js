import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

// Configure the store with the reducer.
// Redux Toolkit's configureStore adds some middleware by default and enables use of the Redux DevTools extension.
const store = configureStore({
  reducer: {
    counter: counterReducer, // Add the counter reducer under the 'counter' key
  },
});

export default store;
