// Import the action creators.
import { decrement, increment } from "../../redux/action-creators/countActions"; // Import useSelector and useDispatch hooks from react-redux.
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  // Use the useSelector hook to access the count state from the Redux store.
  const count = useSelector((state) => {
    console.log("state", state);
    return state.counter.count;
  });

  // Use the useDispatch hook to get the dispatch function.
  const dispatch = useDispatch();
  console.log("count", count);
  return (
    <div>
      <h2>Counter: {count}</h2> {/* Display the count */}
      {/* Dispatch increment action when button is clicked */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      {/* Dispatch decrement action when button is clicked */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

// Export the Counter component.
export default Counter;
