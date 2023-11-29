// reducer.js

// Import action types.
import { DECREMENT, INCREMENT } from "../action-types/countActionTypes";

// Define the initial state of the app.
const initialState = {
  count: 0,
};

// Define the reducer function with the initial state and an action.
const counterReducer = (state = initialState, action) => {
  // The reducer takes the current state and an action as arguments
  // The reducer checks the action type
  switch (action.type) {
    case INCREMENT: // If the action is INCREMENT
      // Return a new state object with the count increased
      console.log("Incrementing count");
      return { ...state, count: state.count + 1 };
    case DECREMENT: // If the action is DECREMENT
      // Return a new state object with the count decreased
      console.log("Decrementing count");
      return { ...state, count: state.count - 1 };
    default: // For any other action
      // Return the current state unchanged
      return state;
  }
};

// Export the reducer
export default counterReducer;
