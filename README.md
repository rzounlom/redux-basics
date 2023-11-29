# Redux basics using redux and redux-toolkit examples

## Redux Counter Example (original redux method)

This project demonstrates a simple counter application using React 17 and Redux. It's designed to showcase the fundamental concepts of Redux, including actions, reducers, and the store, using the original Redux approach (without Redux Toolkit).

### Project Structure

- actionTypes.js: Defines constants for action types.
- actions.js: Contains action creators for incrementing and decrementing the counter.
- reducer.js: Implements the counter reducer handling the state changes.
- store.js: Sets up the Redux store.
- Counter.js: React component to display and control the counter.
- index.js: Entry point of the React application that integrates the Redux store with the React app.
- styles.css: (Optional) Basic CSS for the counter component.

### How It Works

#### Actions and Action Types

- Action Types (actionTypes.js): Defines constants (INCREMENT and DECREMENT) to avoid typos in action types.
- Action Creators (actions.js): Functions (increment and decrement) that return action objects. These actions are dispatched to trigger state changes.

#### Reducer

- Reducer (reducer.js): A function that takes the current state and an action, then returns a new state. It uses a switch statement to determine how to handle different action types.

#### Store

- Store (store.js): Created using Redux's createStore function and the counter reducer. The store is the central place that holds the application's state.

#### React Component

- Counter Component (Counter.js): A functional React component using hooks. It uses useSelector to read the counter value from the Redux store and useDispatch to dispatch actions.

#### Integration

- React-Redux Integration (index.js): The Redux store is provided to the React application using the Provider component from react-redux.

### Running the Project

- Clone the repository.
- Install dependencies: npm install or yarn.
- Start the development server: npm start or yarn start.
- Open http://localhost:3000 to view it in the browser.

### Dependencies

- React 17
- Redux
- React-Redux

## Redux Counter Example (redux-toolkit method)

### Project Structure

- counterSlice.js: Defines the counter slice with actions and reducer using Redux Toolkit's createSlice.
- store.js: Configures the Redux store using Redux Toolkit's configureStore.
- Counter.js: React component to display and control the counter.
- index.js: Entry point of the React application that integrates the Redux store with the React app.
- styles.css: (Optional) Basic CSS for the counter component.

### How It Works

#### Redux Toolkit Slice

- Counter Slice (counterSlice.js): Uses createSlice to define a slice for the counter. This function automatically generates action creators and action types based on the reducer methods provided.

#### Store Configuration

- Store (store.js): Uses Redux Toolkit's configureStore to configure the Redux store. It simplifies setup and enables middleware and the Redux DevTools extension by default.

#### React Component

- Counter Component (Counter.js): A functional React component using hooks. It uses useSelector to read the counter state from the Redux store and useDispatch to dispatch actions defined in the counter slice.

#### Integration

- React-Redux Integration (index.js): The Redux store is provided to the React application using the Provider component from react-redux.

### Running the Project

- Clone the repository.
- Install dependencies: npm install or yarn.
- Start the development server: npm start or yarn start.
- Open http://localhost:3000 to view it in the browser.

### Dependencies

- React 17
- Redux Toolkit
- React-Redux
