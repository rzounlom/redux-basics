import { combineReducers, createStore } from "redux";

import counterReducer from "./reducers/counterReducer";

// Combine multiple reducers
const rootReducer = combineReducers({
  counter: counterReducer, // state.counter
  //   user: userReducer, // state.user --> just an example if you wanted to add another reducer
});

// Create the Redux store using the combined reducer
const store = createStore(rootReducer);

export default store;
