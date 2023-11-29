import { decrement, increment } from "../redux/features/counter/counterSlice"; // import the increment and decrement actions from the counterSlice
import { useDispatch, useSelector } from "react-redux"; // import the useDispatch and useSelector hooks from react-redux

const Counter = () => {
  // Use useSelector to access the state in the store. Access the counter state slice.
  const count = useSelector((state) => state.counter.count);

  // Use useDispatch to dispatch actions.
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      {/* Dispatch increment action on button click */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      {/* Dispatch decrement action on button click */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
