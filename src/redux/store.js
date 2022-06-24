import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

// -- Data Store
const initialState = {};

const middleware = [ReduxThunk];

let isProd;

if (process.env.NODE_ENV === "development") {
  isProd = composeWithDevTools(applyMiddleware(...middleware));
} else {
  isProd = applyMiddleware(ReduxThunk);
}

const store = createStore(reducers, initialState, isProd);

export default store;
