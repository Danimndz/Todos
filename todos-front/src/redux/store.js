import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { todos } from "./todos";

const initialState = {
  todos: [],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  todos,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
