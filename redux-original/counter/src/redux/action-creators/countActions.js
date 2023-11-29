// Import the action type constants.
import { DECREMENT, INCREMENT } from "../action-types/countActionTypes";

// Define an action creator for incrementing the count.
// It returns an action object with a type property.
export const increment = () => ({
  type: INCREMENT,
});

// Define an action creator for decrementing the count.
// Similar to increment, it returns an action object.
export const decrement = () => ({
  type: DECREMENT,
});
