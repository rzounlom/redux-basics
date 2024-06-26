/*Copyright (c) 2023 Promineo Tech
    Author:  Promineo Tech Academic Team
    Subject: React Router Boiler Plate
-------------------------------------------*/

import "./Index.css";

import App from "./App";
// Import the Provider component from react-redux.
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store"; // Import the store

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap the App component with the Provider component */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
