import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

//redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const pizzas = (state = [], action) => {
  if (action.type === "SET_PIZZA_LIST") {
    return action.payload;
  }
  return state;
};

const order = (state = [], action) => {
  switch (action.type) {
    case "SET_ORDER":
      return action.payload;
    case "ADD_PIZZA":
      return [...state, action.payload];
    case "CLEAR_ORDER":
      return [];
    default:
      return state;
  }
};

const customer = (state = [], action) => {
  switch (action.type) {
    case "SET_CUSTOMER":
      return action.payload;
    case "CLEAR_CUSTOMER":
      return [];
    default:
      return state;
  }
};

const storeInstance = createStore(
  combineReducers({
    pizzas,
    order,
    customer,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
